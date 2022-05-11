-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Explorer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mission" VARCHAR(255) NOT NULL,
    "azureCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Explorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MissionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT,
    "mainStack" TEXT,
    "currentEnrollment" BOOLEAN NOT NULL,
    "hasAzureCertification" BOOLEAN NOT NULL,

    CONSTRAINT "MissionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Explorer_name_key" ON "Explorer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_name_key" ON "MissionCommander"("name");
