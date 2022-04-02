// console.log("hey there")
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
camera.position.y = 2;
camera.position.x = 2;

scene.add(camera)

//renderer 
// console.log(canvas)

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)   //resizing the renderer
renderer.render(scene, camera)

