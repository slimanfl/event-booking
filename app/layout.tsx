import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  NavbarBrand,
  Navbar,
  NavbarStart,
  NavbarCenter,
  NavbarEnd,
} from "@/components/Navbar";
import Link from "next/link";
import Container from "@/components/Container";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import SearchBox from "@/components/SearchBox";
const inter = Inter({ subsets: ["latin"] });
const links = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/sections",
    title: "Sections",
  },
  {
    href: "/drinks",
    title: "Drinks",
  },
  {
    href: "/meals",
    title: "Melas",
  },
  {
    href: "/game",
    title: "Game",
  },
  {
    href: "/offers",
    title: "Offers",
  },
  {
    href: "/contacts",
    title: "Contacts",
  },
];
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Container className="">
          <Navbar className="py-6 item-center">
            <NavbarStart className="flex justify-start items-center gap-4 w-1/4">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="py-2 px-2 rounded-full text-gray-800 hover:bg-gray-200 active:text-primary lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <NavbarBrand className="">
                <Link
                  href="/"
                  className="text-2xl md:text-3xl lg:text-4xl text-secondary ite font-bold"
                >
                  Event
                </Link>
              </NavbarBrand>
            </NavbarStart>
            <NavbarCenter className="hidden lg:flex items-end w-1/2">
              <ul className="flex items-center justify-center gap-1 pt-1 flex-grow px-1">
                {links.map((link) => (
                  <li
                    className="py-2 px-3 text-[1rem] text-gray-800 hover:text-secondary  hover:rounded-md"
                    key={link.title}
                  >
                    <Link href={link.href}> {link.title}</Link>
                  </li>
                ))}
              </ul>
            </NavbarCenter>
            <NavbarEnd className="flex-1 lg:w-1/4">
              <div className="flex items-center justify-end gap-2">
                <button className="btn btn-secondary btn-sm md:btn-md md:px-8 rounded-3xl">
                  Sign in
                </button>
              </div>
            </NavbarEnd>
          </Navbar>
        </Container>
        {/* <SearchBox /> */}
        {children}
      </body>
    </html>
  );
}
