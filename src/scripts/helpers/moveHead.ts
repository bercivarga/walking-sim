import { Mesh } from 'three';

export default function moveHead(head: Mesh, direction: 'left' | 'right' | 'up' | 'down') {
  const { x, y, z } = head.position;

  switch (direction) {
    case 'left':
      head.position.set(x - 1, y, z);
      break;
    case 'right':
      head.position.set(x + 1, y, z);
      break;
    case 'up':
      head.position.set(x, y, z - 1);
      break;
    case 'down':
      head.position.set(x, y, z + 1);
      break;
    default:
      break;
  }
}
