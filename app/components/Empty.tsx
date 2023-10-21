"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"

interface IEmptyProps {
    title?: string,
    description?: string,
}

const Empty: FC<IEmptyProps> = ({ title, description }: IEmptyProps) => {

    return (
        <div className="flex mx-auto mt-5 w-full max-w-md overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-amber-800">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-amber-700 dark:text-amber-400">{title}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Empty