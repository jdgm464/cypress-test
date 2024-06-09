/// <reference types="cypress" />
describe('localizadores', () => {
    it('tipo_localizadores', () => {
        cy.visit("https://www.google.com/")

        //

        cy.get('textarea')

        // Localizar id

        cy.get('#APjFqb')

        // localizar por su clase

        cy.get('.gLFyf')

        //localizar por atributo

        cy.get('[maxlength]')

        //localizar por el valor de su atributo

        cy.get('[maxlength="2048"]')

        //combinar localizadores

        cy.get('textarea[maxlength="2048"].gLFyf')

    })

})