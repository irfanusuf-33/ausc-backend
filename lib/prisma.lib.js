import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import dotenv from "dotenv";

dotenv.config();

// Create PostgreSQL connection pool
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});

// Create Prisma PostgreSQL adapter
const adapter = new PrismaPg(pool);

// Pass adapter into PrismaClient
const prisma = new PrismaClient({ adapter });

export default prisma;