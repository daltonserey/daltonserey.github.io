class RemarkSlide extends HTMLElement {
  constructor() {
    super();
    let src = this.getAttribute("src");
    let style = this.getAttribute("style");
    this.$root = this; // no futuro, usar shadow DOM
    this.$root = this.attachShadow({mode: "open"});
    this.$root.innerHTML = `
      <style>
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .container iframe {
          border: none;
        }

        .container { 
            width: 100%; /* pick whatever width you want */
        }

        .container .outer {
            width: 100%;
            padding-top: 75%; /* define aspect ratio 3x4*/
            position: relative;
        }

        .container .outer .inner {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
      </style>

      <div class="container">
        <div class="outer">
          <div class="inner">
            <iframe src="${src}"></iframe>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-slide", RemarkSlide);
