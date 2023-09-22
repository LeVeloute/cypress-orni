export class FunnelPage {

    navigateToFunnel() {
        cy
            .visit('https://www.ornikar.com/assurance-auto/souscription')
    }

    goToLoginStep() {
        cy
            .get('._Container_ivlm4_1 > :nth-child(1)') //would need test-id
            .click()
    }

    skipLoginStep() {
        cy
            .get('._Container_ivlm4_1 > :nth-child(2)') //would need test-id
            .click()
    }

    checkLoginStepVisibility() {
        cy
            .get('#email') //would need test-id
    }

    checkSearchVehiculeStepVisibility() {
        cy
            .get('._Choices_jarxt_3 > :nth-child(1)') //would need test-id
    }
}