///<reference types="cypress"/>
 describe('Zero Web Security', () =>{
    const user_id = 'Deep Mallika'
    const pwd = '@123456@'
     before(() => {
         cy.visit('http://zero.webappsecurity.com/')
     })
     it('Login id and Password - Storage', () => {
        cy.window().should(win => {
            expect(win.sessionStorage.length).to.eql(2)
            win.sessionStorage.setItem('user_password',pwd)
            expect(win.sessionStorage.getItem('user_password')).to.eql('@123456@')
            win.sessionStorage.setItem('user_login',user_id)
            expect(win.sessionStorage.getItem('user_login')).to.eql('Deep Mallika')
        })
    })   
        //     //CREATE
        //     cy.setCookie('user_login','Deep Mallika')
        //    //READ
        //     cy.getCookie('user_login')
        //    //UPDATE
        //     cy.setCookie('user_password','@123456@')
        //     cy.getCookie('user_password')
       it('Login Page', () =>{
            cy.get('#signin_button').click() 
            cy.get('#user_login').type(user_id)
            cy.get('#user_password').type(pwd)
            cy.get('input[type="checkbox"]').check()
            cy.get('input[type="submit"]').click()
            
             //CLEAR
            //    cy.clearCookie('Username')
           //    cy.getCookie('Username')
      }) 
    })
     