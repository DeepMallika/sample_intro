/// <reference types= "cypress"/>
describe('Sample on Xpath', () => {
    it('xpath Locator', ()=> {
        cy.visit('https://the-internet.herokuapp.com/login')
        // cy.xpath("//input[@id='username']").type('tomsmith')
        // cy.xpath("//input[@id='password']").type('SuperSecretPassword!')
        // cy.get('#username').type('tomsmith')
        // cy.get('#password').type('SuperSecretPassword!')
        // cy.get('.radius').click()
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('.radius').click()
    })    
})