const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email , name) => {
    sgMail.send({
        to: email,
        from: 'parvashah2610@gmail.com',
        subject: 'Thanks For Joining in!',
        text: `Welcom to the app , ${name} . Let me know how do you like the app.`
    })
}

const sendCancelEmail = (email , name ) => {
    sgMail.send({
        to: email,
        from: 'parvashah2610@gmail.com',
        subject: 'Thankyou for Staying with Us',
        text: `Goodbye , ${name} . Is their anything we could've done to keep you aboard ?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}