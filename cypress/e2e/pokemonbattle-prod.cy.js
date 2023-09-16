describe('Автотест для покупки аватара тренера', function () {
    it('Выполнить последовательность действий', function () {
         cy.visit('https://pokemonbattle.me/login'); //перейти на главную страницу авторизации
         cy.get(':nth-child(1) > .auth__input').type('сюда ввести свой логин от сервиса'); //найти инпут e-mail адреса и ввести в него корректный e-mail
         cy.get('#password').type('сюда ввести свой пароль от сервиса'); ////найти инпут пароля и ввести в него корректный пароль
         cy.get('.auth__button').click(); //нажать на кнопку 'Войти'
         cy.intercept('POST', '/**').as('http-request'); 
         cy.wait('@http-request'); //ожидаем выполнения POST-запросов при открытии личного кабинета тренера
         cy.visit('https://pokemonbattle.me/shop'); //перейти на страницу 'Магазин'
         cy.get(':nth-child(10) > .shop__button').click(); //нажать на кнопку 'Купить' под аватаром тренера №10
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); //на странице ввода реквизитов карты ввести номер первой карты из тестовых примеров от "Альфа банка" (https://pay.alfabank.ru/ecommerce/instructions/merchantManual/pages/index/test_cards.html)
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); //ввести срок действия для карты из примера, упомянутого выше
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввести cvv-код, предназначенный для проверки успешной оплаты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVAN IVANOV'); //ввести имя и фамилию владельца карты
         cy.get('.pay-btn').click(); //нажать на кнопку 'Оплатить'
         cy.get('#cardnumber').type('56456'); //ввести правильный смс-код
         cy.get('.payment__submit-button').click(); //нажать на кнопку 'Оплатить'
         cy.contains('Покупка прошла успешно').should('be.visible'); //проверить, что отобразилось видимое пользователю уведомление, содержащее текст 'Покупка прошла успешно'
         cy.get('.payment__adv').should('be.visible'); //проверить, что кнопка 'Вернуться в магазин' содержится в отобразившемся выше уведомлении

         //после прохождения автотеста для его повторной успешной прогонки заменить в строке 10 цифровое значение аватара тренера в левой половине cypress-локатора ':nth-child(6)', иначе тест упадёт на этом этапе, т.к. такой аватар уже куплен
     })
    })