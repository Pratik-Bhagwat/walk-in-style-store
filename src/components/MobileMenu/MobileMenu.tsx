import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignRight } from "lucide-react";
import { navItems } from "@/constant";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div>
            <AlignRight />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-5">
            <ul className="flex flex-col gap-4">
              {navItems?.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.route}
                  className={buttonVariants({ variant: "link" })}
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
