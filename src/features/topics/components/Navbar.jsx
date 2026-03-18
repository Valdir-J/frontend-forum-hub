import { Button } from "@/components/ui/button";
import { MenuIcon, SearchIcon, SlashIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="w-full p-1.5 h-11 flex items-center  border-b border-b-neutral-200 gap-2">
      <div className="grow flex">
        <Button size="icon" variant="ghost">
          <SlashIcon size={16} />
        </Button>
      </div>

      <Button size="icon" variant="ghost">
        <SearchIcon size={16} />
      </Button>

      <Button size="icon" variant="ghost">
        <MenuIcon size={16} />
      </Button>
    </header>
  );
};
