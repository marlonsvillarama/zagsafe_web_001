<script>
    import ContactForm from "./ContactForm.svelte";
</script>

<div class="howcanihelp">
    <h1 class="howcanihelp">How can I help you?</h1>
    <span>Call or email for a free consultation.</span>
</div>

<!-- <div class="grid-col-2-sep"> -->
<div class="contact-form">
    <!-- <div class="contact-col flex-col">
    </div>
    <div class="col-sep">&nbsp;</div> -->
    <div class="contact-col flex-col">
        <div class="flex-row justify-between align-center contact-row">
            <span>Phone</span>
            <span class="value flex-row">+64 22 529 3564</span>
        </div>
        <div class="flex-row justify-between align-center contact-row">
            <span>Address</span>
            <span class="value flex-row">Christchurch, New Zealand</span>
        </div>
        <div class="flex-row justify-between align-center contact-row">
            <span>Email</span>
            <span class="value flex-row">info@zagsafe.com</span>
        </div>
        <ContactForm />
    </div>
</div>

<style>
    .howcanihelp {
        text-align: center;
        /* border: 1px solid red; */
        margin-bottom: 2rem;
    }
    .howcanihelp > h1 {
        color: var(--color-accent);
        font-size: var(--font-3xl);
        font-weight: 700;
        margin-bottom: 0.25rem;
    }
    .howcanihelp > span {
        /* font-size: var(--font-lg); */
        font-weight: 200;
    }
    .contact-col {
        /* border: 1px solid red; */
        gap: 1.5rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    /* .contact-col > div:not(:last-child) {
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-border);
    } */
    .contact-form {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
    }
    .contact-row {
        width: 50%;
    }
    .value {
        font-weight: 700;
    }
</style>