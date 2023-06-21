const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourmail@gmail.com',
        pass: 'yourpassword'
    }
});

app.post('/newPost', (req, res) => {
    let { userMail, title, message } = req.body;
    console.log(userMail, title, message);
    const mailOptions = {
        from: 'testpostfornode@gmail.com',
        to: userMail,
        subject: title,
        text: message,
        attachments: [
            {
                filename: 'index.html',
                path: './dist/index.html' // Укажите путь к файлу, который хотите прикрепить
            }
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Ошибка при отправке письма');
        } else {
            console.log('Письмо успешно отправлено: ' + info.response);
            res.status(200).send('Письмо успешно отправлено');
        }
    });
});

app.get('/', (req, res) => {
    res.send('index.html');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Сервер запущен на порту ' + PORT);
});
