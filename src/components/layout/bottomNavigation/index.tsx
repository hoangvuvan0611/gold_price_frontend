'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Globe, TrendingUp } from 'lucide-react';
import { PAGE_GOLD_DOMESTIC, PAGE_HOME, REF_GOLD_DOMESTIC, REF_HOME, PAGE_GOLD_WORLD, REF_GOLD_WORLD } from "@/lib/constants";

const navigation = [
  { 
    id: 1, 
    name: PAGE_HOME, 
    href: REF_HOME, 
    icon: Home 
  },
  { 
    id: 2, 
    name: PAGE_GOLD_DOMESTIC, 
    href: REF_GOLD_DOMESTIC, 
    icon: TrendingUp
  },
  { 
    id: 3, 
    name: PAGE_GOLD_WORLD, 
    href: REF_GOLD_WORLD, 
    icon: Globe
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around py-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
          const Icon = item.icon;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors duration-200 ${
                isActive 
                  ? 'text-amber-600 bg-amber-50' 
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              <Icon 
                size={16}
                className={`mb-0.5 ${isActive ? 'text-amber-600' : 'text-gray-500'}`}
              />
              <span className={`text-xs font-medium ${isActive ? 'text-amber-600' : 'text-gray-500'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
