import userData from '../fixtures/userData.json'
import LoginPage from './pages/loginpages.js'
import dashboardpage from './pages/dashboard.js'
import menupage from './pages/menupage.js'
import myInfopage from './pages/myinfopage.js'

const loginPage = new LoginPage()
const dashboard = new dashboardpage()
const menuPage = new menupage()
const myinfopage = new myInfopage()

describe('oragem hrm test',  () => {

  it.only('User info update - success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWhithAnyUser(userData.usersucess.username, userData.usersucess.password)

    dashboard.checkdashboardPage()

    menuPage.accessMyinfo()

    myinfopage.fillpersonaldetails('jonas', 'campos', 'costa')
    myinfopage.fillemployeedetail('lonhin', '1234', '1542', '2028-04-12', '2002-03-09')
    myinfopage.fillstatus()
    myinfopage.saveForm()


  })
   it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type(userData.userfail.username)
    cy.get(selectorlist.passwordfield).type(userData.userfail.password)
    cy.get(selectorlist.loginbutton).click()
    cy.get(selectorlist.wrongcredentialAlert)
  })
})