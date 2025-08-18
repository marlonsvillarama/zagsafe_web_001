<script>
    let { children } = $props();
</script>

<main class="page">
    <div class="wrapper solutions">
        {@render children?.()}
    </div>
</main>

<style>
    .solutions {
        padding: 2rem 0 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>