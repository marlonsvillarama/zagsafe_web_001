<script>
// @ts-nocheck
    import * as CountryCodes from 'country-codes-list';
    import Loader from '$lib/images/svg/loader-blue.svg';
    const INQUIRY_URL = 'https://9mvmdg9neg.execute-api.ap-southeast-2.amazonaws.com/default/inquiries';

    import { createCoursesData } from "$lib/data/courses.svelte";
    import { onMount } from "svelte";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    
    const crumbs = [
        { link: '/', text: 'Home' },
        { link: '/inquire', text: 'Inquiry Form' }
    ];

    let countries = $state([]);
    // let countryList = $derived(countries.sort((a, b) => a.code - b.code));
    let countryList = countries;

    let pending = $state(false);
    let success = $state(false);
    let courseId = $state('');
    let selectedCourse = $state({});
    let selectedCountryId = $state('');
    let selectedCountryCode = $state('');
    let selectedCountryCallCode = $state('');
    let selectedCountry = $state({});
    let clientName = $state('');
    let email = $state('');
    let phone = $state('');
    let message = $state('');

    const courseData = createCoursesData();
    const DEFAULT_MESSAGE = 'I would like to get more information on this course.';

    $effect(() => {
        console.log('effect courseId', courseId);
        selectedCourse = courseData.getCourseById(courseId);
    });

    $effect(() => {
        selectedCountry = countryList.find(c => c.code === selectedCountryId);
        console.log('effect on selectedCountry', selectedCountry);

        selectedCountryCode = selectedCountry?.code;
        console.log('effect on selectedCountryCode', selectedCountryCode);

        selectedCountryCallCode = selectedCountryCode ? `+${selectedCountry.callCode}` : '';
    });

    const gotoSolutions = () => {
        window.location.href = '/solutions';
    };

    const gotoTraining = () => {
        window.location.href = '/training';
    };

    const resetInquiry = () => {
        courseId = '';
        selectedCourse = {};
        selectedCountryId = '';
        selectedCountryCode = '';
        selectedCountryCallCode = '';
        selectedCountry = {};
        clientName = '';
        email = '';
        phone = '';
        message = '';

        pending = false;
        success = false;
    };

    const sendInquiry = async () => {
        console.log('sendInquiry courseId', courseId);
        if (!courseId && !selectedCourse?.id) {
            alert('Please select a course from the list.');
            return;
        }

        if (!clientName) {
            alert('Please enter your name.')
            return;
        }

        if (!email) {
            alert('Please enter your email address.')
            return;
        }

        if (!selectedCountryCode) {
            alert('Please select the country where you are located.')
            return;
        }

        if (!phone) {
            alert('Please enter your phone number.')
            return;
        }

        console.log('submitting...', {
                id: (new Date()).getTime().toString(),
                clientName,
                email,
                country: selectedCountry,
                phone,
                course: {
                    id: courseId,
                    title: selectedCourse.title
                },
                text: message || DEFAULT_MESSAGE
            }
        );
        pending = true;
        let sendResponse = await fetch(INQUIRY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: (new Date()).getTime().toString(),
                clientName,
                email,
                country: selectedCountry,
                phone,
                course: {
                    id: courseId,
                    title: selectedCourse.title
                },
                text: message || DEFAULT_MESSAGE
            })
        });
        sendResponse = await sendResponse.json();
        console.log('sendInquiry sendResponse', sendResponse);

        pending = false;
        success = sendResponse.ok;
        success = true;
    };

    onMount(() => {
        courseId = new URLSearchParams(location.search).get("id") || '';
        console.log('courseId', courseId);

        countries = CountryCodes.customList(
            "countryNameEn",
            `{"name": "{countryNameEn}", "code": "{countryCode}", "callCode": "{countryCallingCode}"}`
        );
        countries = Object.values(countries).map(c => JSON.parse(c));
        // countries.sort((a, b) => a.name - b.name);
        // console.log('countries', countries);

        // countryList = countries;
        // countryList = countries.toSorted((a, b) => a.name - b.name);
        // console.log('countryList', countryList);
    });
</script>

