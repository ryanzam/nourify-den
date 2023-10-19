import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export async function GET(request: NextRequest) {

    const param = request.nextUrl.searchParams.get("category")

    const food = await prisma.food.findMany({
        where: {
            ...(param ? { foodCategory: param } : { isFeatured: true })
        }
    })

    return NextResponse.json(food)
}

export async function POST(request: NextRequest) {
    const body = await request.json()

    const food = await prisma.food.create({ data: body })

    return NextResponse.json(food)
}