"use client"

import { MdFastfood } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { signOut, useSession } from "next-auth/react"

const Nav = () => {

    const { status } = useSession()

    return (
        <header className="bg-neutral-100">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="text-amber-900 flex items-center gap-1" href="/">
                            <MdFastfood size={30}/>
                            <div className="block">
                                Nourify<span className="text-gray-500">Rouka</span>
                            </div>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/categories"
                                    >
                                        Menu
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Contacts
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        <span className="flex"><AiOutlineShoppingCart size={20}/> (0)</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {status === "unauthenticated" ?
                                <div className="sm:flex sm:gap-4">
                                    <a className="primary-btn"
                                        href="/signin"
                                    >
                                        Login
                                    </a>

                                    <div className="hidden sm:flex">
                                        <a className="secondary-btn"
                                            href="/"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </div> :
                                <div className="sm:flex sm:gap-4">
                                    <a className="primary-btn"
                                        href="/"
                                    >
                                        Orders
                                    </a>
                                    <a className="secondary-btn"
                                        href="/"
                                        onClick={() => signOut({callbackUrl: "/"})}
                                    >
                                        Sign out
                                    </a>
                                </div>
                            }

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav