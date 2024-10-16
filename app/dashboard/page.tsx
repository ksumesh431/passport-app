
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Image from "next/image"
import Link from "next/link"
import { basePath } from '../../utils/config';

export default function Dashboard() {
  return (<Container className="mt-4 min-w-[55vw] ">
    <Card />
    <Container className=" min-w-full h-[50vh] px-0" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Container className="h-[80%]  min-w-full bg-no-repeat bg-center bg-cover bg-image" style={{ backgroundImage: `url(${basePath}/document_services_banner.jpg)`, backgroundSize: "cover" }}></Container>
      <Container className="min-w-full h-[20%]" style={{ paddingRight: 0, paddingLeft: 0 }}>
        <footer className="min-w-full h-full bg-custom-bg text-primary-foreground min-h-fit">
          <p className="m-2 mb-0text-3xl font-bold mt-0 p-2 pt-3 text-white"> Document Services</p>
          <p className="m-2 mt-0 p-2 text-white"> Notary, provincial, federal certification and embassy legalization services</p>
        </footer>
      </Container>
    </Container>
  </Container>
  )
}



export function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 p-1 ">
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className="text-wrap text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
          <Button className="text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
            <Image src={`${basePath}/hand_ico.png`} width={16} height={18} alt="Drawer" className="h-18 w-16 mb-2 " />
            NOTARY
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className="text-wrap text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
          <Button className="text-wrap text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
            <Image  src={`${basePath}/ico_2.png`} width={16} height={18} alt="Drawer" className="h-18 w-16 mb-2 " />
            EMBASSY SERVICES
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className="text-wrap text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
          <Button className="truncate text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
            <Image src={`${basePath}/ico_3.png`} width={16} height={18} alt="Drawer" className="h-18 w-16 mb-2 " />
            FEDERAL CERTIFICATION
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className="text-wrap text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
          <Button className="text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none">
            <Image src={`${basePath}/ico_4.png`} width={16} height={18} alt="Drawer" className="h-16 w-16 mb-2 " />
            PROVINCIAL
          </Button>
        </Link>
      </div>
    </div>
  );
}

