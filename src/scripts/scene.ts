import { Scene } from 'three';
import { loadPirateCaptain } from './models';
import { cube, ground } from './geometries';

export const scene = new Scene();

export function addObjectsToScene() {
  // Adding geometries
  scene.add(cube, ground);
  loadPirateCaptain(scene);
}
