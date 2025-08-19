<script>
    import Investigation from '$lib/images/investigation.webp';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/solutions', text: 'Solutions' },
        { link: '/solutions/incident-inv', text: 'Incident Investigation' }
    ];
</script>

<Breadcrumbs {crumbs} />

<h1 class="title">Incident Investigation</h1>

<div class="grid grid-training-top">
    <div class="flex-col details gap-16">
        <div class="text flex-col gap-4">
            <p>
                <strong>ZagSafe</strong> specializes in professional incident investigations, identifying the underlying causes of accidents, near misses, and safety failures.
            </p>
            <p>
                Using proven methods such as the Incident Cause Analysis Method (ICAM) and other root cause analysis tools, investigations go beyond surface-level factors to uncover other contributors such as systemic issues, organisational. influences, and human factors.
            </p>
            <p>
                Each investigation results in clear findings and actionable recommendations designed to prevent recurrence, improve systems, and strengthen safety outcomes.
            </p>
        </div>
        <div class="process flex-col gap-4">
            <h3>Process</h3>
            <ol>
                <li>
                    <span class="process-title">Immediate Response</span>
                    <p>
                        <strong>ZagSafe</strong> gathers facts promptly after an incident.
                    </p>
                </li>
                <li>
                    <span class="process-title">Evidence Collection</span>
                    <p>
                        Documentation, witness statements, and site photos are taken.
                    </p>
                </li>
                <li>
                    <span class="process-title">Report Preparation</span>
                    <p>
                        A structured report is prepared with findings and corrective actions.
                    </p>
                </li>
                <li>
                    <span class="process-title">Recommendation and Briefing</span>
                    <p>
                        Results are presented to management for decision-making.
                    </p>
                </li>
                <li>
                    <span class="process-title">Support with Corrective Action</span>
                    <p>
                        Guidance is given on preventing recurrence.
                    </p>
                </li>
            </ol>
        </div>

        <a href="/consult?id=incident-inv" class="book" target="_blank">INQUIRE NOW</a>
        
        <!-- <Availability online={true} onsite={true} /> -->
    </div>

    <img src={Investigation} alt="Incident Investigation">
</div>

<style>
    .title {
        color: var(--color-accent);
    }
    .grid-training-top {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        /* margin-bottom: 2rem; */
    }
    /* .grid-training-top > .details {
        gap: 1.25rem;
    } */
    .details > .text > p {
        font-size: var(--font-md);
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
        font-size: var(--font-lg);
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
    .grid-training-top > img {
        width: 100%;
        border-radius: 1rem;
    }
</style>