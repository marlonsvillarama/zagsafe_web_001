<script>
    import TrainingSuite from '$lib/images/training002.webp';
    import TrainingFocus from '$lib/images/training003.webp';
    import HeroImage from '$lib/images/training001.webp';
    import PageHero from "$lib/components/PageHero.svelte";
    import Card from '$lib/components/Card.svelte';
</script>

<!-- <PageHero img={HeroImage} title="Training" /> -->
<div class="content flex-col">
    <h1 class="page-title">TRAINING</h1>
    <div class="wrapper grid-col-3">
        <Card
            img={TrainingSuite}
            title="Suite"
            text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
        />

        <Card
            img={TrainingFocus}
            title="Focus"
            text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
        />

        <Card
            img={TrainingSuite}
            title="Inspections and Audits"
            text="At ZagSafe, we provide expert guidance and support on various health and safety advisory services that are tailored specifically for each organization."
        />
    </div>
</div>

<style>
    .content {
        padding: 3rem 0 5rem;
        gap: 3rem;
    }
</style>