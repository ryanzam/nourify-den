import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export async function GET() { 
    const categories = await prisma.category.findMany()

    return NextResponse.json(categories)
}