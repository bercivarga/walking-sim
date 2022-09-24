import { cubeBody } from '../geometries';

export function addHandleJumpEvent(): void {
  let canJump = true;

  cubeBody.addEventListener('collide', () => {
    canJump = true;
  });

  window.addEventListener('keydown', (keyboardEvent: KeyboardEvent) => {
    if (canJump && keyboardEvent.code === 'Space') {
      cubeBody.velocity.y = 5;
      canJump = false;
    }
  });
}
