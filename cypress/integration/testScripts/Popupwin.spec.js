/// <reference types ="cypress" />
describe('Pop up Windows Sample', () =>{
    // it('Pop Up Windows Display',() => {
    //     cy.visit('https://stqatools.com/demo/Windows.php')
    //     cy.contains('new Window')
    //     .invoke('removeAttr', 'target')
    //     .click()
    //     cy.url().should('include','Windows')
    //     cy.get('a.navbar-brand').should('contain','Demo Test')
    // })
    // it('New Windows in a tab', () =>
    //  {
    //     cy.visit('https://stqatools.com/demo/Windows.php')
    //     cy.contains('new Tab')
    //     //cy.contains('New Message Window')
    //     .invoke('removeAttr', 'target')
    //     .click()
    //  })
     

     //Handle Alerts
     it.only('Handling Alerts',() => {
         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         cy.contains('Click for JS Alert').click()
         cy.on('windows:alert', (str) =>{
              expect(str).to.be.equals('I am a JS Alert')
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('windows:alert', (str) =>{
            expect(str).to.be.equals('I am a JS Confirm')
            return false
      })
      cy.get('#result').should('contain','You clicked: Ok')
     // cy.get('#result').should('contain','You clicked: Cancel')
     })
})