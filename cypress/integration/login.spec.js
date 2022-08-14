/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('cesar-felipe93@hotmail.com')
        cy.get('#password').type('@cesar123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', ('Minha conta'))
    });

    it('Deve exibir uma mensagem de erro ao colocar usuario ou senha inválidos', () => {
        cy.get('#username').type('cesarfelipe93@hotmail.com')
        cy.get('#password').type('@cesar1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , ('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário'))
    });
});