/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[hashedToken,type]` on the table `Token`. If there are existing duplicate values, the migration will fail.

*/
-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "timesUsed" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token.hashedToken_type_unique" ON "Token"("hashedToken", "type");
