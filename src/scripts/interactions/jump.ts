import { Body } from 'cannon-es';

export function addHandleJumpEvent(body: Body): void {
  let canJump = true;

  body.addEventListener('collide', () => {
    canJump = true;
  });

  window.addEventListener('keydown', (keyboardEvent: KeyboardEvent) => {
    if (canJump && keyboardEvent.code === 'Space') {
      body.velocity.y = 5;
      canJump = false;
    }
  });
}
