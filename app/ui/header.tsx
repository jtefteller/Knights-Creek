"use client";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import {
  Popover,
  Transition,
  TransitionChild,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
} from "@headlessui/react";
import clsx from "clsx";

import Button from "@/app/ui/button";
import { Container } from "@/app/ui/container";
import Logo from "@/app/ui/logo";
import { NavLink } from "@/app/ui/navlink";

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({
  open,
  isScrolled,
}: {
  open: boolean;
  isScrolled: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-3.5 w-3.5 overflow-visible",
        isScrolled ? "stroke-slate-700" : "stroke-white"
      )}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      <Popover>
        <PopoverButton
          className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MobileNavIcon open={open} isScrolled={isScrolled} />}
        </PopoverButton>
        <Transition>
          <TransitionChild
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <PopoverBackdrop className="fixed inset-0 bg-slate-300/50" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <PopoverPanel
              as="div"
              className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
            >
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/services">Services</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
            </PopoverPanel>
          </TransitionChild>
        </Transition>
      </Popover>
    </>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "py-1 fixed z-20 left-0 right-0 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm text-slate-900"
          : "bg-transparent text-white"
      )}
    >
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Logo href="/" />
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <Button href="/contact" className="hidden md:block">
              <span>Book Now</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation isScrolled={isScrolled} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
