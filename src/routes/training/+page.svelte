<script>
    import TrainingSuite from '$lib/images/training002.webp';
    import TrainingFocus from '$lib/images/training003.png';
    import TrainingGlobal from '$lib/images/training004_2.png';
    import HeroImage from '$lib/images/training001.webp';
    import PageHero from "$lib/components/PageHero.svelte";
    import Card from '$lib/components/Card.svelte';
    import ImageCard from '$lib/components/ImageCard.svelte';
</script>

<!-- <PageHero img={HeroImage} title="Training" /> -->
<div class="content flex-col">
    <h1 class="page-title">TRAINING</h1>
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
        padding: 3rem 0 5rem;
        gap: 3rem;
    }
</style>