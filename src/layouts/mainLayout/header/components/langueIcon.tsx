import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdownMenu';

const LangueIcon = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p>Langue</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-28 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuItem>English(US)</DropdownMenuItem>
        <DropdownMenuItem>Vietnamse(Vi)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangueIcon;
