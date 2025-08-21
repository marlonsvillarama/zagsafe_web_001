<script>
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/resources', text: 'Resources' },
        { link: '/resources/quality', text: 'Quality Statement' },
    ];
</script>

<svelte:head>
    <title>ZagSafe - Quality Statement</title>
</svelte:head>

<main class="page">
    <div class="wrapper statement">
        <Breadcrumbs {crumbs} />

        <div class="content flex-col gap-8">
            <h1 class="page-title">Quality Statement</h1>

            <div class="par">
                At <strong>ZagSafe</strong>, we are dedicated to delivering high-quality health and safety consulting and training services that meet and exceed client expectations. We ensure that every service we provide is accurate, reliable, and tailored to the unique needs of our clients through our extensive experience, professional qualifications, amd commitment to continuous improvement.
            </div>

            <div class="par">
                We adhere to industry best practices and applicable standards to promote effective risk management and sustainable safety outcomes.
            </div>

            <div class="par">
                We are committed to:
                <ul>
                    <li>Providing clear, practical, and evidence-based advice.</li>
                    <li>Maintaining professionalism and integrity in all engagements.</li>
                    <li>Listening closely to client needs to deliver customized solutions.</li>
                    <li>Continuously updating our knowledge and skills to stay at the forefront of health and safety expertise.</li>
                    <li>Seeking feedback to improve service quality and client satisfaction.</li>
                </ul>
            </div>

            <div class="par">
                Quality is the foundation of our consulting and training practices, and we strive to build lasting partnerships based on trust and excellence.
            </div>

            <!-- <div class="par">Signed,</div>

            <div class="par">
                <h1 class="sign">Ken Erol Zagala</h1>
                <span>Health and Safety Adviser</span>
            </div> -->
        </div>
    </div>
</main>


<style>
    .statement {
        /* border: 1px solid red; */
        padding: 2rem 0 8rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .statement > .content {
        margin: 0 auto;
        width: 100%;
        max-width: 60rem;
    }
    .page-title {
        font-size: var(--font-2xl);
        font-weight: 500;
    }
    .par {
        line-height: 2rem;
        font-size: var(--font-md);
        font-weight: 300;
    }
    .par ul {
        list-style-position: inside;
        padding-left: 2rem;
        font-size: var(--font-md);
        font-weight: 300;
    }
    .email {
        font-weight: 500;
    }
    .sign {
        color: var(--color-primary);
        font-size: var(--font-xl);
    }
</style>