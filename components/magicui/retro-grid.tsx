import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
export default function RetroGrid({ className }: { className?: string }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <>
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]",
        className,
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",

            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]",
          )}
        />
      </div>
   
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
     <div className="  flex   flex-col items-center justify-center">
    
       <h1 className="flex items-center max-w-4xl   text-center justify-center mt-80 md:text-7xl text-4xl p-2 font-semibold">
       Your Ideas, Documents, & Plans. Unified. Welcome to TakeNote

       </h1>
       
        <p className="text-xl font-medium p-2 text-center mt-4">
        TakeNote is the connected workspace where better, faster work happens.
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
    </>
  );
}
