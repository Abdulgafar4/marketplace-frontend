import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => (
  <div className="relative w-full max-w-xl mx-auto">
    <Input
      type="text"
      placeholder="Search products..."
      className="pl-10 pr-4 py-2 w-full"
      onChange={(e) => onSearch(e.target.value)}
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
  </div>
);

export default SearchBar;
