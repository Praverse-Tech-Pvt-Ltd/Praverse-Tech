"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import JoinWaitlistButton from "./JoinWaitlistButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NavLink } from "@/lib/constants";
import { Logo } from "./Logo";
import { WaitlistDialog } from "../healthmate/WaitlistDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLink = (link: NavLink, isMobile: boolean = false) => {
    const isExplore = link.label === "Explore";

    if (link.children) {
      if (isMobile) {
        const isOpen = !!openMobileMenus[link.label];
        return (
          <div key={link.label}>
            <div className="flex items-center justify-between px-4">
              <h4 className="font-semibold">{link.label}</h4>
              <button
                aria-expanded={isOpen}
                aria-controls={`${link.label}-mobile-menu`}
                onClick={() =>
                  setOpenMobileMenus((s) => ({ ...s, [link.label]: !isOpen }))
                }
                className="p-2 rounded-md hover:bg-muted/20"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            <div
              id={`${link.label}-mobile-menu`}
              className={`flex flex-col space-y-2 mt-2 overflow-hidden transition-[max-height] duration-200 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => {
                    setIsSheetOpen(false);
                    setOpenMobileMenus({});
                  }}
                  className="text-muted-foreground pl-4 pr-4 py-2"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        );
      }
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:bg-accent/50 px-3 flex items-center gap-1"
            >
              {link.label}
              <ChevronDown className="h-4 w-4 transition duration-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {link.children.map((child) => (
              <DropdownMenuItem key={child.label} asChild>
                <Link href={child.href} className="focus-ring">
                  {child.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={isMobile ? () => setIsSheetOpen(false) : undefined}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === link.href ? "text-primary" : "text-muted-foreground",
          isMobile ? "text-base px-4 py-2" : "px-3",
        )}
      >
        {link.label}
      </Link>
    );
  };
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-border bg-background/80 backdrop-blur-lg"
          : "border-transparent bg-background",
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center focus-ring rounded-sm md:hidden">
          <Logo imgClassName="h-16 w-auto md:h-24 md:w-auto" />
        </Link>
        <nav className="hidden items-center space-x-1 md:flex">
          {NAV_LINKS.map((link) => renderNavLink(link, false))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <WaitlistDialog
            open={isWaitlistOpen}
            onOpenChange={setIsWaitlistOpen}
          >
            <div className="hidden sm:inline-flex">
              <JoinWaitlistButton className="small" onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</JoinWaitlistButton>
            </div>
          </WaitlistDialog>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="focus-ring">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-sm overflow-y-auto"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Browse primary navigation links for Praverse Tech.
                  </SheetDescription>
                </SheetHeader>
                <Link href="/" className="mb-8 flex items-center">
                  <Logo imgClassName="h-16 w-auto" />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => renderNavLink(link, true))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
