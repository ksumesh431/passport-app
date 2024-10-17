
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Image from "next/image"
import Link from "next/link"
import { basePath } from '../../utils/config';

export default function Dashboard() {
  return (<Container className="mt-10 min-w-[80vw] min-h-[90vh]">
    <Card />
    <Container className=" min-w-full h-[50vh] px-0" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Container className="h-[120%]  min-w-full bg-no-repeat bg-center bg-cover bg-image" style={{ backgroundImage: `url(${basePath}/document_services_banner.jpg)`, backgroundSize: "cover" }}></Container>
      <Container className="min-w-full bg-custom-bg  min-h-[20%] center-items" style={{ paddingRight: 0, paddingLeft: 0 }}>
        <Footer />
      </Container>
    </Container>
  </Container>
  )
}

const LinkClassName = "text-wrap text-sm w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none"
const ButtonClassName = "text-lg w-full h-full bg-custom-bg text-white flex flex-col items-center hover:bg-[#778899] hover:underline  transition-colors duration-0 rounded-none"
const ButtonIconClass = "h-26 w-auto mb-2"

export function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 p-1 ">
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className={LinkClassName}>
          <Button className={ButtonClassName}>
            <Image src={`${basePath}/hand_ico.png`} width={69} height={80} alt="Drawer" className={ButtonIconClass} />
            NOTARY
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className={LinkClassName}>
          <Button className={ButtonClassName}>
            <Image src={`${basePath}/ico_2.png`} width={69} height={80} alt="Drawer" className={ButtonIconClass} />
            EMBASSY SERVICES
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className={LinkClassName}>
          <Button className={ButtonClassName}>
            <Image src={`${basePath}/ico_3.png`} width={69} height={80} alt="Drawer" className={ButtonIconClass} />
            FEDERAL CERTIFICATION
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center flex-1 ">
        <Link href="/about" className={LinkClassName}>
          <Button className={ButtonClassName}>
            <Image src={`${basePath}/ico_4.png`} width={69} height={80} alt="Drawer" className={ButtonIconClass} />
            PROVINCIAL
          </Button>
        </Link>
      </div>
    </div>
  );
}



export const Footer = () => {
  return (
    <footer className="pt-0 ">
      <div className="max-w-screen-xl mx-auto px-4 text-white text-lg md:px-8">
        <div className=" py-10 md:text-center">
          <p>© 2024 Docoaid Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}