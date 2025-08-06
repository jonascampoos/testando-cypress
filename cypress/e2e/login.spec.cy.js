import userData from '../fixtures/userData.json'

describe('oragem hrm test', () => {

const selectorlist = {
  usernamefield: "[name='username']",
  passwordfield: "[name='password']",
  loginbutton: ".oxd-button",
  SelectiontitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  wrongcredentialAlert: ".oxd-alert",
  myinfobutton: "[href='/web/index.php/pim/viewMyDetails']",
  firstnamefield: "[name='firstName']",
  middlenamefield: "[name='middleName']",
  lastnamefield: "[name='lastName']",
  genericfield: ".oxd-input",
  datafield: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
  closebutton: ".--close",
  savebutton: "[type='submit']",
  nationalitybutton: "[clear='false']",
  nationalityamericanbutton: '.oxd-select-dropdown > :nth-child(5)',
  maritalstatusbutton: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
  maritalsiglebutton: '.oxd-select-dropdown > :nth-child(2)',
  datanascimento: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
}

  it.only('login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type(userData.usersucess.username)
    cy.get(selectorlist.passwordfield).type(userData.usersucess.password)
    cy.get(selectorlist.loginbutton).click()
    cy.get(selectorlist.SelectiontitleTopbar)
    cy.get(selectorlist.myinfobutton). click()
    cy.get(selectorlist.firstnamefield).clear ().type("jonas")
    cy.get(selectorlist.middlenamefield).clear ().type("campos")
    cy.get(selectorlist.lastnamefield).clear ().type("costa")
    cy.get(selectorlist.genericfield).eq(4).clear ().type("lonhin")
    cy.get(selectorlist.genericfield).eq(5).clear ().type("1254")
    cy.get(selectorlist.genericfield).eq(6).clear ().type("45554")
    cy.get(selectorlist.datafield).eq(0).clear ().type("2025-03-01")
    cy.get(selectorlist.closebutton). click()
    cy.get(selectorlist.nationalitybutton).eq(0). click()
    cy.get(selectorlist.nationalityamericanbutton). click ()
    cy.get(selectorlist.maritalstatusbutton). click()
    cy.get(selectorlist.maritalsiglebutton). click()
    cy.get(selectorlist.datanascimento).clear ().type("2002-03-09")
    cy.get(selectorlist.closebutton). click()
    cy.get(selectorlist.savebutton).eq(0). click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
   it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type(userData.userfail.username)
    cy.get(selectorlist.passwordfield).type(userData.userfail.password)
    cy.get(selectorlist.loginbutton).click()
    cy.get(selectorlist.wrongcredentialAlert)
  })
})