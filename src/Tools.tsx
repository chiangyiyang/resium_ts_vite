import React from "react";
import { Viewer as CesiumViewer } from "cesium";

import "./tools.css";

const toggleTools = () => {
  let tools = document.getElementsByClassName("toolBtn");
  for (let i = 0; i < tools.length; i++) {
    tools[i].className = tools[i].className === "toolBtn" ? "toolBtn hide" : "toolBtn";
  }
  const e = document.getElementsByClassName("tool_toggle")[0] as HTMLElement;
  e.innerText = e.innerText === "Tools Hide" ? "Tools Show" : "Tools Hide";
}

const getCameraHeight = (viewer: CesiumViewer) => {
  let cameraPos = viewer.camera.position;
  let ellipsoid = viewer.scene.globe.ellipsoid;
  let cartographic = ellipsoid.cartesianToCartographic(cameraPos);
  return cartographic.height;
}

const ZoomIn = (viewer: CesiumViewer, magnification: number) => {
  let height = getCameraHeight(viewer);
  viewer.camera.zoomIn(height * magnification);
};

const ZoomOut = (viewer: CesiumViewer, magnification: number) => {
  let height = getCameraHeight(viewer);
  viewer.camera.zoomOut(height * magnification);
};

export interface Props {
  getViewer: () => CesiumViewer
}

export default function Tools({ getViewer }: Props) {
  return (
    <div className="tools">
      <button className="tool_toggle" onClick={() => toggleTools()}>Tools Hide</button>
      <button className="toolBtn" onClick={() => ZoomIn(getViewer(), 0.3)}>Zoom In</button>
      <button className="toolBtn" onClick={() => ZoomOut(getViewer(), 0.3)}>Zoom Out</button>
    </div>
  );
}
