<script>
    let {
        img,
        title = '',
        text = ''
    } = $props();
</script>

<div class="img-card">
    <div class="img"></div>
    <div class="title">{title}</div>
</div>

<style>
    .img-card {
        width: 100%;
        position: relative;
    }
    .img {}
    .title {}
</style>