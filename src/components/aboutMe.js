class AboutMe extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    const container = document.createElement("section");
    container.classList.add("container");
    container.innerHTML = `
      <img src="/public/me.jpeg" class="my-image"/>
      <h1 class="name">Marc Garcia i Mullon</h1>
      <p class="job-title">Software Enginner</p>
      <p class="location">Oslo, Norway</p>
    `;
    styles.textContent = `
      .container{
        text-align: center;
      }
      .my-image{
        border-radius: 100%;
        filter: grayscale(1);
        transition: filter 0.375s ease-in-out;
      }
      .my-image:hover{
        filter: grayscale(0);
        transition: filter 0.375s ease-in-out;
      }
      .name{
        font-size: 2rem;
        margin-bottom: 5px;
      }
      .job-title{
        font-size: 1rem;
      }
      .location{
        font-size: 0.9rem;
        font-weight: 300;
      }
    `;
    shadowRoot.appendChild(styles);
    shadowRoot.appendChild(container);
  }
}

window.customElements.define("mgm-aboutme", AboutMe);
