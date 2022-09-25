import { Scene } from 'three';
import { loadPirateCaptain } from './models';

export const scene = new Scene();

export function addObjectsToScene() {
  loadPirateCaptain(scene);
}
