"use client"

import {useState} from "react"
import {Header} from "@/components/header";

export default function ReachOut() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        description: ""
    })
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
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
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            setResponse(data)
            if (data.success) {
                setFormData({name: "", email: "", phone: "", address: "", description: ""})
            }
        } catch (error) {
            setResponse({success: false, message: "Something went wrong. Please try again."})
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header/>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Reach Out to Us</h2>

                    {response && (
                        <div
                            className={`mb-4 p-3 rounded ${
                                response.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}
                        >
                            {response.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Your Address"
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
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
