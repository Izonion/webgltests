const WIDTH = 400;
const HEIGHT = 300;

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const container = document.querySelector('#glCanvas');

const main = {
	renderer: new THREE.WebGLRenderer(),
	camera: new THREE.PerspectiveCamera(
																			VIEW_ANGLE,
																			ASPECT,
																			NEAR,
																			FAR
																		),
	scene: new THREE.Scene(),
	render: function () {
		this.renderer.render(this.scene, this.camera);
	},
	clock: new THREE.Clock()
};

main.scene.add(main.camera);

main.renderer.setSize(WIDTH, HEIGHT);

container.appendChild(main.renderer.domElement);

const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(
			50,   //radius
			16,   //segments
			16),  //rings
		new THREE.MeshLambertMaterial(
			{
				color: 0xCC0000
			}));

console.log(sphere.geometry);

sphere.position.z = -300;

main.scene.add(sphere);

const sun = new THREE.DirectionalLight(0xFFFFFF);

sun.position.x = 10;
sun.position.y = 50;
sun.position.z = 130;

main.scene.add(sun);

const ambient = new THREE.AmbientLight(0x101010);
main.scene.add(ambient);

function update () {
	main.render();
	sun.position.x = Math.cos(main.clock.elapsedTime) * 100;
	requestAnimationFrame(update);
}
requestAnimationFrame(update);
