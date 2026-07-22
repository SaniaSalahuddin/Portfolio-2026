import { useEffect, useRef } from "react";
import ThreeGlobe from "three-globe";
import * as THREE from "three";

import { points, arcs } from "./globeconfig.js";

export default function GlobeObject() {

  const globeRef = useRef();

  useEffect(() => {

    // Create Globe
    const globe = new ThreeGlobe()
    

      // Globe Texture
      .globeImageUrl(
"https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
)

      // Atmosphere
      .showAtmosphere(true)
      .atmosphereColor("#10b981")
      .atmosphereAltitude(0.24)

      // Country Markers
     .pointsData(points)

.ringsData(points)
.ringColor(d => d.main ? "#10b981" : "#38bdf8")
.ringMaxRadius(4)
.ringPropagationSpeed(2)
.ringRepeatPeriod(1000)
      .pointColor("color")
      .pointAltitude(0.02)
.pointRadius(d => d.main ? 0.42 : 0.18)
.pointAltitude(0.015)
.pointResolution(24)
.labelsData(points)
.labelText("label")
.labelColor(() => "#10b981")
.labelResolution(3)
.labelAltitude(0.08)
.labelSize(1.8)
.labelDotRadius(0.3)
      // Flight Arcs
      .arcsData(arcs)
      .arcColor(() => "#10b981")
     .arcDashLength(0.8)
.arcDashGap(0.3)
.arcDashInitialGap(() => Math.random())
.arcDashAnimateTime(3000);
globe.scale.setScalar(0.82);
globe.position.set(0,0,0);
globe.rotation.y = -Math.PI / 1.8;

    globeRef.current.add(globe);
    

  }, []);

  return <group ref={globeRef} />;

}