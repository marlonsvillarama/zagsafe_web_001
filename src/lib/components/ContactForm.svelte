<script>
    import Loader from '$lib/images/svg/loader-blue.svg';
    const INQUIRY_URL = 'https://9mvmdg9neg.execute-api.ap-southeast-2.amazonaws.com/default/inquiries';

    let pending = $state(false);
    let email = $state('');
    let text = $state('');
    let success = $state(false);

    const sendInquiry = async () => {
        if (!email || !text) {
            alert('Please enter your email and inquiry before submitting.');
            return;
        }

        pending = true;
        let sendResponse = await fetch(INQUIRY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: (new Date()).getTime().toString(),
                email,
                text
            })
        });
        sendResponse = await sendResponse.json();
        console.log('sendInquiry sendResponse', sendResponse);

        pending = false;
        success = sendResponse.ok;
        success = true;
    };

    const resetForm = () => {
        email = '';
        text = '';
        success = false;
    };
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
    .contact-form {
        gap: 1.5rem;
    }
    .field-set {
        gap: 0.5rem;
    }
    .field-set label {
        font-weight: 600;
    }
    .field-help {
        color: var(--color-font-notdark);
        font-size: var(--font-sm);
    }
    .field-set input[type=email],
    .field-set textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: 0.5rem;
        background-color: var(--bg-lighter);
    }
    .field-set textarea {
        resize: none;
    }
    .contact-form button {
        border: 0;
        border-radius: 0.5rem;
        background-color: var(--color-primary);
        color: var(--color-font-lightest);
        font-size: var(--font-md);
        font-weight: 600;
        /* display: inline-block; */
        padding: 0.75rem 1.5rem;
        cursor: pointer;
    }
    .contact-form button:hover {
        background-color: var(--color-primary-hover);
    }
    div.submitting {
        margin: 0 auto;
        gap: 1rem;
    }
    span.submitting {
        font-size: var(--font-lg);
        font-weight: 600;
        color: var(--color-primary);
    }
</style>