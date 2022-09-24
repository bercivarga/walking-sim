import * as THREE from 'three';

export const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x808080 }),
);

ground.rotation.x = -(Math.PI / 2);
ground.receiveShadow = true;
