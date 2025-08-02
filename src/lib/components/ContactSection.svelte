<script>
    import ContactForm from "./ContactForm.svelte";
</script>

<div class="howcanihelp">
    <h1 class="howcanihelp">How can I help you?</h1>
    <span>Call or email for a free consultation.</span>
</div>

<div class="grid-col-2-sep">
    <div class="contact-col flex-col">
        <div class="flex-row justify-between align-center">
            <span>Phone</span>
            <span class="value flex-row">022 529 3564</span>
        </div>
        <div class="flex-row justify-between align-center">
            <span>Address</span>
            <span class="value flex-row">Christchurch</span>
        </div>
    </div>
    <div class="col-sep">&nbsp;</div>
    <div class="contact-col flex-col">
        <div class="flex-row justify-between align-center">
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
    .value {
        font-weight: 700;
    }
</style>