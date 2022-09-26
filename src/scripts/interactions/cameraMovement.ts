import { lerp } from 'three/src/math/MathUtils';
import { Vector3 } from 'three';
import { camera } from '../camera';

// update camera in relation to the cube's offset
export function updateCamera(target: Vector3) {
  camera.position.x = lerp(camera.position.x, target.x, 0.1);
  camera.position.y = lerp(camera.position.y, target.y + 6, 0.1);
  camera.position.z = lerp(camera.position.z, target.z + 8, 0.1);
  camera.lookAt(target);
}
