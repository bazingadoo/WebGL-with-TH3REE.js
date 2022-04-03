import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// console.log(gsap)
// console.log(THREE)

//creating a scene aka container to  put objects, models, lights etc
const scene = new THREE.Scene();

//Red cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

//camera(to click the scene)
//serve as point of view when doing a render
//sizes = aspect ratio, and field of view = 75

// Sizes - aspect ratio
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3;
// camera.position.y = 2;
// camera.position.x = 2;

scene.add(camera)

//renderer 
// console.log(canvas)

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)   //resizing the renderer

//time
// let time = Date.now()

//clock
// const clock = new THREE.Clock()

//gsap
 gsap.to(mesh.position, {duration: 1, delay: 1, x : 2})
 gsap.to(mesh.position, {duration: 1, delay: 2, x : 0})


//Animation
const tick = () =>
{

    //clock 
    // const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)

    //time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // //updating the time for next tick
    // time = currentTime

    // console.log(deltaTime)

    //Update objects
    // // mesh.position.x += 0.01
    // mesh.rotation.x += 0.002 * deltaTime
    // mesh.rotation.y += 0.002 * deltaTime

    //one revolution per second
    // mesh.rotation.x = elapsedTime * Math.PI  * 2
    // mesh.rotation.y = elapsedTime * Math.PI * 2
    // mesh.position.y = elapsedTime

    // camera.position.x = Math.sin(elapsedTime)
    // camera.position.y = Math.cos(elapsedTime)
    // camera.position.z = 2
    // camera.lookAt(mesh.position)

    


    //renderer
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()


