<script>
// @ts-nocheck
    import Logo from '$lib/images/svg/logo-white.svg';
    import ChevronDownIcon from '$lib/images/svg/chevron-down.svg';
    import ChevronUpIcon from '$lib/images/svg/chevron-up.svg';
    import PhoneIcon from '$lib/images/svg/phone.svg';

    const togglePopover = (id) => {
        const menuPopover = document.getElementById(`${id}-menu`);
        menuPopover?.togglePopover();
    };

    // const gotoHome = () => {
    //     window.location.href = '/';
    // };

    const navigate = (link) => {
        window.location.href = link;
    };
</script>

<header>
    <div class="content">
        <div class="menu left align-center">
            <img src={Logo} class="logo" alt="ZagSafe">
            <div class="nested">
                <button onclick={() => navigate('/')}>Home</button>
            </div>
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <!-- <button class="solutions nested" popovertarget="solutions-menu"
                onmouseover={() => togglePopover('solutions')}
            >
                <span>Solutions</span>
                <img src={ChevronDownIcon} alt="" height="20">
            </button> -->
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->

            <div class="nested">
                <button onclick={() => navigate('/training')}>Training</button>
            </div>
            
            <!-- <div class="nested">
                <button class="training">
                    <span>Training</span>
                    <img src={ChevronDownIcon} alt="" height="20">
                </button>
                <div id="training-menu" class="popover-menu">
                    <ul>
                        <li class="menu-all"><a href="/training">Trainings Home</a></li>
                        <li><a href="/training/suite">ZagSafe Training Suite</a></li>
                        <li><a href="/training/focus">ZagSafe Focus Series</a></li>
                        <li><a href="/training/global">ZagSafe Global Series</a></li>
                    </ul>
                </div>
            </div> -->
            <!-- <button class="training nested" popovertarget="training-menu"
                onmouseover={() => togglePopover('training')}
            >
                <span>Training</span>
                <img src={ChevronDownIcon} alt="" height="20">
            </button> -->
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
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <!-- <button class="resources nested" popovertarget="resources-menu"
                onmouseover={() => togglePopover('resources')}
            >
                <span>Resources</span>
                <img src={ChevronDownIcon} alt="" height="20">
            </button> -->
        </div>
        <a class="contact" href="/contact">
            <img src={PhoneIcon} alt="Call us" height="24">
            <span>022 529 3564</span>
        </a>
    </div>
</header>

<!-- <div popover id="solutions-menu" class="popover-menu">
    <ul>
        <li><a href="/solutions/">Solution 1</a></li>
        <li><a href="/solutions/">Solution 2</a></li>
        <li><a href="/solutions/">Solution 3</a></li>
    </ul>
</div> -->

<!-- <div popover id="training-menu" class="popover-menu">
    <ul>
        <li><a href="/training/suite">ZagSafe Training Suite</a></li>
        <li><a href="/training/focus">ZagSafe Focus Series</a></li>
        <li><a href="/training/global">ZagSafe Global Series</a></li>
    </ul>
</div> -->

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
        color: var(--color-font-lightest);
        font-size: var(--font-md);
        font-weight: 600;
        display: inline-block;
        text-decoration: none;
        /* border-bottom: 2px solid transparent; */
        /* transition: border-bottom 100ms ease-in-out, color 100ms ease-in-out; */
    }
    header a:hover {
        /* border-bottom: 2px solid var(--color-font-lightest); */
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
        gap: 1rem;
        align-items: center;
    }
    img.logo {
        /* display: block; */
        height: 3.5rem;
        z-index: -1;
    }
    .menu > .nested {
        /* border: 0; */
        background-color: transparent;
        position: relative;
        /* border: 1px solid red; */
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
        /* border-radius: 0.25rem; */
        padding: 0.75rem 0.75rem;
    }
    .menu > .nested > button > img {
        transform: rotate(-90deg);
    }
    .menu > .nested > .popover-menu {
        display: none;
    }
    /* .menu > .nested:hover > button {
        background-color: var(--bg-lighter);
        color: var(--color-font-dark);
    } */
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
    .menu > .nested > span {
        color: var(--color-font-lightest);
        font-weight: 500;
        /* border-bottom: 2px solid transparent; */
    }
    .solutions {
        anchor-name: --solutions-menu;
    }
    .training {
        anchor-name: --training-menu;
    }
    .resources {
        anchor-name: --resources-menu;
    }
    .popover-menu {
        background-color: var(--bg-lighter);
        border: 0;
        /* padding: 0.25rem 0.75rem; */
        margin: 0;
        inset: auto;
        position: absolute;
        top: anchor(bottom);
        left: anchor(left);
        /* margin-block-start: 0.25rem; */
        box-shadow: var(--shadow);
    }
    /* .popover-menu:popover-open {
    } */
    #solutions-menu {
        position-anchor: --solutions-menu;
    }
    #training-menu {
        position-anchor: --training-menu;
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
        cursor: pointer;
        transition: all 150ms ease-in-out;
    }
    .popover-menu ul li.menu-all {
        border-bottom: 1px solid var(--color-border);
    }
    .popover-menu ul li a {
        color: var(--color-font-dark);
        font-size: var(--font-sm);
        font-weight: 400;
        text-decoration: none;
        padding: 0.5rem 1rem;
        display: inline-block;
        width: 15rem;
    }
    /* .popover-menu ul li:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
    } */
    .popover-menu ul li:hover {
        background-color: var(--color-primary);
        color: white;
    }
    .popover-menu ul li:hover a {
        color: white;
    }

    .contact {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>