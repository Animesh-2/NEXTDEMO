import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{display:"flex", justifyContent:"space-around"}}>
      <Link href="/">Home</Link> 
      <Link href="/contact">contact</Link>  
      <Link href="/about-us">aboutus</Link>
    </nav>
  );
};

export default Navbar;
