import {
  BoxHelper,
  Scene,
} from 'three';

import * as CANNON from 'cannon-es';

import { gltfLoader } from '../loader';
import { world } from '../interactions/world';
import { addHandleJumpEvent, addHandleMoveEvent } from '../interactions';
import { updateCamera } from '../interactions/cameraMovement';

const bodySize = 0.5;

export function loadPirateCaptain(scene: Scene): void {
  gltfLoader.load('src/modelAssets/pirate_captain.gltf', (gltf) => {
    gltf.scene.children.forEach((child) => child.scale.set(1, 1, 1));
    gltf.scene.children.forEach((child) => child.position.set(0, 0, 0));
    gltf.scene.children.forEach((child) => child.rotation.set(0, Math.PI, 0));
    // eslint-disable-next-line no-param-reassign,no-return-assign
    gltf.scene.children.forEach((child) => child.castShadow = true);
    // eslint-disable-next-line no-param-reassign,no-return-assign
    gltf.scene.children.forEach((child) => child.receiveShadow = true);

    gltf.scene.children.forEach((child) => child.position.normalize());

    // Helper for positioning
    const helper = new BoxHelper(gltf.scene);
    scene.add(helper);

    scene.add(gltf.scene);

    const shape = new CANNON.Box(new CANNON.Vec3(bodySize, bodySize, bodySize));
    const body = new CANNON.Body({ mass: 1 });
    body.addShape(shape);

    body.position.set(
      gltf.scene.position.x,
      gltf.scene.position.y,
      gltf.scene.position.z,
    );

    body.angularDamping = 0.8;

    world.addBody(body);

    function updatePosition() {
      requestAnimationFrame(
        updatePosition,
      );

      gltf.scene.position.set(body.position.x, body.position.y - bodySize, body.position.z);
      // gltf.scene.quaternion.set(
      //   body.quaternion.x,
      //   body.quaternion.y,
      //   body.quaternion.z,
      //   body.quaternion.w,
      // );
      updateCamera(gltf.scene.position);
    }
    updatePosition();
    addHandleMoveEvent(body);
    addHandleJumpEvent(body);
  });
}
