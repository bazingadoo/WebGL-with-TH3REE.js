import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

//position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// mesh.position.set(0.7, -0.6, 1)
// scene.add(mesh)

//scale(x, y, z)
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

//rotation(Euler)
//it will first rotate y then x and z (axis order)
// mesh.rotation.reorder('YXZ') 
// mesh.rotation.x = Math.PI * 0.25             
// mesh.rotation.y = Math.PI * 0.25    //pi-360 rotation

//creating a group and putting everything all inside
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2 
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
group.add(cube2)
cube2.position.x = -2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    new THREE.MeshBasicMaterial({ color: 0xff00ff })
)
group.add(cube3)
cube3.position.x = 2

//Axex Helper
// const axesHelper = new THREE.AxesHelper(3)
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


//take the lenghth of the vectors and reduce it to the one
// mesh.position.normalize()
// console.log(mesh.position.length())

//position inherits from the vector
//distance between centre of the scene and the object position
// console.log(mesh.position.length())

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

// camera.lookAt(new THREE.Vector3(3, 0, 0))
// camera.lookAt(mesh.position)

//distance between camera and the object(greater the distance of an object from the screen, smaller is the distance)
// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)