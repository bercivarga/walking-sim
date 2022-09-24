import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { world } from '../interactions/world';

export const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x808080 }),
);

ground.rotation.x = -(Math.PI / 2);
ground.receiveShadow = true;

// Physics ****************************************************************

const planeShape = new CANNON.Plane();
const planeBody = new CANNON.Body({ mass: 0 });
planeBody.addShape(planeShape);
planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
world.addBody(planeBody);
