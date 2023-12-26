import React, { Component } from 'react';

export const converted = {
 "@font-face": {
   fontFamily: '"Geist Sans"',
   src:
     'url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype")'
 },
 "*,\n  *:after,\n  *:before": { boxSizing: "border-box" },
 ":root": {
   "--saturation": "20%",
   "--transition": "0.15s",
   "--glow": "hsl(var(--hue, 150) 80% 70% / var(--alpha, 1))",
   "--border-radius": "calc(var(--radius) * 1px)",
   "--border-width": "calc(var(--thickness) * 1px)",
   "--active": "0",
   "--glow-spread": "calc(var(--spread) * 1deg)"
 },
 button: {
   "--bg":
     "radial-gradient(\n              40% 50% at center 100%,\n              hsl(var(--hue) var(--saturation) 72% / 0.15),\n              transparent\n          ),\n          radial-gradient(\n              80% 100% at center 120%,\n              hsl(var(--hue) var(--saturation) 70% / 0.2),\n              transparent\n          ),\n          hsl(260 0% 2%)",
   background: "var(--bg)",
   fontSize: "2rem",
   fontFamily: "'Geist Sans'",
   fontWeight: 500,
   cursor: "pointer",
   padding: "0.9em 2em",
   minWidth: "280px",
   display: "grid",
   border: "0",
   placeItems: "center",
   whiteSpace: "nowrap",
   borderRadius: "var(--border-radius)",
   position: "relative",
   boxShadow:
     "0 0.025em 0.4em -0.02em hsl(0 0% 100% / 0.25),\n          0 0.05em 0 0 hsl(260 0% 50%) inset,\n          0 -0.05em 0 0 hsl(260 0% 0%) inset",
   transition:
     "box-shadow var(--transition), scale var(--transition), background var(--transition)",
   scale: "calc(1 + (var(--active) * 0.025))"
 },
 "button::before": {
   "--saturation": "90%",
   content: '""',
   position: "absolute",
   inset: "0",
   border: "1px solid hsl(var(--hue) var(--saturation) 80% / 0.3)",
   borderRadius: "var(--border-radius)",
   pointerEvents: "none"
 },
 "button:active": { scale: "1" },
 "@keyframes flip": { to: { rotate: "360deg" } },
 ".spark:before": { content: '""', position: "absolute" },
 ".spark:after": {
   content: '""',
   position: "absolute",
   inset: "0",
   zIndex: -1
 },
 ".backdrop": {
   position: "absolute",
   inset: "0",
   background:
     "linear-gradient(transparent 5%, hsl(0 0% 0% / 0.5), transparent) padding-box,\n          radial-gradient(\n              40% 50% at center 100%,\n              hsl(var(--hue) var(--saturation) 72% / 0.15),\n              transparent\n          ) padding-box,\n          radial-gradient(\n              80% 100% at center 120%,\n              hsl(var(--hue) var(--saturation) 70% / 0.2),\n              transparent\n          ) padding-box,\n          linear-gradient(hsl(var(--hue) var(--saturation) 5%), hsl(var(--hue) var(--saturation) 4%)) padding-box",
   border: "var(--border-width) solid transparent",
   borderRadius: "var(--border-radius)",
   transition: "background var(--transition) opacity var(--transition)"
 },
 "button:is(:hover, :focus-visible)": { "--active": "1", outline: "none" },
 ".text": {
   translate: "0 0",
   fontFamily: "'Geist Sans'",
   fontWeight: 80,
   letterSpacing: "0.01ch",
   background:
     "linear-gradient(\n              95deg,\n              hsl(0 0% 90%) 15%,\n              hsl(0 0% 50% / 1),\n              hsl(0 0% 100% / 0.2),\n              hsl(0 0% 80%),\n              hsl(0 0% 90%) 85%)",
   backgroundSize: "500% 100%",
   backgroundPosition: "0 0",
   WebkitBackgroundClip: "text",
   color: "transparent",
   transition: "background-position calc(var(--transition) * 6)"
 },
 "button:is(:hover, :focus-visible) .text": { animation: "shimmer 1s both" },
 "@keyframes shimmer": { "0%": { backgroundPosition: "100% 0" } },
 "button .spark__container": {
   position: "absolute",
   inset: "0px",
   overflow: "hidden",
   borderRadius: "var(--border-radius)",
   opacity: 0
 },
 ".glows": {
   filter: "blur(calc(var(--blur) * 1px))",
   containerType: "size",
   position: "absolute",
   inset: "0"
 },
 "button > .spark__container": { containerType: "size" },
 "button .spark:nth-of-type(2)": {
   rotate: "180deg",
   animationDirection: "alternate-reverse"
 },
 "button .spark": {
   position: "absolute",
   left: "0",
   top: "0",
   height: "100%",
   aspectRatio: "1",
   borderRadius: "0",
   overflow: "visible",
   mask: "none",
   animation: "slide calc(var(--speed) * 1s) ease-in-out infinite alternate",
   animationPlayState: "paused",
   background: "transparent"
 },
 "button:hover .spark": { animationPlayState: "running" },
 "button .spark:before": {
   inset: "-100%",
   background:
     "conic-gradient(\n      from calc(270deg - (var(--glow-spread) * 0.5)),\n      var(--glow) 0,\n      var(--glow) var(--glow-spread),\n      transparent var(--glow-spread))",
   translate: "0 0",
   transform: "rotate(0deg)",
   width: "auto",
   animation: "spin calc(var(--speed) * 2s) infinite linear",
   animationPlayState: "paused"
 },
 "button:is(:hover, :focus-visible) .spark:before": {
   animationPlayState: "running"
 },
 "@keyframes spin": {
   "0%": { rotate: "0deg" },
   "15%, 35%": { rotate: "90deg" },
   "65%, 85%": { rotate: "270deg" },
   "100%": { rotate: "360deg" }
 },
 "@keyframes slide": { to: { translate: "calc(100cqw - 100%) 0" } },
 ".spark": { transition: "opacity var(--transition)", opacity: 0 },
 "button:is(:hover, :focus-visible) .spark": { opacity: 1 },
 "button:is(:hover, :focus-visible) .spark__container:not(.spark__container--reveal)": {
   animation: "reveal calc(var(--window) * 1s) both"
 },
 "@keyframes reveal": {
   "0%, 100%": { opacity: 0 },
   "20%, 80%": { opacity: 1 }
 },
 "[data-exploded] .spark,\n  [data-exploded] .spark__container:not(.spark__container--reveal),\n  [data-imploding] .spark,\n  [data-imploding] .spark__container:not(.spark__container--reveal),\n  [data-show-glows=true] .spark,\n  [data-show-glows=true] .spark__container:not(.spark__container--reveal)": {
   opacity: 1
 },
 "[data-exploded] button .spark::before,\n  [data-exploded] button .spark,\n  [data-imploding] button .spark::before,\n  [data-imploding] button .spark,\n  [data-show-glows=true] button .spark::before,\n  [data-show-glows=true] button .spark": {
   animationPlayState: "running"
 },
 "[data-exploded] button:is(:hover, :focus-visible) .spark__container,\n  [data-show-glows=true] button:is(:hover, :focus-visible) .spark__container": {
   animation: "none"
 },
 "*": { transformStyle: "preserve-3d" },
 "[data-exploded] .scene": {
   transform: "rotateX(-30deg) rotateY(45deg) rotateX(90deg)",
   transition: "transform 1s"
 },
 "[data-exploded] .spark__container,\n  [data-exploded] .glows": {
   transition: "transform 1s 1.5s"
 },
 "[data-exploded] button .text": { transition: "transform 1s 1.5s" },
 "[data-exploded] .spark__container--reveal": {
   transition: "opacity 1s 4s, transform 1s 1.5s",
   opacity: 1,
   overflow: "visible",
   borderRadius: "0"
 },
 "[data-exploded] .label": { opacity: 1, transition: "opacity 0.5s 5s" },
 "[data-exploded] .label:nth-of-type(2)": { transition: "opacity 0.5s 5.1s" },
 "[data-exploded] .label:nth-of-type(3)": { transition: "opacity 0.5s 5.2s" },
 "[data-exploded] .measurements": {
   transition: "opacity 0.5s 6s",
   opacity: 1
 },
 ".measurements": {
   transition: "opacity 0.5s 0s",
   pointerEvents: "none",
   position: "absolute",
   inset: "0",
   fontWeight: 40,
   fontFamily: "'Geist Sans'",
   fontSize: "1em",
   color: "hsl(0 0% 50%)",
   opacity: 0
 },
 ".label": {
   transition: "opacity 0.5s 1.2s",
   pointerEvents: "none",
   position: "absolute",
   left: "calc(100% + 6rem)",
   translate: "0 -50%",
   top: "50%",
   color: "hsl(0 0% 80%)",
   fontWeight: 40,
   opacity: 0
 },
 ".label:nth-of-type(2)": { transition: "opacity 0.5s 1.1s" },
 ".label:nth-of-type(3)": { transition: "opacity 0.5s 1s" },
 "button > .spark__container--reveal": { transition: "opacity 1s 3s" },
 ".spark__container,\n  .glows": { transition: "transform 1s 4s" },
 "button .text": { transition: "transform 1s 4s" },
 ".scene": { transition: "transform 1s 6s" },
 "[data-exploded] .text": { transform: "translate3d(0, 0, 200px)" },
 "[data-imploding] button > .spark__container:not(.spark__container--reveal),\n  [data-imploding] .glows,\n  [data-exploded] button > .spark__container:not(.spark__container--reveal),\n  [data-exploded] .glows": {
   overflow: "visible",
   mask:
     "linear-gradient(transparent, transparent), linear-gradient(white, white)",
   maskClip: "padding-box, border-box",
   maskComposite: "intersect",
   border: "var(--border-width) solid transparent"
 },
 "[data-exploded] button > .spark__container:not(.spark__container--reveal),\n  [data-exploded] .glows": {
   opacity: 1,
   transform: "translate3d(0, 0, 100px)"
 },
 ".spark__container--reveal": { transform: "translate3d(0, 0, 100px)" },
 "[data-imploding] .spark__container--reveal": {
   overflow: "visible",
   borderRadius: "0"
 },
 ".spark__container--reveal .spark::before": { opacity: 0.25 },
 ".spark__container--reveal .spark::after": {
   opacity: 0.65,
   border: "4px dashed hsl(0 0% 80%)"
 },
 ".labels": { position: "absolute", inset: "0" },
 ".label--glow": { transform: "translate3d(0, 0, 100px)" },
 ".label--text": { transform: "translate3d(0, 0, 200px)" },
 ".width": {
   position: "absolute",
   left: "50%",
   top: "100%",
   translate: "-50% 100%"
 },
 ".height": {
   position: "absolute",
   right: "100%",
   top: "50%",
   translate: "0% -50%",
   rotate: "90deg"
 }
}

class CustomButton extends Component {
  componentDidMount() {
    // Configuration fixe
    const CONFIG = {
      text: "Try It !",
      hue: 180,
      alpha: 1,
      window: 1.4,
      speed: 1,
      blur: 10,
      spread: 120,
      thickness: 2,
      radius: 32,
      constant: false,
      exploded: false,
      textColor: '#ffffff' // Couleur du texte en blanc
    };

    // Définir BUTTON_TEXT et SCENE
    const SCENE = document.querySelector('.scene');
    const BUTTON_TEXT = document.querySelector('.text');

    // Appel initial de la fonction de mise à jour (UPDATE)
    this.updateStyles(CONFIG, BUTTON_TEXT);

    // Vous pouvez également appeler TOGGLE ici si nécessaire
  }

  updateStyles(config, buttonText) {
    for (const key of Object.keys(config)) {
      if (key === 'exploded' || key === 'constant') break;
      document.documentElement.style.setProperty(`--${key}`, config[key]);
    }
    document.body.dataset.showGlows = config.constant;
    buttonText.style.color = config.textColor;
  }

  

  render() {
    return (
      <div style={converted}>
        <button>
          <span className="glows">
            <span className="spark__container spark__glows">
              <span className="spark"></span>
              <span className="spark"></span>
            </span>
          </span>
          <span className="spark__container">
            <span className="spark"></span>
            <span className="spark"></span>
          </span>
          <span className="spark__container spark__container--reveal">
            <span className="spark"></span>
            <span className="spark"></span>
          </span>
          <span className="backdrop"></span>
          <span className="text">
            Try It !
          </span>
          <span className="labels">
            <span className="label label--button">Button</span>
            <span className="label label--glow">Glows</span>
            <span className="label label--text">Text</span>
          </span>
        </button>
      </div>
    );
  }
}

export default CustomButton;
