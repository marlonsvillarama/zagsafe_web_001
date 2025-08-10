<script>
    import ImageFocus from '$lib/images/training003.png';

    import Availability from '$lib/components/Availability.svelte';
</script>

<div class="breadcrumbs">
    Breadcrumbs
</div>

<h1 class="title">ZagSafe Focus Series</h1>

<div class="grid grid-training-top">
    <div class="flex-col details">
        <Availability online={true} onsite={true} />
        <p>
            The <strong>ZagSafe Focus Series</strong> is a is a collection of targeted 3-hour training modules designed to address key operational safety topics across all industries. Each session is skills-focused, outcome-driven, and compliant with the New Zealand regulations and international best practices.
        </p>
        <p>
            Ideal for upskilling workers, supervisors, and safety representatives, this series is perfect for toolbox refreshers, onboardng, and compliance requirements.
        </p>
    </div>
    <img src={ImageFocus} alt="ZagSafe Focus Series">
</div>


<style>
    .title {
        color: var(--color-accent);
    }
    .grid-training-top {
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        /* margin-bottom: 2rem; */
    }
    .grid-training-top > .details {
        gap: 1.25rem;
    }
    .details > p {
        font-size: var(--font-sm);
    }
    .grid-training-top > img {
        width: 100%;
        border-radius: 1rem;
    }
</style>