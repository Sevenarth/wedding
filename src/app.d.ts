// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { type User } from "$lib/auth"

declare global {
	namespace App {
        interface Platform {
            env: {
                DB: D1Database
            }
            cf: CfProperties
            ctx: ExecutionContext
        }

        interface Locals {
            user: User | null
        }
    }
}

export {};