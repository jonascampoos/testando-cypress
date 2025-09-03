class LoginPage {

    selectorslist() {
        const selectors = {
            usernamefield: "[name='username']",

            Passwordfield: "[name='password']",

            loginbutton: ".oxd-button",

            wrongcredentialAlert: "('.oxd-alert')"

        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWhithAnyUser(username, Password) {
        cy.get(this.selectorslist().usernamefield).type(username)
        cy.get(this.selectorslist().Passwordfield).type(Password)
        cy.get(this.selectorslist().loginbutton).click()
    }

    checkAcessInvalid() {
        cy.get(this.selectorslist().wrongcredentialAlert)
    }

}

export default LoginPage