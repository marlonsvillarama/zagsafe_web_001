<script>
    import Logo from '$lib/images/svg/logo-white.svg';
</script>

<footer>
    <div class="wrapper grid-col-4">
        <img class="footer-logo" src={Logo} />

        <div class="footer-col flex-col">
            <div class="title">Solutions</div>
            <a href="/solutions/">Health and Safety Auditing</a>
            <a href="/solutions/">Incident Investigation</a>
            <a href="/solutions/">Health and Safety Equipment Inspection</a>
            <a href="/solutions/">Safety Management System</a>
        </div>

        <div class="footer-col flex-col">
            <div class="title">Training</div>
            <a href="/solutions/">ZagSafe Suite</a>
            <a href="/solutions/">ZagSafe Focus</a>
            <a href="/solutions/">ZagSafe Global</a>
        </div>

        <div class="footer-col flex-col">
            <div class="title">Resources</div>
            <a href="/solutions/">Health and Safety at Work Act 2015</a>
            <a href="/solutions/">Privacy Statement</a>
            <a href="/solutions/">Quality Statement</a>
            <a href="/solutions/">Safety Policy Statement</a>
        </div>
    </div>
</footer>

<style>
    footer {
        color: white;
        padding: 5rem 0 7rem;
    }
    img.footer-logo {
        height: 6rem;
    }
    .footer-col {
        gap: 0.25rem;
    }
    .footer-col > .title {
        /* font-size: var(--font-sm); */
        font-weight: 600;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid white;
        margin-bottom: 0.5rem;
    }
    .footer-col > a {
        color: white;
        font-size: var(--font-sm);
        font-weight: 300;
        border-bottom: 1px solid transparent;
        text-decoration: none;
        transition: transform 150ms ease-in-out;
        margin-left: 0.5rem;
        margin-bottom: 0.25rem;
        /* transform: font-weight 150ms ease-in-out; */
    }
    /* .footer-col > a:before {
        content: '\203A';
        margin-right: 0.25rem;
    } */
    .footer-col > a:hover {
        font-weight: 500;
    }
</style>