-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(256) NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "income" REAL NOT NULL DEFAULT 0,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" VARCHAR(256) NOT NULL,
    "userId" VARCHAR(256) NOT NULL,
    CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" VARCHAR(256) NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL,
    "userId" VARCHAR(256) NOT NULL,
    "categoryId" VARCHAR(256) NOT NULL,
    CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Expense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" VARCHAR(256) NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" VARCHAR(256) NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL,
    "userId" VARCHAR(256) NOT NULL,
    CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");
