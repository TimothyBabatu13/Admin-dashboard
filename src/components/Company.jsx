import Image from "next/image"
import { Button } from "./Companies"

const Company = ({ name, type, marketingStrategy, rewards, phone, email, status }) => {
  return (
    <div className="mb-7">
        <Image 
            width={160}
            height={134}
            className="rounded-[4px]"
            src={'/img1.jpg'}
        />
        <h1><span className=" font-bold">Name:</span> {name}</h1>
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
    </div>
  )
}

export default Company
