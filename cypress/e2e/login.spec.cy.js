describe('oragem hrm', () => {
  it('login - passed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("admin")
    cy.get("[name='password']").type("admin123")
    cy.get(".oxd-button").click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
  })
   it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("test")
    cy.get("[name='password']").type("test123")
    cy.get(".oxd-button").click()
    cy.get('.oxd-alert')
  })
})