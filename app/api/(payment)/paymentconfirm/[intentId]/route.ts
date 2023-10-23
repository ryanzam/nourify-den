import prisma from "@/app/libs/prismadb"
import { OrderStatus } from "@/app/types/types";
import { NextRequest } from "next/server";

interface IParams {
    intentId: string
}

export async function PUT(request: NextRequest, { params }: { params: IParams }) {
    await prisma.order.update({
        where: { intent_id: params.intentId},
        data: { status: OrderStatus.ORDER_RECEIVED}
    })
}