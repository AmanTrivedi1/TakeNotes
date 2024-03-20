"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";


export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
 

  <div className="h-full w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
  <Spotlight
    className="-top-40 left-0 md:left-60 md:-top-20"
    fill="white"
  />
  <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
    <h1 className="text-4xl md:text-7xl  md:max-w-5xl   m-auto font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
    Your Ideas, Documents, & Plans. Unified. Welcome to TakeNote
    </h1>
    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
    TakeNote is the connected workspace where
    better, faster work happens.   
    </p>
    <div className="flex items-center justify-center  mt-4">
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button asChild className="max-w-[200px] m-auto">
            <Link href="/documents">
              Enter TakeNote
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button className="max-w-[200px] m-auto">
              Get TakeNote free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        )}
      </div>
  </div>
 
</div>

  );
};
