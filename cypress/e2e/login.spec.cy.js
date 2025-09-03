import userData from '../fixtures/userData.json'
import LoginPage from './pages/loginpages.js'
import dashboardpage from './pages/dashboard.js'

const loginPage = new LoginPage()
const dashboard = new dashboardpage()


describe(' login oragem hrm test',  () => {


  })
   it('login - fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWhithAnyUser(userData.userfail.username, userData.userfail.password)
    loginPage.checkAcessInvalid
   })

    it('login - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWhithAnyUser(userData.usersucess.username, userData.usersucess.password)
    dashboard.checkdashboardPage()
  
  })