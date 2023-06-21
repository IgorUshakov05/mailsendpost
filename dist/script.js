document.getElementById('send').addEventListener('submit', (event) => {
    event.preventDefault();
    let mess = {
        userMail: document.getElementById('recipientEmail').value,
        title: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    fetch('/newPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mess)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
})