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
    <>
          <div
            className={cn( " absolute z-50 right-4 ",scrolled && " shadow-sm")}>
            <div className="flex gap-x-4 mt-4">
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
        </>
   
  );
};

export default MarketingPage;
