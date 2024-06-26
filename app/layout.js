import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-white mr-4"> home</Link>
          <Link href="/about" className="text-white mr-4"> about</Link>
          <Link href="/dynamic-page" className="text-white mr-4"> dynamic-page</Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
      </body>
    </html>
  );
}
