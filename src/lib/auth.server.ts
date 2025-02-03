import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { SECRET_JWT_KEY } from "$env/static/private";
import { PUBLIC_EXPIRATION_INTERVAL } from "$env/static/public";
import type { Cookies } from '@sveltejs/kit';


const COOKIE_NAME =  "auth.jwt";

const secret = new TextEncoder().encode(SECRET_JWT_KEY);

type Payload = JWTPayload & { name: string }

async function generateJWT(name: string): Promise<string> {
    return new SignJWT({ name })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(PUBLIC_EXPIRATION_INTERVAL)
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

export async function authenticateUser(name: string, cookies: Cookies): Promise<void> {
    const jwt = await generateJWT(name);
    cookies.set(COOKIE_NAME, jwt, { path: "/" })
}

export async function getUser(cookies: Cookies): Promise<string| null> {
    const jwt = cookies.get(COOKIE_NAME);
    if (!jwt) {
        return null
    }

    const payload = await verifyJWT(jwt);
    if (!payload) {
        cookies.delete(COOKIE_NAME, { path: "/" });
        return null
    }

    return payload.name
}