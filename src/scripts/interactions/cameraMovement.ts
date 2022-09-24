import { lerp } from 'three/src/math/MathUtils';
import { camera } from '../camera';
import { cube } from '../geometries';

// update camera in relation to the cube's offset
export function updateCamera() {
  camera.position.x = lerp(camera.position.x, cube.position.x, 0.1);
  camera.position.y = lerp(camera.position.y, cube.position.y + 6, 0.1);
  camera.position.z = lerp(camera.position.z, cube.position.z + 8, 0.1);
  camera.lookAt(cube.position);
}
