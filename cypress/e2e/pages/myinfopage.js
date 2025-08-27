class myinfopage {

    selectorslist() {
        const selectors = {
              firstnamefield: "[name='firstName']",
              middlenamefield: "[name='middleName']",
              lastnamefield: "[name='lastName']",
              genericfield: ".oxd-input",
              datafield: "[placeholder='yyyy-dd-mm']",
              closebutton: ".--close",
              savebutton: "[type='submit']",
              nationalitybutton: "[clear='false']",
              nationalityamericanbutton: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
              maritalstatusbutton: "[clear='false']",
              maritalsiglebutton: '.oxd-select-dropdown > :nth-child(2)',
              datanascimento: "[placeholder='yyyy-dd-mm']"
        }
        return selectors
    }

    fillpersonaldetails(firstName, middleName, lastName) {

            cy.get(this.selectorslist().firstnamefield).clear().type(firstName)
            cy.get(this.selectorslist().middlenamefield).clear ().type(middleName)
            cy.get(this.selectorslist().lastnamefield).clear ().type(lastName)
    }

    fillemployeedetail(nickname, OtherId, Driverslicense, licenseExpiry, DateofBirth) {

        cy.get(this.selectorslist().genericfield).eq(4).clear ().type(nickname)
        cy.get(this.selectorslist().genericfield).eq(5).clear ().type(OtherId)
        cy.get(this.selectorslist().genericfield).eq(6).clear ().type(Driverslicense)
        cy.get(this.selectorslist().datafield).eq(0).clear ().type(licenseExpiry)
        cy.get(this.selectorslist().datanascimento).eq(1).clear ({force:true}).type(DateofBirth)
        cy.get(this.selectorslist().closebutton). click()
    }

    saveForm() {
        cy.get(this.selectorslist().savebutton).eq(0). click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillstatus() {
        cy.get(this.selectorslist().closebutton). click({force: true})
        cy.get(this.selectorslist().nationalityamericanbutton). click ()
        cy.get(this.selectorslist().maritalstatusbutton).eq(1). click()
        cy.get(this.selectorslist().maritalsiglebutton). click()

    }

}

export default myinfopage