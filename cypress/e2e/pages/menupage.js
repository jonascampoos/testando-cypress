class menuPage {

    selectorslist() {
        const selectors = {
             myinfobutton: "[href='/web/index.php/pim/viewMyDetails']",
        }

        return selectors
    }

    accessMyinfo() {

        cy.get(this.selectorslist().myinfobutton).click()
    }
}

export default menuPage