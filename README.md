# Отправка письма на почту

Проект "Отправка письма на почту" представляет собой простую веб-страницу, которая позволяет пользователям отправлять электронные письма на указанные адреса получателей.

## Требования

Для использования данного проекта вам понадобится веб-браузер.

## Установка и запуск

1. Скачайте проект на свой компьютер или склонируйте репозиторий с помощью следующей команды Git:

   ```bash
   git clone <URL репозитория>
<div class="form-group">
    <label for="recipientEmail">Адрес получателя</label>
    <input type="email" class="form-control" placeholder="example@gmail.com" id="recipientEmail" required>
</div>
<div class="form-group">
    <label for="subject">Тема письма</label>
    <input type="text" class="form-control" placeholder="Скидка 20%" id="subject" required>
</div>
<div class="form-group">
    <label for="message">Сообщение</label>
    <textarea placeholder="Мы предоставляем вам скидку!" class="form-control" id="message" rows="5" required></textarea>
</div>
<button type="submit" class="btn btn-primary w-25">Отправить</button>


Вы можете скопировать этот код и использовать его в вашем файле README.md. Пожалуйста, замените `<URL репозитория>` на фактический URL вашего репозитория.
