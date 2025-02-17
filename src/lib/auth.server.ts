import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { env } from "$env/dynamic/private";
import { env as envPublic } from "$env/dynamic/public";
import { redirect, type Cookies } from '@sveltejs/kit';
import prisma from '$lib/prisma.server';
import type { User } from '$lib/auth';


const COOKIE_NAME =  "auth.jwt";

const secret = new TextEncoder().encode(env.SECRET_JWT_KEY);

type Payload = JWTPayload & { name: string, inviteId: string }


async function generateJWT(name: string, inviteId: string): Promise<string> {
    return new SignJWT({ name, inviteId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(envPublic.PUBLIC_EXPIRATION_INTERVAL)
        .sign(secret);
}

async function verifyJWT(token: string): Promise<Payload | null> {
    try {
        const { payload } = await jwtVerify<Payload>(token, secret);
        return payload
    } catch {
        return null
    }
}

export async function authenticateUser(name: string, inviteId: string, cookies: Cookies): Promise<void> {
    const jwt = await generateJWT(name, inviteId);
    cookies.set(COOKIE_NAME, jwt, { path: "/" })
}

export async function getUser(cookies: Cookies, platform: App.Platform | undefined): Promise<User | null> {
    const jwt = cookies.get(COOKIE_NAME);
    if (!jwt) {
        return null
    }

    const payload = await verifyJWT(jwt);
    if (!payload) {
        cookies.delete(COOKIE_NAME, { path: "/" });
        return null
    }

    const invite = await prisma(platform).invite.findUnique({
        where: { id: payload.inviteId }
    })
    if (!invite) {
        cookies.delete(COOKIE_NAME, { path: "/" });
        return null
    }


    return { name: payload.name, invite }
}

export function requireUser(locals: App.Locals, url: URL): User {
    if (!locals.user) {
        redirect(307, '/auth?from=' + url.pathname);
    }
    return locals.user
}