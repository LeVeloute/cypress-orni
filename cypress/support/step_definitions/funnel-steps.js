import { FunnelPage } from "../../page-objects/funnel-page"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const funnelPage = new FunnelPage()

Given('I open the purchase funnel', () => {
  funnelPage.navigateToFunnel();
})

When('I click on Yes', () => {
  funnelPage.goToLoginStep()
})

When('I click on No', () => {
  funnelPage.skipLoginStep()
})

Then('Login step is visible', () => {
  funnelPage.checkLoginStepVisibility()
})

Then('Search vehicule step is visible', () => {
  funnelPage.checkSearchVehiculeStepVisibility()
})
