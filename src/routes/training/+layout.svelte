<script>
    let { children } = $props();
</script>

<main class="page">
    <div class="wrapper training">
        {@render children()}
    </div>
</main>

<style>
    .training {
        padding: 2rem 0 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>