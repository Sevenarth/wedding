import { type Invite } from '@prisma/client';

interface User {
    name: string
    invite: Invite
}