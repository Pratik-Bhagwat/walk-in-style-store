import Container from "../Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";
import LoginSignupCartBtn from "./LoginSignupCartBtn";
import Logo from "./Logo";
import NavItems from "./NavItems";

function Header() {
  return (
    <header className="border-b fixed top-0 left-0 w-full bg-gray-100 opacity-95 z-50">
      <Container>
        <nav className="flex items-center justify-between py-3">
          <Logo />
          <MobileMenu />
          <NavItems />
          <LoginSignupCartBtn />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
