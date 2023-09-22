Feature: Funnel page

  Background:
    Given I open the purchase funnel

  Scenario: Login on first step
    When I click on Yes
    Then Login step is visible

  Scenario: Do not login on first step
    When I click on No
    Then Search vehicule step is visible
