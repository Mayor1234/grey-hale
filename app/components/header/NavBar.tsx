import Link from 'next/link';
import Menuitems from './Menuitems';

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <Menuitems />
      <div className="flex gap-5 z-50">
        <Link
          href="#"
          className="bg-transparent text-nude5 border-[1px] border-nude5 py-2  w-40 text-center rounded-3xl  hover:bg-nude5 hover:text-[#f7f8f9] hover:border-nude2"
        >
          Login
        </Link>
        <Link
          href="/explore"
          className="bg-nude4 text-[#fff] border-[1px] border-nude4 py-2 w-40 text-center rounded-3xl hover:bg-nude5 hover:text-[#f7f8f9] hover:border-nude2"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
