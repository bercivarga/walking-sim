import init from './scripts/init';
import { addHandleMoveEvent, addHandleJumpEvent } from './scripts/interactions';
import './style.css';
import { addObjectsToScene } from './scripts/scene';

// Initialize the 3D scene
init();
addObjectsToScene();

// Add event listeners
addHandleMoveEvent();
addHandleJumpEvent();
