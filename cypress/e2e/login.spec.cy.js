describe('oragem hrm test', () => {

const selectorlist = {
  usernamefield: "[name='username']",
  passwordfield: "[name='password']",
  loginbutton: ".oxd-button",
  SelectiontitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  wrongcredentialAlert: ".oxd-alert",
}

  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernamefield).type("admin")
    cy.get(selectorlist.passwordfield).type("admin123")
    cy.get(selectorlist.loginbutton).click()
    cy.get(selectorlist.SelectiontitleTopbar)
  })
   it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernamefield).type("test")
    cy.get(selectorlist.passwordfield).type("test123")
    cy.get(selectorlist.loginbutton).click()
    cy.get(selectorlist.wrongcredentialAlert)
  })
})