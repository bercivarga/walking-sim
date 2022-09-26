import * as THREE from 'three';
import { addPhysicsToCube } from './addPhysicsToCube';
import { updateCamera } from '../interactions/cameraMovement';
import { addHandleMoveEvent } from '../interactions';

export default function createSnake() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const snake = new THREE.Mesh(geometry, material);
  snake.castShadow = true;

  snake.position.y = 0.5;

  snake.name = 'snakeHead';

  const body = addPhysicsToCube(snake);
  body.position.x = snake.position.x;
  body.position.y = snake.position.y;
  body.position.z = snake.position.z;

  addHandleMoveEvent(snake.position);

  const snakeGroup = new THREE.Group();
  snakeGroup.name = 'snakeGroup';

  snakeGroup.add(snake);

  (function moveCameraToSnake() {
    requestAnimationFrame(moveCameraToSnake);
    updateCamera(snake.position);
    body.position.x = snake.position.x;
    body.position.y = snake.position.y;
    body.position.z = snake.position.z;
  }());

  return snakeGroup;
}
