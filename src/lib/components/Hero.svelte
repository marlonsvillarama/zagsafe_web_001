<script>
    import Header from '$lib/components/Header.svelte';
    import HeroImage from '$lib/images/hero-blue.png';
</script>

<section>
    <Header></Header>
    <img src={HeroImage} alt=""/>
</section>

<style>
    section {
        position: relative;
    }
    img {
        width: 100%;
    }
</style>