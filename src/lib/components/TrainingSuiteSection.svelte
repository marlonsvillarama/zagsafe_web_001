<script>
    let {
        title = 'Title',
        audience = [],
        benefits = [],
        deliveries = [],
        description = 'Program description',
        duration = '1 day',
        course = []
    } = $props();
</script>

<div class="flex-col training">
    <div class="title">{title}</div>

    <div class="grid-area-training pos-relative">
        <div class="benefits flex-col">
            <div class="cell">
                <h3 class="title">Benefits</h3>
                <ul>
                    {#each benefits as benefit}
                    <li>{benefit}</li>
                    {/each}
                </ul>
            </div>

            <div class="grid-col-2">
                <div class="cell">
                    <h3 class="title">Duration</h3>
                    <p>{duration}</p>
                </div>
                <div class="cell">
                    <h3 class="title">Delivery</h3>
                    <p>
                        {#each deliveries as delivery}
                        <span>{delivery}</span><br/>
                        {/each}
                    </p>
                </div>
            </div>
        </div>

        <div class="cell audience pos-absolute">
            <div>
                <h3 class="title">This program is perfect for you if you are:</h3>
                <ul>
                    {#each audience as aud}
                    <li>{aud}</li>
                    {/each}
                </ul>
            </div>
        </div>

        <div class="program flex-col">
            <div class="cell">
                <h3 class="title">Program Description</h3>
                {#each description as desc}
                <p>{desc}</p>
                {/each}
            </div>

            <div class="cell">
                <h3 class="title">Benefits</h3>
                <ul>
                    {#each benefits as benefit}
                    <li>{benefit}</li>
                    {/each}
                </ul>
            </div>
        </div>

        <div class="course">
            <div class="cell">
                <h3 class="title">Course Contents</h3>
                <ol>
                    {#each course as cr}
                    <li>{cr}</li>
                    {/each}
                </ol>
            </div>
        </div>

        <div class="booknow">
            <button type="button">BOOK NOW</button>
        </div>
    </div>
</div>

<style>
    .training {
        gap: 1rem;
        margin-bottom: 3rem;
    }
    .training > .title {
        background-color: var(--color-primary);
        border-radius: 0.5rem;
        color: var(--color-font-lightest);
        font-size: var(--font-lg);
        font-weight: 600;
        padding: 0.75rem 1.25rem;
    }
    .grid-area-training {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "benefits ."
            "program course"
            "booknow .";
        column-gap: 4rem;
    }
    /* .grid-area-2xauto > * {
        border: 1px solid red;
    } */
    .cell {
        /* border: 1px solid red; */
        padding: 1rem 1rem;
        /* margin-bottom: 2rem; */
        font-size: var(--font-sm);
        /* font-weight: 300; */
        line-height: 2rem;
    }
    .cell > .title {
        font-weight: 500;
    }
    .cell ol,
    .cell ul {
        list-style-position: inside;
        padding: 0 1rem;
    }
    .cell > p:not(:last-child) {
    /* .cell > p { */
        margin-bottom: 2rem;
    }
    .audience {
        background-color: var(--color-border);
        padding: 1rem 2rem;
        border-radius: 1rem;
        top: 1rem;
        right: 0;
        min-width: 30rem;
        max-width: 30rem;
    }
    .benefits {
        grid-area: benefits;
    }
    .program {
        grid-area: program;
    }
    .course {
        grid-area: course;
    }
    .booknow {
        grid-area: booknow;
    }
    .booknow button {
        padding: 1rem;
        background-color: var(--color-accent);
        color: white;
        font-size: var(--font-lg);
        font-weight: 600;
        width: 100%;
        border-radius: 0.5rem;
        border: 0;
        cursor: pointer;
    }
</style>