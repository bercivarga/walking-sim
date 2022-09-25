import { LoadingManager } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const manager = new LoadingManager();

export const gltfLoader = new GLTFLoader(manager);
