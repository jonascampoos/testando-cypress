import userData from '../fixtures/userData.json'
import LoginPage from './pages/loginpages.js'
import dashboardpage from './pages/dashboard.js'
import menupage from './pages/menupage.js'
import myInfopage from './pages/myinfopage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboard = new dashboardpage()
const menuPage = new menupage()
const myinfopage = new myInfopage()

describe('oragem hrm test',  () => {

  it('User info update - success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWhithAnyUser(userData.usersucess.username, userData.usersucess.password)

    dashboard.checkdashboardPage()

    menuPage.accessMyinfo()

    myinfopage.fillpersonaldetails(chance.first(), chance.last(), chance.name())
    myinfopage.fillemployeedetail(chance.string(), chance.ip(), chance.ip(), '2028-04-12', '2002-03-09')
    myinfopage.fillstatus()
    myinfopage.saveForm()


  })
})