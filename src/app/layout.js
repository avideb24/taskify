import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taskify",
  description: "Task management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-3 min-h-screen xl:mx-auto bg-black text-sm text-white">
        <section className='flex'>

          {/* nav items */}
            <aside className='w-3/12'>
                <Navbar />
            </aside>

            {/* main content */}
            <div className='w-9/12 p-5'>
                {children}
            </div>

          </section>
        </main>
      </body>
    </html>
  );
}
