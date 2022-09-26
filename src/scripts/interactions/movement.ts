import { Vector3 } from 'three';

export function addHandleMoveEvent(target: Vector3) {
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
      target.x += 0.1;
    }
    if (keyPressed.ArrowLeft || keyPressed.a) {
      target.x -= 0.1;
    }
    if (keyPressed.ArrowUp || keyPressed.w) {
      target.z -= 0.1;
    }
    if (keyPressed.ArrowDown || keyPressed.s) {
      target.z += 0.1;
    }
  }
  animateCube();
}
