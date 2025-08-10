<script>
    let {
        title = 'Course',
        description = []
    } = $props();
</script>

<div class="course">
    <div class="flex-row justify-between align-center">
        <h2 class="title">{title}</h2>
        
        {#each description as desc}
        <p>{desc}</p>
        {/each}
    </div>
</div>

<style>
    .course {
        border-top: 1px solid var(--color-accent);
        padding-top: 0.75
    }
    .course .title {
        color: var(--color-accent);
        font-size: var(--font-lg);
        font-weight: 600;
    }
</style>