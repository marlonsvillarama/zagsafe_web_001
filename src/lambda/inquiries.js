import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: "ap-southeast-2" });

const SENDER = 'info@zagsafe.com';
const RECIPIENT = 'kenz@zagsafe.com';
const ADMIN = 'admin@zagsafe.com';

const buildEmails = (options) => {
    let { from, recipient, text } = options;
    let output = [];

    let now = new Date();
    let nowString = now.toLocaleString('en-NZ', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour12: true
    });
    
    output.push({
        from,
        to: recipient,
        subject: 'ZagSafe - Thank you for your inquiry!',
        body: `<p>Thank you for submitting your inquiry to ZagSafe.</p>

        <p><strong>Date of inquiry</strong>: ${nowString}</p>

        <h2>Inquiry Details</h2>
        <p>${text}</p>
        `
    });
    
    output.push({
        from,
        to: RECIPIENT,
        subject: 'ZagSafe - Thank you for your inquiry!',
        body: `<p>Thank you for submitting your inquiry to ZagSafe.</p>

        <p><strong>Date of inquiry</strong>: ${nowString}</p>

        <h2>Inquiry Details</h2>
        <p>${text}</p>
        `
    });
};

const sendEmails = async (options) => {
    console.log('sendEmails', options);
    let emails = buildEmails(options);
    console.log('emails', emails.length);

    let emailResponses = [];

    for (let i = 0, count = emails.length; i <= count; i++) {
        let email = emails[i];
        let emailData= {
            Source: SENDER,
            Destination: {
                ToAddresses: [ email.to ]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'utf-8',
                        Data: email.body
                    },
                    Text: {
                        Charset: 'utf-8',
                        Data: 'Inquiry submitted!'
                    }
                },
                Subject: {
                    Charset: 'utf-8',
                    Data: email.subject
                }
            }
        };
        if (email.cc) {
        emailData.Destination.CcAddresses = [ email.cc ];
        }

        let command = new SendEmailCommand(emailData);
        let response = {};
        try {
            response = await ses.send(command);
            emailResponses.push(response);
            console.log('SES email response', response);
        }
        catch (err) {
            console.log('*** Send email error ***', err);
        }
        finally {
            console.log('*** sendEmails END ***');
        }
    }
};

export const handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        let requestJSON = JSON.parse(event.body);
        let emailResponses = await sendEmails(requestJSON);

        body = { ok: true, id: requestJSON.id };
    }
    catch (err) {
        statusCode = 500;
        body = err.message;
    }
    finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    };
};