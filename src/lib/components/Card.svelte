<script>
    let {
        img,
        link = '',
        title = ''
    } = $props();
</script>

{#if link}
<a href={link}>
    <div class="card">
        <img src={img} alt={title}>
        <div class="title">{title}</div>
    </div>
</a>
{:else}
    <div class="card">
        <img src={img} alt={title}>
        <!-- <div class="content"> -->
            <div class="title">{title}</div>
        <!-- </div> -->
    </div>
{/if}

<style>
    .card img {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        /* border-radius: 1rem; */
        width: 100%;
        margin-bottom: 0;
    }
    a {
        border-radius: 2rem;
        display: block;
        letter-spacing: 1.25px;
        /* padding: 1.5rem; */
        text-align: center;
        text-decoration: none;
        transition: all 100ms ease-in-out;
    }
    a:hover {
        box-shadow: var(--shadow);
        transform: translateY(-0.25rem);
    }
    /* a .content {
        background-color: var(--color-primary);
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        margin-top: -0.5rem;
        padding: 0.5rem 0.75rem;
    } */
    .title {
        background-color: var(--color-primary);
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        color: white;
        font-size: var(--font-2xl);
        font-weight: 100;
        margin-top: -0.5rem;
        /* margin-bottom: 0.5rem; */
        padding: 1.25rem;
    }
</style>