/// <reference types ="cypress" />
describe('IFrame Sample', () =>{
    it.only('Accessing IFrame', () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function ($myframe){
            const frame= $myframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('Hello Wecome')
        })
    })
})