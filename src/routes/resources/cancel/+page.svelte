<script>
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/resources', text: 'Resources' },
        { link: '/resources/cancel', text: 'Cancellation and Refund Policy' }
    ];
</script>

<main class="page">
    <div class="wrapper statement">
        <Breadcrumbs {crumbs} />

        <h1 class="page-title">CANCELLATION AND REFUND POLICY</h1>

        <div class="par">
            At <strong>ZagSafe</strong>, we value our clients and aim to deliver high-quality services. This policy outlines our conditions for cancellations and refunds to ensure fairness and transparency for all parties.
        </div>

        <ol>
            <li>
                <h2>Cancellation by Clients</h2>
                <ul>
                    <li>
                        <span class="emp">More than 5 days before service date - </span>
                        Eligible for a <strong><u>full refund</u></strong> or free scheduling of the service/training session.
                    </li>
                    <li>
                        <span class="emp">Less than 5 days before service date - </span>
                        Subject to a <strong><u>50% cancellation fee</u></strong> to cover administrative and scheduling costs.
                    </li>
                    <li>
                        <span class="emp">Same-day cancellations or non-attendance - </span>
                        No refund will be issues unless exceptional circumstances are agreed upon in writing.
                    </li>
                </ul>
            </li>
            <li>
                <h2>Cancellations by ZagSafe</h2>
                <ul>
                    <li>
                        If <strong>ZagSafe</strong> is required to cancel or reschedule a service due to unforeseen circumstances, clients will be offered:
                        <ul>
                            <li>A full refund, or</li>
                            <li>A rescheduled date at no additional cost.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <h2>Refunds for Incomplete Services</h2>
                <ul>
                    <li>If a service is partially delivered due to circumstances within <strong>ZagSafe's</strong> control, a <strong>pro-rated refund</strong> may be offered.</li>
                    <li>If a service is partially completed due to client-related reasons (e.g., early termination, lack of access to site), refund eligibility will be assessed on a <strong>case-by-case basis</strong>.</li>
                </ul>
            </li>
            <li>
                <h2>Training Programs</h2>
                <ul>
                    <li>Refunds will not be provided for non-attendance without prior notice.</li>
                    <li>Substitutions (replacement participants) may be accepted upon prior arrangement with <strong>ZagSafe</strong>.</li>
                </ul>
            </li>
            <li>
                <h2>How to Request for a Refund</h2>
                <ul>
                    <li>All refund requests must be submitted in writing to <a class="email" href="mailto:sales@zagsafe.com">sales@zagsafe.com</a> <span class="emp">within 7 days of the scheduled service or training date</span>.</li>
                    <li>Approved refunds will be processed within <span class="emp">10 working days</span>.</li>
                </ul>
            </li>
        </ol>

        <div class="par">
            I collect, store, and use personal information solely for the purpose of delivering effective health and safety consulting tailored to your needs. This information may include contact details, business operations data, and health and safety records relevant to the consulting engagement.
        </div>

        <div class="par">
            Your information will be handled in accordance with the <strong>Privacy Act 2020 (New Zealand)</strong> and other relevant legislation, ensuring it is:
            <ul>
                <li>Collected lawfully, fairly, and transparently.</li>
                <li>Used only for the purposes for which it was collected.</li>
                <li>Stored securely to prevent unauthorized access, loss, or misuse.</li>
                <li>Not disclosed to any third parties without your explicit consent, unless required by law.</li>
            </ul>
        </div>

        <div class="par">Signed,</div>

        <div class="par">
            <h1 class="sign">Ken Erol Zagala</h1>
            <span>Health and Safety Adviser</span>
        </div>
    </div>
</main>


<style>
    .statement {
        /* border: 1px solid red; */
        padding: 2rem 0 8rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .par {
        line-height: 2rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    .par ul {
        list-style-position: inside;
        padding-left: 2rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    .email {
        font-weight: 500;
    }
    .sign {
        color: var(--color-primary);
        font-size: var(--font-xl);
    }

    ol {
        /* border: 1px solid red; */
        list-style-position: inside;
    }
    ol > li {
        list-style: none;
        list-style-position: inside;
        color: var(--color-primary);
        font-size: var(--font-lg);
        font-weight: 600;
        padding-bottom: 1rem;
    }
    li h2 {
        color: var(--color-primary);
        font-size: var(--font-lg);
        font-weight: 600;
    }
    li > ul {
        list-style-position: inside;
        /* padding-left: 1rem; */
    }
    li > ul > li {
        font-size: var(--font-sm);
        font-weight: 300;
        color: var(--color-font-dark);
    }
    .emp {
        font-weight: bold;
    }
</style>