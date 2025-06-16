import Link from "next/link";
import { Button } from "./ui/button";
import { Code } from "lucide-react";

const Nav = () => {
  return (
    <>
      <nav className="py-5 lg:mx-30 mx-6 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#5D2DE6]/20 backdrop-blur-sm border border-[#5D2DE6]/30">
              <Code className="w-6 h-6 text-[#5D2DE6]" />
            </div>
            <h1 className="lg:text-3xl text-lg font-semibold">Opensox</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/sign-up">
            {" "}
            <Button className="rounded-full tracking-widest font-semibold text-white hover:text-gray-400 hover:bg-transparent bg-transparent cursor-pointer lg:text-lg text-sm">
              Sign up
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="font-semibold lg:text-lg text-sm rounded-full bg-[#5D2DE6] lg:px-6 lg:py-5 px-3 py-2 cursor-pointer hover:bg-[#6a3de4]">
              Log in
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
