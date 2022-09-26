import { Scene } from 'three';
import { ground } from './geometries';
import createSnake from './helpers/createSnake';

export const scene = new Scene();

// Load in individual objects
scene.add(ground);

// Initialise snake
scene.add(createSnake());

export default scene;
