import 'polymer/polymer-element.html'
import './shell.html'

class AppShell extends Polymer.Element {
  static get is () { return 'app-shell' }

  static get properties () {
    return {
      test: {
        type: String
      }
    }
  }
}

window.customElements.define(AppShell.is, AppShell)