"use client"

import type React from "react"
import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {CheckCircle2, Loader2} from "lucide-react"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"

export default function EngagementFormPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Form States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        company: "",
        country: "",
        expertise: [] as string[],
        partnership: [] as string[],
        consent: false as any,
        linkedin: "",      // optional
        resume: null as File | null,  // optional
    })

    const [open, setOpen] = useState(false)

    const expertiseList = [
        "Risk Assessment",
        "Emergency Response",
        "Crisis Management",
        "Business Continuity",
        "Digital Resilience",
        "Natural Catastrophe Emergency Response",
        "Climate Adaptation Plan",
        "Supply Chain Resilience",
        "Third Party Resilience",
        "Training & Exercises",
        "Stakeholder Conflict Management"
    ]

    const partnershipOptions = [
        "Information only",
        "Independent SME ready to work with us",
        "Commercial partners willing to work with us on specific missions",
        "Academics who want to support our movement",

        // "Contributor to Content",
        // "Mentorship Opportunities",
        // "Training and Workshop Facilitation",
        // "Research Collaboration",
        // "Advocacy and Policy Development",
        // "Networking and Community Building"
    ]

    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia (Czech Republic)",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini (fmr. Swaziland)",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine State",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];


    // Handle text input changes and file upload
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value, type, checked, files} = e.target
        if (type === "checkbox" && id === "consent") {
            setFormData(prev => ({...prev, consent: checked}))
        } else if (type === "file" && files) {
            setFormData(prev => ({...prev, resume: files[0]}))
        } else {
            setFormData(prev => ({...prev, [id]: value}))
        }
    }

    // Handle expertise checkbox changes
    const handleExpertiseChange = (item: string) => {
        setFormData(prev => ({
            ...prev,
            expertise: prev.expertise.includes(item)
                ? prev.expertise.filter(exp => exp !== item)
                : [...prev.expertise, item]
        }))
    }

    // Handle partnership checkbox changes
    const handlePartnershipChange = (item: string) => {
        setFormData(prev => ({
            ...prev,
            partnership: prev.partnership.includes(item)
                ? prev.partnership.filter(opt => opt !== item)
                : [...prev.partnership, item]
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                if (key === "resume" && value) {
                    data.append(key, value as File)
                } else if (Array.isArray(value)) {
                    value.forEach(v => data.append(key + "[]", v))
                } else {
                    data.append(key, value as string)
                }
            })

            for (let [key, value] of data.entries()) {
                console.log(key, value)
            }

            const response = await fetch("https://shakil.rrbaghouse.com/api/engagement", {
                method: "POST",

                body: data,
            })

            const result = await response.json()


            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    role: "",
                    company: "",
                    country: "",
                    expertise: [] as string[],
                    partnership: [] as string[],
                    consent: false as any,
                    linkedin: "",      // optional
                    resume: null as File | null,  // optional
                })
            } else if (response.status === 422 || response.status === 500) {
                // Show Laravel error message
                alert(result.error || result.message || "Something went wrong");
            } else {
                alert(result.message || "Error submitting form");
            }
        } catch (error) {
            console.error(error)
            alert("Failed to submit form")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <>
                <Header/>
                <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
                    <div className="w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl border text-center">
                        <CheckCircle2 className="h-20 w-20 text-springer-dark-blue mx-auto mb-6"/>
                        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                        <p className="text-lg text-gray-700 max-w-lg mx-auto">
                            Your form has been submitted successfully. We’ll review your details and get in touch soon.
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-8 bg-springer-dark-blue hover:bg-springer-dark-blue-accent text-white px-8 py-3 rounded-full"
                        >
                            Submit Another Response
                        </Button>
                    </div>
                </main>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <Header/>
            <main className="min-h-screen bg-gradient-to-b from-springer-dark-blue/5 to-white py-16 pt-28">
                <div className="container mx-auto px-4 lg:px-6 relative z-10">
                    {/* Form Header */}
                    <div className="text-center mb-14">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Partner with{" "}
                            <span
                                className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
                                Group Resilience
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Collaborate on projects, share expertise, and join our mission to build resilience across
                            the globe.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" value={formData.name} onChange={handleChange}
                                           placeholder="John Doe" required/>
                                </div>
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" value={formData.email} onChange={handleChange}
                                           placeholder="john@example.com" required/>
                                </div>
                                <div>
                                    <Label htmlFor="role">Current Role / Title</Label>
                                    <Input id="role" value={formData.role} onChange={handleChange}
                                           placeholder="Senior Risk Manager" required/>
                                </div>
                                <div>
                                    <Label htmlFor="company">Organization / Company</Label>
                                    <Input id="company" value={formData.company} onChange={handleChange}
                                           placeholder="ABC Corp"/>
                                </div>
                                <div>
                                    <label htmlFor="country" className="block mb-2">
                                        Country / Region
                                    </label>

                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className="w-full justify-between"
                                            >
                                                {formData.country || "Select a country"}
                                            </Button>
                                        </PopoverTrigger>

                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search country..."/>
                                                <CommandList>
                                                    <CommandEmpty>No country found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {countries.map((country) => (
                                                            <CommandItem
                                                                key={country}
                                                                value={country}
                                                                onSelect={(currentValue) => {
                                                                    setFormData({...formData, country: currentValue})
                                                                    setOpen(false)
                                                                }}
                                                            >
                                                                {country}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* LinkedIn */}
                                <div>
                                    <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                                    <Input id="linkedin" value={formData.linkedin} onChange={handleChange}
                                           placeholder="https://www.linkedin.com/in/username"/>
                                </div>
                                {/* Resume */}
                                <div>
                                    <Label htmlFor="resume">Upload Resume (Optional)</Label>
                                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange}/>
                                </div>
                            </div>

                            {/* Expertise */}
                            <div>
                                <Label className="block text-lg font-semibold mb-3">Area(s) of Expertise</Label>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-78 overflow-y-auto p-3 border rounded-xl bg-gray-50">
                                    {expertiseList.map((exp, idx) => (
                                        <label key={idx}
                                               className="flex items-center space-x-2 cursor-pointer hover:bg-white hover:shadow-sm px-2 py-1 rounded-md transition">
                                            <Checkbox
                                                id={`exp-${idx}`}
                                                checked={formData.expertise.includes(exp)}
                                                onCheckedChange={() => handleExpertiseChange(exp)}
                                            />
                                            <span>{exp}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Partnership */}
                            <div>
                                <Label className="block text-lg font-semibold mb-3">Partnership Capacity</Label>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-78 overflow-y-auto p-3 border rounded-xl bg-gray-50">
                                    {partnershipOptions.map((option, idx) => (
                                        <label key={idx}
                                               className="flex items-center space-x-2 cursor-pointer hover:bg-white hover:shadow-sm px-2 py-1 rounded-md transition">
                                            <Checkbox
                                                id={`partner-${idx}`}
                                                checked={formData.partnership.includes(option)}
                                                onCheckedChange={() => handlePartnershipChange(option)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Consent */}
                            <div className="flex items-start space-x-2">
                                <Checkbox id="consent" checked={formData.consent}
                                          onCheckedChange={(val) => setFormData(prev => ({
                                              ...prev,
                                              consent: Boolean(val)
                                          }))} required/>
                                <Label htmlFor="consent" className="text-sm text-gray-600 leading-snug">
                                    I consent to the storage and use of my data by Group Resilience for the purpose of
                                    professional engagement.
                                </Label>
                            </div>

                            {/* Submit */}
                            <div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-springer-dark-blue hover:bg-springer-dark-blue-accent text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin h-5 w-5 mr-2"/>
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
