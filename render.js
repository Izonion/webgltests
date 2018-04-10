const WIDTH = 400;
const HEIGHT = 300;

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const container = document.querySelector('#glCanvas');

const mainScene = {
	renderer: new THREE.WebGLRenderer(),
	camera: new THREE.PerspectiveCamera(
																			VIEW_ANGLE,
																			ASPECT,
																			NEAR,
																			FAR
																		),
	scene: new THREE.Scene()
}

scene.add(camera);

renderer.setSize(WIDTH, HEIGHT);

container.appendChild(renderer.domElement);

const sphere = {
	radius: 50,
	segments: 16,
	rings: 16,
	material: new THREE.MeshLambertMaterial(
		{
			color: 0xCC000
		}),
	mesh: new THREE.Mesh(
		new THREE.SphereGeometry(
			RADIUS,
			SEGMENTS,
			RINGS),
		sphereMaterial)
}

sphere.position.z = -300;

scene.add(sphere);

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

function update () {
	renderer.render(scene, camera);
	requestAnimationFrame(update);
}
requestAnimationFrame(update);
