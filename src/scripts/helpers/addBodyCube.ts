import * as THREE from 'three';

export default function addBodyCube(group: THREE.Group) {
  const bodyPart = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  );

  const lastBodyPart = group.children[group.children.length - 1];

  const { x, y, z } = lastBodyPart.position;
  bodyPart.position.set(x + 1, y, z);

  group.add(bodyPart);

  return bodyPart;
}
