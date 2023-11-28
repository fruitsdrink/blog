import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "水果饮料杂记",
  description: "水果饮料的开发与分享",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col justify-between">
          <div className="p-5 bg-gray-900 flex gap-8 sticky top-0">
            <h1 className="text-white">
              <Link href="/">{`${metadata.title}`}</Link>
            </h1>
            <nav className="flex gap-2 text-white">
              <Link
                href="/code/react-js"
                className="hover:underline underline-offset-2 uppercase"
              >
                ReactJs
              </Link>
              <Link
                href="/code/css"
                className="hover:underline underline-offset-2 uppercase"
              >
                CSS
              </Link>
            </nav>
          </div>
          <div className="m-5">{children}</div>
          <div className="p-5 bg-gray-500 text-center text-gray-100">
            &copy;{`${metadata.title} ${new Date().getFullYear()}`}
          </div>
        </div>
      </body>
    </html>
  );
}
