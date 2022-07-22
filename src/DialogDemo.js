import { LitElement, html, css } from 'lit';
import '@vaadin/text-field';
import '@vaadin/dialog';
import {dialogRenderer} from "@vaadin/dialog/lit";

export class DialogDemo extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      username: { type: String },
      signUpOpened: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--dialog-demo-background-color);
      }

      main {
        flex-grow: 1;
      }

    `;
  }

  constructor() {
    super();
    this.title = 'My app';
    this.signUpOpened = true;
    this.username = "Bob";
  }

  signUpRenderer() {
    return html`
        <vaadin-text-field value="${this.username}" @change="${(e) => {
          this.username = e.target.value
        }}" label="email"></vaadin-text-field>

        <vaadin-text-field value="${this.username}" }}" label="email-copy"></vaadin-text-field>
        <p>${this.username}</p>

    `;
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <vaadin-dialog
          header-title="SignUp"
          .opened="${this.signUpOpened}"
          @opened-changed="${e => (this.signUpOpened = e.detail.value)}"
          ${dialogRenderer(this.signUpRenderer)}
          id="signUp">

        </vaadin-dialog>
      </main>

    `;
  }
}
