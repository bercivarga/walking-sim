import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { cube, ground } from './geometries';

export default function init() {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // add camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 10;
  camera.position.y = -2;

  // add orbitcontrols
  // eslint-disable-next-line no-new
  (new OrbitControls(camera, renderer.domElement));

  // update the scene on window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  const scene = new THREE.Scene();

  // Adding geometries
  scene.add(cube);
  scene.add(ground);

  (function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }());
}
