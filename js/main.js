//Refer document for three.js in here: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
//To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube
const geometry = new THREE.BoxGeometry();

/**
 * In addition to the geometry, we need a material to color it. Three.js comes with several materials, but we'll stick to the MeshBasicMaterial for now. 
 * All materials take an object of properties which will be applied to them. 
 * To keep things very simple, we only supply a color attribute of 0x00ff00, which is green
 * */
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

/**
 * A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
 * By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). 
 * This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.
*/
renderer.render(scene, camera);