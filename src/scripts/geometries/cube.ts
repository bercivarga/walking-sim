import * as THREE from 'three';

export const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffff00 }),
);

cube.castShadow = true;
