<script>
    import ImageFocus from '$lib/images/training003.png';

    import Availability from '$lib/components/Availability.svelte';
    import TrainingCourseCard from '$lib/components/TrainingCourseCard.svelte';

    const courses = [
        {
            id: "induct",
            title: "ZagSafe INDUCT+",
            description: [
                "This course introduces new workers to workplace safety expectations, site-specific hazards, and key responsibilities under the Health and Safety Work Act 2015.",
                "Participants will learn how to identify hazards, report incidents, and participate in creating a safe work environment from day one."
            ],
            outcome: "Participants receive a Safety Induction Certificate."
        },
        {
            id: "toolbox",
            title: "ZagSafe TOOLBOX+",
            description: [
                "This module teaches supervisors, team leads, and workers how to conduct impactful toolbox meetings that engage teams and promote daily safety awareness.",
                "Participants will explore communication techniques, hazard updates, and how to document toolbox outcomes."
            ],
            outcome: "Learners gain practical skills to lead or contribute to toolbox talks confidently."
        },
        {
            id: "audit",
            title: "ZagSafe AUDIT+",
            description: [
                "A short course covering the basics of conducting internal Health and Safety audits.",
                "Trainees will learn how to use checklists, collect evidence, and report findings aligned with ISO 45001 and company requirements."
            ],
            outcome: "Participants become competent in performing basic site or system audits."
        },
        {
            id: "investigate",
            title: "ZagSafe INVESTIGATE+",
            description: [
                "This session introduces the ICAM methodology, helping participants understand the process of identifying root causes, gathering evidence, and preparing reports following incidents or near misses."
            ],
            outcome: "Learners are equipped to assist or lead Level 1 investigations using ICAM principles."
        },
        {
            id: "lead",
            title: "ZagSafe LEAD+",
            description: [
                "A focused module on influcencing safety culture through leadership.",
                "Learners explore leadership styles, responsibilities, and practical strategies to promote safe behaviour across teams."
            ],
            outcome: "Learners receive a Certificate of Participation in Safety Leadership and Influence Techniques."
        },
        {
            id: "permit",
            title: "ZagSafe PERMIT+",
            description: [
                "This course outlines the roles and responsibilities of a Permit Issuer, including types of permits (hot work, height work, confined space), risk controls, and sign-off processes."
            ],
            outcome: "Participants receive a Competency Certificate in issuing permits to work under supervision or company protocols."
        },
        {
            id: "risk",
            title: "ZagSafe RISK+",
            description: [
                "This module introduces the ISO 31000 risk management process, covering hazard identification, risk assessment matrices, and control strategies.",
                "It links directly to workplace applications in various industries."
            ],
            outcome: "Participants understand how to assess and manage operational risks effectively."
        },
        {
            id: "jsa",
            title: "ZagSafe JSA+",
            description: [
                "Participants learn how to prepare, review, and apply Job Safety Analyses or Safe Work Method Statements (SWMS) to ensure tasks are planned and executed safely."
            ],
            outcome: "Participants receive a Certificate of Capability in writing and reviewing JSAs for routine and high-risk jobs."
        },
        {
            id: "heights",
            title: "ZagSafe HEIGHTS+",
            description: [
                "A practical overview of fall prevention, harness use, and controls related to elevated work.",
                "Ideal for workers who perform non-rigging height tasks under supervision."
            ],
            outcome: "Participants understand basic height safety principles and equipment use."
        },
        {
            id: "isolate",
            title: "ZagSafe ISOLATE+",
            description: [
                "This module focuses on identifying hazardous energies and implementing isolation procedures.",
                "Includes lockout/tagout systems and risk scenarios."
            ],
            outcome: "Workers gain awareness of LOTO systems and their role in preventing unintended energisation."
        },
        {
            id: "chem",
            title: "ZagSafe CHEM+",
            description: [
                "This module covers safe handling, storage, and identification of hazardous substances in the workplace (HSNO/GHS), including SDS use and emergency procedures."
            ],
            outcome: "Participants receive a Certificate in Basic Chemical Safety Awareness and Legal Responsibilities."
        },
        {
            id: "fire",
            title: "ZagSafe FIRE+",
            description: [
                "Participants gain knowledge on fire prevention, extinguisher use, evacuation procedures, and emergency roles.",
                "This session includes practical fire scenario discussions."
            ],
            outcome: "Participants receive a Certificate in Basic Fire Safety Awareness suitable for general workplaces."
        },
        {
            id: "warden",
            title: "ZagSafe WARDEN+",
            description: [
                "This course prepares employees to act as fire wardens or floor marshals, covering emergency roles, alarm response, evacuation leadership, and post-incident reporting.",
                "It links directly to workplace applications in various industries."
            ],
            outcome: "Participants receive a Fire Warden Certificate and readiness to serve in emergency teams."
        },
        {
            id: "prep",
            title: "ZagSafe PREP+",
            description: [
                "This module teaches planning and response strategies for various emergencies including earthquakes, chemical spills, and active threats.",
                "Participants learn the key elements of business continuity and response coordination."
            ],
            outcome: "Participants receive an Awareness Certificate in emergency response and preparedness planning."
        },
        {
            id: "hsr",
            title: "ZagSafe HSR+",
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
            title: "ZagSafe HUMAN+",
            description: [
                "This course introduces participants to the science of human factors, highlighting how fatigue, distraction, stress, communication failures, and decision-making under pressure can lead to incidents.",
                "Based on the internationally-recognized \"Dirty Dozen\" model, learners will explore how to identify and control human risk errors in their own roles and workplaces.",
                "This course is ideal for frontline workers, supervisors, and anyone operating in high-risk, high-pressure environments."
            ],
            outcome: "Participants receive a Certificate of Awareness in Human Factors, and an enhanced ability to recognize and manage human error contributors in daily tasks."
        },
    ];
</script>

<div class="breadcrumbs">
    Breadcrumbs
</div>

<h1 class="title">ZagSafe Focus Series</h1>

<div class="grid grid-training-top">
    <div class="flex-col details">
        <Availability online={true} onsite={true} />
        <p>
            The <strong>ZagSafe Focus Series</strong> is a is a collection of targeted 3-hour training modules designed to address key operational safety topics across all industries. Each session is skills-focused, outcome-driven, and compliant with the New Zealand regulations and international best practices.
        </p>
        <p>
            Ideal for upskilling workers, supervisors, and safety representatives, this series is perfect for toolbox refreshers, onboardng, and compliance requirements.
        </p>
    </div>
    <img src={ImageFocus} alt="ZagSafe Focus Series">
</div>

<div class="cells">
    {#each courses as course}
    <TrainingCourseCard
        id={course.id}
        title={course.title}
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