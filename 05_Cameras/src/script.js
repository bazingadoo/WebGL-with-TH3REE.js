import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// console.log(OrbitControls)

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for cursor(vanilla JS)

//cursor variables

const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  // console.log(e.clientX)
  // console.log(e.clientY)

  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);

  // console.log(cursor.y)
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  //update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  //update renderer(the sizes of the canvas)
  renderer.setSize(sizes.width, sizes.height);

  //incase user changes the window from a screen to other
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//adding fullscreen mode by double clicking anywhere
window.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

// //Orthographic camera
// const aspectRatio = sizes.width / sizes.height
// console.log(aspectRatio)
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 1000)

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3;

//length of the camera
// console.log(camera.position.length())
camera.lookAt(mesh.position);
scene.add(camera);

//the damping will smooth the animation by adding acceleration
//and friction
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 1
// controls.update()

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime

  //update camera to move the cam around the center of the scene
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  // camera.position.y = cursor.y * 5   //for up and down of the cube
  // camera.lookAt(mesh.position)

  //Update controls(updating Damping)
  controls.update();
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
