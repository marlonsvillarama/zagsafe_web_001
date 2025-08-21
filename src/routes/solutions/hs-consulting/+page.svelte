<script>
    import Consulting from '$lib/images/consulting.webp';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/solutions', text: 'Solutions' },
        { link: '/solutions/hs-consulting', text: 'H&S Advise and Consulting' }
    ];
</script>

<svelte:head>
    <title>ZagSafe - Health and Safety Advise and Consulting</title>
</svelte:head>

<Breadcrumbs {crumbs} />

<h1 class="page-title">Health and Safety Advise and Consulting</h1>

<div class="solution">
    <img src={Consulting} alt="Health and Safety Advise and Consulting">

    <div class="flex-col details gap-12">
        <div class="text flex-col gap-4">
            <p>
                <strong>ZagSafe</strong> provides tailored health and safety advise to support businesses in meeting their obligations under the Health and Safety at Work Act 2015 and related regulations.
            </p>
            <p>
                This service is flexible and can be shaped to meet the unique needs of each business, whether it is developing systems from the ground up, reviewing current practices, or advising on specific challenges.
            </p>
            <p>
                Consulting includes risk assessment, health and safety planning, policy development, and compliance support. 
            </p>
            <p>
                The goal is to deliver practical, workable solutions that fit the culture and capacity of the organisation.
            </p>
        </div>
        <div class="process flex-col gap-4">
            <h3>Process</h3>
            <ol>
                <li>
                    <span class="process-title">Initial Consultation</span>
                    <p>
                        <strong>ZagSafe</strong> meets with management to understand the organisation's challenges.
                    </p>
                </li>
                <li>
                    <span class="process-title">Workplace Assessment</span>
                    <p>
                        A review of current policies, practices, and risk controls is carried out.
                    </p>
                </li>
                <li>
                    <span class="process-title">Gap Analysis</span>
                    <p>
                        Areas of non-compliance or opportunities for improvement are identified.
                    </p>
                </li>
                <li>
                    <span class="process-title">Tailored Recommendations</span>
                    <p>
                        Practical solutions are provided in line with HSWA and industry standards.
                    </p>
                </li>
                <li>
                    <span class="process-title">Implementation Support</span>
                    <p>
                        <strong>ZagSafe</strong> assists in applying improvements.
                    </p>
                </li>
                <li>
                    <span class="process-title">Follow-up Review</span>
                    <p>
                        Progress is checkedto ensure outcomes are achieved.
                    </p>
                </li>
            </ol>
        </div>

        <a href="/consult?id=hs-consulting" class="book" target="_blank">INQUIRE NOW</a>
        
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
    /* .details > .text > p {
        font-size: var(--font-md);
    } */
    /* p {
        font-size: clamp(0.75rem, 2vw, 1rem);
        line-height: clamp(1.25rem, 4vw, 1.75rem);
    } */
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
    /* .grid-training-top > img {
        width: 100%;
        border-radius: 1rem;
    } */
</style>