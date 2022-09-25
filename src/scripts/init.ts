import {
  AmbientLight,
  AxesHelper,
  CameraHelper,
  Clock,
  DirectionalLight,
  PCFSoftShadowMap,
  WebGLRenderer,
} from 'three';

import Stats from 'three/examples/jsm/libs/stats.module';

import { scene } from './scene';
import { ground } from './geometries';
import { world } from './interactions/world';
import { camera } from './camera';

export default function init() {
  // Axes helper for better visual representation
  scene.add(new AxesHelper(10));

  // Create a renderer
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // Allow shadows
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap; // default
  document.body.appendChild(renderer.domElement);

  // Add FPS stats in top left corner
  const stats = Stats();
  document.body.appendChild(stats.dom);

  // add directional and ambient lighting
  const directionalLight = new DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(2, 5, 5);
  directionalLight.castShadow = true;
  // set light cast shadow distance
  directionalLight.shadow.camera.scale.set(2, 2, 2);
  directionalLight.shadow.camera.near = 0.1;
  directionalLight.shadow.camera.far = 20;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;

  // Light shadow camera helper
  const helper = new CameraHelper(directionalLight.shadow.camera);
  scene.add(helper);

  const ambientLight = new AmbientLight(0xffffff, 0.6);
  scene.add(directionalLight, ambientLight);

  // update the scene on window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Adding geometries
  scene.add(ground);

  const clock = new Clock();
  let delta = 0;

  (function animate() {
    requestAnimationFrame(animate);

    delta = Math.min(clock.getDelta(), 0.1);
    world.step(delta);

    renderer.render(scene, camera);
    stats.update();
  }());
}
