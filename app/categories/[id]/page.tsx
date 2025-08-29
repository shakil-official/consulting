import {Header} from "@/components/header"
import {ChevronRight, FileText, Clock, Users} from "lucide-react"

import Link from "next/link"

interface SubCategory {
    id: number
    name: string
    description: string
}

interface CategoryData {
    icon: string
    letter: string
    title: string
    description: string
    examples: string[]
    color: string
    bgColor: string
    sub_category: SubCategory[]
}

export default async function CategoryPage({
                                               params,
                                           }: {
    params: { id: string }
}) {
    const res = await fetch(
        `https://shakil.rrbaghouse.com/api/categories?reason=1&id=${params.id}`,
        {cache: "no-store"}
    )
    const json = await res.json()

    if (!json.success || json.data.length === 0) {
        return (
            <>
                <Header/>
                <main
                    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-gray-100">
                        <div
                            className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileText className="w-12 h-12 text-gray-400"/>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Data Found</h2>
                        <p className="text-gray-500 max-w-md">
                            We couldn't find the category you're looking for. It may have been moved or doesn't exist.
                        </p>
                    </div>
                </main>
            </>
        )
    }

    const data: CategoryData = json.data[0]

    return (
        <>
            <Header/>
            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"/>
                    <div
                        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-48 translate-x-48 blur-3xl"/>
                    <div
                        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"/>

                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                            <span>Home</span>
                            <ChevronRight className="w-4 h-4"/>
                            <span><Link href='/#whatWeDoNow'>
                                Servies
                            </Link></span>
                            <ChevronRight className="w-4 h-4"/>
                            <span className="text-gray-900 font-medium">{data.title}</span>
                        </nav>

                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                            <div className="relative p-8 lg:p-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white bg-transparent bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60">
                                <div className="absolute inset-0 bg-pattern opacity-30"/>

                                <div className="relative z-10 flex items-start gap-6">
                                    <div className="flex-1">
                                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                            {data.title}
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 lg:p-12">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        Servies
                                    </h2>
                                    <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                                        {data.sub_category.length} Servies
                                    </div>
                                </div>

                                {data.sub_category.length === 0 ? (
                                    <div className="text-center py-16">
                                        <div
                                            className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FileText className="w-10 h-10 text-gray-400"/>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Servies</h3>
                                        <p className="text-gray-500">This category doesn't have Servies
                                            yet.</p>
                                    </div>
                                ) : (
                                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {data.sub_category.map((sub, index) => (
                                            <div
                                                key={sub.id}
                                                className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                            >
                                                <div
                                                    className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                                    {String(index + 1).padStart(2, '0')}
                                                </div>

                                                <div className="pr-8">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                        {sub.name}
                                                    </h3>
                                                    <div
                                                        className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
                                                        dangerouslySetInnerHTML={{__html: sub.description}}
                                                    />
                                                </div>

                                                <div
                                                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ChevronRight className="w-5 h-5 text-blue-600"/>
                                                </div>

                                                <div
                                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"/>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}