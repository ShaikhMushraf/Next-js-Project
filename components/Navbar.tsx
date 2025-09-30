import React from "react";
import { checkUser } from "@/lib/checkUsers";

function Navbar() {
  const user = checkUser();
  return <div>Navbar</div>;
}

export default Navbar;
