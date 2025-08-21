<script>
    import Logo from '$lib/images/svg/logo-white.svg';
</script>

<footer>
    <div class="wrapper">
        <div class="img">
            <!-- <div class="text-center"> -->
            <img class="footer-logo" src={Logo} alt="ZagSafe" />
            <!-- </div> -->
        </div>

        <div class="footer-col flex-col">
            <div class="title">Solutions</div>
            <a href="/solutions/hs-consulting">Advise and Consulting</a>
            <a href="/solutions/incident-inv">Incident Investigation</a>
            <a href="/solutions/height-safety">Height Safety Equipment Inspection</a>
            <a href="/solutions/workplace-audit">Workplace Audit</a>
            <a href="/solutions/system-dev">System Development</a>
        </div>

        <div class="footer-col flex-col">
            <div class="title">Training</div>
            <a href="/training/suite">ZagSafe Training Suite</a>
            <a href="/training/focus">ZagSafe Focus Series</a>
            <a href="/training/global">ZagSafe Global Series</a>
        </div>

        <div class="footer-col flex-col">
            <div class="title">Resources</div>
            <a href="/resources/privacy">Privacy Statement</a>
            <a href="/resources/quality">Quality Statement</a>
            <a href="/resources/safety">Safety Policy Statement</a>
            <a href="/resources/cancel">Cancellation and Refund Policy</a>
        </div>
    </div>
</footer>

<style>
    footer {
        color: white;
        padding: 1.5rem 0 7rem;
    }
    @media (min-width: 64rem) {
        footer > div {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            padding: 5rem 0 7rem;
        }
    }
    footer > div {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 48rem) {
        footer > div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows:auto;
        }
    }
    @media (min-width: 64rem) {
        footer > div {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    footer .img {
        text-align: center;
    }
    @media (min-width: 48rem) {
        footer .img {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    img.footer-logo {
        height: 6rem;
    }
    /* .social a {
        display: inline-block;
        align-items: center;
    } */
    /* .social a img {
        height: 1.5rem;
    } */
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