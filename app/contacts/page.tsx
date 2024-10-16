'use client'
import { Container } from "@/components/ui/container"
import { useState } from "react"

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send formData to an API or backend service
    console.log(formData)
    alert("Query submitted! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

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
      <div className="px-8 pt-4 pb-4">
        <h2 className="text-xl font-bold">Raise a Query</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Your Query</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md p-2"

              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </Container>
  )
}

export default Contacts
