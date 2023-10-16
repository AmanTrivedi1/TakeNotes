"use client";

// import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
// import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/spinner";

export const Heading = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl  sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Take Notes</span>
      </h1>
      <h3 className="text-base   sm:text-xl md:text-2xl font-medium">
        TakeNote is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {/* {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Take Notes
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Jotion free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )} */}
      <div className="flex items-center justify-center">
        <button className="shadow-3xl dark:hover:border-white dark:hover:bg-[#1F1F1F] dark:shadow-darkshadow dark:hover:shadow transition-all flex  items-center justify-center rounded-lg  dark:hover:text-white  hover:shadow dark:bg-white dark:text-black border-2 border-[#000] text-black px-4 py-2">
          Enter to Takenote
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};
