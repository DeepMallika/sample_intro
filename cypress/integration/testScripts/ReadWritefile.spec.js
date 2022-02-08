/// <reference types = "cypress" />
describe(' Read and Write date into a file', () => {
    it('Write into .txt file', () => { 
        cy.writeFile('sample.txt', '\nHow are you?', {flag : 'a+'})//append the data
    })
    it('Read into .txt file', () => { 
        //cy.readFile('sample.txt').should('eq','Hello')// to check entire string
        //cy.readFile('sample.txt').should('contain','Hello')//to check substring
        cy.readFile('sample.txt').should('not.contain','Hello')
    })
    it('Read from JSON file', () => {
        cy.readFile('userData.json')
        .its('username')
        .should('eq','tomsmith')
    })
    it('Write from JSON file', () => {
        cy.writeFile('empData.json',
        {name : 'Test', email : 'testuser@gmail.com'})
    })
    it('Verify Browser Content', () => {
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
    })
    it.only('Upload a file ', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    }) 
})