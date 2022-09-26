import { Mesh } from 'three';
import { Box, Vec3, Body } from 'cannon-es';

import { world } from '../interactions/world';

export function addPhysicsToCube(cube: Mesh) {
  const cubeShape = new Box(new Vec3(0.5, 0.5, 0.5));
  const cubeBody = new Body({ mass: 1 });
  cubeBody.addShape(cubeShape);

  cubeBody.position.x = cube.position.x;
  cubeBody.position.y = cube.position.y;
  cubeBody.position.z = cube.position.z;

  world.addBody(cubeBody);

  return cubeBody;
}
