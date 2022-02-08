///<reference types="cypress"/>
describe('API Testing - Trello Aplication',() => {
    it('Create a new Board', () => {
        cy.visit('/')
        cy.intercept({
            method :'GET',
            url: '/api/boards'
        }).as('boards')
        cy.visit('/')
        cy.wait('@boards')
        .its('response.statusCode')
        .should('eq',200)
        cy.get('[data-cy=board-item]').should('have.length', 4)
    })
    it('Return empty List', () => {
        cy.intercept({
            method :'GET',
            url: '/api/boards'
        },{
            body: []
        }).as('boards')
        cy.visit('/')
    })
    it('Pass value from fixtures', () => {
        cy.intercept({
            method :'GET',
            url: '/api/boards'
        },{
            fixture: 'boards'
        }).as('boards')
        cy.visit('/')
    })
    it.only('Network Failure', () => {
        cy.intercept({
            method :'GET',
            url: '/api/boards'
        },{
            forceNetworkError: true 
        }).as('boards')
        cy.visit('/')
    })
})