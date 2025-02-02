import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export default function(platform: App.Platform | undefined): PrismaClient {
    if (platform) {
        const adapter = new PrismaD1(platform.env.DB);
        return new PrismaClient({ adapter });
    } else {
        throw Error("Could not retrieve database.")
    }
}