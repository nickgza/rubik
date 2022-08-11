import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Cube } from './cube.js'

let test = new Cube();

test.make_moves("L2 B L' D2 B' U' F2 D' L' R B' R' L' D' R");

console.log(test.get_corner('A'));
console.log(test.get_edge('A'));














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
