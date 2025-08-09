export const assessmentQuestions = [
    {
        category: "Organizational Structure & Governance",
        questions: [
            {
                id: "q1",
                text: "Does your organization have a clearly defined resilience strategy and governance framework?",
                options: [
                    { value: "1", text: "No, we lack a formal strategy." },
                    { value: "2", text: "Partially, some elements are in place but not fully integrated." },
                    { value: "3", text: "Yes, we have a defined strategy and governance, but it needs refinement." },
                    { value: "4", text: "Yes, we have a robust, well-integrated strategy and governance framework." },
                ],
            },
            {
                id: "q2",
                text: "How frequently is your resilience strategy reviewed and updated?",
                options: [
                    { value: "1", text: "Never or rarely." },
                    { value: "2", text: "Annually or when major incidents occur." },
                    { value: "3", text: "Bi-annually or in response to significant changes in the threat landscape." },
                    { value: "4", text: "Continuously, with regular reviews and adaptive adjustments." },
                ],
            },
        ],
    },
    {
        category: "Risk Management & Assessment",
        questions: [
            {
                id: "q3",
                text: "How comprehensive is your organization's risk identification process?",
                options: [
                    { value: "1", text: "Limited to obvious or past risks." },
                    { value: "2", text: "Covers major operational and financial risks." },
                    { value: "3", text: "Includes a broad range of strategic, operational, and emerging risks." },
                    { value: "4", text: "Holistic, incorporating foresight, scenario planning, and external intelligence." },
                ],
            },
            {
                id: "q4",
                text: "Are risk assessments regularly conducted across all critical business functions?",
                options: [
                    { value: "1", text: "No, or only on an ad-hoc basis." },
                    { value: "2", text: "Yes, for some critical functions, but not consistently." },
                    { value: "3", text: "Yes, regularly for most critical functions, with documented findings." },
                    { value: "4", text: "Yes, systematically across all critical functions, with integrated reporting." },
                ],
            },
        ],
    },
    {
        category: "Crisis Management & Response",
        questions: [
            {
                id: "q5",
                text: "Does your organization have a formal crisis management plan?",
                options: [
                    { value: "1", text: "No, we rely on ad-hoc responses." },
                    { value: "2", text: "Yes, a basic plan exists but is not regularly tested." },
                    { value: "3", text: "Yes, a comprehensive plan is in place and periodically tested." },
                    { value: "4", text: "Yes, a dynamic, well-rehearsed plan with clear roles and responsibilities." },
                ],
            },
            {
                id: "q6",
                text: "How often are crisis management teams trained and exercised?",
                options: [
                    { value: "1", text: "Never or rarely." },
                    { value: "2", text: "Annually, with tabletop exercises." },
                    { value: "3", text: "Bi-annually, with realistic simulations and post-exercise reviews." },
                    {
                        value: "4",
                        text: "Regularly, with diverse scenarios, involving cross-functional teams and external partners.",
                    },
                ],
            },
        ],
    },
    {
        category: "Business Continuity & Operational Resilience",
        questions: [
            {
                id: "q7",
                text: "Are Business Continuity Plans (BCPs) developed and maintained for critical operations?",
                options: [
                    { value: "1", text: "No, or only for a few isolated processes." },
                    { value: "2", text: "Yes, for some critical operations, but not fully integrated." },
                    { value: "3", text: "Yes, comprehensive BCPs are in place for most critical operations." },
                    { value: "4", text: "Yes, BCPs are fully integrated, regularly tested, and cover all critical operations." },
                ],
            },
            {
                id: "q8",
                text: "How effectively does your organization manage supply chain disruptions?",
                options: [
                    { value: "1", text: "Reactively, with significant impact on operations." },
                    { value: "2", text: "Some mitigation strategies are in place, but vulnerabilities remain." },
                    { value: "3", text: "Proactively, with diversified suppliers and contingency plans." },
                    {
                        value: "4",
                        text: "Highly resilient, with real-time monitoring, alternative sourcing, and strong supplier relationships.",
                    },
                ],
            },
        ],
    },
    {
        category: "Digital & Cyber Resilience",
        questions: [
            {
                id: "q9",
                text: "How mature is your organization's cybersecurity posture?",
                options: [
                    { value: "1", text: "Basic, with minimal protective measures." },
                    { value: "2", text: "Standard, with common security controls implemented." },
                    { value: "3", text: "Advanced, with proactive threat intelligence and incident response capabilities." },
                    {
                        value: "4",
                        text: "Leading, with adaptive security architecture, continuous monitoring, and threat hunting.",
                    },
                ],
            },
            {
                id: "q10",
                text: "Are data backup and recovery procedures regularly tested and validated?",
                options: [
                    { value: "1", text: "No, or testing is infrequent and informal." },
                    { value: "2", text: "Yes, backups are performed, but recovery is not consistently tested." },
                    { value: "3", text: "Yes, backups and recovery procedures are regularly tested and documented." },
                    { value: "4", text: "Yes, automated, frequently tested, and validated with rapid recovery objectives." },
                ],
            },
        ],
    },
]
