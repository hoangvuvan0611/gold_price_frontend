'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import SearchBar from "@/components/layout/search";
import {Navbar} from "@/components/layout/navbar";
import {User} from "lucide-react";
import {Tooltip} from "next/dist/next-devtools/dev-overlay/components/tooltip/tooltip";

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`flex bg-white px-2 z-50 relative
            ${isScrolled ? "border-b border-b-gray-200" : ""}`}
        >
            <div className="w-full flex h-16 items-center justify-between gap-1 mx-auto">
                {/* Bên trái: logo */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Image
                        src={'/gold_logo.png'}
                        alt={"Giá vàng"}
                        width={42}
                        height={42}
                        priority={true}
                    />
                    <h1 className="text-lg font-bold">Giá Vàng</h1>
                </div>

                <div className={'flex items-center gap-4'}>
                    {/* Search chỉ hiện trên desktop */}
                    {/*<div className="hidden md:flex flex-1 justify-center px-4">*/}
                    {/*    <SearchBar />*/}
                    {/*</div>*/}

                    {/* Navbar desktop */}
                    <div
                        className={`transition-all duration-500 ease-in-out hidden md:block`}
                    >
                        <Navbar />
                    </div>
                </div>

                 {/*Bên phải: ngôn ngữ + user + button*/}
                <div className="flex items-center gap-4 sm:gap-4">
                    <button className="flex items-center gap-1 text-sm">
                        🌐 <span className="hidden sm:inline">VI</span>
                    </button>
                    <button>
                        <User/>
                    </button>
                    <button className="px-3 py-1 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-medium">
                        Bắt đầu
                    </button>
                </div>
            </div>

            {/* Navbar mobile */}
            {showMobileNav && (
                <div
                    className="block md:hidden fixed inset-0 z-[999] bg-black bg-opacity-40"
                    onClick={() => setShowMobileNav(false)}
                >
                    <div
                        className="absolute top-0 left-0 h-full bg-white shadow-lg p-4 transition-transform duration-500 ease-in-out"
                        style={{
                            width: '75vw',
                            maxWidth: '320px',
                            transform: showMobileNav ? 'translateX(0)' : 'translateX(-100%)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            {/*<Logo />*/}
                        </div>
                        {/*<Navbar mobile={true} />*/}
                    </div>
                </div>
            )}
        </header>

    );
}
