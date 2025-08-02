<script>
    import Logo from '$lib/images/svg/logo-white.svg';
    // import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
    // import ChevronUpIcon from '@lucide/svelte/icons/chevron-up';
    import PhoneIcon from '@lucide/svelte/icons/phone';
</script>

<header>
    <div class="content">
        <div class="left">
            <img src={Logo} class="logo" alt="ZagSafe">
            <a href="/solutions">Solutions</a>
            <a href="/training">Training</a>
            <a href="/resources">Resources</a>
            <a href="/about">About</a>
        </div>
        <a class="contact" href="/contact">
            <PhoneIcon />
            <span>022 529 3564</span>
        </a>
    </div>
</header>

<style>
    header {
        /* background: linear-gradient(hsl(0, 0%, 70%), 70%, transparent); */
        padding: 0.75rem 2rem 4rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        /* border-bottom: 1px solid red; */
        z-index: 999;
    }
    header a {
        color: var(--color-font-lighter);
        font-size: var(--font-md);
        font-weight: 600;
        display: inline-block;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: border-bottom 100ms ease-in-out, color 100ms ease-in-out;
    }
    header a:hover {
        border-bottom: 2px solid var(--color-font-lightest);
        color: var(--color-font-lightest);
    }
    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .left {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
    img.logo {
        /* display: block; */
        height: 3.5rem;
        z-index: -1;
    }

    .contact {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>