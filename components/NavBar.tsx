import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="flex justify-evenly items-center">
      <Link href="/">
        <li className="bg-emerald-400 rounded-2xl p-3">Home</li>
      </Link>
      <Link href="/dashboard">
        <li className="bg-emerald-400 rounded-2xl p-3">Dashboard</li>
      </Link>
      <Link href="/about">
        <li className="bg-emerald-400 rounded-2xl p-3">About</li>
      </Link>
      <Link href="/contact">
        <li className="bg-emerald-400 rounded-2xl p-3">Contact</li>
      </Link>
      <Link href="/login">
        <li className="bg-emerald-400 rounded-2xl p-3">Login</li>
      </Link>
    </ul>
  );
};

export default NavBar;
