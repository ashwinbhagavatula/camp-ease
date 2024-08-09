import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans, Roboto_Mono } from 'next/font/google'
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

export const metadata: Metadata = {
  title: "Camp Ease",
  description: "Rent camp sites on hourly basis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${robotoMono.variable} ${openSans.className}`}>
      <body >
        <Nav/>  
        {children}
      </body>
    </html>
  );
}
