"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import AcmeLogo from "./AcemLogo";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname();
  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/sections", title: "Sections" },
    { href: "/games", title: "Games" },
    { href: "/meals", title: "Meals" },
    { href: "/drinks", title: "Drinks" },
    { href: "/offers", title: "Offers" },
    { href: "/contact", title: "Contact" },
  ];
  return (
    <Navbar
      className="bg-white shadow-sm"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-purple-600",
        ],
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-purple-600"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-purple-700 text-2xl">
            Event
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item: any, index) => (
          <NavbarItem key={index} isActive={pathName === item.href}>
            <Link className={`text-purple-600`} href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          variant="flat"
          className="bg-white text-purple-600"
          href="#"
        >
          Sign In
        </Button>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-purple-600 text-white"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-white scrollbar-hide">
        {menuItems.map((item: any, index) => (
          <NavbarMenuItem key={index} isActive={item.href === pathName}>
            <Link
              className={`text-purple-600 w-full`}
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
