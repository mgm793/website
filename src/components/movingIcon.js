class MovingIcon extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    const content = document.createElement("div");
    style.textContent = `
      #loadingLogo {
        width: 200px;
      }
        
      #loadingLogo path:nth-child(1) {
        stroke-dasharray: 755;
        stroke-dashoffset: 755;
          animation: line-animation 2s ease forwards;
      }
    
      #loadingLogo path:nth-child(2) {
        stroke-dasharray: 507;
        stroke-dashoffset: 507;
        animation: line-animation 2s ease forwards 0.3s;
      }
      #loadingLogo path:nth-child(3) {
        stroke-dasharray: 247;
        stroke-dashoffset: 247;
        animation: line-animation 2s ease forwards 0.6s;
      }
      #loadingLogo path:nth-child(4) {
        stroke-dasharray: 399;
        stroke-dashoffset: 399;
        animation: line-animation 2s ease forwards 0.9s;
      }
      @keyframes line-animation {
        to {
          stroke-dashoffset: 0;
        }
      }
    `;
    content.innerHTML = `
    <svg
        width="343"
        height="106"
        viewBox="0 0 343 106"
        fill="none"
        display="block"
        id="loadingLogo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M107.104 2.19998V103H96.88V22.36L57.28 90.184H52.24L12.64 22.792V103H2.41602V2.19998H11.2L54.976 76.936L98.32 2.19998H107.104Z"
          stroke="white"
        />
        <path
          d="M164.283 26.68C174.171 26.68 181.755 29.176 187.035 34.168C192.315 39.064 194.955 46.36 194.955 56.056V103H185.163V91.192C182.859 95.128 179.451 98.2 174.939 100.408C170.523 102.616 165.243 103.72 159.099 103.72C150.651 103.72 143.931 101.704 138.939 97.672C133.947 93.64 131.451 88.312 131.451 81.688C131.451 75.256 133.755 70.072 138.363 66.136C143.067 62.2 150.507 60.232 160.683 60.232H184.731V55.624C184.731 49.096 182.907 44.152 179.259 40.792C175.611 37.336 170.283 35.608 163.275 35.608C158.475 35.608 153.867 36.424 149.451 38.056C145.035 39.592 141.243 41.752 138.075 44.536L133.467 36.904C137.307 33.64 141.915 31.144 147.291 29.416C152.667 27.592 158.331 26.68 164.283 26.68ZM160.683 95.656C166.443 95.656 171.387 94.36 175.515 91.768C179.643 89.08 182.715 85.24 184.731 80.248V67.864H160.971C148.011 67.864 141.531 72.376 141.531 81.4C141.531 85.816 143.211 89.32 146.571 91.912C149.931 94.408 154.635 95.656 160.683 95.656Z"
          stroke="white"
        />
        <path
          d="M232.517 42.088C234.917 37 238.469 33.16 243.173 30.568C247.973 27.976 253.877 26.68 260.885 26.68V36.616L258.437 36.472C250.469 36.472 244.229 38.92 239.717 43.816C235.205 48.712 232.949 55.576 232.949 64.408V103H222.725V27.256H232.517V42.088Z"
          stroke="white"
        />
        <path
          d="M310.086 103.72C302.598 103.72 295.878 102.088 289.926 98.824C284.07 95.56 279.462 91 276.102 85.144C272.742 79.192 271.062 72.52 271.062 65.128C271.062 57.736 272.742 51.112 276.102 45.256C279.462 39.4 284.07 34.84 289.926 31.576C295.878 28.312 302.598 26.68 310.086 26.68C316.614 26.68 322.422 27.976 327.51 30.568C332.694 33.064 336.774 36.76 339.75 41.656L332.117 46.84C329.621 43.096 326.454 40.312 322.614 38.488C318.774 36.568 314.598 35.608 310.086 35.608C304.614 35.608 299.67 36.856 295.254 39.352C290.934 41.752 287.526 45.208 285.03 49.72C282.63 54.232 281.43 59.368 281.43 65.128C281.43 70.984 282.63 76.168 285.03 80.68C287.526 85.096 290.934 88.552 295.254 91.048C299.67 93.448 304.614 94.648 310.086 94.648C314.598 94.648 318.774 93.736 322.614 91.912C326.454 90.088 329.621 87.304 332.117 83.56L339.75 88.744C336.774 93.64 332.694 97.384 327.51 99.976C322.326 102.472 316.518 103.72 310.086 103.72Z"
          stroke="white"
        />
      </svg>
    `;
    shadow.appendChild(style);
    shadow.appendChild(content);
  }
}

window.customElements.define("mgm-movingicon", MovingIcon);
