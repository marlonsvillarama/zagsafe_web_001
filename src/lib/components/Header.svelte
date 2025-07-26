<script>
    import Logo from '$lib/images/logo-blue-crop.png'
</script>

<header>
    <img src={Logo} class="logo" alt="">
</header>

<style>
    header {
        background: linear-gradient(hsl(0, 0%, 70%), 70%, transparent);
        padding: 0.75rem 2rem 4rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /* border: 1px solid red; */
    }
    img.logo {
        display: block;
        height: 3.5rem;
        z-index: -1;
    }
</style>