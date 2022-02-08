/// <reference types ="cypress"/>
describe('Fixture Sample', () => {
    it('Using Static Data', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })
    it('Using Static Data', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('user').then ( (user) => { 
            const strUser = user.username
            const strPwd = user.password
            cy.get('#username').type(strUser)
            cy.get('#password').type(strPwd)
        })
    
        cy.get('.radius').click()
    })
    it.only('Using Custom Commands', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    //Using Custom Commands
    //cy.login('tomsmith','SuperSecretPassword!')
    //Using Custom Commands ad Fixtures
    cy.fixture('user').then ( (user) => { 
        const strUser = user.username
        const strPwd = user.password
        cy.login(strUser,strPwd)
    })
    })   
}) 