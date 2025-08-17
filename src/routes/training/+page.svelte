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
        { link: '/training', text: 'Training' }
    ];
</script>

<Breadcrumbs {crumbs} />

<!-- <PageHero img={HeroImage} title="Training" /> -->
<div class="content flex-col">
    <h1 class="page-title">TRAINING</h1>

    <div class="wrapper flex-col training-main">

        <div class="grid-col-2 align-center">
            <img src={TrainingMain_01} width="100%" alt="Training">
            <div class="blurb flex-col">
                <h1>High-quality, practical programmes</h1>

                <div class="blurb-text flex-col">
                    <p>
                        <strong>ZagSafe</strong> delivers high-quality, practical programmes that go beyond compliance to build genuine capability and confidence in the workplace.
                    </p>
                    <p>
                        Training is designed to suit the needs of different industries and roles, from entry-level workers through to supervisors and managers.
                    </p>
                </div>

                <!-- <button>Learn more</button> -->
            </div>
        </div>

        <div class="grid-col-2 align-center">
            <div class="blurb flex-col">
                <h1>Theory and application</h1>

                <div class="blurb-text flex-col">
                    <p>
                        Each session combines theory with real-world examples, ensuring participants not only understand the requirements but also know how to apply them in their day-to-day tasks.
                    </p>
                </div>

                <!-- <button>Learn more</button> -->
            </div>
            <img src={TrainingMain_04} width="100%" alt="Training">
        </div>

        <div class="grid-col-2 align-center">
            <img src={TrainingMain_02} width="100%" alt="Training">
            <div class="blurb flex-col">
                <h1>Empower critical thinking</h1>

                <div class="blurb-text flex-col">
                    <p>
                        Training covers a wide range of topics, ranging from the fundamentals of health and safety to specialist areas such as working at heights. 
                    </p>
                    <p>
                        <strong>ZagSafe</strong> empowers workers to think critically about safety, make better decisions, and create safer work environments.
                    </p>
                </div>

                <!-- <button>Learn more</button> -->
            </div>
        </div>

    </div>

    <h1 class="cta">Build a safer workplace now.</h1>
        
    <div class="wrapper grid-col-3">
        <ImageCard
            img={TrainingSuite}
            title="Suite"
            text="A comprehensive three-tiered program designed for any level."
            link="/training/suite"
        />

        <ImageCard
            img={TrainingFocus}
            title="Focus"
            text="Short skills-focused courses compliant with New Zealand safety regulations."
            link="/training/focus"
        />

        <ImageCard
            img={TrainingGlobal}
            title="Global"
            text="Advanced safety training programs designed for the international market."
            link="/training/global"
        />
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
    .blurb {
        gap: 3rem;
    }
    .blurb h1 {
        color: var(--color-accent);
        font-size: var(--font-2xl);
        font-weight: 200;
    }
    .blurb-text {
        gap: 1.5rem;
    }
    .cta {
        font-size: var(--font-4xl);
        font-weight: 100;
        color: var(--color-accent);
        text-align: center;
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