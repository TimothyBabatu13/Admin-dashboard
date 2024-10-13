'use client';

import { useAuthContext } from "@/app/context/AuthContext";
import { Button } from "./Companies";

const LogOut = () => {
    const { setIsActive } = useAuthContext();

  return (
    <Button className={'bg-red-500 text-white'} handleClick={()=> setIsActive(null)}>Signout</Button>
    // <button onClick={()=> setIsActive(null)}>Signout</button>
  )
}

export default LogOut