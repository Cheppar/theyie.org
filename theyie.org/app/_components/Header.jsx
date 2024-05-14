import { Button } from "@/components/ui/button";
import { Plus, CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input"



const Header = () => {
  return (
    <div className="mb-2 p-2 flex justify-between px-2 shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center">
         <Image src={"/logo.svg"} height={50} width={70} alt="logo" /> 

        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              Events
            </li>
          </Link>

          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              About
            </li>
          </Link>

          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>

      <div className="hidden md:flex gap-2">
      <Input type="text" placeholder="Search Website" />
      </div>


      <div className="flex gap-2 items-center">
      

        {/* Button with icon-only on smaller screens */}
        <Button className="flex gap-2">
          <Plus className="sm:hidden" />
          <span className="hidden sm:inline">Register</span>
        </Button>

        <Button variant="outline" className="flex gap-2">
          <CircleUserRound className="sm:hidden" />{" "}
          {/* Icon-only for smaller screens */}
          <span className="hidden sm:inline">Login</span>{" "}
          {/* Text appears on larger screens */}
        </Button>
      </div>
    </div>
  );
};

export default Header;
