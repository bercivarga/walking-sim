import { Mesh, Vector3 } from 'three';

export default function moveCube(
  cube: Mesh,
  direction: Vector3,
) {
  const { x, y, z } = direction;

  cube.position.set(x, y, z);
}
