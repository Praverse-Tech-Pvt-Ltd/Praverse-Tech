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
        return (
          <div key={link.label}>
            <h4 className="font-semibold px-4">{link.label}</h4>
            <div className="flex flex-col space-y-2 mt-2">
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="text-muted-foreground pl-8 pr-4 py-2"
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
        <Link href="/" className="mr-8 flex items-center focus-ring rounded-sm">
          <Logo />
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
              <JoinWaitlistButton onClick={() => setIsWaitlistOpen(true)}>
                Join Waitlist
              </JoinWaitlistButton>
            </div>
          </WaitlistDialog>
          <div className="md:hidden">
            <Sheet>
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
                  <Logo />
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
