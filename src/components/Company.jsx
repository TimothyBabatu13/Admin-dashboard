import Image from "next/image"
import { Button } from "./Companies"
import { useState } from "react"

const Company = ({ name, type, marketingStrategy, rewards, phone, email, status }) => {

  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(prev => !prev)
  }
  return (
    <div className="mb-9">
      <div className="flex items-center">
        <Image 
            width={160}
            height={134}
            className="rounded-[4px] mr-4"
            src={'/img1.jpg'}
        />
        <h1 className="font-bold">{false && <span className=" font-bold">Name:</span>} {name}</h1>
      </div>
        {
          isShown &&
          <>
            <h2><span className="font-bold">Type:</span> {type}</h2>
            <h2><span className="font-bold">Status:</span> {status}</h2>
            <h2><span className="font-bold">Marketing strategies:</span> {marketingStrategy}</h2>
            {rewards && <h2><span className="font-bold">Rewards:</span> {rewards}</h2>}
            {phone && <h2><span className="font-bold">Phone number:</span> {phone}</h2>}
            {email && <h2><span className="font-bold">Email:</span> {email}</h2>}
            <div className="mt-2">
              <Button className={'bg-blue-600 text-white'}> Approve </Button>
              <Button className={'bg-red-500 text-white'}> Decline </Button>
            </div>
          </>
        }
     
      <Button handleClick={handleShow} className={'text-[#636AE8FF] bg-[#F2F2FDFF] mt-2 flex mx-auto sm:mx-0'}>{isShown ? 'Hide Details' : 'Show Details'}</Button>
    </div>
  )
}

export default Company
