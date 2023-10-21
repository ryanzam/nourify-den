"use client"

import { useQuery } from "react-query"
import { OrderType } from "../types/types"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Loader from "@/app/components/Loader"
import Empty from "../components/Empty"
import { useState } from "react"

const OrdersPage = () => {

    const [orderStatus, setOrderStatus] = useState("")

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "unauthenticated") {
        router.push("/signin")
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ["order"],
        queryFn: () => fetch("/api/orders")
            .then((response: any) => response.json())
    })

    if (status === "loading" || isLoading) {
        return <div><Loader /></div>
    }

    if (!data || data?.length === 0) {
        return <Empty title="No orders" description="You don't have any orders yet." />
    }

    const handleUpdate = () => {

    }

    return (
        <div className="overflow-x-auto mt-2">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right font-bold">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Order Id
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Foods
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Date
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Status
                        </th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {data.map((order: OrderType) => (
                        <tr key={order.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {order.id}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.foods[0].title}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.createdAt.toString().slice(0, 10)}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {session?.user.isAdmin ?
                                    <span>
                                        <select className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                                            value={order.status}
                                            onChange={(e) => setOrderStatus(e.target.value)}>
                                            <option value="">Please select</option>
                                            <option value="">33</option>
                                        </select>
                                        <button className="primary-btn"
                                            onClick={handleUpdate}>
                                            Update status
                                        </button>
                                    </span> :
                                    <span>order.status</span>
                                }
                            </td>

                            <td className="whitespace-nowrap px-4 py-2">
                                <a
                                    href="#"
                                    className="inline-block primary-btn"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersPage