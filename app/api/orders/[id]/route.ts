import prisma from "@/app/libs/prismadb"
import { getAuthSession } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
    id: string
}

export async function PUT(request: NextRequest, { params }: { params: IParams }) {
    const session = await getAuthSession()
    
    if (!session || !session.user.isAdmin)
        return NextResponse.error()

    const body = await request.json()

    const order = await prisma.order.update({
        where: { id: params.id },
        data: { status: body.status }
    })

    return NextResponse.json(order)
}