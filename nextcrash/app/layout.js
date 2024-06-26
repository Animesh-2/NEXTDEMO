import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./component/Navbar";

const  josefin= Josefin_Sans({ subsets: ["latin"], weight:"700"});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{textAlign:"center", fontSize:"30px"}}>
      <body className={josefin.className}>
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}
