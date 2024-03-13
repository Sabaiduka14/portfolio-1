"use clinet";

import { AppWindow, Facebook, Github, Instagram, Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b flex flex-col md:flex-row py-3 max-w-2xl px-4 md:px-6 lg:px-8 md:max-w-7xl items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg md:text-2xl cursor-pointer font-bold text-black">
          <AppWindow size={24} />
          <span>iduka.saba</span>
        </div>
        <div className="cursor-pointer md:hidden">
          <Dialog>
            <DialogTrigger>
              <Menu size={28} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <div className="flex flex-col gap-3 mt-6">
                    {["Home", "Projects", "Skills"].map((name, idx) => (
                      <Button key={idx} className="w-full font-semibold">
                        {name}
                      </Button>
                    ))}
                  </div>
                </DialogTitle>
                <DialogDescription>
                  <div className="flex justify-around mt-6">
                    <a
                      href="https://github.com/Sabaiduka14"
                      className="cursor-pointer"
                    >
                      <Github />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100053056426371&locale=ka_GE"
                      className="cursor-pointer"
                    >
                      <Instagram />
                    </a>
                    <a
                      href="https://www.instagram.com/iduka.saba/"
                      className="cursor-pointer"
                    >
                      <Facebook />
                    </a>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <nav className="hidden md:flex gap-4 text-lg font-semibold mt-4 md:mt-0">
          {["Home", "Projects", "Skills"].map((name, idx) => (
            <div key={idx}>
              <a href={`#${name.toLowerCase()}`} className="cursor-pointer">
                {name}
              </a>
            </div>
          ))}
        </nav>
        <div className="hidden md:flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/Sabaiduka14" className="cursor-pointer">
            <Github />
          </a>
          <a
            href="https://www.instagram.com/iduka.saba/"
            className="cursor-pointer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100053056426371&locale=ka_GE"
            className="cursor-pointer"
          >
            <Facebook />
          </a>
        </div>
      </div>
    </header>
  );
}
