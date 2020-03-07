'use strict'
import { TIMINGS } from '../../constants/timings'

require('dotenv').config()

const platform = process.argv[2].toLowerCase()

const LoginPage = require(`../pages/core/${platform}/logIn.page`).LoginPage

const loginPage = new LoginPage()

const expect = require('chai').expect

describe('Log In', () => {
  before('Navigation to the log in / sign up screen', () => {
    loginPage.loginNav.waitForDisplayed(TIMINGS.GENERIC_WAIT)
    loginPage.loginNav.click()
    loginPage.loginSignUpHeader.waitForDisplayed(TIMINGS.TRANSITION)
  })
  it('should throw an error for invalid email', () => {
    loginPage.logUserIn(process.env.INVALID_EMAIL, process.env.POSITIVE_PASSWORD)
    loginPage.emailErrorMsg.waitForDisplayed(TIMINGS.GENERIC_WAIT)
    expect(loginPage.emailErrorMsg.getText()).to.equal('Please enter a valid email address')
  })
  it('should throw an error for invalid password', () => {
    loginPage.logUserIn(process.env.POSITIVE_USER, process.env.INVALID_PASSWORD)
    loginPage.passwordErrorMsg.waitForDisplayed(TIMINGS.GENERIC_WAIT)
    expect(loginPage.passwordErrorMsg.getText()).to.equal('Please enter at least 8 characters')
  })
  it('should log user in', () => {
    loginPage.logUserIn(process.env.POSITIVE_USER, process.env.POSITIVE_PASSWORD)
    loginPage.loginConfirmationAlert.waitForDisplayed(TIMINGS.GENERIC_WAIT)
    expect(loginPage.successConfirmationMessage.getText()).to.equal('You are logged in!')
  })
})
