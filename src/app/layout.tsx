import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/Components/layout/Navigation";
import { AuthProvider } from "@/Components/AuthContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FDM Expense App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navigation links={[]} home={"/home"} />
            {children}
          </body>
        </html>
    </AuthProvider>
  );
}
