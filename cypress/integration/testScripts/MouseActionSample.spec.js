/// <reference types="cypress"/>

describe('Mouse Action', () =>{
    it('Mouse Click', () =>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.form-control').type('phone')
        cy.get('.input-group-btn').trigger('click')
    })
    it('Mouse Move', () =>{
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(3) > .dropdown-toggle')
            .invoke('show')
            .should('be.visible')
            .trigger('mouseover')
        cy.get('ul.nav li:nth-child(3) > div')
          .invoke('show')
          .should('be.visible')   
        cy.get('ul.nav li:nth-child(3) > div ul li:nth-child(2)').click()  
    })
    it('Mouse Right Click', () =>{
      cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
      cy.contains('right click me').rightclick()
      cy.get('.context-menu-icon-copy').click()
      cy.on('windows:alert', (str) => {
          expect(str).to.equal('clicked: copy')
      })
    })
    it('Mouse Double Click',() =>{
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.contains('Copy Text').dblclick()
        // cy.get('#field2').should('contain','Hello Mallika')
        // cy.get('#field2').invoke('text').then(text => {
        //     expect(text).to.be.equals('Hello World')
        // })
    })
})