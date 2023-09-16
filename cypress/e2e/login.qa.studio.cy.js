describe('Автотесты для формы логина и пароля', function () {
    it('Ввести корректные логин и пароль', function () {
         cy.visit('https://login.qa.studio/'); //посетить указанный сайт
         cy.get('#mail').type('german@dolnikov.ru'); //найти инпут e-mail адреса и ввести в него корректный e-mail
         cy.get('#pass').type('iLoveqastudio1'); //найти инпут пароля и ввести в него корректный пароль
         cy.get('#loginButton').click(); //нажать на кнопку 'Войти'
         cy.contains('Авторизация прошла успешно').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Авторизация прошла успешно'
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что кнопка 'Закрыть (крестик)' содержится в отобразившемся выше уведомлении
     })

     it('Восстановить пароль', function () {
          cy.visit('https://login.qa.studio/'); //посетить указанный сайт
          cy.get('#forgotEmailButton').click(); //нажать на кнопку 'Забыли пароль?'
          cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести e-mail, на который придёт уведомление
          cy.get('#restoreEmailButton').click(); //нажать на кнопку 'Отправить код'
          cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Успешно отправили пароль на e-mail'
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что кнопка 'Закрыть (крестик)' содержится в отобразившемся выше уведомлении
     })

     it('Ввести корректный логин и НЕкорректный пароль', function () {
          cy.visit('https://login.qa.studio/'); //посетить указанный сайт
          cy.get('#mail').type('german@dolnikov.ru'); //найти инпут e-mail адреса и ввести в него корректный e-mail
          cy.get('#pass').type('iLoveq@studio1'); //найти инпут пароля и ввести в него НЕкорректный пароль
          cy.get('#loginButton').click(); //нажать на кнопку 'Войти'
          cy.contains('Такого логина или пароля нет').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Такого логина или пароля нет'
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что кнопка 'Закрыть (крестик)' содержится в отобразившемся выше уведомлении
     })

     it('Ввести НЕкорректный логин и корректный пароль', function () {
          cy.visit('https://login.qa.studio/'); //посетить указанный сайт
          cy.get('#mail').type('german@d0lnikov.ru'); //найти инпут e-mail адреса и ввести в него НЕкорректный e-mail
          cy.get('#pass').type('iLoveqastudio1'); //найти инпут пароля и ввести в него корректный пароль
          cy.get('#loginButton').click(); //нажать на кнопку 'Войти'
          cy.contains('Такого логина или пароля нет').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Такого логина или пароля нет'
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что кнопка 'Закрыть (крестик)' содержится в отобразившемся выше уведомлении
     })

     it('Ввести НЕвалидный логин (без @) и корректный пароль', function () {
          cy.visit('https://login.qa.studio/'); //посетить указанный сайт
          cy.get('#mail').type('germandolnikov.ru'); //найти инпут e-mail адреса и ввести в него e-mail, не содержащий символа '@'
          cy.get('#pass').type('iLoveqastudio1'); //найти инпут пароля и ввести в него корректный пароль
          cy.get('#loginButton').click(); //нажать на кнопку 'Войти'
          cy.contains('Нужно исправить проблему валидации').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Нужно исправить проблему валидации'
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что кнопка 'Закрыть (крестик)' содержится в отобразившемся выше уведомлении
     })

     it('Ввести логин, содержащий заглавные буквы (должны быть автоматически приведены к строчным) и корректный пароль', function () {
          cy.visit('https://login.qa.studio/'); //посетить указанный сайт
          cy.get('#mail').type('GerMan@Dolnikov.ru'); //найти инпут e-mail адреса и ввести в него корректный e-mail, содержащий Заглавные буквы
          cy.get('#pass').type('iLoveqastudio1'); //найти инпут пароля и ввести в него корректный пароль
          cy.get('#loginButton').click(); //нажать на кнопку 'Войти'
          cy.contains('Авторизация прошла успешно').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Авторизация прошла успешно'
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что кнопка 'Закрыть (крестик)' содержится в отобразившемся выше уведомлении
     })

})