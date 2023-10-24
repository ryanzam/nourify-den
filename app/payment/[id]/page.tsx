"use client"

import { Appearance, StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/app/components/forms/CheckoutForm";

interface IPaymentPageProps {
    id: string
}

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

const PaymentPage = ({ params }: { params: IPaymentPageProps }) => {

    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        function createIntent() {
            fetch(`/api/createintent/${params.id}`, {
                method: 'POST'
            }).then(response => response.json())
                .then(data => {
                    setClientSecret(data.clientSecret)
                }).catch(err => toast.error("Error: " + err.message))
        }
        createIntent()
    }, [params.id])

    const appearance: Appearance = {
        theme: 'stripe',
    };

    const options: StripeElementsOptions = {
        clientSecret,
        appearance,
    };

    return (<div>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise} key={clientSecret}>
                <CheckoutForm />
            </Elements>
        )}
    </div>)
}

export default PaymentPage