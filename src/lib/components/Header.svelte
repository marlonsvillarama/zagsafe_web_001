<script>
// @ts-nocheck
    import Logo from '$lib/images/svg/logo-white.svg';
    import ChevronDownIcon from '$lib/images/svg/chevron-down.svg';
    import ChevronUpIcon from '$lib/images/svg/chevron-up.svg';
    import PhoneIcon from '$lib/images/svg/phone.svg';
    import Facebook from '$lib/images/svg/fb.svg';
    import LinkedIn from '$lib/images/svg/linkedin.svg';

    const togglePopover = (id) => {
        const menuPopover = document.getElementById(`${id}-menu`);
        menuPopover?.togglePopover();
    };

    const navigate = (link) => {
        window.location.href = link;
    };
</script>

<header>
    <div class="content">
        <div class="menu flex-row align-center">
            <img src={Logo} class="logo" alt="ZagSafe">
            <a href="/">Home</a>
            <a href="/solutions">Solutions</a>
            <a href="/training">Training</a>

            <div class="nested">
                <button class="resources">
                    <span>Resources</span>
                    <img src={ChevronDownIcon} alt="" height="20">
                </button>
                <div id="resources-menu" class="popover-menu">
                    <ul>
                        <li><a href="/resources/privacy">Privacy Statement</a></li>
                        <li><a href="/resources/quality">Quality Statement</a></li>
                        <li><a href="/resources/safety">Safety Policy Statement</a></li>
                        <li><a href="/resources/cancel">Cancellation and Refund Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex-row align-center gap-6">
            <a class="contact" href="/contact">
                Contact Us
                <!-- <img src={PhoneIcon} alt="Call us" height="24"> -->
                <!-- <span>022 529 3564</span> -->
            </a>
            <a class="social" href="https://www.facebook.com/zafacourses" target="_blank">
                <img src={Facebook} alt="Facebook - ZagSafe">
            </a>
            <a class="social" href="https://www.linkedin.com/company/107793650/admin/page-posts/published/" target="_blank">
                <img src={LinkedIn} alt="LinkedIn - ZagSafe">
            </a>
        </div>
    </div>
</header>

<div popover id="resources-menu" class="popover-menu">
    <ul>
        <li><a href="/resources/privacy">Privacy Statement</a></li>
        <li><a href="/resources/quality">Quality Statement</a></li>
        <li><a href="/resources/safety">Safety Policy Statement</a></li>
        <li><a href="/resources/cancel">Cancellation and Refund Policy</a></li>
    </ul>
</div>

<style>
    header {
        padding: 0.75rem 2rem 4rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        z-index: 999;
    }
    header a {
        color: var(--color-font-lightest);
        font-size: var(--font-md);
        font-weight: 400;
        display: inline-block;
        text-decoration: none;
    }
    header a:hover {
        color: var(--color-font-lightest);
    }
    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    /* .left {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    } */
    img.logo {
        height: 3.5rem;
        z-index: -1;
        margin-right: 2rem;
    }
    .menu {
        gap: 1.25rem;
    }
    @media (min-width: 64rem) {
        .menu {
            gap: 2rem;
        }
    }
    .menu > .nested {
        background-color: transparent;
        position: relative;
    }
    .menu > .nested > button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        color: white;
        cursor: pointer;
        font-size: var(--font-md);
        font-weight: 400;
        background: transparent;
        border: 0;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        /* padding: 0.75rem 0.75rem; */
    }
    .menu > .nested > button > img {
        transform: rotate(-90deg);
    }
    .menu > .nested > .popover-menu {
        display: none;
    }
    .menu > .nested:hover > button > img {
        transform: rotate(0);
    }
    .menu > .nested:hover > .popover-menu {
        display: block;
        border-radius: 0.5rem;
    }
    .popover-menu li:first-child {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }
    .popover-menu li:last-child {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
    /* .menu > .nested > span {
        color: var(--color-font-lightest);
        font-weight: 500;
    } */
    /* .solutions {
        anchor-name: --solutions-menu;
    } */
    /* .training {
        anchor-name: --training-menu;
    } */
    .resources {
        anchor-name: --resources-menu;
    }
    .popover-menu {
        background-color: var(--bg-lighter);
        border: 0;
        margin: 0;
        inset: auto;
        position: absolute;
        top: anchor(bottom);
        left: anchor(left);
        box-shadow: var(--shadow);
    }
    #resources-menu {
        position-anchor: --resources-menu;
    }
    .popover-menu ul {
        list-style-type: none;
        list-style-position: inside;
    }
    .popover-menu ul li {
        background-color: var(--bg-lighter);
        transition: all 150ms ease-in-out;
    }
    .popover-menu ul li a {
        cursor: pointer;
        color: var(--color-font-dark);
        font-size: var(--font-sm);
        font-weight: 400;
        text-decoration: none;
        padding: 0.5rem 1rem;
        display: inline-block;
        width: 15rem;
    }
    .popover-menu ul li:hover {
        background-color: var(--color-primary);
        color: white;
    }
    .popover-menu ul li:hover a {
        color: white;
    }
    a.social {
        display: inline-block;
    }
    a.social img {
        height: 1.5rem;
    }
    .contact {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>