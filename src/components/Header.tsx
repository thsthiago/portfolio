"use client";
import { NAV_ITEMS } from "@/constants/navItems";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion } from "framer-motion";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const CustomNavigationMenuItem = ({
  children,
  activeId,
  sectionId,
  onClick,
}: {
  children: React.ReactNode;
  activeId: string | null;
  sectionId: string;
  onClick?: () => void;
}) => {
  return (
    <NavigationMenuItem onClick={onClick}>
      <NavigationMenuLink
        asChild
        className={cn(
          "hover:bg-transparent hover:text-indigo-400 relative",
          "after:content-[''] after:absolute after:left-0 after:-bottom-1",
          "after:h-[2px] after:w-full after:bg-indigo-400 after:origin-bottom",
          "after:scale-y-0 after:transition-transform after:duration-300",
          "hover:after:scale-y-100 transition-all duration-300",
          activeId !== "hero" && activeId === sectionId
            ? "after:scale-y-100"
            : "after:scale-y-0"
        )}
      >
        {children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default function Header() {
  const activeId = useScrollSpy();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <header className="container flex justify-end items-center w-full mx-auto py-4 px-4 relative md:justify-center md:fixed top-0 left-1/2 -translate-x-1/2 z-2">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block backdrop-blur-md bg-background/70 px-5 py-2 rounded-full"
      >
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap gap-2">
            {NAV_ITEMS.map((item) => (
              <CustomNavigationMenuItem
                key={item.id}
                activeId={activeId}
                sectionId={item.id}
              >
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "px-3 py-1 text-sm transition-colors",
                    activeId === item.id
                      ? "text-indigo-400"
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </a>
              </CustomNavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </motion.nav>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle></SheetTitle>
            <NavigationMenu className="items-start pt-10">
              <NavigationMenuList className="flex-col items-center justify-start gap-4 min-w-[100vw]">
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleMobileNavClick(e, `#${item.id}`)}
                      className={cn(
                        "text-center transition-colors",
                        activeId === item.id
                          ? "text-indigo-400"
                          : "text-foreground/80"
                      )}
                    >
                      {item.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
