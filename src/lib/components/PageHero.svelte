<script>
    let {
        img,
        title = ''
    } = $props();
</script>

<img src={img} alt={title} />
<!-- <div class="hero-img" role="img"></div> -->
<!-- <section>
    <div class="hero-img" role="img"></div>
    <div class="wrapper hero-text">
        <h1>Workplace Safety Simplified</h1>
        <h3>Build safety-first cultures for your workplace</h3>
        <a href="/solutions">Find out how</a>
    </div>
</section> -->

<style>
    /* section {
        position: relative;
    } */
    img {
        /* height: 400px; */
        /* background-size: cover;
        background-position: top; */
        width: 100%;
        /* display: block; */
    }
</style>