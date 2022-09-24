import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

import { AxesHelper } from 'three';
import { cube, ground, updateCube } from './geometries';

import { addHandleMoveEvent } from './interactions';
import { world } from './interactions/world';

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

  // Add FPS stats in top left corner
  const stats = Stats();
  document.body.appendChild(stats.dom);

  // add camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 6;
  camera.position.y = 8;

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

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

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
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

  const clock = new THREE.Clock();
  let delta = 0;

  (function animate() {
    requestAnimationFrame(animate);
    controls.update();

    delta = Math.min(clock.getDelta(), 0.1);
    world.step(delta);

    updateCube();

    renderer.render(scene, camera);
    stats.update();
  }());
}
