-- CreateTable
CREATE TABLE "invites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "addressee" TEXT NOT NULL,
    "emailAddress" TEXT,
    "phoneNumber" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "logins" (
    "accessCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT,
    "inviteId" TEXT NOT NULL,

    PRIMARY KEY ("accessCode", "name"),
    CONSTRAINT "logins_inviteId_fkey" FOREIGN KEY ("inviteId") REFERENCES "invites" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "persons" (
    "name" TEXT NOT NULL,
    "menuPreference" TEXT NOT NULL DEFAULT 'Fish',
    "dietaryRequirement" TEXT,
    "allergies" TEXT,
    "inviteId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("inviteId", "name"),
    CONSTRAINT "persons_inviteId_fkey" FOREIGN KEY ("inviteId") REFERENCES "invites" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "responses" (
    "location" TEXT NOT NULL,
    "inviteId" TEXT NOT NULL,
    "givenResponse" TEXT NOT NULL DEFAULT 'NoResponse',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("inviteId", "location"),
    CONSTRAINT "responses_inviteId_fkey" FOREIGN KEY ("inviteId") REFERENCES "invites" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
