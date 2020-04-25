const sendGridKey = process.env.MAIL_KEY;
const sgMail = require('@sendgrid/mail');

let cnt = 0;

// 86400000
setInterval(() => {
    cnt = 0
}, 86400000);

sgMail.setApiKey(sendGridKey);

const sendWelcomeMail = (email, name) => {
    const message = {
        to: email,
        from: 'nitin.dhiman1997.nd@gmail.com',
        subject: 'Welcome to TaskApp!',
        text: `Hi ${name}.\nHope you enjoy the Task App!`
    };

    if (cnt <= parseInt(process.env.MAIL_LIMIT, 10)) {
        sendEmail(message);
        console.log(`Sent welcome mail to ${email}!`);
        cnt += 1;
    } else {
        console.log('Limit Crossed for mail!')
    }
};

const sendDeletedAccountMail = (email, name) => {
    const message = {
        to: email,
        from: 'nitin.dhiman1997.nd@gmail.com',
        subject: 'Your Account has been removed!',
        text: `Hi ${name}.\nYour account has been deleted from Task App. Please share your feedback.`
    };
    if (cnt <= parseInt(process.env.MAIL_LIMIT, 10)) {
        sendEmail(message);
        console.log(`Sent Deleted account mail to ${email}!`);
        cnt += 1;
    } else {
        console.log('Limit Crossed for mail!')
    }
};

const sendEmail = (message) => {
    sgMail.send(message)
};

module.exports = {
    sendWelcomeMail,
    sendDeletedAccountMail
};