
describe('manejo_checksbox', () => {
    
    it('ejemplo_manejo_checkbox_radiobottom', () => {
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks')
        cy.get('#flexCheckDefault').click({force:true}).should('be.checked')
        cy.get('#flexCheckChecked').click({force:true})
        cy.get('#flexCheckDisabled').should('be.disabled')


        cy.get('#flexRadioDefault1').check({force:true})
        cy.get('#flexRadioDefault2').should('not.be.checked')
        cy.get('#flexRadioDisabled').should('be.disabled')
    })

})