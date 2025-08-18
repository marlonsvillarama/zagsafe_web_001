<script>
    import TrainingMain_01 from '$lib/images/training_main_001.webp';
    import TrainingMain_02 from '$lib/images/training_main_002.webp';
    import TrainingMain_04 from '$lib/images/training_main_004.webp';
    import TrainingSuite from '$lib/images/training002.webp';
    import TrainingFocus from '$lib/images/training003.png';
    import TrainingGlobal from '$lib/images/training004_2.png';
    // import HeroImage from '$lib/images/training001.webp';
    // import PageHero from "$lib/components/PageHero.svelte";
    // import Card from '$lib/components/Card.svelte';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
    import ImageCard from '$lib/components/ImageCard.svelte';

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/solutions', text: 'Solutions' }
    ];
</script>

<Breadcrumbs {crumbs} />

<!-- <PageHero img={HeroImage} title="Training" /> -->
<div class="content flex-col">
    <h1 class="page-title">SOLUTIONS</h1>

    <div class="wrapper flex-col training-main">

        <div class="grid-col-2 align-center">
            <img src={TrainingMain_01} width="100%" alt="Training">
            <div class="blurb flex-col gap-8">
                <h1>H&S Advise and Consulting</h1>
                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> provides tailored health and safety advise to support businesses in meeting their obligations under the Health and Safety at Work Act 2015 and related regulations.
                    </p>
                    <p>
                        This service is flexible and can be shaped to meet the unique needs of each business.
                    </p>
                </div>

                <a href="/consult?id=hs-consulting" class="book" target="_blank">Inquire Now</a>
            </div>
        </div>

        <div class="grid-col-2 align-center">
            <div class="blurb flex-col gap-8">
                <h1>Incident Investigation</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> specializes in professional incident investigations, identifying the underlying causes of accidents, near misses, and safety failures.
                    </p>
                    <p>
                        Proven methods such as ICAM and other root cause analysis tools are used so that investigations go beyond the most common surface-level factors.
                    </p>
                </div>

                <a href="/consult?id=incident-inv" class="book" target="_blank">Inquire Now</a>
            </div>
            <img src={TrainingMain_04} width="100%" alt="Training">
        </div>

        <div class="grid-col-2 align-center">
            <img src={TrainingMain_02} width="100%" alt="Training">
            <div class="blurb flex-col gap-8">
                <h1>Height Safety Equipment Inspection</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> conducts certified inspections of fall protection equipment and other working-at-height systems.
                    </p>
                    <p>
                        These inspections provide assurance that equipment is fit for use, reducing the risk of equipment failure and potential injury.
                    </p>
                </div>

                <a href="/consult?id=height-safety" class="book" target="_blank">Inquire Now</a>
            </div>
        </div>

        <div class="grid-col-2 align-center">
            <div class="blurb flex-col gap-8">
                <h1>Workplace Audit</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> delivers independent and comprehensive workplace audits that provide clear and honest assessments of current health and safety performance.
                    </p>
                    <p>
                        Each audit examines key workplace health and safety areas, and the findings are presented in a practical, easy-to-understand format.
                    </p>
                </div>

                <a href="/consult?id=workplace-audit" class="book" target="_blank">Inquire Now</a>
            </div>
            <img src={TrainingMain_04} width="100%" alt="Training">
        </div>

        <div class="grid-col-2 align-center">
            <img src={TrainingMain_02} width="100%" alt="Training">
            <div class="blurb flex-col gap-8">
                <h1>System Development</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> develops customised safety management systems (SMS) that align with New Zealand's Safety at Work Act 2015.
                    </p>
                    <p>
                        A well-designed SMS not only improves compliance but also builds trust with workers, contractors, and clients alike.
                    </p>
                </div>

                <a href="/consult?id=system-dev" class="book" target="_blank">Inquire Now</a>
            </div>
        </div>

    </div>
</div>

<style>
    .content {
        padding: 0rem 0 5rem;
        gap: 6rem;
    }
    .training-main {
        gap: 6rem;
    }
    .training-main img {
        border-radius: 1rem;
        box-shadow: var(--shadow);
    }
    /* .blurb {
        gap: 3rem;
    } */
    .blurb h1 {
        color: var(--color-accent);
        font-size: var(--font-2xl);
        font-weight: 200;
    }
    /* .blurb-text {
        gap: 1.5rem;
    } */
    .cta {
        font-size: var(--font-4xl);
        font-weight: 100;
        color: var(--color-accent);
        text-align: center;
    }
    .book {
        padding: 0.75rem 1.5rem;
        background-color: var(--color-accent);
        border-radius: 0.5rem;
        color: white;
        display: inline-block;
        font-size: var(--font-sm);
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
    /* .blurb button {
        border: 0;
        border-radius: 0.5rem;
        background-color: var(--color-primary);
        color: var(--color-font-lightest);
        font-size: var(--font-md);
        font-weight: 600;
        ** display: inline-block; **
        padding: 0.75rem 1.5rem;
        cursor: pointer;
    } */
</style>