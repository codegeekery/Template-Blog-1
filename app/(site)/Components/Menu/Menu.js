'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { CommandSearch } from "@/app/(site)/Components/SearchQuery/Search"

//sanity Logo
import { useConfig } from "@/utils/usePosts"


export default function Menu() {
    const [isScrolled, setIsScrolled] = useState(false);

    const { data, isLoading } = useConfig();

    // Detectar desplazamiento
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Cambiar estado si se desplaza más de 50px
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-70 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="flex justify-evenly items-center py-4 px-8">
                {/* Logo y Título */}
                <div className="">
                    {isLoading ? (
                        <p className="text-gray-500">Loading...</p>
                    ) : (
                        <>
                            <Link href={"/"} className="flex items-center gap-3">  {/* Asegúrate de que Link tenga el layout adecuado */}
                                <img
                                    src={data?.Logo || "/sample.png"}
                                    alt="Logo"
                                    className="w-12 h-12 rounded-full"
                                />
                                <h1 className={`text-2xl font-bold group-hover:opacity-70 ${isScrolled ? 'text-white' : 'text-black'}`}>
                                    {data?.CompanyName || "Sample Company"}
                                </h1>
                            </Link>
                        </>
                    )}
                </div>



                {/* Navegación */}
                <nav>
                    <ul className="flex gap-4 items-center text-lg">
                        <CommandSearch />
                        <li>
                            <Link
                                href={'/Articles'}
                                className={`hover:text-black/90 transition-colors duration-300 ${isScrolled ? 'text-white hover:text-white/80' : 'text-black'}`}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}
