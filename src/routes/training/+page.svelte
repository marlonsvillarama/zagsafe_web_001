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

<svelte:head>
    <title>ZagSafe - Training</title>
</svelte:head>

<Breadcrumbs {crumbs} />

<!-- <PageHero img={HeroImage} title="Training" /> -->
<div class="content flex-col">
    <h1 class="page-title">TRAINING</h1>

    <div class="flex-col training-main">

        <div class="training">
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

        <div class="training reverse">
            <img src={TrainingMain_04} width="100%" alt="Training">
            <div class="blurb flex-col">
                <h1>Theory and application</h1>

                <div class="blurb-text flex-col">
                    <p>
                        Each session combines theory with real-world examples, ensuring participants not only understand the requirements but also know how to apply them in their day-to-day tasks.
                    </p>
                </div>

                <!-- <button>Learn more</button> -->
            </div>
        </div>

        <div class="training">
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
        
    <div class="cards">
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
        gap: 4rem;
    }
    @media (min-width: 64rem) {
        .content {
            gap: 6rem;
        }
    }
    .training-main {
        display: flex;
        flex-direction: column;
        gap: 8rem;
    }
    .training-main > .training {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    @media (min-width: 64rem) {
        .training-main > .training {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
        }
    }
    .training > img {
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
    /* .training-main {
        gap: 6rem;
    } */
    /* .training-main img {
        border-radius: 1rem;
    } */
    .training > .blurb {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 0.5rem;
     }
    .training > .blurb h1 {
        color: var(--color-accent);
        font-size: clamp(var(--font-lg), 4vw, var(--font-2xl));
        font-weight: 200;
        text-align: center;
    }
    @media (min-width: 64rem) {
        .training > .blurb h1 {
            text-align: left;
        }
    }
    .blurb-text {
        gap: 1rem;
    }
    /* .blurb {
        gap: 3rem;
    } */
    /* .blurb h1 {
        color: var(--color-accent);
        font-size: var(--font-2xl);
        font-weight: 200;
    } */
    /* .blurb-text {
        gap: 1.5rem;
    } */
    .cta {
        font-size: clamp(var(--font-2xl), 4vw, var(--font-4xl));
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
    .cards {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 64rem) {
        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>