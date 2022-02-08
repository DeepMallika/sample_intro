/// <reference types='cypress' />
describe('Types of Locators', () => {
    it('Locate Elements', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-name="menu-2"]').click()
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        //Locate Email
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox').click()
        //Parent and Child
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    })
    it('Locate Elements using - then() & .wrap()', () => {
        cy.visit('http://localhost:4200/')
       cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
          cy.get('[data-name="menu-2"]').click()
        cy.contains('nb-card', 'Horizontal form').find('[for="inputEmail3"]')
            .should('contain', 'Email')
        cy.contains('nb-card', 'Horizontal form').find('[for="inputPassword3"]')
            .should('contain', 'Password')
        //Locate parent
        // const horiForm =  cy.contains('nb-card', 'Horizontal form')
        // horiForm.find('[for="inputEmail3"]').should('contain', 'Email')
        // horiForm.find('[for="inputPassword3"]').should('contain', 'Password')
        // Cypress
        cy.contains('nb-card', 'Horizontal form').then(firstForm => {
            const firstEmailLbl = firstForm.find('[for="inputEmail3"]').text();
            const firstPwdLbl = firstForm.find('[for="inputPassword3"]').text();
           expect(firstEmailLbl).to.be.equals('Email')
            expect(firstPwdLbl).to.be.equals('Password')
       })
       cy.get('[for="inputEmail3"]').invoke('text').then(text => {
           expect(text).to.be.equals('Email')
       })
       //To  verify checkbox attribute
       cy.contains('nb-card','Basic form')
       .find('nb-checkbox')
       .click()
       .find('.custom-checkbox')
       .invoke('attr','class')
       .should('contain','checked')

   //To handle Radio button
   cy.contains('nb-card','Using the Grid')
       .find('[type="radio"]').then(radiobtn => {
           cy.wrap(radiobtn)
           .first()//eq(0)
           .check({force:true})
           .should('be.checked')
            
           cy.wrap(radiobtn)
           .eq(2)
           .check({force:true})
           .should('be.disabled')

           cy.wrap(radiobtn)
           .last()
           .check({force:true})
           .should('be.checked')
       })

})

it.only('Handle Listbox',() =>{
    cy.visit('http://localhost:4200/')
    //Method 1
    cy.get('nav nb-select').click()
    cy.get('.options-list').contains('Dark').click()
    cy.get('nav nb-select').should('contain', 'Dark')

    //Method 2
    cy.get('nav nb-select').then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get('.options-list nb-option').each((listItem, index)=> { //each is like a each loop 
            const ItemText = listItem.text().trim()
            cy.wrap(listItem).click()
            cy.wrap(dropdown).should('contain',ItemText)
            if(index < 3){
                cy.wrap(dropdown).click()
            }
        })
    })
})

    it.only('Handling Web Tables', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('tbody').contains('tr','John').then(TableRow => {
            cy.wrap(TableRow).find('.nb-edit').click()
            cy.wrap(TableRow).find('[placeholder="Age"]').clear()
            cy.wrap(TableRow).find('[placeholder="Age"]').type('30')
            cy.wrap(TableRow).find('.nb-checkmark').click()
            cy.wrap(TableRow).find('td', {timeout:5000}).eq(6).should('contain','30')
        })
    }) 
    
    it.only('Add New User',() => {
        cy.visit('http://localhost:4200/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(TableRow => {
            cy.wrap(TableRow).find('[placeholder="First Name"]').type('Test')
            cy.wrap(TableRow).find('[placeholder="Last Name"]').type('Training')
            cy.wrap(TableRow).find('.nb-checkmark').click()
            //to verify the given values
    })
    cy.get('tbody tr').first().find('td').then(TableCol =>{
        cy.wrap(TableCol).eq(2).should('contain','Test')
        cy.wrap(TableCol).eq(3).should('contain','Training')
    })
})
})