<main class="page">
    <div class="wrapper inquiry">
        <Breadcrumbs {crumbs} />

        <h1 class="page-title">Inquiry Form</h1>

        <div class="contact-form">
            <div class="contact-col flex-col">
                <h2>Thank you for your interest in our training programs!</h2>

                <div class="contact-row align-center">
                    <div class="label">Course</div>
                    {#if success === true}
                        <span>{selectedCourse?.['title']}</span>
                    {:else}
                        <select bind:value={courseId}>
                            {#each courseData.courses as course}
                                <option value={course.id}>{course.title}</option>
                            {/each}
                        </select>
                    {/if}
                </div>
                <div class="contact-row">
                    <span class="label">Description</span>
                    <div class="desc">
                        {#each selectedCourse?.['description'] as desc}
                            <span>{desc}</span>
                        {/each}
                    </div>
                </div>
                <div class="contact-row">
                    <span class="label">Duration</span>
                    <span>{selectedCourse?.['duration'] || '3 hours'}</span>
                </div>
                <div class="contact-row align-center">
                    <div class="label">Your Name</div>
                    {#if success === true}
                        <span>{clientName}</span>
                    {:else}
                        <input type="text" bind:value={clientName} />
                    {/if}
                </div>
                <div class="contact-row align-center">
                    <div class="label">Email Address</div>
                    {#if success === true}
                        <span>{email}</span>
                    {:else}
                        <input type="email" bind:value={email} />
                    {/if}
                </div>
                <div class="contact-row align-center">
                    <div class="label">Country</div>
                    {#if success === true}
                        <span>{selectedCountry.name}</span>
                    {:else}
                        <select bind:value={selectedCountryId}>
                            {#each countryList as country}
                                <option value={country.code}>{country.name}</option>
                            {/each}
                        </select>
                    {/if}
                </div>
                <div class="contact-row align-center">
                    <div class="label">Phone Number</div>
                    {#if success === true}
                        <span>+{selectedCountryCallCode} {phone}</span>
                    {:else}
                        <div class="flex-row align-center fld-phone">
                            <input type="text" class="code" disabled bind:value={selectedCountryCallCode} />
                            <input type="phone" bind:value={phone} />
                        </div>
                    {/if}
                </div>
                <div class="contact-row">
                    <span class="label">Your Message</span>
                    {#if success === true}
                        <span>{message}</span>
                    {:else}
                        <textarea id="your-inquiry" rows="8" placeholder={DEFAULT_MESSAGE} bind:value={message}></textarea>
                    {/if}
                </div>
                <div class="contact-row">
                    <span></span>
                    {#if pending === true}
                        <div class="flex-row align-center text-center submitting">
                            <span class="submitting">Submitting</span>
                            <img src={Loader} height="16" alt="Submitting">
                        </div>
                    {:else if success === true}
                        <div class="flex-row justify-between nav-buttons">
                            <button onclick={resetInquiry}>Submit another</button>
                            <div class="flex-row">
                                <button class="ghost" onclick={gotoSolutions}>Solutions</button>
                                <button class="ghost" onclick={gotoTraining}>Trainings</button>
                            </div>
                        </div>
                    {:else if success === false}
                        <button onclick={sendInquiry}>Submit your inquiry</button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .inquiry {
        /* border: 1px solid red; */
        padding: 2rem 0 8rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .contact-form {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
    }
    .contact-col {
        /* border: 1px solid red; */
        gap: 1.5rem;
        font-size: var(--font-sm);
        font-weight: 300;
    }
    .contact-row {
        width: 100%;
        display: grid;
        grid-template-columns: 8rem auto;
    }
    .contact-row span {
        line-height: 2rem;
        display: inline-block;
    }
    .contact-row .label {
        font-weight: 600;
    }
    .contact-form input[type=email],
    .contact-form input[type=text],
    .contact-form input[type=phone],
    .contact-form select,
    .contact-form textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: 0.5rem;
        background-color: var(--bg-lighter);
    }
    .contact-form input[type=phone] {
        width: 10rem;
    }
    .contact-form .fld-phone {
        gap: 0.5rem;
    }
    .contact-form .fld-phone .code {
        width: 5rem;
    }
    .contact-form textarea {
        resize: none;
    }
    /* .contact-form span {
        display: inline-block;
        font-weight: 300;
        line-height: 2rem;
    } */
    .contact-form span:not(:last-child) {
        margin-bottom: 1rem;
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
    div.submitting {
        margin: 0 auto;
        gap: 1rem;
    }
    span.submitting {
        font-size: var(--font-lg);
        font-weight: 600;
        color: var(--color-primary);
    }
    .nav-buttons {
        gap: 1rem;
    }
    button.ghost {
        background-color: var(--bg-lightest);
        border: 1px solid transparent;
        color: var(--color-primary);
        margin-left: 1rem;
        padding-left: 0rem;
        padding-right: 0rem;
        font-weight: 300;
    }
    button.ghost:hover {
        background-color: var(--bg-lightest);
        /* border: 1px solid var(--color-primary); */
        text-decoration: underline;
    }
</style>