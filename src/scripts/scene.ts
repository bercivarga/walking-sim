import { Scene } from 'three';
import { ground } from './geometries';
import createSnake from './helpers/createSnake';

export const scene = new Scene();

// Initialise snake
const snakeGroup = createSnake();

// Load in individual objects
scene.add(ground);

scene.add(snakeGroup);

export default scene;
