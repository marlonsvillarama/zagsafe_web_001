<script>
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/resources', text: 'Resources' },
        { link: '/resources/safety', text: 'Safety Policy Statement' },
    ];
</script>

<main class="page">
    <div class="wrapper statement">
        <Breadcrumbs {crumbs} />

        <h1 class="page-title">SAFETY POLICY STATEMENT</h1>

        <div class="par">
            At <strong>ZagSafe</strong>, the safety and well-being of my clients, contractors, and myself as the consultant are my highest priorities. I am committed to providing expert health and safety consulting services that promote safe work environments, prevent harm, and ensure compliance with all relevant New Zealand health and safety regulations, including the Health and Safety at Work Act 2015.
        </div>

        <div class="par">
            As a sole trader with extensive experience and qualifications in occupational health and safety, I will:
            <ul>
                <li>Maintain up-to-date knowledge of health and safety legislations, standards, and best practices.</li>
                <li>Identify and manage risk proactively in all consulting activities.</li>
                <li>Promote a culture of safety through education, training, and clear communication.</li>
                <li>Work collaboratively with clients to develop practical, effective, and sustainable health and safety solutions.</li>
                <li>Continually review and improve my safety practices to meet or exceed industry best practices.</li>
            </ul>
        </div>

        <div class="par">
            This policy is fundamental to how ZagSafe operates and reflects my commitment to protecting the health, safety, and well-being of all stakeholders.
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