import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { AxesHelper } from 'three';
import { cube, ground } from './geometries';

import { addHandleMoveEvent } from './physics';

export default function init() {
  // Initialise scene
  const scene = new THREE.Scene();

  // Axes helper for better visual representation
  scene.add(new AxesHelper(10));

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // Allow shadows
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default
  document.body.appendChild(renderer.domElement);

  // add camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 6;
  camera.position.y = 8;

  // add orbitcontrols
  // eslint-disable-next-line no-new
  (new OrbitControls(camera, renderer.domElement));

  // add directional and ambient lighting
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(2, 5, 5);
  directionalLight.castShadow = true;
  // set light cast shadow distance
  directionalLight.shadow.camera.scale.set(2, 2, 2);
  directionalLight.shadow.camera.near = 0.1;
  directionalLight.shadow.camera.far = 20;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;

  // Light shadow camera helper
  const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
  scene.add(helper);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(directionalLight, ambientLight);

  // update the scene on window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Adding geometries
  scene.add(cube);
  scene.add(ground);

  // Adding event listeners
  addHandleMoveEvent();

  (function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }());
}
