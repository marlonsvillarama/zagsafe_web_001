<script>
    // import { Landmark, Monitor } from 'lucide-svelte';
    import Landmark from '$lib/images/svg/landmark.svg';
    import WiFi from '$lib/images/svg/wifi.svg';

    let {
        online = false,
        onsite = false
    } = $props();
</script>

<div class="flex-row availability">
    {#if online === true}
    <div class="flex-row align-center avail">
        <img src={WiFi} alt="Online" height="20">
        <span>Available Online</span>
    </div>
    {/if}

    {#if onsite === true}
    <div class="flex-row align-center avail">
        <img src={Landmark} alt="Onsite" height="20">
        <span>On-site Training</span>
    </div>
    {/if}
</div>

<style>
    .availability {
        gap: 0.5rem;
        justify-content: center;
    }
    @media (min-width: 48rem) {
        .availability {
            justify-content: flex-start;
        }
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