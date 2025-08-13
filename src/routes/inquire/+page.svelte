<script>
    import { onMount } from "svelte";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/inquire', text: 'Inquiry Form' }
    ];

    onMount(() => {
        let courseId = new URLSearchParams(location.search).get("id");
        console.log('courseId', courseId);
        // selectOption(parseInt(serviceId || '0'));
    });
</script>

<main class="page">
    <div class="wrapper inquiry">
        <Breadcrumbs {crumbs} />

        <h1 class="page-title">Inquiry Form</h1>

        <div class="contact-form">
            <div class="contact-col flex-col">
                <h2>Thank you for your interest in our training programs!</h2>

                <div class="contact-row">
                    <span>Course</span>
                    <span>ZagSafe Training Suite - Program 1: START+</span>
                </div>
                <div class="contact-row">
                    <span>Description</span>
                    <span>This is a professional program designed for trainers, educators, and assessors focused on adult learning principles, facilitation strategies, learner engagement, and assessment moderation.</span>
                </div>
                <div class="contact-row">
                    <span>Duration</span>
                    <span>3 hours</span>
                </div>
                <div class="contact-row">
                    <span>Your Email</span>
                    <input type="email" id="your-email" />
                </div>
                <div class="contact-row">
                    <span>Your Inquiry</span>
                    <textarea id="your-inquiry" rows="8"></textarea>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .inquiry {
        /* border: 1px solid red; */
        padding: 2rem 0 8rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .par {
        line-height: 2rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    .par ul {
        list-style-position: inside;
        padding-left: 2rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    .contact-form {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
    }
    .contact-col {
        /* border: 1px solid red; */
        gap: 1.5rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    .contact-row {
        width: 100%;
        display: grid;
        grid-template-columns: 8rem auto;
    }
    .contact-row > span {
        line-height: 1.5rem;
    }
    .contact-row span:first-child {
        font-weight: 600;
    }
</style>