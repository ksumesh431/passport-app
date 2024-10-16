import { Container } from "@/components/ui/container"

const contacts = () => {
  return (
    <Container className="mt-4 min-w-[40vw] min-h-fit border-2 border-grey-500" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <header className="top-0 z-50 w-full border-b bg-custom-bg text-white min-h-[10%]">
        <p className="text-left text-xl font-bold p-2 ml-7">Contacts</p>
      </header>
      <div className="min-w-full min-h-[90%] text-justify px-8 pt-4 pb-4 text-l">
        <p className="text-wrap break-all">
          <b>DOCUMENT SERVICES – ONTARIO</b>
        </p>
        <p>Phone: 437-350-2555</p>
        <p>Email: info@docoaid.com</p>
      </div>
    </Container>
  )
}

export default contacts
