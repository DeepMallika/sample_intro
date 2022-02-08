/// <reference types="cypress"/>
describe('Viewport And Device Emulation', () => {
    it('720p Resolution', () => {
        cy.viewport(1280,720)
        cy.visit('http://www.example.com/')
        cy.wait(1000)//unconditionally waiting
    })
    it('1080p Resolution', () => {
        cy.viewport(1980,1080)
        cy.visit('http://www.example.com/')
        cy.wait(800)
    })
    it.skip('i-pad2 Landscape Resolution', () => {
        cy.viewport('ipad-2','landscape')//be default : portrait
        cy.visit('http://www.example.com/')
        cy.wait(600)
    })
    it.skip ('iphone-4 Lanscape Resolution', () => {
        cy.viewport('iphone-4','landscape')
        cy.visit('http://www.example.com/')
        
    })
})