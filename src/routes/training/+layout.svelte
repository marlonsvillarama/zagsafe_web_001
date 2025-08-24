<script>
    let { children } = $props();
</script>

<main class="page">
    <div class="wrapper trainings">
        {@render children?.()}
    </div>
</main>

<style>
    .trainings {
        padding: 1rem 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 0rem;
    }
    @media (min-width: 48rem) {
        .trainings {
            padding: 2rem 0 3rem;
        }
    }
</style>