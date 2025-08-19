<script>
    import HeightsWork from '$lib/images/heights-work.webp';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/solutions', text: 'Solutions' },
        { link: '/solutions/height-safety', text: 'Height Safety Equipment Inspection' }
    ];
</script>

<svelte:head>
    <title>ZagSafe - Height Safety Equipment Inspection</title>
</svelte:head>

<Breadcrumbs {crumbs} />

<h1 class="title">Height Safety Equipment Inspection</h1>

<div class="grid grid-training-top">
    <div class="flex-col details gap-16">
        <div class="text flex-col gap-4">
            <p>
                <strong>ZagSafe</strong> conducts certified inspections of fall protection equipment, including harnesses, lanyards, connectors, and other working-at-height systems.
            </p>
            <p>
                Regular inspection and certification of equipment are critical to ensuring compliance with New Zealand safety regulations and manufacturer standards.
            </p>
            <p>
                These inspections provide assurance that equipment is fit for use, reducing the risk of equipment failure and potential injury.
            </p>
            <p>
                <strong>ZagSafe</strong> also provides practical advice on equipment care, maintenance, and storage, helping organisations extend the life of their gear while keeping the team safe.
            </p>
            <p>
                This service ensures that workers can approach height work with confidence, knowing their equipment has been thoroughly checked and approved.
            </p>
        </div>
        <div class="process flex-col gap-4">
            <h3>Process</h3>
            <ol>
                <li>
                    <span class="process-title">Scheduling and Planning</span>
                    <p>
                        Equipment list and access needs are confirmed.
                    </p>
                </li>
                <li>
                    <span class="process-title">Onsite Inspection</span>
                    <p>
                        Harnesses, lanyards, anchors, and connectors are inspected against New Zealand standards.
                    </p>
                </li>
                <li>
                    <span class="process-title">Tagging and Recording</span>
                    <p>
                        Items are tagged with pass/fail status and entered into inspection logs.
                    </p>
                </li>
                <li>
                    <span class="process-title">Defect Identification</span>
                    <p>
                        Faulty or expired equipment is reported.
                    </p>
                </li>
                <li>
                    <span class="process-title">Compliance Report</span>
                    <p>
                        A certificate of inspection is provided for records.
                    </p>
                </li>
                <li>
                    <span class="process-title">Follow-up Support</span>
                    <p>
                        Advice on replacement or maintenance is given.
                    </p>
                </li>
            </ol>
        </div>

        <a href="/consult?id=height-safety" class="book" target="_blank">INQUIRE NOW</a>
        
        <!-- <Availability online={true} onsite={true} /> -->
    </div>

    <img src={HeightsWork} alt="Height Safety Equipment Inspection">
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