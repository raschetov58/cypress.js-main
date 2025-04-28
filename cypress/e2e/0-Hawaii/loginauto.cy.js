describe('Проверка формы логина', function() {
    
  
  it ('Позитивный кейс: верный логин, верный пароль', function() {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#loginButton').should('be.disabled');
      
    })
  })