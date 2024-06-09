describe('validacion_get', () => {
    it.only('validando_boton_buscar_con_google', () => {
        cy.visit('https://www.google.com/')
        cy.get('.gNO89b').should('be.enabled')
    })

    it('validar_boton_de_texto', () =>{
        cy.visit('https://www.google.com/')
        cy.get('.RNNXgb')


    })


})