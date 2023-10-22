import { FC } from "react"

interface IPaymentPageProps {
    id: string
}

const PaymentPage:FC<IPaymentPageProps> = ({id}) => {
    return (<div>
        payment {id}
    </div>)
}

export default PaymentPage