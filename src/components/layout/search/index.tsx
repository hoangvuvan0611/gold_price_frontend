import {Search} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {useRef, useState} from "react";

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    return (
        <div className="relative" ref={searchRef}>
            <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Tìm kiếm..."
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-8 w-32 md:w-[300px] border focus:outline-none focus:ring-0 focus:border-none"
                />
                <Button
                    onClick={handleSearch}
                    size={"sm"}
                    className="absolute right-0 top-0 bg-gray-400 hover:bg-lime-700"
                >
                    Tìm kiếm
                </Button>
            </div>
        </div>
    );
}