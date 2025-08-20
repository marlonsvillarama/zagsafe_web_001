<script>
    import ContactSection from '$lib/components/ContactSection.svelte';
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/contact', text: 'Contact Form' },
    ];
</script>

<svelte:head>
    <title>ZagSafe - Contact Form</title>
</svelte:head>

<main class="page">
    <div class="wrapper contact">
        <Breadcrumbs {crumbs} />

        <div class="content flex-col gap-8">
            <ContactSection />
        </div>
    </div>
</main>

<style>
    .contact {
        /* border: 1px solid red; */
        padding: 2rem 0 8rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .contact > .content {
        margin: 0 auto;
        width: 100%;
        max-width: 60rem;
    }
    .page-title {
        font-size: var(--font-2xl);
        font-weight: 500;
    }
</style>