<script>
    let {
        img,
        title = '',
        text = '',
        link = '/training'
    } = $props();

    const gotoLink = () => {
        window.location.href = link;
    };
</script>

<div class="img-card" onclick={gotoLink}>
    <img src={img} alt={title}>
    <div class="contents">
        <div class="cover">
            <div class="title">{title}</div>
            <p class="blurb">{text}</p>
        </div>
        <a href={link} class="how">Learn more</a>
    </div>
</div>

<style>
    .img-card {
        width: 100%;
        position: relative;
        border-radius: 1rem;
        transition: all 100ms ease-in-out;
    }
    .img-card:hover {
        box-shadow: var(--shadow);
        cursor: pointer;
        transform: translateY(-4px);
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 1rem;
    }
    .contents {
        position: absolute;
        /* height: 100%;
        width: 100%; */
        top: 0;
        left: 0;
        bottom: 0;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cover {
        /* border: 1px solid red; */
        height: 100%;
        padding: 3rem;
        /* padding: clamp(1rem, 2rem, 3rem); */
        display: flex;
        flex-direction: column;
        position: relative;
        /* justify-content: space-between; */
    }
    .title {
        color: var(--color-accent);
        font-size: clamp(var(--font-lg), 4vw, var(--font-4xl));
        font-weight: bold;
    }
    .blurb {
        color: white;
        font-size: var(--font-md);
        font-weight: 400;
        letter-spacing: 0.5px;
        margin-top: 1rem;
        /* position: absolute;
        top: 50%;
        width: auto; */
        /* border: 1px solid red; */
        /* transform: translateY(-50%); */
    }
    .how {
        border: 0;
        border-radius: 0;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        padding: 1rem;
        color: white;
        cursor: pointer;
        background-color: var(--color-primary);
        font-size: var(--font-lg);
        font-weight: 600;
        letter-spacing: 0.75px;
        text-align: center;
        text-decoration: none;
    }
</style>