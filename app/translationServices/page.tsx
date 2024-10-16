import { Container } from "@/components/ui/container"

const translationServices = () => {
  return (
    <Container className="mt-4 min-w-[40vw] min-h-fit border-2 border-grey-500" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <header className="top-0 z-50 w-full border-b bg-custom-bg text-white min-h-[10%]">
        <p className="text-left text-xl font-bold p-2 ml-7">Document Translation Services</p>
      </header>
      <div className="min-w-full min-h-[90%] text-justify px-8 pt-4 pb-4 text-m">
        <p>
          At <b>Docoaid</b>, we offer comprehensive document translation services to help bridge language barriers and ensure your documents are accurately translated and fully understood. Whether for personal, legal, or business purposes, our team of experienced translators provides precise and certified translations in multiple languages, ensuring that every detail is preserved and correctly interpreted.
        </p>
        <br />
        <b>Our translation services cover a wide range of languages, including but not limited to:</b>
        <ul className="list-disc list-inside ml-4">
          <li>Punjabi to English</li>
          <li>Hindi to English</li>
          <li>Spanish to English</li>
          <li>Italian to English</li>
          <li>Portuguese to English</li>
          <li>And many more</li>
        </ul>
        <br />
        <b>What We Translate</b>
        <p>
          <b>Documentation:</b> From legal documents like contracts, affidavits, registries, and certificates, <b>Docoaid</b> offers accurate translation services that maintain the integrity and meaning of your original content. We understand the importance of precision in document translation, especially when it comes to legal and official documents where even minor errors can lead to misunderstandings or legal complications.
        </p>
        <br />
        <p>
          <b>WhatsApp Translations:</b> In today’s digital age, communication often takes place over messaging platforms like WhatsApp. For legal or immigration matters, the accurate translation of these conversations can be crucial. Whether you need to translate a chat for legal or immigration purposes, our team ensures that the tone, context, and details are preserved, providing you with a reliable translation that captures the essence of the original conversation.
        </p>
        <br />
        <b>Why Proper Translation Matters</b>
        <p>
          Accurate translation is essential to ensure that the meaning, intent, and the legal standing of your documents are preserved across languages. Incorrect translations can lead to significant misunderstandings, legal issues, and even the rejection of documents by official authorities. With <b>Docoaid</b>, you can trust that your documents are in expert hands. Our translators are not only fluent in the target languages but also knowledgeable about the cultural and legal nuances that can impact the translation process.
        </p>
        <br />
        <b>Why Choose Docoaid for Translation Services?</b>
        <ul className="list-disc list-inside ml-4">
          <li><b>Certified Translations:</b> We provide certified translations that are recognized by legal and official institutions, ensuring that your documents meet all necessary standards.</li>
          <li><b>Accuracy and Precision:</b> Our team is committed to delivering translations that are accurate, clear, and faithful to the original content, regardless of the complexity of the document.</li>
          <li><b>Fast Turnaround:</b> We understand the importance of time in documentation processes. Our efficient workflow ensures that you receive your translated documents promptly without compromising on quality.</li>
          <li><b>Confidentiality and Security:</b> We prioritize your privacy and the security of your documents. All translations are handled with the utmost confidentiality and professionalism.</li>
        </ul>
        <br />
        <p>
          At <b>Docoaid</b>, we are dedicated to making sure that language is never a barrier to your personal or professional goals. Whether you need to translate legal documents, business materials, or personal communications, we provide reliable and high-quality translation services tailored to your specific needs.
        </p>
      </div>
    </Container>
  )
}

export default translationServices
