"use client"

import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdAlternateEmail, MdPassword } from "react-icons/md"

const SigninPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const params = useSearchParams()
    const callBackURL = params?.get("callbackUrl") ?? "/"
    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        signIn("credentials", {
            email, password, callbackUrl: callBackURL
        }).then(cb => {
            if (cb?.ok) {
                toast.success("Successfully signed in")
                router.push("/")
            }
            if (cb?.error) {
                toast.error(cb.error)
            }
        })
    }

    return (
        <div className="m-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-amber-800 sm:text-3xl">
                    Welcome to NourifyRuoka
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign in your account</p>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <MdAlternateEmail />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <MdPassword />
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block primary-btn w-full"
                    >
                        Sign in
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <a className="underline ps-2" href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SigninPage