"use client"

import { useQuery, useMutation, useQueryClient } from "react-query"
import { OrderStatus, OrderType } from "../types/types"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Loader from "@/app/components/Loader"
import Empty from "../components/Empty"
import { useState } from "react"
import toast from "react-hot-toast"

const OrdersPage = () => {

    const [orderStatus, setOrderStatus] = useState("")

    const { data: session, status } = useSession()
    const router = useRouter()
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ id, status }: { id: string; status: string }) => {
            return fetch(`/api/orders/${id}`, {
                method: "PUT",
                body: JSON.stringify({status}),
            });
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["myorders"] });
        },
    });

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

    const onChange = (val: any) => {
        setOrderStatus(val)
    }

    const handleUpdate = (e: any, id: string) => {
        e.preventDefault();
        mutation.mutate({ id, status: orderStatus })
        toast.success("Order updated.")
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
                                    <span className="lg:block">
                                        <select className="mr-2 mt-1.5 w-50 rounded-lg border-gray-300 text-gray-700 sm:text-sm border-2"
                                            defaultValue={order.status}
                                            onChange={(e: any) => onChange(e.target.value)}>
                                            {Object.values(OrderStatus).map(orderStatus => (
                                                <option key={orderStatus} value={orderStatus}>{orderStatus}</option>
                                            ))}
                                        </select>
                                        <button className="primary-btn"
                                            onClick={(e) => handleUpdate(e, order.id)}>
                                            Update status
                                        </button>
                                    </span> :
                                    <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm
                                     ${order.status === OrderStatus.DELIVERED ? "bg-green-100" : "bg-amber-100"}
                                     `}>
                                        {order.status}
                                    </span>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersPage