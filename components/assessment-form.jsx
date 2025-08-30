"use client"

import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import RadarChartResult from "@/components/RadarChartResult";
import OverallMaturity from "@/components/OverallMaturity";
import MaturityTable from "@/components/MaturityTable";
import ResilienceTable from "@/components/ResilienceTable";

// Validation schemas
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
    const [assessmentQuestions, setAssessmentQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [assessmentResults, setAssessmentResults] = useState(null)


    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState(null)

    // Store grouped results by category after submit
    const [groupedResults, setGroupedResults] = useState([])

    // Fetch assessment questions from API on mount
    useEffect(() => {
        fetch("https://shakil.rrbaghouse.com/api/assessment-questions")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch assessment questions")
                return res.json()
            })
            .then((data) => {
                setAssessmentQuestions(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (step === 3) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [step])

    // Form hooks
    const {
        control: personalControl,
        handleSubmit: handlePersonalSubmit,
        formState: { errors: personalErrors },
        reset: resetPersonal,
    } = useForm({
        resolver: zodResolver(personalDetailsSchema),
    })

    const {
        control: assessmentControl,
        handleSubmit: handleAssessmentSubmit,
        formState: { errors: assessmentErrors },
        reset: resetAssessment,
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

    // Helper: group answers by category based on original questions
    function groupAnswersByCategory(questionsData, answers) {
        return questionsData.map((category) => {
            const categoryAnswers = answers.filter((ans) =>
                category.questions.some((q) => q.question_id === ans.question_id)
            )
            return {
                category_id: category.category_id,
                category: category.category,
                answers: categoryAnswers,
            }
        })
    }

    const onSubmitAssessment = async (data) => {
        setSubmitting(true)
        setSubmitError(null)

        try {
            // const formattedAnswers = Object.entries(data.answers).map(
            //     ([question_id, answer_id]) => ({
            //         question_id: Number(question_id),
            //         answer_id: Number(answer_id),
            //     })
            // )

            const formattedAnswers = Object.entries(data.answers).map(
                ([question_id, answer_id]) => {
                    const questionIdNum = Number(question_id)
                    // Find the question in assessmentQuestions
                    let categoryId = null
                    for (const cat of assessmentQuestions) {
                        const q = cat.questions.find((q) => q.question_id === questionIdNum)
                        if (q) {
                            categoryId = cat.category_id
                            break
                        }
                    }

                    return {
                        question_id: questionIdNum,
                        answer_id: Number(answer_id),
                        category_id: categoryId, // include category
                    }
                }
            )


            const response = await fetch("https://shakil.rrbaghouse.com/api/assessment-submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...personalDetails,
                    answers: formattedAnswers,
                }),
            })

            if (!response.ok) {
                const errData = await response.json()
                throw new Error(errData.message || "Failed to submit assessment")
            }

            // Assume backend returns submitted answers flat array (or you can reuse formattedAnswers)
            const resData = await response.json()

            // Use either backend response or local formattedAnswers to group by category
            // Change resData.answers below if your backend returns differently
            const answersToGroup = resData.answers || formattedAnswers

            const grouped = groupAnswersByCategory(assessmentQuestions, answersToGroup)

            // Save full API response with scores
            setAssessmentResults(resData)

            setGroupedResults(grouped);

            setStep(3)
        } catch (error) {
            console.error("Submit error:", error)
            setSubmitError(error.message)
        }

        setSubmitting(false)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="w-full max-w-3xl p-6">
                    <div className="space-y-6 animate-pulse">
                        {/* Header */}
                        <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto"></div>

                        {/* Question Blocks */}
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>

                        {/* Button Placeholder */}
                        <div className="h-12 bg-gray-200 rounded w-32 mx-auto"></div>
                    </div>
                </div>
            </div>

        )
    }

    if (error) {
        return (
            <div className="text-center py-10 text-red-600 font-semibold">
                {/*Error: {error}*/}
            </div>
        )
    }

    const resetAll = () => {
        setStep(1)
        setPersonalDetails(null)
        setGroupedResults([])
        resetPersonal()
        resetAssessment()
        setSubmitError(null)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4" style={{ marginTop : "40px"}}>
            {step === 1 && (
                <Card className="w-full max-w-2xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-springer-dark-blue">
                            Start Your Assessment
                        </CardTitle>
                        <p className="text-center text-gray-600">
                            Please provide your details to begin.
                        </p>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form
                            onSubmit={handlePersonalSubmit(onSubmitPersonalDetails)}
                            className="space-y-6"
                        >
                            <div>
                                <Label htmlFor="name">Name of Person</Label>
                                <Controller
                                    name="name"
                                    control={personalControl}
                                    render={({ field }) => (
                                        <Input id="name" {...field} className="mt-1" />
                                    )}
                                />
                                {personalErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {personalErrors.name.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="email">Email of Person</Label>
                                <Controller
                                    name="email"
                                    control={personalControl}
                                    render={({ field }) => (
                                        <Input id="email" type="email" {...field} className="mt-1" />
                                    )}
                                />
                                {personalErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {personalErrors.email.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="organizationName">Name of Organization</Label>
                                <Controller
                                    name="organizationName"
                                    control={personalControl}
                                    render={({ field }) => (
                                        <Input id="organizationName" {...field} className="mt-1" />
                                    )}
                                />
                                {personalErrors.organizationName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {personalErrors.organizationName.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="country">Country</Label>
                                <Controller
                                    name="country"
                                    control={personalControl}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                        >
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
                                {personalErrors.country && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {personalErrors.country.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label
                                    htmlFor="businessSector"
                                    className="flex items-center gap-2"
                                >
                                    Business Sector
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    e.g., Finance, Healthcare, Manufacturing, Technology
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Label>
                                <Controller
                                    name="businessSector"
                                    control={personalControl}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                        >
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
                                                <SelectItem value="logistics">Others</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {personalErrors.businessSector && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {personalErrors.businessSector.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="organizationSize">Size of Organization</Label>
                                <Controller
                                    name="organizationSize"
                                    control={personalControl}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                        >
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
                                    <p className="text-red-500 text-sm mt-1">
                                        {personalErrors.organizationSize.message}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-springer-dark-blue hover:bg-springer-dark-blue-accent"
                            >
                                Next: Start Assessment
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            {step === 2 && (
                <Card className="w-full max-w-3xl mx-auto shadow-lg mt-10">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-springer-dark-blue">
                            Resilience Maturity Assessment
                        </CardTitle>
                        <p className="text-center text-gray-600">
                            Please answer the following questions for each category.
                        </p>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form
                            onSubmit={handleAssessmentSubmit(onSubmitAssessment)}
                            className="space-y-8"
                        >
                            {assessmentQuestions.map((category, catIndex) => (
                                <div
                                    key={category.category_id}
                                    className="border-b pb-6 last:border-b-0 last:pb-0"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        {category.category}
                                    </h3>
                                    <div className="space-y-6">
                                        {category.questions.map((question, qIndex) => (
                                            <div
                                                key={question.question_id}
                                                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                                            >
                                                <Label className="text-lg font-medium text-gray-700 mb-3 block">
                                                    {qIndex + 1}. {question.text}
                                                </Label>
                                                <Controller
                                                    name={`answers.${question.question_id}`}
                                                    control={assessmentControl}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            value={field.value || ""}
                                                            className="space-y-2"
                                                        >
                                                            {question.options.map((option, optIndex) => (
                                                                <div
                                                                    key={`${question.question_id}-${option.answer_id}`}
                                                                    className="flex items-center space-x-2"
                                                                >
                                                                    <RadioGroupItem
                                                                        value={String(option.answer_id)}
                                                                        id={`q${question.question_id}-opt${optIndex}`}
                                                                    />
                                                                    <Label
                                                                        htmlFor={`q${question.question_id}-opt${optIndex}`}
                                                                        className="text-gray-700"
                                                                    >
                                                                        {option.text}
                                                                    </Label>
                                                                </div>
                                                            ))}
                                                        </RadioGroup>
                                                    )}
                                                />
                                                {assessmentErrors.answers?.[question.question_id] && (
                                                    <p className="text-red-500 text-sm mt-2">
                                                        {assessmentErrors.answers[question.question_id]?.message}
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
                                    disabled={submitting}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-springer-dark-blue hover:bg-springer-dark-blue-accent"
                                    disabled={submitting}
                                >
                                    {submitting ? "Submitting..." : "Submit Assessment"}
                                </Button>
                            </div>

                            {submitError && (
                                <p className="text-red-600 mt-2 font-semibold">{submitError}</p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            )}

            {step === 3 && (
                <Card className="w-full max-w-2.5 mx-auto shadow-lg p-6">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-springer-dark-blue text-center">
                            Maturity Assessment Feedback
                        </CardTitle>
                    </CardHeader>

                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 text-center">
                            Thank you for completing the resilience maturity assessment.
                        </p>

                        <OverallMaturity scores={assessmentResults.scores_by_category} />

                        {/* Radar chart showing category average scores */}
                        <RadarChartResult scores={assessmentResults.scores_by_category} />

                        <MaturityTable />

                        <div className="text-center mt-6">
                            <Button
                                onClick={resetAll}
                                className="bg-springer-dark-blue hover:bg-springer-dark-blue-accent"
                            >
                                Start New Assessment
                            </Button>
                        </div>

                        <ResilienceTable />

                        {/*<RadarChartResult scores={ [*/}
                        {/*    {*/}
                        {/*        "category_id": 3,*/}
                        {/*        "category_name": "Risk",*/}
                        {/*        "total_score": 22.5,*/}
                        {/*        "total_weight": 10.5,*/}
                        {/*        "weighted_average": 2.14*/}
                        {/*    },*/}
                        {/*    {*/}
                        {/*        "category_id": 4,*/}
                        {/*        "category_name": "Governance",*/}
                        {/*        "total_score": 25,*/}
                        {/*        "total_weight": 11,*/}
                        {/*        "weighted_average": 3.00*/}
                        {/*    },*/}
                        {/*    {*/}
                        {/*        "category_id": 5,*/}
                        {/*        "category_name": "Implementation",*/}
                        {/*        "total_score": 47,*/}
                        {/*        "total_weight": 23.5,*/}
                        {/*        "weighted_average": 1*/}
                        {/*    },*/}
                        {/*    {*/}
                        {/*        "category_id": 6,*/}
                        {/*        "category_name": "Performance",*/}
                        {/*        "total_score": 15,*/}
                        {/*        "total_weight": 7.5,*/}
                        {/*        "weighted_average": 2*/}
                        {/*    }*/}
                        {/*]} />*/}

                        {/*/!* Your detailed results list *!/*/}
                        {/*{groupedResults.map((category) => (*/}
                        {/*    <div*/}
                        {/*        key={category.category_id}*/}
                        {/*        className="border p-4 rounded-lg bg-gray-50"*/}
                        {/*    >*/}
                        {/*        <h3 className="text-2xl font-semibold mb-3">{category.category}</h3>*/}
                        {/*        <ul className="list-disc list-inside space-y-1">*/}
                        {/*            {category.answers.map(({ question_id, answer_id }) => {*/}
                        {/*                const question = assessmentQuestions*/}
                        {/*                    .find((cat) => cat.category_id === category.category_id)*/}
                        {/*                    ?.questions.find((q) => q.question_id === question_id)*/}

                        {/*                const answerOption = question?.options.find(*/}
                        {/*                    (opt) => opt.answer_id === answer_id*/}
                        {/*                )*/}

                        {/*                return (*/}
                        {/*                    <li key={question_id} className="text-gray-800">*/}
                        {/*                        <strong>{question?.text}:</strong> {answerOption?.text || "N/A"}*/}
                        {/*                    </li>*/}
                        {/*                )*/}
                        {/*            })}*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*))}*/}


                    </div>
                </Card>
            )}
        </div>
    )
}
