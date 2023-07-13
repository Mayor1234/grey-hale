import Link from 'next/link';

const Logo = () => {
  return (
    <div className="w-1/5 relative z-50">
      <Link href="/">
        <h1 className="font-normal text-2xl leading-relaxed tracking-wide">
          GREY HALES
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
