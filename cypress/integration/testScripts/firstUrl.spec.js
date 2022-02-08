describe('should test login screen', () => {
    it('should launch login page', () => {
        cy.visit('http://automationpractice.com/index.php')
        //cy.clearLocalStorage()
       })
    it('should click signin button', () => {
        cy.get('.login').click()
    })
    it('should type username and pwd', () => {
        cy.get('#email').type('email@gmail.com')
        cy.get('#passwd').type('www')
        cy.get('#SubmitLogin').click()
    })
//     it('should type username and pwd', () => {
//         cy.get('#pseudonym_session_unique_id').type('deep.mallika1@tcs.com')
//         cy.get('#pseudonym_session_password').type('1M@llik@1')
//         cy.get('button[type="submit"]').click({multiple :true})
//   })
})