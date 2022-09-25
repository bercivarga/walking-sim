import * as THREE from 'three';
// import * as CANNON from 'cannon-es';
// import { world } from '../interactions/world';

export const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffff00 }),
);

cube.position.y = 2;

cube.castShadow = true;

// Physics ****************************************************************

// const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
// export const cubeBody = new CANNON.Body({ mass: 1 });
// cubeBody.addShape(cubeShape);
// cubeBody.position.x = cube.position.x;
// cubeBody.position.y = cube.position.y;
// cubeBody.position.z = cube.position.z;
// world.addBody(cubeBody);

// Update ****************************************************************

// export function updateCube() {
//   cube.position.set(cubeBody.position.x, cubeBody.position.y, cubeBody.position.z);
//   cube.quaternion.set(
//     cubeBody.quaternion.x,
//     cubeBody.quaternion.y,
//     cubeBody.quaternion.z,
//     cubeBody.quaternion.w,
//   );
// }
