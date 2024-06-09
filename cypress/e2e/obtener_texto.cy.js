describe('obtener_texto', () => {
    it('ejemplo_obtener_texto', () => {
        cy.visit('https://www.amazon.com.ve')
        cy.get('[for="twotabsearchtextbox"]').should('contain', 'Buscar Amazon.com.ve')


        cy.get('[for="twotabsearchtextbox]').then (label=>{
            const labelText = label.text()
            expect(labelText).to.equal('Buscar Amazon.com.ve')
            cy.wrap(labelText).should('countain','Buscar Amazon.com.ve')
        })
    })

})