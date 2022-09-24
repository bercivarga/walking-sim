import { cube } from '../geometries';

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
      cube.position.x += 0.1;
    }
    if (keyPressed.ArrowLeft || keyPressed.a) {
      cube.position.x -= 0.1;
    }
    if (keyPressed.ArrowUp || keyPressed.w) {
      cube.position.z -= 0.1;
    }
    if (keyPressed.ArrowDown || keyPressed.s) {
      cube.position.z += 0.1;
    }
  }
  animateCube();
}
