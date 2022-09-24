import init from './scripts/scene';
import { addHandleMoveEvent, addHandleJumpEvent } from './scripts/interactions';
import './style.css';

// Initialize the 3D scene
init();

// Add event listeners
addHandleMoveEvent();
addHandleJumpEvent();
