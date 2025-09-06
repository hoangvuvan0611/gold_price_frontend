'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PAGE_GOLD_DOMESTIC, PAGE_HOME, REF_GOLD_DOMESTIC, REF_HOME, PAGE_GOLD_WORLD, REF_GOLD_WORLD } from "@/lib/constants";
import { NavigationType } from "./type";
import Link from 'next/link';

const navigation: NavigationType[] = [
    { id: 1, name: PAGE_HOME, href: REF_HOME},
    { id: 2, name: PAGE_GOLD_DOMESTIC, href: REF_GOLD_DOMESTIC},
    { id: 3, name: PAGE_GOLD_WORLD, href: REF_GOLD_WORLD},
];

const categories = [
    { id: 1, name: 'Hoa quả - Fruits', icon: '🍎' },
    { id: 2, name: 'Rau xanh - Vegetables', icon: '🥬' },
    { id: 3, name: 'Drinks', icon: '🥤' },
    { id: 4, name: 'Butter & Egges', icon: '🥚' },
    { id: 5, name: 'Trees', icon: '🌳' },
    { id: 6, name: 'Cakes', icon: '🍰' },
    { id: 7, name: 'Meats', icon: '🥩' },
    { id: 8, name: 'Fish', icon: '🐟' },
    { id: 9, name: 'Onions', icon: '🧅' },
    { id: 10, name: 'Grapes', icon: '🍇' },
];

export function Navbar({ mobile = false }: { mobile?: boolean }) {

  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (mobile) {
    return (
      <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item: NavigationType) => (
                  <Link
                      href={item.href}
                      key={item.id}
                      className={`text-lg font-bold text-gray-700 hover:text-lime-600 px-4 py-3 rounded transition-all ${pathname === item.href ? 'bg-lime-100' : ''}`}
                  >
                      {item.name}
                  </Link>
              ))}
          </nav>
    );
  }

  return (
    <div className="navbar container mx-auto relative">
      <div className="flex items-center space-x-6">
        {/* Navigation links */}
        <nav className="flex items-center gap-4">
          {navigation.map((item: NavigationType) => (
            <Link
              href={item.href}
              key={item.id}
              className={`
                relative text-sm px-1 py-2 transition-colors duration-200
                ${("/" + segments[0]) === item.href || (pathname === '/' && item.href === '/')
                    ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-500"
                    : "text-gray-800 hover:text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:origin-left"}
                `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
