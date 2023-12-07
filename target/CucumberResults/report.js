$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/healthcare/OpenMRS_Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  To vaidate and check all aspects of Login functionaity",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@OpenMRS"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@login_feature"
    }
  ]
});
formatter.scenario({
  "name": "Succesfull Login validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OpenMRS"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@login_feature"
    },
    {
      "name": "@temp"
    },
    {
      "name": "@login"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "STEPS_Common.as_a_user_launch_application(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.openmrs.org/openmrs/index.htm\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.navigate_to_url(String)"
});
formatter.write("Navigated to URL: https://demo.openmrs.org/openmrs/index.htm");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "STEPS_Login.enter_user_name(String)"
});
formatter.write("Entered Username: admin");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.enter_password(String)"
});
formatter.write("Entered password: Admin123");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.click_submit_button()"
});
formatter.write("Click Submit Button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be logged in to the application with title as \"Home\"",
  "keyword": "Then "
});
formatter.match({
  "location": "STEPS_Login.should_be_logged_in_to_the_application(String)"
});
formatter.write("Title Matched. Login Successfull");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.close_the_browser()"
});
formatter.write("Browser Closed");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should not be able to login with in valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "name": "navigate to url as \"https://demo.openmrs.org/openmrs/index.htm\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter user name as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "name": "application should give error message as \"\u003cErrorMsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMsg"
      ]
    },
    {
      "cells": [
        "admin",
        "wrng",
        "Invalid username/password. Please try again."
      ]
    },
    {
      "cells": [
        "wrng",
        "Admin123",
        "Invalid username/password. Please try again."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should not be able to login with in valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OpenMRS"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@login_feature"
    },
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "STEPS_Common.as_a_user_launch_application(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.openmrs.org/openmrs/index.htm\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.navigate_to_url(String)"
});
formatter.write("Navigated to URL: https://demo.openmrs.org/openmrs/index.htm");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "STEPS_Login.enter_user_name(String)"
});
formatter.write("Entered Username: admin");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"wrng\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.enter_password(String)"
});
formatter.write("Entered password: wrng");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.click_submit_button()"
});
formatter.write("Click Submit Button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "application should give error message as \"Invalid username/password. Please try again.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "STEPS_Login.application_should_give_error_message_as(String)"
});
formatter.write("PASSED: Actual and Expected Error Message Matched");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.close_the_browser()"
});
formatter.write("Browser Closed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with in valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OpenMRS"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@login_feature"
    },
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "STEPS_Common.as_a_user_launch_application(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.openmrs.org/openmrs/index.htm\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.navigate_to_url(String)"
});
formatter.write("Navigated to URL: https://demo.openmrs.org/openmrs/index.htm");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name as \"wrng\"",
  "keyword": "When "
});
formatter.match({
  "location": "STEPS_Login.enter_user_name(String)"
});
formatter.write("Entered Username: wrng");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.enter_password(String)"
});
formatter.write("Entered password: Admin123");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.click_submit_button()"
});
formatter.write("Click Submit Button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "application should give error message as \"Invalid username/password. Please try again.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "STEPS_Login.application_should_give_error_message_as(String)"
});
formatter.write("PASSED: Actual and Expected Error Message Matched");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.close_the_browser()"
});
formatter.write("Browser Closed");
formatter.result({
  "status": "passed"
});
formatter.uri("features/healthcare/OpenMRS_RegisterAPatient.feature");
formatter.feature({
  "name": "validate register patient",
  "description": "  To check when user register a patient after entering all the details of the patient then,\n  patient records are saved in to the system and is displayed in Patient Records tab",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@OpenMRS"
    },
    {
      "name": "@register_a_patient"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user when I launch application in \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "STEPS_Common.as_a_user_launch_application(String)"
});
formatter.write("Chrome Driver Invoked");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url as \"https://demo.openmrs.org/openmrs/index.htm\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Common.navigate_to_url(String)"
});
formatter.write("Navigated to URL: https://demo.openmrs.org/openmrs/index.htm");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "STEPS_Login.enter_user_name(String)"
});
formatter.write("Entered Username: admin");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.enter_password(String)"
});
formatter.write("Entered password: Admin123");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_Login.click_submit_button()"
});
formatter.write("Click Submit Button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be logged in to the application with title as \"Home\"",
  "keyword": "Then "
});
formatter.match({
  "location": "STEPS_Login.should_be_logged_in_to_the_application(String)"
});
formatter.write("Title Matched. Login Successfull");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"RegisterAPatient\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_RegisterAPatient.i_click_on_tab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register a Patient",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OpenMRS"
    },
    {
      "name": "@register_a_patient"
    },
    {
      "name": "@register_a_patient"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "Register a Patient Form is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "STEPS_RegisterAPatient.register_a_Patient_Form_is_displayed()"
});
formatter.write("Register a patient page is displayed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "register a patient form fields is filled as \"Akash\",\"Tyagi\",\"Male\",\"12/12/84\",\"Add1\",\"Add2\",\"Pune\",\"MH\",\"India\",\"411012\",\"1234567891\"",
  "keyword": "When "
});
formatter.match({
  "location": "STEPS_RegisterAPatient.all_the_register_a_patient_form_fields_is_filled_as(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm button is clicked",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_RegisterAPatient.confirm_button_is_clicked()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat bddcucumber.healthcare.stepdefs.STEPS_RegisterAPatient.confirm_button_is_clicked(STEPS_RegisterAPatient.java:71)\n\tat ✽.confirm button is clicked(features/healthcare/OpenMRS_RegisterAPatient.feature:37)\n",
  "status": "pending"
});
formatter.step({
  "name": "patient is register in the system with patient Id generated",
  "keyword": "Then "
});
formatter.match({
  "location": "STEPS_RegisterAPatient.patient_is_register_in_the_system_with_patient_Id_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "patient records are displayed in Find patient tab under menu",
  "keyword": "And "
});
formatter.match({
  "location": "STEPS_RegisterAPatient.patient_records_are_displayed_in_Find_patient_tab_under_menu()"
});
formatter.result({
  "status": "skipped"
});
});