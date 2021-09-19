import React, { useEffect, useRef } from "react";
import { Viewer as CesiumViewer } from "cesium";
import { Viewer, CesiumComponentRef } from "resium";

export interface Props {
  setViewer: (v: CesiumViewer) => void
}

function Map({ setViewer }: Props) {

  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null)

  useEffect(() => {
    if (ref.current && ref.current.cesiumElement) {
      const viewer = ref.current.cesiumElement;
      (viewer as any)._cesiumWidget._creditContainer.style.display = 'none';
      setViewer(viewer);
    }
  }, []);

  return (
    <Viewer full ref={ref}
      homeButton={false}
      geocoder={false}
      sceneModePicker={false}
      navigationHelpButton={false}
      timeline={false}
      navigationInstructionsInitiallyVisible={false}
      selectionIndicator={false}
      infoBox={false}
      animation={false}
      baseLayerPicker={false}
      vrButton={true}
    >
    </Viewer>
  );
}

export default Map
