import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        mesh: any;
        planeGeometry: any;
        primitive: any;
        threeGlobe: any;
        ambientLight: any;
        directionalLight: any;
        pointLight: any;
      }
    }
  }
}
