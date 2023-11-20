"use client";

import { Heading } from "./_components/heading";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import AnimatedSvg from "./animatedsvg";
const MarketingPage = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div className="">
      <div className="h-screen fixed  flex flex-col bg-lighmode-background dark:bg-hero-pattern w-full  bg-cover ">
        <div className="flex  fixed w-full flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <div
            className={cn(
              "z-50   top-0 flex items-start justify-start w-full p-6",
              scrolled && " shadow-sm"
            )}
          >
            {/* <Logo /> */}
            <div className="md:ml-auto md:justify-end justify-end w-full flex items-center gap-x-2">
              {isLoading && <Spinner />}
              {!isAuthenticated && !isLoading && (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                      Log in
                    </Button>
                  </SignInButton>
                </>
              )}
              {isAuthenticated && !isLoading && (
                <>
                  <UserButton afterSignOutUrl="/" />
                </>
              )}
              <ModeToggle />
            </div>
          </div>
          <Heading />
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
