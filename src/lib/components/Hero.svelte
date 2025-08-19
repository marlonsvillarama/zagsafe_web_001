<script>
    import Header from '$lib/components/Header.svelte';
    import HeroImage from '$lib/images/hero-orig.png';
</script>

<section>
    <div class="hero-img" role="img"></div>
    <div class="wrapper hero-text">
        <h1>Workplace Safety Simplified</h1>
        <h3>Build safety-first cultures for your workplace.</h3>
        <!-- <a href="/training">Find out how</a> -->
    </div>
</section>

<style>
    section {
        position: relative;
    }
    .hero-img {
        background-image: url('../images/work-002.jpg');
        height: 100vh;
        background-size: cover;
        background-position: top;
        width: 100%;
        display: block;
    }
    .hero-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 1.5rem 2.5rem;
        /* background-color: hsla(0, 0%, 50%, 80%); */
        background-color: var(--color-primary);
        border: 0;
        border-radius: 1rem;
    }
    .hero-text h1 {
        color: var(--color-font-lightest);
        /* color: var(--color-accent); */
        font-size: 2.5rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }
    .hero-text h3 {
        color: var(--color-font-light);
        font-size: 1.125rem;
        font-weight: 300;
        /* margin-bottom: 1.5rem; */
    }
    /* .hero-text a {
        display: inline-block;
        padding: 1rem;
        background-color: var(--color-primary);
        border-radius: 0.5rem;
        color: var(--color-font-lightest);
        font-size: var(--font-sm);
        text-decoration: none;
    } */
</style>