'use strict'

import IosPage from '../../ios.page'
import { TIMINGS } from '../../../../constants/timings'

export class LoginPage extends IosPage {
  get loginSignUpHeader () {
    return $('-ios predicate string:type == \'XCUIElementTypeStaticText\' && value == \'Login / Sign up Form\'')
  }

  get emailField () {
    return $('~input-email')
  }

  get passwordField () {
    return $('~input-password')
  }

  get emailErrorMsg () {
    return $('~Please enter a valid email address')
  }

  get passwordErrorMsg () {
    return $('~Please enter at least 8 characters')
  }

  get loginButton () {
    return $('~button-LOGIN')
  }

  get loginConfirmationAlert () {
    return $('-ios predicate string:type == \'XCUIElementTypeAlert\' && name == \'Success\'')
  }

  get successConfirmationMessage () {
    return $('~You are logged in!')
  }

  logUserIn (email, password) {
    driver.pause(TIMINGS.TRANSITION)
    this.emailField.setValue(email)
    this.passwordField.setValue(password)
    this.loginButton.click()
  }
}
