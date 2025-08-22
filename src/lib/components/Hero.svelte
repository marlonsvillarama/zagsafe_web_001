<script>
    import Header from '$lib/components/Header.svelte';
    import HeroImage from '$lib/images/hero-orig.png';
</script>

<section>
    <div class="hero-img" role="img"></div>
    <div class="img-overlay"></div>
    <div class="wrapper hero-text">
        <h1>Workplace Safety Simplified</h1>
        <h3>Build safety-first cultures for your workplace.</h3>
        <a href="/solutions">Find out how</a>
    </div>
</section>

<style>
    section {
        position: relative;
    }
    .hero-img {
        background-image: url('../images/work-002.jpg');
        background-size: cover;
        background-position: top;
        height: 100vh;
        width: 100%;
        display: block;
    }
    .img-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        /* background-color: rgba(128, 0, 0, 0.5); */
        /* background: #2C63AFD9; */
        background: linear-gradient(90deg, rgba(44, 99, 175, 0.85) 0%, rgba(44, 99, 175, 0.1) 70%, rgba(44, 99, 175, 0.4) 100%);
    }
    .hero-text {
        /* border: 1px solid red; */
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* padding: 1.5rem 2.5rem; */
        /* background-color: hsla(0, 0%, 50%, 80%); */
        /* background-color: var(--color-primary); */
        background-color: transparent;
        /* border: 0; */
        border-radius: 1rem;
    }
    .hero-text h1 {
        color: var(--color-font-lightest);
        font-size: clamp(1.75rem, 4vw, 2.5rem);
        font-weight: 300;
        margin-bottom: clamp(0.75rem, 2vw, 2rem);
    }
    .hero-text h3 {
        color: var(--color-font-light);
        font-size: clamp(0.75rem, 2vw, 1.5rem);
        font-weight: 200;
        margin-bottom: clamp(1.25rem, 2vw, 2rem);
    }
    .hero-text a {
        display: inline-block;
        padding: 1rem 1.25rem;
        background-color: var(--color-accent);
        border-radius: 0.5rem;
        color: var(--color-font-lightest);
        font-size: 1rem;
        text-decoration: none;
    }
    /* @media (min-width: 48rem) {
        .hero-text h1 {
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 1rem;
        }
        .hero-text h3 {
            font-size: 1.125rem;
            font-weight: 300;
            margin-bottom: 2rem;
        }
    }
    @media (min-width: 64rem) {
        .hero-text {
            top: 50%;
            transform: translateY(-50%);
        }
        .hero-text h1 {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 1.5rem;
        }
    } */
</style>