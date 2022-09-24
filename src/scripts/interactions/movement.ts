import { cubeBody } from '../geometries';

export function addHandleMoveEvent() {
  const keyPressed: Record<string, boolean> = {};

  window.addEventListener('keydown', (event) => {
    keyPressed[event.key] = true;
  });
  window.addEventListener('keyup', (event) => {
    keyPressed[event.key] = false;
  });

  function animateCube() {
    requestAnimationFrame(animateCube);
    if (keyPressed.ArrowRight || keyPressed.d) {
      cubeBody.position.x += 0.1;
    }
    if (keyPressed.ArrowLeft || keyPressed.a) {
      cubeBody.position.x -= 0.1;
    }
    if (keyPressed.ArrowUp || keyPressed.w) {
      cubeBody.position.z -= 0.1;
    }
    if (keyPressed.ArrowDown || keyPressed.s) {
      cubeBody.position.z += 0.1;
    }
  }
  animateCube();
}
