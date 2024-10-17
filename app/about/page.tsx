import { Container } from "@/components/ui/container"

const about = () => {
  return (
    <Container className="mt-4 min-w-[40vw] min-h-fit border-2 border-grey-500 bg-white" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <header className="top-0 z-50 w-full border-b bg-custom-bg text-white min-h-[10%]">
        <p className="text-left text-xl font-bold p-2 ml-7">About Us</p>
      </header>
      <p className="min-w-full min-h-[90%] text-justify px-8 pt-4 pb-4">
        <b>Welcome to Docoaid</b>, your trusted partner in document authentication and legalization. We are a private company with a team of highly experienced agents who specialize in navigating the complex landscape of document verification, authentication, and legalization. With years of expertise in the industry, we have built a reputation for providing reliable, efficient, and secure services tailored to meet the diverse needs of our clients.
        <br></br>
        <br></br>
        At <b>Docoaid</b>, we understand that the right documentation is more than just paperwork—it is the key to unlocking opportunities, ensuring compliance, and safeguarding your personal and professional interests. Whether you are an individual looking for help with translation services, any kind of Notary services, need help with drafting a Power of Attorney, are not sure of how to do a new application for a visa or PCC, a business needing to legalize corporate documents, or an organization seeking to meet international regulatory standards, <b>Docoaid</b> is here to guide you every step of the way.
        <br></br>
        <br></br>
        <b>Why Proper Documentation Matters</b>
        <br></br>
        In today’s interconnected world, proper documentation is crucial. It serves as the foundation for legal recognition, the validation of identity, and the establishment of trust between parties. Whether you are applying for a visa, expanding your business abroad, or formalizing agreements, having the correct and authenticated documents is essential. Incorrect or missing documentation can lead to delays, legal complications, and missed opportunities.
        <br></br>
        <br></br>
        Our mission at <b>Docoaid</b> is to simplify the document authentication and legalization process for our clients. We offer end-to-end solutions that are designed to be fast, transparent, and hassle-free, so you can focus on what matters most to you. Our team is committed to delivering exceptional service with attention to detail, ensuring that your documents meet all necessary standards and requirements.
        <br></br>
        <br></br>
        With <b>Docoaid</b>, you can have peace of mind knowing that your documentation is in expert hands. Let us help you navigate the complexities of documentation with confidence and ease.
      </p>
    </Container>
  )
}

export default about
