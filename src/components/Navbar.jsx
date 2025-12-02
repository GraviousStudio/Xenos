import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const navLink = document.querySelector('#nav-link')

    const [burger, setBurger] = useState(false)

    return (
        <>
            <div className="flex justify-center">
                <Link to={'/'}>
                    <img src={'/xenos-logo.png'} alt="" width={120} className="cursor-pointer" />
                </Link>
            </div>
            <nav className="xl:flex xl:justify-center bg-zinc-900">
                <div className="flex bg-zinc-900 text-white h-12 p-3 xl:hidden justify-between border border-solid border-zinc-800">
                    <h1>Xenos</h1>
                    <button onClick={() => setBurger(!burger)}>
                        {(burger == false) ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        }
                    </button>
                </div>

                <div className={`text-xl text-white font-semibold ${(burger ? "flex flex-col" : "hidden")} xl:flex xl:flex-row transition-all ease-in-out duration-300`} id="nav-link">
                    <Link to={'/'} className="bg-zinc-900 p-3 cursor-pointer hover:text-violet-900 transition-all ease-in-out duration-300"><i className="fa-solid fa-house"></i> Home</Link>
                    <Link to={'/full-access'} className="bg-zinc-900 p-3 cursor-pointer hover:text-violet-900 transition-all ease-in-out duration-300"><i className="fa-solid fa-person"></i> Full Access</Link>
                    <Link to={'/no-full-access'} className="bg-zinc-900 p-3 cursor-pointer hover:text-violet-900 transition-all ease-in-out duration-300"><i className="fa-solid fa-person"></i> No Full Access</Link>
                    <Link to={'/cart'} className="bg-zinc-900 p-3 cursor-pointer hover:text-violet-900 transition-all ease-in-out duration-300"><i class="fa-solid fa-basket-shopping"></i> Carrello</Link>
                    <Link to={'/contact'} className="bg-zinc-900 p-3 cursor-pointer hover:text-violet-900 transition-all ease-in-out duration-300"><i className="fa-solid fa-message"></i> Contattaci</Link>
                </div>
            </nav>
        </>
    )
}