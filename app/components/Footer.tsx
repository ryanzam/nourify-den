import { MdFastfood } from "react-icons/md"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { PiTiktokLogoDuotone } from "react-icons/pi"

const Footer = () => {
    return (
        <footer className="bg-neutral-100" >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mt-16">
                    <div className="mt-16 sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center justify-center text-amber-900 sm:justify-start">
                            <MdFastfood size={40} />
                            <div className="">
                                Nourify<span className="text-gray-500">Rouka</span>
                            </div>
                        </div>

                        <div>
                            <ul className="flex justify-center gap-6 sm:justify-end">
                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-amber-700 transition hover:text-amber-700/75"
                                    >
                                        <span className="sr-only">Tiktok</span>
                                        <PiTiktokLogoDuotone size={24} />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-amber-700 transition hover:text-amber-700/75"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <AiOutlineInstagram size={24} />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-amber-700 transition hover:text-amber-700/75"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <AiOutlineFacebook size={24} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                            Copyright &copy; 2023. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer