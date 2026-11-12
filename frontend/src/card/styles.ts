import { css } from "lit";

/** The card's own styles: the stage, the bar of switches, the corner buttons, and the room panel that becomes a sheet on small screens. */
export const cardStyles = css`
  ha-card {
    overflow: hidden;
    background: var(--nf-bg);
    height: 100%;
  }
  /* night (kiosk): the whole card dimmed */
  ha-card.nf-night .nf-card-body {
    filter: brightness(0.55);
  }
  .nf-card-body {
    position: relative;
    display: flex;
    height: 100%;
    container-type: size;
    container-name: nf;
  }
  nf-view3d {
    flex: 1;
  }
  .nf-card-msg {
    margin: auto;
    color: var(--nf-muted);
    padding: 16px;
    text-align: center;
  }
  /* the room buttons: a row along the top, clear of the toggles at the left and the corner buttons at the right */
  .nf-card-rooms {
    position: absolute;
    top: 8px;
    left: 56px;
    right: 56px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: none;
  }
  /* with the room's side panel open the row ends where the panel starts */
  @container nf (min-width: 700px) {
    .nf-card-rooms-beside {
      right: 372px;
    }
  }
  .nf-card-rooms::-webkit-scrollbar {
    display: none;
  }
  .nf-card-rooms button {
    flex: none;
  }
  .nf-card-rooms-floor {
    flex: none;
    color: var(--nf-soft);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-left: 6px;
  }
  .nf-card-controls {
    position: absolute;
    left: 60px;
    right: 10px;
    bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    pointer-events: none;
  }
  .nf-card-controls > * {
    pointer-events: auto;
  }
  .nf-card-full {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 12px;
    background: var(--nf-chrome);
    color: var(--nf-text);
    box-shadow: var(--nf-shadow);
    font-size: 18px;
    cursor: pointer;
  }
  .nf-card-dash {
    width: auto;
    min-width: 38px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 600;
  }
  .nf-card-dash-2 {
    right: 56px;
  }
  .nf-card-panel {
    position: absolute;
    top: max(10px, var(--nf-nav-top, 0px));
    right: 10px;
    bottom: 10px;
    width: min(340px, calc(100% - 20px));
    display: flex;
    flex-direction: column;
    pointer-events: none;
  }
  /* folded, only the title bar is left: it drops to the bottom edge instead of hanging in the picture */
  .nf-card-panel[folded] {
    justify-content: flex-end;
  }
  /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
  @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
    .nf-card-panel {
      top: auto;
      left: 8px;
      right: 8px;
      bottom: 8px;
      width: auto;
      height: 55%;
      max-height: calc(100% - var(--nf-nav-top, 0px) - 8px);
      justify-content: flex-end;
    }
  }
`;
