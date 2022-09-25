import { Body } from 'cannon-es';

export function addHandleMoveEvent(body: Body) {
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
      body.position.x += 0.1;
    }
    if (keyPressed.ArrowLeft || keyPressed.a) {
      body.position.x -= 0.1;
    }
    if (keyPressed.ArrowUp || keyPressed.w) {
      body.position.z -= 0.1;
    }
    if (keyPressed.ArrowDown || keyPressed.s) {
      body.position.z += 0.1;
    }
  }
  animateCube();
}
