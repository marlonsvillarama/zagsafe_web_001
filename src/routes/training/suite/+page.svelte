<script>
    import ImageSuite from '$lib/images/training002.jpg';

    import Availability from '$lib/components/Availability.svelte';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
    import TrainingSuiteSection from '$lib/components/TrainingSuiteSection.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/training', text: 'Training' },
        { link: '/training/suite', text: 'ZagSafe Training Suite' }
    ];

    const START = {
        audience: [
            "An aspiring health and safety (H&S) professional",
            "A front-line worker",
            "A recent graduate",
            "Any staff with no formal H&S background"
        ],
        benefits: [
            "Entry-level employable skills",
            "Pathway to higher certifications (NZQA/ZagSafe PRO+)",
            "Personal safety knowledge in any role"
        ],
        deliveries: [
            "Role playing hazard ID",
            "Toolbox meetings"
        ],
        title: "Program 1 - ZagSafe START",
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
    };

    const PRO = {
        audience: [
            "A health and safety H&S professional, safety representative, or professional with 1-3 years of experience"
        ],
        benefits: [
            "ZagSafe PRO+ Certification",
            "Skill upgrade for promotions or audits",
            "Supports compliance and continuous improvement of organizational safety systems",
            "Adds value to company H&S systems"
        ],
        deliveries: [
            "Assignments",
            "Final Practical Assessment"
        ],
        title: "Program 2 - ZagSafe PRO+",
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
    };

    const TASK = {
        audience: [
            "An aspiring health and safety (H&S) professional",
            "A front-line worker",
            "A recent graduate",
            "Any staff with no formal H&S background"
        ],
        benefits: [
            "Meets client and industry pre-qualification",
            "Reduces accident risk in hazardous work settings",
            "Improved risk perception and decision-making"
        ],
        deliveries: [
            "Assignments",
            "Final Practical Assessment"
        ],
        title: "Program 3 - ZagSafe TASK+",
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
    };
</script>

<svelte:head>
    <title>ZagSafe - Training Suite</title>
</svelte:head>

<Breadcrumbs {crumbs} />

<h1 class="title">ZagSafe Training Suite</h1>

<div class="grid grid-training-top">
    <div class="flex-col details">
        <Availability online={true} onsite={true} />
        <p>
            The <strong>ZagSafe Training Suite</strong> is a comprehensive three-tiered professional development programmes designed to build safer workplaces and stronger professionals.
        </p>
        <p>
            Each programme is structured to provide practical skills, regulatory compliance knowledge, and leadership capability to help individuals and organisations achieve world-class safety outcomes.
        </p>
        <p>
            Whether you are an individual learner or a company with team-wide training needs, each programme is delivered using interactive methods include case studies, group activities, simulations, and trainer-led discussions.
        </p>
    </div>
    <img src={ImageSuite} alt="ZagSafe Training Suite">
</div>

<TrainingSuiteSection
    id="suite-start"
    title="Program 1 - ZagSafe START"
    benefits={START.benefits}
    audience={START.audience}
    deliveries={START.deliveries}
    description={START.description}
    duration={START.duration}
    course={START.course}
/>

<TrainingSuiteSection
    id="suite-pro"
    title={PRO.title}
    benefits={PRO.benefits}
    audience={PRO.audience}
    deliveries={PRO.deliveries}
    description={PRO.description}
    duration={PRO.duration}
    course={PRO.course}
/>

<TrainingSuiteSection
    id="suite-task"
    title={TASK.title}
    benefits={TASK.benefits}
    audience={TASK.audience}
    deliveries={TASK.deliveries}
    description={TASK.description}
    duration={TASK.duration}
    course={TASK.course}
/>

<style>
    .title {
        color: var(--color-accent);
    }
    .grid-training-top {
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        /* margin-bottom: 2rem; */
    }
    .grid-training-top > .details {
        gap: 1.25rem;
    }
    .details > p {
        font-size: var(--font-md);
    }
    .grid-training-top > img {
        width: 100%;
        border-radius: 1rem;
    }
</style>