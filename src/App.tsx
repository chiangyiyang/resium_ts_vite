import React from 'react'
import { Viewer as CesiumViewer } from "cesium";

import Map from './Map'
import Tools from "./Tools";

function App() {
  let viewer:CesiumViewer

  return (
    <div>
      <Map setViewer={(v) => viewer = v} />
      <Tools getViewer={() => viewer} />
    </div>
  )
}

export default App
