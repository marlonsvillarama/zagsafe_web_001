<script>
    let {
        id = ''
    } = $props();
</script>

<div class="contact-form flex-col">
{#if success === true}
    <div class="field-set flex-col">
        <p>Thank you for submitting your inquiry. We will get back to you as soon as we can.</p>
    </div>
    <div class="contact-form flex-col">
        <button onclick={resetForm}>Submit another inquiry</button>
    </div>
{:else}
    <div class="field-set flex-col">
        <label for="your-email">Your Email</label>
        <input type="email" id="your-email" bind:value={email} />
    </div>
    <div class="field-set flex-col">
        <label for="your-email">Your Inquiry</label>
        <span class="field-help">Please provide the details of your inquiry.</span>
        <textarea id="your-inquiry" rows="8" bind:value={text}></textarea>
    </div>
    {#if pending === true}
        <div class="flex-row align-center text-center submitting">
            <span class="submitting">Submitting inquiry</span>
            <img src={Loader} height="16" alt="Submitting">
        </div>
    {:else}
        <button onclick={sendInquiry}>Send Inquiry</button>
    {/if}
{/if}
</div>

<style>

</style>