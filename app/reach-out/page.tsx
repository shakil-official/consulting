"use client"

import { useState } from "react"
import { Header } from "@/components/header"

export default function ReachOut() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        company: "",
        country: "",
        description: "",
    })
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setResponse(null)

        try {
            const res = await fetch("https://shakil.rrbaghouse.com/api/v1/insert-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.role, // mapping example (your backend accepts phone, using it for role)
                    address: `${formData.company}, ${formData.country}`, // combine company + country as address
                    description: formData.description,
                    role: formData.role,
                    company: formData.company,
                    country: formData.country,
                }),
            })

            const data = await res.json()
            setResponse(data)
            if (data.success) {
                setFormData({
                    name: "",
                    email: "",
                    role: "",
                    company: "",
                    country: "",
                    description: "",
                })
            }
        } catch (error) {
            setResponse({ success: false, message: "Something went wrong. Please try again." })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
                    {/* Page Title */}
                    <h2 className="text-3xl font-bold text-center mb-3">Reach Out</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Ready to build a resilient future? Contact us today to discuss how Group Resilience can help your
                        organization prepare, respond, and transform.
                    </p>

                    {/* Response Message */}
                    {response && (
                        <div
                            className={`mb-4 p-3 rounded ${
                                response.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}
                        >
                            {response.message}
                        </div>
                    )}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Current Role / Title"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Organization / Company (optional)"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country / Region"
                            className="w-full border rounded px-3 py-2"
                        />

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows={4}
                            className="w-full border rounded px-3 py-2"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full  bg-springer-dark-blue hover:bg-springer-dark-blue-accent text-white py-3 rounded font-medium  transition"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
