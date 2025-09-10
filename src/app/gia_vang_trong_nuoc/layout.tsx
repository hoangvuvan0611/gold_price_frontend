'use client'
import {ReactNode} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

type TabItem = {
    id: string;
    title: string;
    image: string;
    href: string;
};

const tabs: TabItem[] = [
    { id: "sjc", title: "SJC", image: "/domestic_logo/SJC_logo.png", href: "/gia_vang_trong_nuoc" },
    { id: "doji", title: "DOJI", image: "/domestic_logo/DOJI_logo.png", href: "/gia_vang_trong_nuoc/doji"  },
    { id: "pnj", title: "PNJ", image: "/domestic_logo/PNJ_logo.png", href: "/gia_vang_trong_nuoc/pnj"  },
    { id: "bao_tin_minh_chau", title: "Bảo Tín Minh Châu", image: "/domestic_logo/BTMC_logo.png", href: "/gia_vang_trong_nuoc/bao_tin_minh_chau"  },
    { id: "bao_tin_manh_hai", title: "Bảo Tín Mạnh Hải", image: "/domestic_logo/BTMH_logo.png", href: "/gia_vang_trong_nuoc/bao_tin_manh_hai"  },
    { id: "phu_quy", title: "Phú Quý", image: "/domestic_logo/PQ_logo.png", href: "/gia_vang_trong_nuoc/phu_quy"  },
    { id: "mi_hong", title: "Mi Hồng", image: "/domestic_logo/MH_logo.png", href: "/gia_vang_trong_nuoc/mi_hong"  },
    { id: "ngoc_tham", title: "Ngọc Thẩm", image: "/domestic_logo/NT_logo.png", href: "/gia_vang_trong_nuoc/ngoc_tham"  },
];

export default function GiaVangTrongNuocLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

    return (
      <div className="min-h-screen mt-16">
        {/* Danh sach cac tab thuong hieu vang trong nuoc */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Danh sách tab */}
          <div className="overflow-x-auto">
            <div className="flex gap-2 sm:gap-4 border-b border-gray-200 pb-2 min-w-max">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`flex flex-col items-center px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 min-w-[60px] sm:min-w-[80px]
                  ${pathname === tab.href || (pathname === '/' && tab.href === '/') 
                    ? "bg-amber-50 border-b-2 border-amber-500 text-amber-700" 
                    : "hover:bg-gray-50 text-gray-600"}`}
                >
                  <Image
                      src={tab.image}
                      alt={tab.title}
                      width={32}
                      height={32}
                      className={'w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-sm'}
                  />
                  <span className="text-xs sm:text-sm font-medium mt-1 text-center leading-tight">
                    {tab.title}
                  </span>
                </Link>
            ))}
            </div>
          </div>
        </div>

        {/* Nội dung page con */}
        <div className="mt-4">{children}</div>
      </div>
    );
}
