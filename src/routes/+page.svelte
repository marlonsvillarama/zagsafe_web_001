<script>
    import '$lib/style/global.css';
    import Hero from '$lib/components/Hero.svelte';
    import Card from '$lib/components/Card.svelte';
    import CardImage_1 from '$lib/images/work-003.webp';
    import CardImage_2 from '$lib/images/work-004.webp';
    import CardImage_3 from '$lib/images/work-005.webp';
    import Ken_1 from '$lib/images/ken001.webp';
    import NZISM from '$lib/images/practnzism.svg';
    import LumberImage from '$lib/images/lumber.webp';
    import ToolsImage from '$lib/images/tools.webp';
    import MetalWorkImage from '$lib/images/metalwork.webp';

    import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<main>
    <Hero />

    <div class="content flex-col">
        <!-- <a id="build-safety"></a> -->
        <div class="wrapper grid-col-2 align-center">
            <div class="blurb flex-col gap-4">
                <h1>Build safety into your DNA</h1>
                <p>ZagSafe's Zero-Accident Goal &trade; system is based on international best practices for <strong>HSWA 2015</strong> and <strong>ISO 45001:2018</strong>, helping ensure that you get the best solutions tailored for your business.</p>
            </div>
            <div class="img flex-row justify-center gap-16">
                <img class="build-safety img-fade-left" src={MetalWorkImage} alt="Build Safety into your DNA" />
            </div>
        </div>

        <div class="wrapper grid-col-2 align-center">
            <div class="img flex-row justify-center gap-16">
                <img class="zero-accident" src={LumberImage} alt="Zero Accident Goal" />
                <!-- <img class="practnzism" src={LumberImage} alt="Zero Accident Goal" /> -->
            </div>
            <div class="blurb flex-col gap-4">
                <h1>Zero-Accident Goal&trade;</h1>
                <p>I will work with you to grow and improve your workplace safety culture, implement effective risk management systems, and make sure your business meets its health and safety legal obligations.</p>
            </div>
        </div>

        <div class="wrapper grid-col-2 align-center">
            <div class="blurb flex-col gap-4">
                <h1>Expert tailored guidance</h1>
                <p>At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization.</p>
            </div>
            <div class="img flex-row justify-center gap-16">
                <img class="build-safety img-fade-left" src={ToolsImage} alt="Expert Guidance and Support" />
            </div>
        </div>

        <div class="wrapper">
            <div class="headline text-center">
                <h1>Invest in your health and safety today.</h1>
            </div>
        </div>

        <div class="wrapper grid-col-2">
            <Card
                link='/solutions'
                img={CardImage_2}
                title="Consult"
            />

            <Card
                link='/training'
                img={CardImage_3}
                title="Train"
            />

            <!-- <Card
                img={CardImage_3}
                title="Inspections and Audits"
                text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
            /> -->
        </div>

        <div class="wrapper grid grid-col-2 align-center">
            <img src={Ken_1} class="profile" alt="Ken Erol Zagala">
            <div class="profile flex-col gap-8">
                    <h2>Over 12 years of experience</h2>
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
                <div class="blurb">
                </div>
                <!-- <img class="practnzism" src={NZISM} alt="PractNZISM" /> -->
            </div>
        </div>

        <div class="wrapper">
            <ContactSection />
        </div>
    </div>
</main>

<style>
    .blurb h1,
    h2 {
        color: var(--color-accent);
        /* margin-bottom: 0.5rem; */
        margin-left: -0.25rem;
    }
    .blurb h1 {
        font-size: var(--font-3xl);
        font-weight: 100;
    }
    h2 {
        font-size: var(--font-2xl);
        font-weight: 300;
        /* margin-bottom: 1rem; */
    }
    .blurb p:not(:last-child) {
        margin-bottom: 2rem;
    }
    .headline h1 {
        color: var(--color-accent);
        font-size: var(--font-4xl);
        font-weight: 400;
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
    .img > img {
        width: 32rem;
        border-radius: 2rem;
        box-shadow: var(--shadow);
    }
    img.practnzism {
        /* border: 1px solid red; */
        padding: 0.25rem 2rem;
    }
    /* .img-fade-left {
        mask-image: linear-gradient(to right, transparent, var(--bg-lightest) 100%);
    } */
</style>