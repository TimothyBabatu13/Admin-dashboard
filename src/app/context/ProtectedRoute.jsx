'use client';

import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const ProtectedRoute = ( { children }) => {
  const [loading, setIsLoading] = useState(true);
    const { active } = useAuthContext();
    const navigate = useRouter();
    const url = usePathname();

    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
      }, 500)
    }, [])
    useEffect(()=>{
        if(url !== '/login' && active === null){
            navigate.push('/login')
        }
    }, [url, active])

    if(loading) return null
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute