const template = document.createElement("template");

template.innerHTML = `
  <div id="fresh-video" class="fresh-video" data-state='paused' data-sound="unmuted">
    <div class='fresh-controls'>
      <button id="play" class='fresh-control play'>
        <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>button/PLAY</title>
          <g id="button/PLAY" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <circle id="Oval" stroke="{color}" stroke-width="2" cx="22" cy="22" r="21"></circle>
              <polygon id="Triangle" fill="{color}" transform="translate(24.383440, 22.380290) rotate(-270.000000) translate(-24.383440, -22.380290) " points="24.3834404 12.8802898 33.8834404 31.8802898 14.8834404 31.8802898"></polygon>
          </g>
        </svg>
      </button>
      <button id="pause" class='fresh-control pause'>
        <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>button/pausebutton</title>
          <g id="button/pausebutton" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <circle id="Oval" stroke="{color}" stroke-width="2" cx="22" cy="22" r="21"></circle>
              <rect id="Rectangle" fill="{color}" x="15" y="12" width="4" height="20"></rect>
              <rect id="Rectangle-Copy" fill="{color}" x="25" y="12" width="4" height="20"></rect>
          </g>
        </svg>
      </button>
      <button id="unmute" class='fresh-control unmute'>
        <svg width="38px" height="38px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>Mute</title>
          <path fill="{color}" d="M41.75,44.19A0.5,0.5,0,0,1,41.38,44L5.89,6.26a0.5,0.5,0,1,1,.73-0.68L42.11,43.35A0.5,0.5,0,0,1,41.75,44.19Z"/>
          <path fill="{color}" d="M33.89,29.51a0.5,0.5,0,0,1-.5-0.5V3.12a1.5,1.5,0,0,0-2.6-1L21,12.76a0.5,0.5,0,1,1-.73-0.68L30.05,1.43a2.5,2.5,0,0,1,4.34,1.69V29A0.5,0.5,0,0,1,33.89,29.51Z"/>
          <path fill="{color}" d="M31.87,47.39a2.45,2.45,0,0,1-1.82-.81L16.16,31.5H14.89a7.5,7.5,0,0,1-7.5-7.73,7.71,7.71,0,0,1,7.79-7.27h1.19a0.5,0.5,0,0,1,0,1H15.18a6.7,6.7,0,0,0-6.79,6.3,6.5,6.5,0,0,0,6.5,6.7h1.49a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V35.33a0.5,0.5,0,0,1,1,0v9.55a2.45,2.45,0,0,1-1.59,2.33A2.56,2.56,0,0,1,31.87,47.39Z"/>
          <rect width="48" height="48" fill="none"/>
        </svg>
      </button>
      <button id="mute" class='fresh-control mute'>
        <svg width="38px" height="38px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <title>Unmute</title>
          <path fill="{color}" d="M24.48,47.39a2.46,2.46,0,0,1-1.82-.81L8.77,31.5H7.5A7.5,7.5,0,0,1,0,23.77,7.71,7.71,0,0,1,7.79,16.5h1L22.66,1.43A2.5,2.5,0,0,1,27,3.12V44.88a2.45,2.45,0,0,1-1.59,2.33A2.55,2.55,0,0,1,24.48,47.39ZM7.79,17.5A6.7,6.7,0,0,0,1,23.8a6.5,6.5,0,0,0,6.5,6.7H9a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V3.12a1.5,1.5,0,0,0-2.6-1l-14,15.23A0.5,0.5,0,0,1,9,17.5H7.79Z"/>
          <path fill="{color}" d="M31.75,40a0.5,0.5,0,0,1,0-1,15,15,0,0,0,0-30,0.5,0.5,0,0,1,0-1A16,16,0,0,1,31.75,40Z"/>
          <path fill="{color}" d="M32,34a0.5,0.5,0,0,1,0-1,9,9,0,0,0,0-18,0.5,0.5,0,0,1,0-1A10,10,0,0,1,32,34Z"/>
          <path fill="{color}" d="M32,28.5a0.5,0.5,0,0,1,0-1,3.5,3.5,0,0,0,0-7,0.5,0.5,0,0,1,0-1A4.5,4.5,0,0,1,32,28.5Z"/>
          <rect width="48" height="48" fill="none"/>
        </svg>
      </button>
      <button id="fullscreen" class='fresh-control fullscreen'>
        <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38px" height="38px" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
          <g>
          <path d="M5,12c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1s-0.4,1-1,1H6v5C6,11.6,5.6,12,5,12z" id="id_101" fill="{color}"></path>
          </g>
          <g>
          <path d="M27,12c-0.6,0-1-0.4-1-1V6h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1v6C28,11.6,27.6,12,27,12z" id="id_102" fill="{color}"></path>
          </g>
          <g>
          <path d="M27,28h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h5v-5c0-0.6,0.4-1,1-1s1,0.4,1,1v6C28,27.6,27.6,28,27,28z" id="id_103" fill="{color}"></path>
          </g>
          <g>
          <path d="M11,28H5c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1s1,0.4,1,1v5h5c0.6,0,1,0.4,1,1S11.6,28,11,28z" id="id_104" fill="{color}"></path>
          </g>
          <g>
          <path d="M5,28c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l22-22c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-22,22C5.5,27.9,5.3,28,5,28z" id="id_105" fill="{color}"></path>
          </g>
          <g>
          <path d="M27,28c-0.3,0-0.5-0.1-0.7-0.3l-22-22c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l22,22c0.4,0.4,0.4,1,0,1.4
              C27.5,27.9,27.3,28,27,28z" id="id_106" fill="{color}"></path>
          </g>
        </svg>
      </button>
    </div>
    <video id="video">
        <source src="{source}">
    </video>
  </div>

  <style>
  .fresh-video {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .fresh-video video {
    width: 100%;
    height: 100%;
  }

  .fresh-video .fresh-controls {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .fresh-video .fresh-control {
    background: none;
    border: none;
    padding: 0;
  }

  .fresh-video[data-state="playing"] .play {
    display: none;
  }

  .fresh-video[data-state="playing"] .pause {
    display: none;
  }

  .fresh-video[data-state="playing"]:hover .pause {
    display: block;
  }

  .fresh-video[data-state="paused"] .fresh-control.play {
    display: block;
  }

  .fresh-video[data-state="paused"] .pause {
    display: none;
  }

  .fresh-control.play, .fresh-control.pause {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .fresh-control.play, .fresh-control.fullscreen {
    right: 10px;
    bottom: 15px;
    position: absolute;
  }

  .fresh-control.play, .fresh-control.mute {
    display: block;
    right: 60px;
    bottom: 15px;
    position: absolute;
  }

  .fresh-video[data-sound="muted"] .fresh-control.mute {
    display: none;
  }

  .fresh-control.play, .fresh-control.unmute {
    display: none;
    right: 60px;
    bottom: 15px;
    position: absolute;
  }

  .fresh-video[data-sound="muted"] .fresh-control.unmute {
    display: block;
  }

  </style>
`;

