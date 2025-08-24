<script>
    let {
        crumbs = []
    } = $props();
</script>

{#if crumbs.length > 0}
<ul>
    {#each crumbs as item, index}
        <li>
            <a href={item.link} title={item.text}
                class={[
                    { active: index === crumbs.length - 1 }
                ]}
            >{item.text}</a>
        </li>
    {/each}
</ul>
{/if}

<style>
    ul {
        list-style: none;
        /* border: 1px solid red; */
        margin-bottom: 1rem;
    }
    li {
        display: inline-block;
        align-items: center;
        font-size: var(--font-sm);
    }
    li+li:before {
        padding: 0 0.5rem;
        content: "\00BB";
        font-weight: bold;
    }
    li a {
        font-size: clamp(var(--font-xs), 2vw, var(--font-sm));
        font-weight: 300;
        text-decoration: none;
        color: var(--color-font-notdark);
        padding-bottom: 0.25rem;
        border-bottom: 2px solid transparent;
        transition: all 150ms ease-in-out;
    }
    li a.active {
        font-weight: 500;
        color: var(--color-accent);
    }
    li a:hover {
        border-bottom: 2px solid var(--color-accent);
    }
</style>