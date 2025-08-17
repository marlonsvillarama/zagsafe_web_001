<script>
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/resources', text: 'Resources' },
        { link: '/resources/privacy', text: 'Privacy Statement' }
    ];
</script>

<main class="page">
    <div class="wrapper statement">
        <Breadcrumbs {crumbs} />

        <h1 class="page-title">PRIVACY STATEMENT</h1>

        <div class="par">
            At <strong>ZagSafe</strong>, I am committed to protecting the privacy and confidentiality of all personal and business information collected during the course of providing consulting services.
        </div>

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

        <div class="par">
            You have the right to access the personal information held about you and request corrections if necessary.
        </div>

        <div class="par">
            If you have any questions or concerns regarding your privacy or the management of your information, please email <a class="email" href="mailto:kenz@zagsafe.com">kenz@zagsafe.com</a>.
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
        font-size: var(--font-md);
        font-weight: 300;
    }
    .par ul {
        list-style-position: inside;
        padding-left: 2rem;
        font-size: var(--font-md);
        font-weight: 300;
    }
    .email {
        font-weight: 500;
    }
    .sign {
        color: var(--color-primary);
        font-size: var(--font-xl);
    }
</style>