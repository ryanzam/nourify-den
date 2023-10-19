import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

interface IParams {
    foodId?: string;
}

export async function GET(request: NextRequest, { params }: { params: IParams }) {

    const { foodId } = params

    const food = await prisma.food.findUnique({
        where: { id: foodId }
    })

    return NextResponse.json(food)
}