import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "TARIEVEN", href: "#pricing-plans" },
  { name: "OVER ONS", href: "#welcome-section" },
  { name: "CONTACT", href: "/contact" }
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-text shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Budget Community"
              className="h-24 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-3 justify-center">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-3 py-1.5 text-base font-[Poppins] font-bold font-heading transition-colors text-white hover:text-white/90" 
                    style={{ fontFamily: 'Poppins, Inter, sans-serif', fontWeight: 700 }}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/aanmelden")}
              variant="orange"
            >
              Word lid
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu className="w-6 h-6 text-white" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-text border-l-0">
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <div className="space-y-6">
                      {menuItems.map((item) => (
                        <div key={item.name}>
                          <a
                            href={item.href}
                            className="block text-lg font-heading text-white hover:text-white/90 transition-colors"
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto p-6 border-t border-white/20">
                    <div className="space-y-4">
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full text-left text-lg font-medium text-white hover:text-white/90 transition-colors"
                      >
                        Inloggen
                      </button>
                      <Button
                        onClick={() => navigate("/aanmelden")}
                        variant="orange"
                        className="w-full"
                      >
                        Word lid
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
