/// <reference types ="cypress" />
describe('Screenshots Sample', () => {
    it('Entire Page', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.screenshot({capture:"fullPage"})
    })
    it.only('Particular Web Element', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('h1').screenshot("H1-TagScreenshot")
    })
})