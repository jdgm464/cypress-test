/// <reference types="cypress" />

describe('Webelement', () => {
   it('ejemplos_webelement', () => {
        cy.visit('https://www.google.com')
        cy.contains('.pHiOh', 'Sobre Google')
        cy.contains('.pHiOh', 'Publicidad')
        cy.contains('.L3eUgb', 'Google').contains('Preferencias')
        cy.contains('.ayzqOc ', 'Preferencias')
        cy.contains('Buscar con Google').get('.gNO89b')
   })

})