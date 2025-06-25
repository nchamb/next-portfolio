import React from "react";
import Link from "next/link"
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  ArchiveBoxIcon,
  BookmarkIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "/#",
  },
  {
    name: "About Me",
    icon: UserCircleIcon,
    href: "/#about-me",
  },
  {
    name: "Resume",
    icon: ArchiveBoxIcon, // Changed to ArchiveBoxIcon for Resume
    href: "/#resume",
  },
  {
    name: "Skills",
    icon: Squares2X2Icon,
    href: "/#skills",
  },
  {
    name: "Experience",
    icon: RectangleStackIcon, // Changed to RectangleStackIcon for Experience
    href: "/#experience",
  },
  {
    name: "Projects",
    icon: CommandLineIcon,
    href: "/#projects",
  },
  {
    name: "My Blog",
    icon: BookmarkIcon, // Changed to BookmarkIcon for Blog
    href: "/#blog",
  },
  {
    name: "Open Contribution",
    icon: Square3Stack3DIcon, // Changed to Square3Stack3DIcon for Open Contribution
    href: "/#open-contribution",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={"_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
        onClick={onClick as any}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          <Link href="/" className="flex items-center gap-2">
          Nipun M. M.
          </Link>
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
              
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex"> 
          <Link href="/#contact">
            <Button color="gray">Contact Me</Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href} onClick={handleOpen}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Link href="/#contact" target="_self">
              <Button color="gray" onClick={handleOpen}>Contact Me</Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
