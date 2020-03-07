'use strict'

import AndroidPage from '../../android.page'

import { TIMINGS } from '../../../../constants/timings'

export class LoginPage extends AndroidPage {
  get loginSignUpHeader () {
    return $('android=new UiSelector().className("android.widget.TextView").text("Login / Sign up Form")')
  }

  get emailField () {
    return $('~input-email')
  }

  get passwordField () {
    return $('~input-password')
  }

  get emailErrorMsg () {
    return $('android=new UiSelector().className("android.widget.TextView").text("Please enter a valid email address")')
  }

  get passwordErrorMsg () {
    return $('android=new UiSelector().className("android.widget.TextView").text("Please enter at least 8 characters")')
  }

  get loginButton () {
    return $('~button-LOGIN')
  }

  get loginConfirmationAlert () {
    return $('android=new UiSelector().className("android.widget.TextView").resourceId("android:id/alertTitle")')
  }

  get successConfirmationMessage () {
    return $('android=new UiSelector().className("android.widget.TextView").resourceId("android:id/message")')
  }

  logUserIn (email, password) {
    driver.pause(TIMINGS.TRANSITION)
    this.emailField.setValue(email)
    this.passwordField.setValue(password)
    this.loginButton.click()
  }
}
