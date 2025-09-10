'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import {Navbar} from "@/components/layout/navbar";
import BottomNavigation from "@/components/layout/bottomNavigation";
import {User} from "lucide-react";

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`flex bg-white px-2 sm:px-4 z-50 relative
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
                    <h1 className="text-base sm:text-lg font-bold">Giá Vàng</h1>
                </div>

                <div className={'flex items-center gap-2 sm:gap-4'}>
                    {/* Search chỉ hiện trên desktop */}
                    {/*<div className="hidden md:flex flex-1 justify-center px-4">*/}
                    {/*    <SearchBar />*/}
                    {/*</div>*/}

                    {/* Navbar desktop - ẩn hoàn toàn trên mobile */}
                    <div className="hidden md:block">
                        <Navbar />
                    </div>
                </div>

                 {/*Bên phải: ngôn ngữ + user + button*/}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="flex items-center gap-1 text-xs sm:text-sm">
                        🌐 <span className="hidden sm:inline">VI</span>
                    </button>
                    <button className="p-1 sm:p-2">
                        <User className="w-4 h-4 sm:w-5 sm:h-5"/>
                    </button>
                    <button className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-medium">
                        <span className="hidden sm:inline">Bắt đầu</span>
                        <span className="sm:hidden">Start</span>
                    </button>
                    
                    {/* Mobile menu button - ẩn vì dùng bottom nav */}
                    {/* <button 
                        className="md:hidden p-2"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button> */}
                </div>
            </div>

            {/* Bottom Navigation cho mobile */}
            <BottomNavigation />
        </header>

    );
}
