"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdAlternateEmail, MdPassword, MdPersonPin } from "react-icons/md"

const SignupPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { data, status } = useSession()
    const router = useRouter()

    if (status === "authenticated") {
        router.push("/")
    }

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        fetch(`/api/register/`, {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        }).then(response => {
            console.log(response.json())
            toast.success("Account registered, you can sign in now")
            router.push("/signin")
        }).catch(err => toast.error("Error: " + err.message))
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
                    <p className="text-center text-lg font-medium">Register your account</p>

                    <div>
                        <label htmlFor="fullname" className="sr-only">Fullname</label>
                        <div className="relative">
                            <input
                                type="fullname"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter fullname"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <MdPersonPin />
                            </span>
                        </div>
                    </div>

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
                                minLength={8}
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
                        Sign up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <a className="underline ps-2" href="/signin">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignupPage