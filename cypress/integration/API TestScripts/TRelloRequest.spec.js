///<reference types="cypress"/>
describe('API Testing - Trello Aplication',() => {
    // beforeEach(() => {
    //     cy.request({
    //         method: 'POST',
    //         url: '/api/reset'
    //     })
    // })
    it('Create a new Board', () => {
        cy.visit('/')
    })
    it.only('Create a new Board', () => {
    cy.visit('/')
    cy.request({
        method: 'POST',
        url: '/api/boards',
        body: {
            'name' :'Create Cypress Samples'
        }
    })
    })
    it('Update the Board Name', () => {
        cy.visit('/')
        cy.request({
            method: 'PATCH',
            url: '/api/boards/83458413294',
            body: {
                'name' :'Update the board name'
            }
        })
        })
        it('Delete the Board Name', () => {
            cy.visit('/')
            cy.request({
                method: 'DELETE',
                url: '/api/boards/44089894283',
                body: {
                    'name' :'Delete the board name'
                }
            })
            })
})