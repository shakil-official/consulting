import React from "react";

const data = {
    Risk: [
        {
            level: 1,
            descriptor:
                "Risk identification is informal and disconnected from resilience planning. Emerging risks are not monitored, responsibilities are unclear, and risk data is seldom used to guide actions.",
            action:
                "Establish basic risk identification processes, clarify responsibilities, and link risk activities to resilience planning.",
            support: [

            ],
        },
        {
            level: 2,
            descriptor:
                "Key risks are assessed periodically, with some emerging risks tracked and addressed. Risk ownership exists but accountability is inconsistent, and risk insights are occasionally used to improve resilience.",
            action:
                "Formalize periodic risk assessments, assign accountable owners, and begin integrating risk insights into resilience improvements.",
            support: [
                "ERM design, implementation",
                "Threat & Risk assessment",
                "Investigations",
                "Lessons learnt",
                "OSINT monitoring",
                "GSOC AI",
                "Stakeholder mapping",
                "Sites Mapping Application",
            ],
        },
        {
            level: 3,
            descriptor:
                "Risk assessments are systematic and organization-wide, directly shaping resilience priorities. Emerging risks are proactively monitored, ownership is clearly defined at all levels, and risk data is consistently analyzed to drive continuous improvement and informed decision-making.",
            action:
                "Implement systematic, organization-wide risk management with proactive monitoring, clear ownership, and continuous data-driven improvement.",
            support: [

            ],
        },
    ],
    Governance: [
        {
            level: 1,
            descriptor:
                "Governance is unclear or misaligned with business goals. Resilience efforts are reactive and inconsistently managed. Compliance is minimal, with incomplete documentation, and staff awareness is low across the organization.",
            action:
                "Define basic governance structure, assign roles, ensure minimal compliance, and raise staff awareness through initial training and communication.",
            support: [

            ],
        },
        {
            level: 2,
            descriptor:
                "Governance is aligned with business goals, and resilience is considered in strategic planning. Compliance is managed proactively, documentation is largely complete, and key staff are trained and aware of their roles.",
            action:
                "Align governance with business goals, formalize planning and documentation, assign accountability, and implement targeted training for key staff.",
            support: [
                "Governance design / review",
                "Team design",
                "Head hunting (team hiring)",
                "Background check (team vetting)",
                "Executive coaching",
            ],
        },
        {
            level: 3,
            descriptor:
                "Governance is fully aligned with business strategy, and resilience is embedded in planning and operations. Compliance is proactive and well-managed, with regularly updated plans. All staff receive ongoing training, with awareness consistently reinforced and monitored.",
            action:
                "Integrate resilience into strategic planning and operations, maintain proactive compliance and updated plans, and embed resilience awareness organization-wide through continuous training and monitoring.",
            support: [

            ],
        },
    ],
    Implementation: [
        {
            level: 1,
            descriptor:
                "Resilience is informal and reactive, with unclear roles, minimal planning, and little collaboration. Crisis response is unstructured and reactive. Training is rare, emergency procedures are ad hoc, and there are minimal BCP, crisis, IT recovery, or third-party resilience measures in place.",
            action:
                "Define resilience roles and responsibilities, develop basic plans for crisis and business continuity, initiate staff training, and establish formal emergency procedures.",
            support: [

            ],
        },
        {
            level: 2,
            descriptor:
                "Resilience roles and escalation paths are defined, with moderate cross-functional collaboration and awareness. Plans for emergency response, crisis management, and business continuity exist but are outdated, incomplete, or inconsistently applied. Training is occasional and role-specific. Some IT systems and third-party services have risk or recovery measures, but coverage and testing are limited.",
            action:
                "Update and formalize resilience plans, improve cross-functional collaboration, expand training programs to relevant staff, and begin testing IT recovery and third-party resilience measures.",
            support: [
                "Training",
                "Exercise",
                "Resilience AI chatbot 'Ask Richard'",
                "Business continuity planning",
                "Emergency response planning",
                "Third party resilience",
                "Crisis Management Framework and Plan",
                "Live crisis support / Emergency response support (live incidents)",
            ],
        },
        {
            level: 3,
            descriptor:
                "Resilience is embedded across the organization with clear roles, strong collaboration, and leadership support. All plans—emergency, crisis, continuity, IT—are comprehensive, regularly tested, and up to date. Training is ongoing, BIA guides recovery priorities, and third-party resilience is proactively managed through risk assessments and planning.",
            action:
                "Embed resilience into all operations with clear governance, maintain regularly tested and updated plans, ensure ongoing staff training, use BIA to prioritize recovery, and proactively manage third-party risks through continuous assessment.",
            support: [

            ],
        },
    ],
    Performance: [
        {
            level: 1,
            descriptor:
                "Senior leadership lacks clear accountability and support, with limited resources. Audits are informal or absent, documentation unmanaged, no KPIs are defined, and lessons learned are informal and rarely applied.",
            action:
                "Establish clear leadership accountability, secure basic resources, implement formal audits, assign document owners, define KPIs, and start documenting lessons learned to begin tracking and improving resilience.",
            support: [

            ],
        },
        {
            level: 2,
            descriptor:
                "Leadership accountability is defined with moderate commitment and some resource allocation. Formal audits occur, documentation is consistent, some KPIs exist but monitoring is inconsistent. Lessons learned are documented but improvements are sporadic.",
            action:
                "Strengthen leadership engagement, standardize audits and documentation updates, expand KPIs with regular monitoring, improve lessons learned application, and train teams to embed resilience practices.",
            support: [
                "Resilience KPIs",
                "Resilience maturity assessment",
                "Audit & Assurance",
                "Compliance with international standards (ISO 31000, 22301, 27001)",
                "Resilience certification (for organisations)",
                "Resilience certification (for people)",
            ],
        },
        {
            level: 3,
            descriptor:
                "Senior leadership is fully accountable, committed, and consistently supports resilience with sufficient resources. Integrated audits are in place, documentation is centrally managed, KPIs are clearly defined and regularly monitored, and lessons learned drive continuous improvement.",
            action:
                "Maintain strong leadership commitment, fully integrate audit outcomes, optimize KPIs for proactive management, embed continuous learning from lessons, and use data-driven insights to enhance resilience organization-wide.",
            support: [

            ],
        },
    ],
};

