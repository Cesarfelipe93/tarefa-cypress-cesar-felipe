/// <reference types="cypress" />

describe('Funcionalidade de página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/?product_cat=clothing&s=&post_type=product')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
    });

    it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 4

        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button')


        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });








});