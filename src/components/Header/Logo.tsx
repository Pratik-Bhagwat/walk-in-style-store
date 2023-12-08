import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <img src="" alt="" />
      <Link to="/">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-2xl">
          WalkInStyle
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
