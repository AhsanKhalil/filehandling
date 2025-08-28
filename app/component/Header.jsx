import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10">
        
        {/* Logo / Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-yellow-400 drop-shadow-md">
          File Handling
        </h1>

        {/* Navigation */}
        <nav className="flex gap-6 mt-4 md:mt-0 text-lg font-medium">
          <Link
            href="/local"
            className="relative group transition-colors"
          >
            Local
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="/cloud"
            className="relative group transition-colors"
          >
            Cloud
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
