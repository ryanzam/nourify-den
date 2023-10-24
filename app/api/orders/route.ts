import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"
import { getAuthSession } from "@/utils/auth";

export async function GET(request: NextRequest) {
    const session = await getAuthSession()

    if (!session)
        return NextResponse.error()

        if (session.user.isAdmin) {
        const orders = await prisma.order.findMany()
        return NextResponse.json(orders)
    }

    const orders = await prisma.order.findMany({
        where: { userEmail: session.user.email! },
    })
    return NextResponse.json(orders)
}

export async function POST(request: NextRequest) {
    const session = await getAuthSession()
    if (!session)
        return NextResponse.error()

    const body = await request.json()

    const order = await prisma.order.create({ data: body })

    return NextResponse.json(order)
}