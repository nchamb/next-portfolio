import Link from "next/link";

export default function BlogNavbar() {
    return (
        // Navigation
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between items-center py-2 sm:py-4">
                <Link href="/" className="text-lg sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors mr-2">
                Portfolio
                </Link>
                <div className="flex items-center space-x-2 sm:space-x-6">
                <Link href="/blogs" className="text-sm sm:text-base text-slate-700 hover:text-blue-600 transition-colors font-medium">
                    Blog Page
                </Link>
                <Link href="/#about-me" className="text-sm sm:text-base text-slate-700 hover:text-blue-600 transition-colors font-medium">
                    About Me
                </Link>
                <Link href="/#contact" target="_self">
                    <button className="bg-black text-white px-3 py-1 sm:px-6 sm:py-2 rounded-lg font-medium text-sm sm:text-base transition-all hover:bg-blue-600 hover:shadow-lg">
                    Contact Me
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </nav>
    );
}
