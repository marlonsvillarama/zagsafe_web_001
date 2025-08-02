<script></script>

<div class="contact-form flex-col">
    <div class="field-set flex-col">
        <label for="your-email">Your Email</label>
        <input type="email" id="your-email" />
    </div>
    <div class="field-set flex-col">
        <label for="your-email">Your Inquiry</label>
        <span class="field-help">Please provide the details of your inquiry.</span>
        <textarea id="your-inquiry" rows="8"></textarea>
    </div>
    <button>Send Inquiry</button>
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
        font-size: var(--font-xs);
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
        font-size: var(--font-sm);
        font-weight: 600;
        /* display: inline-block; */
        padding: 0.75rem 1.5rem;
        cursor: pointer;
    }
    .contact-form button:hover {
        background-color: var(--color-primary-hover);
    }
</style>