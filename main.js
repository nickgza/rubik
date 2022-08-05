import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Piece } from './piece.js'
import { Colour as C, Face as F, Move } from './enums.js'

let piece1 = new Piece([C.WHITE, C.GREEN, C.ORANGE], F.U, null);
piece1.change_orientation("U");
piece1.change_orientation("B'");
piece1.change_orientation("R2");
console.log(piece1['orientation']);














const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(40, 40, 40);

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(new THREE.GridHelper(100, 100));
scene.add(new THREE.AxesHelper(100));

function cube(width) {
    const geometry = new THREE.BoxGeometry(width, width, width);
    const material = new THREE.MeshBasicMaterial({vertexColors: true});
    const temp = [];

    for (let i = 0; i < 4; i++) temp.push(1, 0, 0); // right
    for (let i = 0; i < 4; i++) temp.push(0, 0, 0); // left
    for (let i = 0; i < 4; i++) temp.push(1, 1, 1); // top
    for (let i = 0; i < 4; i++) temp.push(0, 0, 0); // bottom
    for (let i = 0; i < 4; i++) temp.push(0, 1, 0); // front
    for (let i = 0; i < 4; i++) temp.push(0, 0, 0); // back

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(temp, 3));
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

cube(30);
animate();
