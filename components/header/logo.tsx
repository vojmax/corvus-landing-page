import localFont from "next/font/local";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const myFont = localFont({
  src: [
    {
      path: "./HelveticaNowDisplay-BlackIta.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

function Logo() {
  return (
    <Button variant="logo">
      <Link href="/" className="text-left">
        <p className={cn("italic text-5xl", myFont.className)}>corvus</p>
        <p
          className={cn(
            "-mt-3 text-lg font-normal tracking-widest text-right",
            myFont.className
          )}
        >
          web_agency
        </p>
      </Link>
    </Button>
  );
}

export default Logo;
