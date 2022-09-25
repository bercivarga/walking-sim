import {
  Scene,
} from 'three';

import * as CANNON from 'cannon-es';

import { gltfLoader } from '../loader';
import { world } from '../interactions/world';

export function loadPirateCaptain(scene: Scene): void {
  gltfLoader.load('src/modelAssets/pirate_captain.gltf', (gltf) => {
    gltf.scene.children.forEach((child) => child.scale.set(1.4, 1.4, 1.4));
    gltf.scene.children.forEach((child) => child.position.set(0, 0, 0));
    gltf.scene.children.forEach((child) => child.rotation.set(0, 0, 0));
    // eslint-disable-next-line no-param-reassign,no-return-assign
    gltf.scene.children.forEach((child) => child.castShadow = true);
    // eslint-disable-next-line no-param-reassign,no-return-assign
    gltf.scene.children.forEach((child) => child.receiveShadow = true);

    gltf.scene.children.forEach((child) => child.position.normalize());

    scene.add(gltf.scene);

    const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
    const body = new CANNON.Body({ mass: 1 });
    body.addShape(shape);

    body.position.set(
      gltf.scene.position.x,
      gltf.scene.position.y,
      gltf.scene.position.z,
    );

    world.addBody(body);

    function updatePosition() {
      gltf.scene.position.set(body.position.x, body.position.y, body.position.z);
      gltf.scene.quaternion.set(
        body.quaternion.x,
        body.quaternion.y,
        body.quaternion.z,
        body.quaternion.w,
      );
    }

    updatePosition();
  });
}
