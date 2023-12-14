"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {

  const {isAuthenticated, isLoading} = useConvexAuth();

    const scrolled = useScrollTop();

  return (
    <div className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-5",
        scrolled && "border-b shadow-sm "
    )}>
      <Logo/>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
            <Spinner size={"lg"}/>
        )}
        {
          !isAuthenticated && !isLoading && (
            <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"} className="-ml-8 md:ml-0">
                Get Notion free
              </Button>
            </SignInButton>
            </>
          )
        }{
          isAuthenticated && !isLoading && (
            <>
            <Button variant={"ghost"} size={"sm"} asChild>
            <Link href={"/documents"}>
              Enter Notion
            </Link>
            </Button>
            <div className="md:ml-0 ml-[-3rem] md:mr-2">
            <UserButton afterSignOutUrl="/"/>
            </div>
            </>
          )
        }
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar
