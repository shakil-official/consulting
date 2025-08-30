"use client"

import React, { useMemo } from "react"

export default function OverallMaturity({ scores }) {
    const overall = useMemo(() => {
        const sum = scores.reduce((acc, s) => acc + (Number(s.weighted_average) || 0), 0)
        return (sum / scores.length).toFixed(2)   // sum ÷ 4
    }, [scores])

    return (
       <>
           <div className="flex items-center justify-center">
               <div className="inline-block border border-slate-300 rounded shadow">
                   <table className="border-collapse text-sm text-slate-700">
                       <tbody>
                       <tr>
                           <td className="px-4 py-3 font-semibold border-r border-slate-300 text-center">
                               Overall Maturity Score
                           </td>
                           <td className="px-4 py-3 text-center">{overall}</td>
                       </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </>
    )
}
