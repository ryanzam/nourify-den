import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

interface IParams {
    id: string
}

export async function POST(request: NextRequest, { params }: { params: IParams }) {

    const order = await prisma.order.findUnique({
        where: { id: params.id }
    })

    if (!order)
        return NextResponse.error()

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 50 * 100,
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    await prisma.order.update({
        where: { id: params.id },
        data: { intent_id: paymentIntent.id}
    })

    return NextResponse.json({clientSecret: paymentIntent.client_secret})
}