export default function ResilienceTable() {
    return (
        <>
            <div className="p-6">
                <div className="overflow-x-auto rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold bg-gray-100 px-4 py-2 border border-gray-300 rounded-t-lg text-center">
                        Maturity Development Companion with Relevant Services of Group Resilience
                    </h2>

                    <table className="w-full border-collapse table-fixed">
                        <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3 border w-[10%]">Maturity Level</th>
                            <th className="p-3 border w-[20%]">Maturity Descriptor</th>
                            <th className="p-3 border w-[30%]">Action to improve maturity level</th>
                            <th className="p-3 border w-[40%]">
                                Group Resilience Model designed to support you
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(data).map((category) => (
                            <React.Fragment key={category}>
                                {/* Category Header Row */}
                                <tr>
                                    <td colSpan={4} className="bg-gray-100 font-bold px-4 py-2 border">
                                        {category}
                                    </td>
                                </tr>

                                {/* Category Rows */}
                                {data[category].map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className={`${
                                            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-blue-50 transition`}
                                    >
                                        <td className="p-3 border w-[10%] font-semibold">{row.level}</td>
                                        <td className="p-3 border w-[15%] break-words">{row.descriptor}</td>
                                        <td className="p-3 border w-[20%] break-words">{row.action}</td>
                                        <td className="p-3 border w-[55%] break-words">
                                            <ul className="list-disc pl-5">
                                                {row.support.length > 0 ? (
                                                    row.support.map((item, i) => <li key={i}>{item}</li>)
                                                ) : (
                                                    <span className="text-gray-400 italic"></span>
                                                )}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    );
}
