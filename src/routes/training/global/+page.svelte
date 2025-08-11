<script>
    import ImageFocus from '$lib/images/training004_2.jpg';

    import Availability from '$lib/components/Availability.svelte';
    import TrainingCourseCard from '$lib/components/TrainingCourseCard.svelte';

    const courses = [
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
    ];
</script>

<div class="breadcrumbs">
    Breadcrumbs
</div>

<h1 class="title">ZagSafe Global Series</h1>

<div class="grid grid-training-top">
    <div class="flex-col details">
        <Availability online={true} />
        <p>
            The <strong>ZagSafe Global Series</strong> features advanced training programs designed to upskill professionals, leaders, and facilitators in safety, sustainability, leadership, and operational excellence. These programs go beyond compliance to foster competence, innovation, and global alignment with best practices.
        </p>
        <p>
            All <strong>ZagSafe Global Series</strong> training programs are fully-online and are conducted via live virtual classrooms supported by digital learning materials, case studies, and interactive activities.
        </p>
        <p>
            Upon successful completion, participants will receive a <strong>ZagSafe International Certificate of Achievement</strong>, recognising their professional development aligned with global standards such as <strong>ISO</strong>, <stong>ICAO</stong>, <strong>PMBOK</strong>, <strong>WHO</strong>, and <strong>ILO</strong>.
        </p>
    </div>
    <img src={ImageFocus} alt="ZagSafe Focus Series">
</div>

<div class="cells">
    {#each courses as course}
    <TrainingCourseCard
        id={course.id}
        title={course.title}
        subtitle={course.subtitle}
        heading={course.heading}
        description={course.description}
        outcome={course.outcome}
    />
    {/each}
</div>

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
        font-size: var(--font-sm);
    }
    .grid-training-top > img {
        width: 100%;
        border-radius: 1rem;
    }

    .cells {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
        grid-auto-rows: min-content;
        row-gap: 6rem;
        margin-bottom: 4rem;
    }
</style>