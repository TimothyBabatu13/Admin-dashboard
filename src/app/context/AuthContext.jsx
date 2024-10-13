'use client';

import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext(null);

const AuthContext = ( { children } ) => {
    
    const [active, setIsActive] = useState(undefined);

    useEffect(()=>{
      setIsActive(null)
    }, [])
  return (
    <Context.Provider value={{active, setIsActive}}>
        {children}
    </Context.Provider>
  )
}

export const useAuthContext = () => {
    const context = useContext(Context)
    return context
} 
export default AuthContext