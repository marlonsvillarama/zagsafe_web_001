<script>
    import Solutions_01 from '$lib/images/consulting.webp';
    import Solutions_02 from '$lib/images/investigation.webp';
    import Solutions_03 from '$lib/images/heights-work.webp';
    import Solutions_04 from '$lib/images/audit.webp';
    import Solutions_05 from '$lib/images/system-dev.webp';
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

<svelte:head>
    <title>ZagSafe - Solutions</title>
</svelte:head>

<Breadcrumbs {crumbs} />

<!-- <PageHero img={HeroImage} title="Training" /> -->
<div class="content flex-col">
    <h1 class="page-title">SOLUTIONS</h1>

    <div class="flex-col solution-main">

        <div class="solution">
            <img src={Solutions_01} width="100%" alt="H&S Advise and Consulting">
            <div class="blurb flex-col">
                <h1>H&S Advise and Consulting</h1>
                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> provides tailored health and safety advise to support businesses in meeting their obligations under the Health and Safety at Work Act 2015 and related regulations.
                    </p>
                    <p>
                        This service is flexible and can be shaped to meet the unique needs of each business.
                    </p>
                </div>

                <a href="/solutions/hs-consulting" class="book" target="_blank">Learn more</a>
            </div>
        </div>

        <div class="solution reverse">
            <img src={Solutions_02} width="100%" alt="Incident Investigation">
            <div class="blurb flex-col">
                <h1>Incident Investigation</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> specializes in professional incident investigations, identifying the underlying causes of accidents, near misses, and safety failures.
                    </p>
                    <p>
                        Proven methods such as ICAM and other root cause analysis tools are used so that investigations go beyond the most common surface-level factors.
                    </p>
                </div>

                <a href="/solutions/incident-inv" class="book" target="_blank">Learn more</a>
            </div>
        </div>

        <div class="solution">
            <img src={Solutions_03} width="100%" alt="Height Safety Equipment Inspection">
            <div class="blurb flex-col">
                <h1>Height Safety Equipment Inspection</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> conducts certified inspections of fall protection equipment and other working-at-height systems.
                    </p>
                    <p>
                        These inspections provide assurance that equipment is fit for use, reducing the risk of equipment failure and potential injury.
                    </p>
                </div>

                <a href="/solutions/height-safety" class="book" target="_blank">Learn more</a>
            </div>
        </div>

        <div class="solution reverse">
            <img src={Solutions_04} width="100%" alt="Workplace Audit">
            <div class="blurb flex-col">
                <h1>Workplace Audit</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> delivers independent and comprehensive workplace audits that provide clear and honest assessments of current health and safety performance.
                    </p>
                    <p>
                        Each audit examines key workplace health and safety areas, and the findings are presented in a practical, easy-to-understand format.
                    </p>
                </div>

                <a href="/solutions/workplace-audit" class="book" target="_blank">Learn more</a>
            </div>
        </div>

        <div class="solution">
            <img src={Solutions_05} width="100%" alt="System Development">
            <div class="blurb flex-col">
                <h1>System Development</h1>

                <div class="blurb-text flex-col gap-4">
                    <p>
                        <strong>ZagSafe</strong> develops customised safety management systems (SMS) that align with New Zealand's Safety at Work Act 2015.
                    </p>
                    <p>
                        A well-designed SMS not only improves compliance but also builds trust with workers, contractors, and clients alike.
                    </p>
                </div>

                <a href="/solutions/system-dev" class="book" target="_blank">Learn more</a>
            </div>
        </div>

    </div>
</div>

<style>
    .content {
        padding: 0rem 0 5rem;
        gap: 4rem;
    }
    @media (min-width: 64rem) {
        .content {
            gap: 6rem;
        }
    }
    .solution-main {
        display: flex;
        flex-direction: column;
        gap: 8rem;
    }
    .solution-main > .solution {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    @media (min-width: 64rem) {
        .solution-main > .solution {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
        }
    }
    .solution > img {
        border-radius: clamp(1rem, 2vw, 2rem);
        width: 100%;
    }
    @media (min-width: 64rem) {
        .reverse > :first-child {
            order: 2;
        }
        .reverse > :last-child {
            order: 1;
        }
    }
    /* .training-main img {
        border-radius: 1rem;
        * box-shadow: var(--shadow); *
    } */
    /* .blurb {
        gap: 3rem;
    } */
     .solution > .blurb {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 0.5rem;
     }
    .solution > .blurb h1 {
        color: var(--color-accent);
        font-size: clamp(var(--font-lg), 4vw, var(--font-2xl));
        font-weight: 200;
        text-align: center;
    }
    @media (min-width: 64rem) {
        .solution > .blurb h1 {
            text-align: left;
        }
    }
    /* p {
        font-size: clamp(0.75rem, 2vw, 1rem);
        line-height: clamp(1.25rem, 4vw, 1.75rem);
    } */
    .blurb-text {
        gap: 1rem;
    }
    /* .cta {
        font-size: var(--font-4xl);
        font-weight: 100;
        color: var(--color-accent);
        text-align: center;
    } */
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