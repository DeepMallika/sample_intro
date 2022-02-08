/// <reference types = 'cypress' />
describe('Asynchronous Nature sample', () => {
    it('Launch URL', () => {
      cy.visit("https://books.toscrape.com/index.html") //No Command is executed
       cy.contains('Travel').click() //No Command is executed
   
       cy.url().should('include', 'travel').pause()
       console.log("Before Test Execution") // Log to check the async behaviour
       cy.get("h1").should('be.visible')   //No Command is executed
       cy.get('.image_container').its('length').should('eq',11).debug()
      //To make this log as asynchronous
      cy.get("h1").should("be.visible").then( () => {
        console.log("After Test Execution")
      })
    })
    it('selecting rom dropdown', () => {
      cy.visit('http://demo.automationtesting.in/Register.html')
      cy.get('#Skills').select('Android')
      cy.get('#Skills').should('have.value','Android')
      cy.get('span[role="combobox"]').click()
      cy.get('.select2-search-field').type('Ind')
      cy.get('.select2-search-field').type('{enter}')
      cy.get('span[role="combobox"]').should('have.text','India')
    })
  })  
  