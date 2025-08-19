<script>
    let {
        title = 'Course',
        subtitle = '',
        id = '0',
        heading = '',
        description = [],
        outcome = ''
    } = $props();
</script>

<div class="course">
    <div class="header flex-row justify-between align-center">
        <div class="flex-col card-header">
            <h2 class="title">{title}</h2>

            {#if subtitle}
            <h4 class="subtitle">{subtitle}</h4>
            {/if}
        </div>
        <a href="/train?id={id}" class="book" target="_blank">Inquire Now</a>
    </div>

    {#if heading}
    <p class="heading">{heading}</p>
    {/if}

    {#each description as desc}
    <p>{desc}</p>
    {/each}

    {#if outcome}
    <p class="outcome"><strong>Outcomes:</strong> {outcome}</p>
    {/if}
</div>

<style>
    .course {
        border-top: 1px solid var(--color-accent);
        padding-top: 0.75
    }
    .course > .header {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }
    .card-header {
        gap: 0.25rem;
    }
    .card-header .title {
        color: var(--color-primary);
        font-size: var(--font-lg);
        font-weight: 600;
    }
    .card-header .subtitle {
        color: var(--color-primary);
        font-size: var(--font-sm);
        font-style: italic;
        font-weight: 300;
    }
    .course .book {
        padding: 0.75rem 1.5rem;
        background-color: var(--color-accent);
        border-radius: 0.5rem;
        color: white;
        display: inline-block;
        font-size: var(--font-sm);
        text-decoration: none;
    }
    .course .book:hover {
        box-shadow: var(--shadow-btn);
    }
    .course .book:active {
        transform: translateY(2px);
        box-shadow: none;
    }
    .course p:not(:last-child) {
        margin-bottom: 1rem;
    }
    .course .heading {
        font-style: italic;
        font-weight: 500;
        /* text-decoration: underline; */
    }
    .course .outcome {
        font-style: italic;
        font-weight: 300;
        /* text-decoration: underline; */
    }
</style>