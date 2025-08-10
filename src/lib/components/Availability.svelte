<script>
    import { Landmark, Monitor } from 'lucide-svelte';

    let {
        online = false,
        onsite = false
    } = $props();
</script>

<div class="flex-row availability">
    {#if online === true}
    <div class="flex-row avail">
        <Monitor size={16} />
        <span>Available Online</span>
    </div>
    {/if}

    {#if onsite === true}
    <div class="flex-row avail">
        <Landmark size={16} />
        <span>On-site Training</span>
    </div>
    {/if}
</div>

<style>
    .availability {
        gap: 0.5rem;
    }
    .avail {
        gap: 0.75rem;
        padding: 0.5rem 0.75rem;
        background-color: var(--color-primary);
        border-radius: 0.5rem;
        color: white;
        font-size: var(--font-xs);
        font-weight: 500;
    }
</style>