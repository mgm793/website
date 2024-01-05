import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles as elementStyles} from "./styles";
import { github } from '../svgs/github';
import { linkedin } from '../svgs/linkedin';
import { URLS } from '../../DATA';
import { pin } from "../svgs/pin";

@customElement('mgm-cta')
export class CTA extends LitElement{
  static styles = elementStyles;
  render(){
    return html`
      <section class="cta">
        <div class="info">
          <h1>Marc Garcia i Mullon</h1>
          <h3 class="subtitle">senior software developer</h3>
          <p class="location">
            ${pin} Oslo, Norway
          </p>
          <div class="links">
            <a 
              href=${URLS.github} 
              alt="github" 
              target="_blank"
            >
              ${github}
            </a>
            <a 
              href=${URLS.linkedin} 
              alt="linkedin" 
              target="_blank"
            >
              ${linkedin}
            </a>
          </div>
        </div>
        <img 
          src="/src/assets/me.png" 
          alt="Marc'a picture" 
          class="picture" 
          width="200"
        >
      </section>
    `;
  }
}