class FreshVideo extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = this._shadowRoot.innerHTML.replace(
      "{source}",
      this.url
    );

    this._shadowRoot.innerHTML = this._shadowRoot.innerHTML.replaceAll(
      "{color}",
      this.color
    );

    this._shadowRoot
      .getElementById("play")
      .addEventListener("click", this.play.bind(this));
    this._shadowRoot
      .getElementById("pause")
      .addEventListener("click", this.pause.bind(this));
    this._shadowRoot
      .getElementById("fullscreen")
      .addEventListener("click", this.fullscreen.bind(this));
    this._shadowRoot
      .getElementById("mute")
      .addEventListener("click", this.mute.bind(this));
    this._shadowRoot
      .getElementById("unmute")
      .addEventListener("click", this.unmute.bind(this));
  }

  get url() {
    return this.getAttribute("url");
  }

  get color() {
    return this.getAttribute("color");
  }

  play() {
    console.log("play");
    this._shadowRoot.getElementById("video").play();
    this._shadowRoot.getElementById("fresh-video").dataset.state = "playing";
  }

  pause() {
    console.log("pause");
    this._shadowRoot.getElementById("video").pause();
    this._shadowRoot.getElementById("fresh-video").dataset.state = "paused";
  }

  fullscreen() {
    console.log("fullscreen");
    var videoElement = this._shadowRoot.getElementById("video");
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  }

  mute() {
    console.log("mute");
    this._shadowRoot.getElementById("video").muted = true;
    this._shadowRoot.getElementById("fresh-video").dataset.sound = "muted";
  }

  unmute() {
    console.log("unmute");
    this._shadowRoot.getElementById("video").muted = false;
    this._shadowRoot.getElementById("fresh-video").dataset.sound = "unmuted";
  }
}

window.customElements.define("fresh-video", FreshVideo);

