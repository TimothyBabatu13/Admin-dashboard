'use client'

import { useFetch } from "@/hooks/use-fetcher"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import Company from "./Company"
import { data as FormData } from "@/hooks/use-data"
export const Button = ({ children, handleClick, className }) => {
    return(
        <button className={cn(`py-2 px-4 text-sm rounded-sm font-normal mr-2 ${className}`)} onClick={handleClick}>{children}</button>
    )
}
const Companies = () => {
    const [active, setIsActive] = useState('all');
    const { data, loading, setData } = useFetch('http');
    const [useData, setUseData] = useState(FormData);
    
    const handleClick = (text) => {
        setIsActive(text);
        setUseData(()=>{
            if(text === 'all') return FormData;
            return FormData.filter(item=> item.status.toLowerCase() === text.toLowerCase())
        })
    }
  return (
    <div className="mb-4">
        <header className="flex items-center">
            <Button className={'bg-blue-600 text-white'} active={active === 'all'} handleClick={()=>handleClick('all')}> All </Button>
            <Button className={'text-[#636AE8FF] bg-[#F2F2FDFF] hover:text-[#636AE8FF] hover:bg-[#F2F2FDFF]'} active={active === 'pending'} handleClick={()=>handleClick('pending')}> Pending </Button>
            <Button className={'bg-blue-600 text-white'} active={active === 'approved'} handleClick={()=>handleClick('approved')}> Approved </Button>
            <Button className={'bg-red-500 text-white'} active={active === 'declined'} handleClick={()=>handleClick('declined')}> Declined </Button>
        </header>
        <h2 className="text-xl my-3">{active.charAt(0).toUpperCase() + active.slice(1)}</h2>

       <div className="sm:grid grid-cols-2 gap-2">
        {
                useData.map((item, id) =>{
                    return <Company 
                        key={id}
                        name={item.businessName}
                        type={item.businessType}
                        marketingStrategy={item.marketingStrategies}
                        status={item.status}
                        rewards={item.rewards}
                        phone={item.contactInformation.phone}
                        email={item.contactInformation.email}
                    />
                })
        }
       </div>
    </div>
  )
}
/* Button */
// .button {
//       position: absolute; 
//       top: 52px; 
//       left: 222px; 
//       width: 120px; 
//       height: 36px; 
//       padding: 0 12px; 
//       display: flex; 
//       align-items: center; 
//       justify-content: center; 
//       font-family: Inter; 
//       font-size: 14px; 
//       line-height: 22px; 
//       font-weight: 400; 
//       color: #636AE8FF; 
//       background: #F2F2FDFF; 
//       opacity: 1; 
//       border: none; 
//       border-radius: 0px 0px 0px 0px; 
//       gap: 6px; 
//     }
//     .button .icon {
//       width: 16px; 
//       height: 16px; 
//       fill: #636AE8FF; 
//     }
//     /* Hover */
//     .button:hover {
//       color: #636AE8FF; 
//       background: #F2F2FDFF; 
//     }
//     /* Pressed */
//     .button:hover:active {
//       color: #636AE8FF; 
//       background: #F2F2FDFF; 
//     }
//     /* Disabled */
//     .button:disabled {
//       opacity: 0.4; 
//     }

export default Companies

//https://app.visily.ai/projects/a5d40815-3139-42a5-a53c-5a51d503a426/boards/1335377