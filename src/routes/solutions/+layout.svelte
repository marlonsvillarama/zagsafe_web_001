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
        padding: 1rem 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 0rem;
    }
    @media (min-width: 48rem) {
        .solutions {
            padding: 2rem 0 3rem;
        }
    }
</style>