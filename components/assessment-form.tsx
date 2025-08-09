"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { assessmentQuestions } from "@/lib/assessment-questions"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define schemas for form validation
const personalDetailsSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    organizationName: z.string().min(1, "Organization name is required"),
    country: z.string().min(1, "Country is required"),
    businessSector: z.string().min(1, "Business sector is required"),
    organizationSize: z.string().min(1, "Organization size is required"),
})

const assessmentSchema = z.object({
    answers: z.record(z.string(), z.string().min(1, "Please select an option")),
})

export function AssessmentForm() {
    const [step, setStep] = useState(1)
    const [personalDetails, setPersonalDetails] = useState(null)
    const [assessmentResults, setAssessmentResults] = useState(null)

    const {
        control: personalControl,
        handleSubmit: handlePersonalSubmit,
        formState: { errors: personalErrors },
    } = useForm({
        resolver: zodResolver(personalDetailsSchema),
    })

    const {
        control: assessmentControl,
        handleSubmit: handleAssessmentSubmit,
        formState: { errors: assessmentErrors },
    } = useForm({
        resolver: zodResolver(assessmentSchema),
        defaultValues: {
            answers: {},
        },
    })

    const onSubmitPersonalDetails = (data) => {
        setPersonalDetails(data)
        setStep(2)
    }

    const onSubmitAssessment = (data) => {
        setAssessmentResults(data.answers)
        setStep(3)
        // In a real application, you would send this data to a backend
        console.log("Personal Details:", personalDetails)
        console.log("Assessment Answers:", data.answers)
    }

    const renderStep1 = () => (
        <Card className="w-full max-w-2xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-springer-dark-blue">Start Your Assessment</CardTitle>
                <p className="text-center text-gray-600">Please provide your details to begin.</p>
            </CardHeader>
            <CardContent className="p-6">
                <form onSubmit={handlePersonalSubmit(onSubmitPersonalDetails)} className="space-y-6">
                    <div>
                        <Label htmlFor="name">Name of Person</Label>
                        <Controller
                            name="name"
                            control={personalControl}
                            render={({ field }) => <Input id="name" {...field} className="mt-1" />}
                        />
                        {personalErrors.name && <p className="text-red-500 text-sm mt-1">{personalErrors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="email">Email of Person</Label>
                        <Controller
                            name="email"
                            control={personalControl}
                            render={({ field }) => <Input id="email" type="email" {...field} className="mt-1" />}
                        />
                        {personalErrors.email && <p className="text-red-500 text-sm mt-1">{personalErrors.email.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="organizationName">Name of Organization</Label>
                        <Controller
                            name="organizationName"
                            control={personalControl}
                            render={({ field }) => <Input id="organizationName" {...field} className="mt-1" />}
                        />
                        {personalErrors.organizationName && (
                            <p className="text-red-500 text-sm mt-1">{personalErrors.organizationName.message}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="country">Country</Label>
                        <Controller
                            name="country"
                            control={personalControl}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Select your country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="usa">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="canada">Canada</SelectItem>
                                        <SelectItem value="australia">Australia</SelectItem>
                                        <SelectItem value="germany">Germany</SelectItem>
                                        <SelectItem value="singapore">Singapore</SelectItem>
                                        <SelectItem value="brazil">Brazil</SelectItem>
                                        <SelectItem value="india">India</SelectItem>
                                        <SelectItem value="japan">Japan</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {personalErrors.country && <p className="text-red-500 text-sm mt-1">{personalErrors.country.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="businessSector" className="flex items-center gap-2">
                            Business Sector
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>e.g., Finance, Healthcare, Manufacturing, Technology</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Label>
                        <Controller
                            name="businessSector"
                            control={personalControl}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Select your business sector" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="finance">Finance</SelectItem>
                                        <SelectItem value="healthcare">Healthcare</SelectItem>
                                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                        <SelectItem value="technology">Technology</SelectItem>
                                        <SelectItem value="retail">Retail</SelectItem>
                                        <SelectItem value="energy">Energy</SelectItem>
                                        <SelectItem value="government">Government</SelectItem>
                                        <SelectItem value="logistics">Logistics</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {personalErrors.businessSector && (
                            <p className="text-red-500 text-sm mt-1">{personalErrors.businessSector.message}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="organizationSize">Size of Organization</Label>
                        <Controller
                            name="organizationSize"
                            control={personalControl}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Select organization size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-50">1-50 employees</SelectItem>
                                        <SelectItem value="51-200">51-200 employees</SelectItem>
                                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                                        <SelectItem value="1001-5000">1001-5000 employees</SelectItem>
                                        <SelectItem value="5000+">5000+ employees</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {personalErrors.organizationSize && (
                            <p className="text-red-500 text-sm mt-1">{personalErrors.organizationSize.message}</p>
                        )}
                    </div>
                    <Button type="submit" className="w-full bg-springer-dark-blue hover:bg-springer-dark-blue-accent">
                        Next: Start Assessment
                    </Button>
                </form>
            </CardContent>
        </Card>
    )

    const renderStep2 = () => (
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-springer-dark-blue">
                    Resilience Maturity Assessment
                </CardTitle>
                <p className="text-center text-gray-600">Please answer the following questions for each category.</p>
            </CardHeader>
            <CardContent className="p-6">
                <form onSubmit={handleAssessmentSubmit(onSubmitAssessment)} className="space-y-8">
                    {assessmentQuestions.map((category, catIndex) => (
                        <div key={catIndex} className="border-b pb-6 last:border-b-0 last:pb-0">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                            <div className="space-y-6">
                                {category.questions.map((question, qIndex) => (
                                    <div key={question.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <Label className="text-lg font-medium text-gray-700 mb-3 block">
                                            {qIndex + 1}. {question.text}
                                        </Label>
                                        <Controller
                                            name={`answers.${question.id}`}
                                            control={assessmentControl}
                                            render={({ field }) => (
                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                                    {question.options.map((option) => (
                                                        <div key={option.value} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                                                            <Label htmlFor={`${question.id}-${option.value}`} className="text-gray-700">
                                                                {option.text}
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            )}
                                        />
                                        {assessmentErrors.answers?.[question.id] && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {assessmentErrors.answers[question.id].message as string}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-8">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="border-springer-dark-blue text-springer-dark-blue hover:bg-springer-dark-blue/10"
                        >
                            Back
                        </Button>
                        <Button type="submit" className="bg-springer-dark-blue hover:bg-springer-dark-blue-accent">
                            Submit Assessment
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )

    const renderStep3 = () => (
        <Card className="w-full max-w-2xl mx-auto shadow-lg text-center">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-springer-dark-blue">Assessment Complete!</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                <p className="text-lg text-gray-700">Thank you for completing the resilience maturity assessment.</p>
                <p className="text-md text-gray-600">
                    We have received your responses and will be in touch shortly with your personalized insights and
                    recommendations.
                </p>
                <Button
                    onClick={() => {
                        setStep(1)
                        setPersonalDetails(null)
                        setAssessmentResults(null)
                        personalControl._reset()
                        assessmentControl._reset()
                    }}
                    className="bg-springer-dark-blue hover:bg-springer-dark-blue-accent mt-6"
                >
                    Start New Assessment
                </Button>
            </CardContent>
        </Card>
    )

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
        </div>
    )
}
