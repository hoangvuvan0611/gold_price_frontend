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
      <div className="">
        {/* Danh sach cac tab thuong hieu vang trong nuoc */}
        <div className="w-full max-w-5xl mx-auto mb-24 mt-12">
          {/* Danh sách tab */}
          <div className="flex gap-4 border-b border-gray-200 pb-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition
                ${pathname === tab.href || (pathname === '/' && tab.href === '/') ? "bg-gray-100 border-b-4 border-yellow-500" : "hover:bg-gray-50"}`}
              >
                <Image
                    src={tab.image}
                    alt={tab.title}
                    width={40}
                    height={40}
                    className={'w-10 h-10 object-contain rounded-sm'}
                />
                <span className="text-sm font-bold mt-1">
                  {tab.title}
                </span>
              </Link>
          ))}
          </div>
        </div>

        {/* Nội dung page con */}
        <div className="mt-4">{children}</div>
    </div>
    );
}
