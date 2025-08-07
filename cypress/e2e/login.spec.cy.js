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
  datafield: "[placeholder='yyyy-dd-mm']",
  closebutton: ".--close",
  savebutton: "[type='submit']",
  nationalitybutton: "[clear='false']",
  nationalityamericanbutton: '.oxd-select-dropdown > :nth-child(27)',
  maritalstatusbutton: "[clear='false']",
  maritalsiglebutton: '.oxd-select-dropdown > :nth-child(2)',
  datanascimento: "[placeholder='yyyy-dd-mm']"
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
    cy.get(selectorlist.closebutton). click({force: true})
    cy.get(selectorlist.nationalitybutton).eq(0). click()
    cy.get(selectorlist.nationalityamericanbutton). click ()
    cy.get(selectorlist.maritalstatusbutton).eq(1). click()
    cy.get(selectorlist.maritalsiglebutton). click()
    cy.get(selectorlist.datanascimento).eq(1).clear ({force:true}).type("2002-03-09")
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