import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";
import toast from "react-hot-toast";

const SuccessPage = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const paymentintent = searchParams.get("payment_intent");

    useEffect(() => {
        function confirmPayment() {
            fetch(`/api/paymentconfirm/${paymentintent}`, {
                method: 'PUT'
            }).then(response => {
                setTimeout(() => {
                    router.push("/orders");
                  }, 3000);
            }).catch(err => toast.error("Error: " + err.message))
        }
        confirmPayment()
    }, [router, paymentintent])

    return(
        <div>
            confirming, redirecting
        </div>
    )
}

export default SuccessPage