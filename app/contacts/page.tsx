'use client'
import { Container } from "@/components/ui/container"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const payload = {
      name: formData.name,
      email: formData.email,
      query: formData.message,
    }

    try {
      const response = await fetch("https://nowk6gpjo9.execute-api.ca-central-1.amazonaws.com/prod/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      alert("Query submitted! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Failed to submit your query. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container className="mt-4 min-w-[40vw] min-h-fit border-2 border-grey-500 bg-white" style={{ paddingRight: 0, paddingLeft: 0 }}>
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
              className="w-full border rounded-md p-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={isSubmitting}
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
              className="w-full border rounded-md p-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Your Query</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md p-2 min-h-[100px] disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={isSubmitting}
            />
          </div>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
          >
            {isSubmitting ? (
              <>
                <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </Container>
  )
}

export default Contacts