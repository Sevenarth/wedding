-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_persons" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "menuPreference" TEXT NOT NULL DEFAULT 'Primary',
    "dietaryRequirement" TEXT,
    "allergies" TEXT,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "inviteId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "persons_inviteId_location_fkey" FOREIGN KEY ("inviteId", "location") REFERENCES "responses" ("inviteId", "location") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_persons" ("allergies", "createdAt", "dietaryRequirement", "id", "inviteId", "location", "menuPreference", "name", "orderIndex", "updatedAt") SELECT "allergies", "createdAt", "dietaryRequirement", "id", "inviteId", "location", "menuPreference", "name", "orderIndex", "updatedAt" FROM "persons";
DROP TABLE "persons";
ALTER TABLE "new_persons" RENAME TO "persons";
CREATE INDEX "persons_inviteId_location_idx" ON "persons"("inviteId", "location");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
UPDATE "persons" SET "menuPreference" = 'Primary' WHERE "menuPreference" = 'Fish';
UPDATE "persons" SET "menuPreference" = 'Secondary' WHERE "menuPreference" = 'Alternative';
UPDATE "persons" SET "menuPreference" = 'Child' WHERE "menuPreference" = 'Kids';