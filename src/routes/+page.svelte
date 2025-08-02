<script>
    import '$lib/style/global.css';
    import Hero from '$lib/components/Hero.svelte';
    import Card from '$lib/components/Card.svelte';
    import CardImage_1 from '$lib/images/work-003.webp';
    import CardImage_2 from '$lib/images/work-004.webp';
    import CardImage_3 from '$lib/images/work-005.webp';
    import Ken_1 from '$lib/images/ken001.webp';
    import NZISM from '$lib/images/practnzism.svg';

    import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<main>
    <Hero />

    <div class="content flex-col">
        <div class="wrapper grid grid-col-2">
            <div class="blurb flex-col">
                <h1>Build safety into your DNA</h1>
                <p>ZagSafe's Zero-Accident Goal &trade; system is based on international best practices for <strong>HSWA 2015</strong> and <strong>ISO 45001:2018</strong>, helping ensure that you get the best solutions tailored for your business.</p>
            </div>
            <div class="blurb flex-col">
                <h1>Why choose ZagSafe</h1>
                <p>I will work with you to grow and improve your workplace afety culture, implement effective risk management systems, and make sure your business meets its health and safety legal obligations.</p>
            </div>
        </div>

        <div class="wrapper grid grid-col-3">
            <Card
                img={CardImage_1}
                title="Consulting Services"
                text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
            >
            </Card>

            <Card
                img={CardImage_2}
                title="Training Programs"
                text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
            />

            <Card
                img={CardImage_3}
                title="Inspections and Audits"
                text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
            >
                <img src="../lib/images/work-005.webp" alt="Consulting Services">
            </Card>
        </div>

        <div class="wrapper grid grid-col-2">
            <img src={Ken_1} class="profile" alt="Ken Erol Zagala">
            <div class="profile flex-col justify-between">
                <div class="blurb">
                    <h1>Over 12 years of experience</h1>
                    <p>
                        I am a dedicated sole trader specializing in health and safety consulting, training, and auditing with over 12 years of international experience in New Zealand, the Middle East, and the Philippines across multiple industries and sectors.
                    </p>
                    <p>
                        My goal is to ensure your success by delivering fully-measurable improvements in workplace safety and building sustainable safety cultures regardless of industry and location.
                    </p>
                    <p class="signature flex-col">
                        <span class="ken">Ken Erol Zagala</span>
                        <span>Founder, ZagSafe</span>
                    </p>
                </div>
                <img class="practnzism" src={NZISM} alt="PractNZISM" />
            </div>
        </div>

        <div class="wrapper">
            <ContactSection />
        </div>
    </div>
</main>

<style>
    .content {
        background-color: var(--color-bg-lightest);
        padding: 7rem 0;
        gap: 7rem;
    }
    .blurb h1 {
        color: var(--color-accent);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .blurb p:not(:last-child) {
        margin-bottom: 2rem;
    }
    img.profile {
        border-radius: 1rem;
        width: 100%;
    }
    p.signature {
        gap: 0.5rem;
    }
    p.signature > .ken {
        font-size: var(--font-xl);
        font-weight: 600;
    }
    img.practnzism {
        width: 300px;
    }
</style>