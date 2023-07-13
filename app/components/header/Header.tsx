import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="relative z-50 border-none text-[#fff] hover:bg-slate-50 hover:text-gray-800">
      <div className="max-w-7xl h-16 mx-auto py-10 flex items-center gap-10">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
