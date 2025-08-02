<script>
    let {
        img,
        title = '',
        text = ''
    } = $props();
</script>

<div class="card">
    <img src={img} alt={title}>
    <div class="content">
        <div class="title">{title}</div>
        <p>{text}</p>
    </div>
</div>

<style>
    .card img {
        border-radius: 1rem;
        width: 100%;
        margin-bottom: 0;
    }
    .content {
        padding: 0.5rem 0.75rem;
    }
    .content > .title {
        color: var(--color-primary);
        font-size: var(--font-lg);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
</style>