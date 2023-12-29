import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};
type Link = {
  href: string;
  title: string;
};
const links: Link[] = [
  {
    href: "/client",
    title: "Client",
  },
  {
    href: "/drinks",
    title: "Drinks",
  },
  {
    href: "/parisma-example",
    title: "Parisma&Example",
  },
  {
    href: "/tasks",
    title: "Tasks",
  },
];
export const Navbar = ({ className,children }: Props) => {
  return (
    <div className={`navbar ${className}`}>
      {children}
    </div>
  );
};

export const NavbarBrand = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};
export const NavbarStart = ({ className, children }: Props) => {
  return <div className={`navbar-start ${className}`}>{children}</div>;
};
export const NavbarCenter = ({ className, children }: Props) => {
  return <div className={`navbar-center ${className}`}>{children}</div>;
};
export const NavbarEnd = ({ className, children }: Props) => {
  return <div className={`navbar-end ${className}`}>{children}</div>;
};