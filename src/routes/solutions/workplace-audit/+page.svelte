<script>
    import Audit from '$lib/images/audit.webp';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/solutions', text: 'Solutions' },
        { link: '/solutions/workplace-audit', text: 'Workplace Audit' }
    ];
</script>

<svelte:head>
    <title>ZagSafe - Workplace Audit</title>
</svelte:head>

<Breadcrumbs {crumbs} />

<h1 class="page-title">Workplace Audit</h1>

<div class="solution">
    <img src={Audit} alt="Workplace Audit">

    <div class="flex-col details gap-12">
        <div class="text flex-col gap-4">
            <p>
                <strong>ZagSafe</strong> delivers independent and comprehensive workplace audits that provide clear and honest assessments of current health and safety performance.
            </p>
            <p>
                Each audit examines key areas such as compliance with legislation, hazard management, worker engagement, training effectiveness, and the overall safety culture of the business.
            </p>
            <p>
                Findings are presented in a practical and easy-to-understand format, highlighting strengths, areas for improvement, and prioritised recommendations.
            </p>
            <p>
                By engaging <strong>ZagSafe</strong>, organisations gain fresh insight into their safety systems and a clear pathway to achieving higher standards of safety and wellbeing.
            </p>
        </div>
        <div class="process flex-col gap-4">
            <h3>Process</h3>
            <ol>
                <li>
                    <span class="process-title">Scope Discussion</span>
                    <p>
                        Areas to be audited (site, process, system) are agreed upon.
                    </p>
                </li>
                <li>
                    <span class="process-title">Audit Planning</span>
                    <p>
                        Criteria are set based on legislation, standards, or company policy.
                    </p>
                </li>
                <li>
                    <span class="process-title">Onsite Audit</span>
                    <p>
                        Inspections, document checks, and worker interviews are carried out.
                    </p>
                </li>
                <li>
                    <span class="process-title">Gap Identification</span>
                    <p>
                        Strengths and weaknesses are highlighted.
                    </p>
                </li>
                <li>
                    <span class="process-title">Audit Report</span>
                    <p>
                        Findings with risk ratings and recommendations are delivered.
                    </p>
                </li>
                <li>
                    <span class="process-title">Action Plan Support</span>
                    <p>
                        Assistance is given to close gaps.
                    </p>
                </li>
            </ol>
        </div>

        <a href="/consult?id=workplace-audit" class="book" target="_blank">INQUIRE NOW</a>
        
        <!-- <Availability online={true} onsite={true} /> -->
    </div>
</div>

<style>
    .page-title {
        font-weight: 300;
    }
    .solution {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        gap: 2rem;
    }
    .solution > img {
        border-radius: 1rem;
        width: 100%;
    }
    @media (min-width: 64rem) {
        .solution {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
        }
    }
    /* .grid-training-top > .details {
        gap: 1.25rem;
    } */
    .details > .text,
    .details > .process {
        padding: 0 0.5rem;
    }
    .process ol {
        list-style-position: inside;
    }
    .process li {
        margin-block-end: 1rem;
    }
    .process li .process-title {
        font-weight: 600;
        margin-left: 0.75rem;
    }
    .process li p {
        margin-left: 2rem;
    }
    .book {
        padding: 0.75rem 1.5rem;
        background-color: var(--color-accent);
        border-radius: 0.5rem;
        color: white;
        display: inline-block;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
    }
    .book:hover {
        box-shadow: var(--shadow-btn);
    }
    .book:active {
        transform: translateY(2px);
        box-shadow: none;
    }
</style>