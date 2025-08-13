let activeProgram = $state({});
let activeCourse = $state({});
const allPrograms = $state([
    {
        id: 'suite',
        text: 'ZagSafe Training Suite',
        courses: [
            {
                id: 'suite-start',
                title: 'Program 1: ZagSafe START',
                description: [
                    "ZagSafe START is an essential introductory training program designed for individuals new to the field of workplace health and safety (H&S)",
                    "This course provides a strong foundation in risk awareness, New Zealand legislative frameworks, and basic safety responsibilities. Learners gain the knowledge and confidence to contribute to safer workplaces across all industries."
                ],
                duration: '3 days',
                course: [
                    "Introduction to Occupational Health and Safety (OHS)",
                    "Worker Rights and Responsibilities",
                    "Basic Risk Management",
                    "Hazard Identification and Reporting",
                    "Emergency Preparedness Basics",
                    "Common Workplace Hazards",
                    "Basic Incident Reporting and Investigation",
                    "Mental Health and Well-being Awareness",
                    "OHS Communication and Safety Culture",
                    "Career Pathways in Health and Safety"
                ]
            },
            {
                id: 'suite-pro',
                title: 'Program 2: ZagSafe PRO+',
                description: [
                    "ZagSafe PRO+ is a career development program designed for current health and safety officers and practicioners seeking to enhance their leadership, audit, and risk management competencies.",
                    "This program prepares its participants to lead robust safety systems, conduct investigations, and drive compliance through practical tools and real-life applications."
                ],
                duration: '5 days',
                course: [
                    "Legal Frameworks - HSW Act 2015, ISO 45001:2018",
                    "Advanced Risk Assessment Tools",
                    "Permit To Work System",
                    "Incident Investigation using the ICAM Principle",
                    "Health Monitoring and Well-being Systems",
                    "Contractor Safety Management",
                    "Auditing and Reporting",
                    "Workplace Safety Leadership",
                    "Cultural Safety and Diversity in Health and Safety",
                    "Digital Tools for Safety Management"
                ]
            },
            {
                id: 'suite-task',
                title: 'Program 3: ZagSafe TASK+',
                description: [
                    "ZagSafe TASK+ delivers critical task-specific health and safety training tailored for workers in high-risk environments.",
                    "It combines intensive hands-on training with regulatory knowledge to ensure competence in performing hazardous work safely, legally, and effectively."
                ],
                duration: '5 days',
                course: [
                    "Understanding High-Risk Work",
                    "Job Safety Analysis (JSA) and Take-5 Process",
                    "Permit To Work System",
                    "Working at Heights",
                    "Confined Space Entry Procedures",
                    "Hot Work Safety and Fire Watch",
                    "Lockout/Tag Out Procedures",
                    "Respiratory and Chemical Safety",
                    "Real-Life Case Studies of Accidents",
                    "Emergency Drills and Equipment Handling"
                ]
            }
        ]
    },
    {
        id: 'focus',
        text: 'ZagSafe Focus Series',
        courses: [
            {
                id: "induct",
                title: "INDUCT+",
                description: [
                    "This course introduces new workers to workplace safety expectations, site-specific hazards, and key responsibilities under the Health and Safety Work Act 2015.",
                    "Participants will learn how to identify hazards, report incidents, and participate in creating a safe work environment from day one."
                ],
                outcome: "Participants receive a Safety Induction Certificate."
            },
            {
                id: "toolbox",
                title: "TOOLBOX+",
                description: [
                    "This module teaches supervisors, team leads, and workers how to conduct impactful toolbox meetings that engage teams and promote daily safety awareness.",
                    "Participants will explore communication techniques, hazard updates, and how to document toolbox outcomes."
                ],
                outcome: "Learners gain practical skills to lead or contribute to toolbox talks confidently."
            },
            {
                id: "audit",
                title: "AUDIT+",
                description: [
                    "A short course covering the basics of conducting internal Health and Safety audits.",
                    "Trainees will learn how to use checklists, collect evidence, and report findings aligned with ISO 45001 and company requirements."
                ],
                outcome: "Participants become competent in performing basic site or system audits."
            },
            {
                id: "investigate",
                title: "INVESTIGATE+",
                description: [
                    "This session introduces the ICAM methodology, helping participants understand the process of identifying root causes, gathering evidence, and preparing reports following incidents or near misses."
                ],
                outcome: "Learners are equipped to assist or lead Level 1 investigations using ICAM principles."
            },
            {
                id: "lead",
                title: "LEAD+",
                description: [
                    "A focused module on influcencing safety culture through leadership.",
                    "Learners explore leadership styles, responsibilities, and practical strategies to promote safe behaviour across teams."
                ],
                outcome: "Learners receive a Certificate of Participation in Safety Leadership and Influence Techniques."
            },
            {
                id: "permit",
                title: "PERMIT+",
                description: [
                    "This course outlines the roles and responsibilities of a Permit Issuer, including types of permits (hot work, height work, confined space), risk controls, and sign-off processes."
                ],
                outcome: "Participants receive a Competency Certificate in issuing permits to work under supervision or company protocols."
            },
            {
                id: "risk",
                title: "RISK+",
                description: [
                    "This module introduces the ISO 31000 risk management process, covering hazard identification, risk assessment matrices, and control strategies.",
                    "It links directly to workplace applications in various industries."
                ],
                outcome: "Participants understand how to assess and manage operational risks effectively."
            },
            {
                id: "jsa",
                title: "JSA+",
                description: [
                    "Participants learn how to prepare, review, and apply Job Safety Analyses or Safe Work Method Statements (SWMS) to ensure tasks are planned and executed safely."
                ],
                outcome: "Participants receive a Certificate of Capability in writing and reviewing JSAs for routine and high-risk jobs."
            },
            {
                id: "heights",
                title: "HEIGHTS+",
                description: [
                    "A practical overview of fall prevention, harness use, and controls related to elevated work.",
                    "Ideal for workers who perform non-rigging height tasks under supervision."
                ],
                outcome: "Participants understand basic height safety principles and equipment use."
            },
            {
                id: "isolate",
                title: "ISOLATE+",
                description: [
                    "This module focuses on identifying hazardous energies and implementing isolation procedures.",
                    "Includes lockout/tagout systems and risk scenarios."
                ],
                outcome: "Workers gain awareness of LOTO systems and their role in preventing unintended energisation."
            },
            {
                id: "chem",
                title: "CHEM+",
                description: [
                    "This module covers safe handling, storage, and identification of hazardous substances in the workplace (HSNO/GHS), including SDS use and emergency procedures."
                ],
                outcome: "Participants receive a Certificate in Basic Chemical Safety Awareness and Legal Responsibilities."
            },
            {
                id: "fire",
                title: "FIRE+",
                description: [
                    "Participants gain knowledge on fire prevention, extinguisher use, evacuation procedures, and emergency roles.",
                    "This session includes practical fire scenario discussions."
                ],
                outcome: "Participants receive a Certificate in Basic Fire Safety Awareness suitable for general workplaces."
            },
            {
                id: "warden",
                title: "WARDEN+",
                description: [
                    "This course prepares employees to act as fire wardens or floor marshals, covering emergency roles, alarm response, evacuation leadership, and post-incident reporting.",
                    "It links directly to workplace applications in various industries."
                ],
                outcome: "Participants receive a Fire Warden Certificate and readiness to serve in emergency teams."
            },
            {
                id: "prep",
                title: "PREP+",
                description: [
                    "This module teaches planning and response strategies for various emergencies including earthquakes, chemical spills, and active threats.",
                    "Participants learn the key elements of business continuity and response coordination."
                ],
                outcome: "Participants receive an Awareness Certificate in emergency response and preparedness planning."
            },
            {
                id: "hsr",
                title: "HSR+",
                description: [
                    "This course introduces the key roles, rights, and responsibilities of Health and Safety Representatives under the Health and Safety at Work Act (2015).",
                    "It empowers HSRs or elected worker representatives to actively contribute to workplace safety through consultation, issue resolution, and proactive communication with management.",
                    "Participants will understand how to use their powers effectively, escalate concerns, and support positive safety culture.",
                    "This course is ideal for both newly-appointed HSRs and team members interested in becoming one."
                ],
                outcome: "Participants receive a Certificate of Participation as HSR Awareness Training, enhancing their readiness to act in the role with confidence and understanding of their legal standing."
            },
            {
                id: "human",
                title: "HUMAN+",
                description: [
                    "This course introduces participants to the science of human factors, highlighting how fatigue, distraction, stress, communication failures, and decision-making under pressure can lead to incidents.",
                    "Based on the internationally-recognized \"Dirty Dozen\" model, learners will explore how to identify and control human risk errors in their own roles and workplaces.",
                    "This course is ideal for frontline workers, supervisors, and anyone operating in high-risk, high-pressure environments."
                ],
                outcome: "Participants receive a Certificate of Awareness in Human Factors, and an enhanced ability to recognize and manage human error contributors in daily tasks."
            },
        ]
    },
    {
        id: 'global',
        text: 'ZagSafe Global Series',
        courses: [
            {
                id: "facilitation",
                title: "Facilitation PRO+",
                heading: "Mastering Adult Training & Training Delivery",
                description: [
                    "This is a professional program designed for trainers, educators, and assessors focused on adult learning principles, facilitation strategies, learner engagement, and assessment moderation."
                ],
                outcome: "Train The Trainer Certificate | Trainer Portfolio | Digital Badge"
            },
            {
                id: "investigation",
                title: "Incident Investigation PRO+",
                heading: "Incident Investigation Mastery Program",
                description: [
                    "This is a professional program designed for trainers, educators, and assessors focused on adult learning principles, facilitation strategies, learner engagement, and assessment moderation."
                ],
                outcome: "Incident Investigation Certificate | Incident Report Template | Role-Play Simulation"
            },
            {
                id: "risk360",
                title: "RISK360",
                subtitle: "Risk Management in Practice",
                heading: "Srategic and Operational Risk Management Frameworks",
                description: [
                    "This program focuses on risk assessment, controls, and mitigation planning based on ISO 31000, suited for managers, consultants, and auditors.",
                    "Includes enterprise and operational risk analysis."
                ],
                outcome: "Risk Professional Certificate | Risk Matrix Tool | Risk Register Templates"
            },
            {
                id: "oshx",
                title: "OHSX",
                subtitle: "Occupational Health & Safety General Certificate",
                heading: "Comprehensive Workplace Health and Safety Management",
                description: [
                    "This program is ideal for international workers and professionals seeking general H&S knowledge aligned with global standards and WHO/ILO guidelines.",
                    "This program covers hazard control, safety systems, wellbeing, and safety culture."
                ],
                outcome: "General OHS Certificate | CPD Recognition | Safety Toolkit"
            },
            {
                id: "leadsafe",
                title: "LEADSAFE",
                subtitle: "Safety Leadership and Governance",
                heading: "Building Strategic Safety Leadership at All Levels",
                description: [
                    "Designed for directors, managers, and team leaders, this training explores leadership styles, governance roles, KPI setting, and building high-reliability organizations."
                ],
                outcome: "Safety Leadership Certificate | Safety Governance Plan | Self-Assessment Tool"
            },
            {
                id: "enviro360",
                title: "ENVIRO360",
                subtitle: "Sustainability and Environmental Management",
                heading: "Driving ESG, Climate Action, and Resource Responsibility",
                description: [
                    "Participants learn principles of sustainable operations, environmental impact reduction, and global risk management frameworks like ISO 14001, GRI, and SDGs."
                ],
                outcome: "Sustainability Leader Certificate | Action Planning Tool | ESG Awareness Resource"
            },
            {
                id: "aviation",
                title: "AVIATION SAFE+",
                heading: "Aviation Safety Management Systems (SMS) Training",
                description: [
                    "Tailored for airline, airport, and MRO professionals, this course aligns with ICAO Annex 19, covering SMS pillars, safety reporting, hazard controls, and emergency response in aviation."
                ],
                outcome: "Aviation Safety Certificate | ICAO/CAA Aligned | SMS Implementation Tool"
            },
            {
                id: "aviationlead",
                title: "AVIATION LEAD+",
                heading: "Aviation Leadership and Safety Culture Development",
                description: [
                    "This course builds leadership capacity among aviation professionals, focusing on just culture, decision-making, and team communication under pressure.",
                    "Ideal for frontline supervisors and airside managers."
                ],
                outcome: "Aviation Leadership Certificate | Culture Toolkit | Personal Leadership Plan"
            },
            {
                id: "custserve",
                title: "CUSTSERV360",
                subtitle: "Customer Service & Experience Management",
                heading: "Excellence in Service, Communication, and Client Relations",
                description: [
                    "A customer-focused program designed for service teams across sectors.",
                    "Includes service recovery, emotional intelligence, communication skills, and conflict resolution."
                ],
                outcome: "Customer Service Management Certificate | Role-Playing Activities | Feedback Models"
            },
            {
                id: "humanfactor",
                title: "HUMAN FACTOR PRO",
                heading: "Understanding Human Error, Decision-Making, and Performance",
                description: [
                    "This program unpacks the science of human error in workplace safety and operations.",
                    "Includes the \"Dirty Dozen\", fatigue, stress, distractions, and situational awareness."
                ],
                outcome: "Human Factors Awareness Certificate | Case Studies | Error Mitigation Plan"
            },
            {
                id: "hsrglobal",
                title: "HSR GLOBAL+",
                heading: "International Health and Safety Representative Training",
                description: [
                    "This program provides foundational knowledge for elected worker representatives under global legislation equivalents (NZ HSWA, UK HSWA, OSHA).",
                    "Covers issue resolution, consultation rights, and safety culture."
                ],
                outcome: "HSR Certificate | Issue Escalation Templates | Worker Engagement Strategies"
            },
            {
                id: "project360",
                title: "PROJECT360",
                subtitle: "Fundamentals of Project Management",
                heading: "Planning, Executing, and Delivering Successful Projects",
                description: [
                    "This internationally-oriented program provides a solid foundation in project management principles, tools, and techniques applicable across sectors such as construction, training, logistics, and operations.",
                    "Covering both traditional and Agile methodologies, learners will explore project life cycles, stakeholder engagement, budgeting, scheduling, and risk control.",
                    "Practical activities help bridge the gap between theory and workplace application."
                ],
                outcome: "Project Management Certificate | Project Plan Template | Tools for Scope, Time, and Risk Management"
            }
        ]
    }
]);

export const createServicesData = () => {
    return {
        get list () { return allPrograms },

        get courses () {
            /**
             * @type {never[]}
            */
            let output = allPrograms.reduce((a, b) => {
                let mappedCourses = b.courses.map(c => {
                    return {
                        ...c,
                        title: `${b.text} - ${c.title}`
                    }
                });

                // @ts-ignore
                a = a.concat(mappedCourses);
                return a;
            }, []);
            return output;
        },

        /**
         * @param {{}} value
         */
        set activeCourse (value) {
            activeCourse = value;
            // @ts-ignore
            activeProgram = allPrograms.find(d => d.courses.map(s => s.id).indexOf(activeCourse.id) >= 0);
        },

        // @ts-ignore
        getCourseById (id) {
            if (!id) { return null; }
            // @ts-ignore
            let crs = this.courses.find(s => s.id === id);
            console.log(`getCourseById id = ${id}`, crs);
            return crs;
        },
    };
};