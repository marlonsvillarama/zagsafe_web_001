<script>
    import SystemDev from '$lib/images/system-dev.webp';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/solutions', text: 'Solutions' },
        { link: '/solutions/system-dev', text: 'System Development' }
    ];
</script>

<Breadcrumbs {crumbs} />

<h1 class="title">Safety Management System Development</h1>

<div class="grid grid-training-top">
    <div class="flex-col details gap-16">
        <div class="text flex-col gap-4">
            <p>
                <strong>ZagSafe</strong> develops customised safety management systems (SMS) that align with New Zealand's Safety at Work Act 2015 and international frameworks such as ISO 45001.
            </p>
            <p>
                Each system is tailored to the specific size, industry, and risk profile of the organisation.
            </p>
            <p>
                Factors include policies, procedures, risk registers, emergency plans, and monitoring processes that are both compliant and practical to implement.
            </p>
            <p>
                A well-designed SMS not only improves compliance but also builds trust with workers, contractors, and clients by showing that health and safety is an integral part of business operations.
            </p>
        </div>
        <div class="process flex-col gap-4">
            <h3>Process</h3>
            <ol>
                <li>
                    <span class="process-title">Consultation and Review</span>
                    <p>
                        Existing policies and practices are evaluated.
                    </p>
                </li>
                <li>
                    <span class="process-title">System Design</span>
                    <p>
                        SMS framework is built around ISO 45001, HSWA, or client needs.
                    </p>
                </li>
                <li>
                    <span class="process-title">Document Creation</span>
                    <p>
                        Policies, procedures, and templates are drafted.
                    </p>
                </li>
                <li>
                    <span class="process-title">Implementation Support</span>
                    <p>
                        Training and workshops are delivered to roll out the SMS.
                    </p>
                </li>
                <li>
                    <span class="process-title">Monitoring Tools</span>
                    <p>
                        Reporting and performance measurement processes are set up.
                    </p>
                </li>
                <li>
                    <span class="process-title">Review and Continuous Improvement</span>
                    <p>
                        Regular check-ins ensure the system stays effective and compliant.
                    </p>
                </li>
            </ol>
        </div>

        <a href="/consult?id=system-dev" class="book" target="_blank">INQUIRE NOW</a>
        
        <!-- <Availability online={true} onsite={true} /> -->
    </div>

    <img src={SystemDev} alt="Safety Management System Development">
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