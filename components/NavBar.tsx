import Link from "next/link";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { auth0 } from "@/lib/auth0";

export default async function NavBar() {
  const session = await auth0.getSession();
  const user = session?.user;
  const linkClass =
    "text-2xl text-white hover:text-green-600 transition-colors font-medium";
  return (
    <nav className="flex items-center justify-between bg-[#333333] shadow-md px-2 py-2 ">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/Qhh/Logo/Qhh_Colored.svg"
            alt="QHH Logo"
            className="h-20 w-auto mr-2"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className={linkClass}>
          Home
        </Link>
        <Link href="/blog" className={linkClass}>
          Blog
        </Link>
        <Link href="/account" className={linkClass}>
          Account 
        </Link>

        <div>
          {user ? (
            <>
              <LogoutButton />
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
