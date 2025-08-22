class dashboardpage {

    selectorslist() {
        const selectors = {
             dashboardGrid: ".oxd-topbar-header-breadcrumb-module",
        }

        return selectors
    }

    checkdashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorslist().dashboardGrid).should('be.visible')
    }
}

export default dashboardpage