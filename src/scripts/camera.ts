import { PerspectiveCamera } from 'three';

export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 6;
camera.position.y = 8;
