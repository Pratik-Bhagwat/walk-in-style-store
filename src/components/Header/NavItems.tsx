import { Link } from "react-router-dom";
import { navItems } from "../../constant";
import { Button } from "../ui/button";

function NavItems() {
  return (
    <div className="hidden lg:flex items-center gap-44">
      <ul className="flex items-center gap-3">
        {navItems?.map((item) => (
          <Link key={item.id} to={item.route}>
            <Button variant="ghost" asChild>
              <li>{item.name}</li>
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavItems;
