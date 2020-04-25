const sendGridKey = process.env.MAIL_KEY;
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendGridKey);

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nitin.dhiman1997.nd@gmail.com',
        subject: 'Welcome to TaskApp!',
        text: `Hi ${name}.\nHope you enjoy the Task App!`
    });
    console.log(`Sent welcome mail to ${email}!`)
};

const sendDeletedAccountMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nitin.dhiman1997.nd@gmail.com',
        subject: 'Your Acccount has been removed!',
        text: `Hi ${name}.\nYour account has been deleted from Task App. Please share your feedback.`
    });
    console.log(`Sent Deleted account mail to ${email}!`)
};

module.exports = {
    sendWelcomeMail,
    sendDeletedAccountMail
};