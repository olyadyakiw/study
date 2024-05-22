import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Timer } from 'three/addons/misc/Timer.js'
import GUI from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Textures
const textureLoader = new THREE.TextureLoader()

const floorAlphaTexture = textureLoader.load('./floor/alpha.jpg')
const floorColorTexture = textureLoader.load('./floor/coast_sand_rocks_02_diff_2k.jpg')
const floorARMTexture = textureLoader.load('./floor/coast_sand_rocks_02_arm_2k.jpg')
const floorNormalTexture = textureLoader.load('./floor/coast_sand_rocks_02_nor_gl_2k.jpg')
const floorDisplacementTexture = textureLoader.load('./floor/coast_sand_rocks_02_disp_2k.jpg')

floorColorTexture.colorSpace = THREE.SRGBColorSpace
floorColorTexture.repeat.set(8,8)
floorColorTexture.wrapS = THREE.RepeatWrapping
floorColorTexture.wrapT = THREE.RepeatWrapping

floorARMTexture.repeat.set(8,8)
floorARMTexture.wrapS = THREE.RepeatWrapping
floorARMTexture.wrapT = THREE.RepeatWrapping

floorNormalTexture.repeat.set(8,8)
floorNormalTexture.wrapS = THREE.RepeatWrapping
floorNormalTexture.wrapT = THREE.RepeatWrapping

floorDisplacementTexture.repeat.set(8,8)
floorDisplacementTexture.wrapS = THREE.RepeatWrapping
floorDisplacementTexture.wrapT = THREE.RepeatWrapping

// Wall Textures
const wallNormalTexture = textureLoader.load('./wall/castle_brick_broken_06_nor_gl_1k.jpg')
const wallARMTexture = textureLoader.load('./wall/castle_brick_broken_06_arm_1k.jpg')
const wallColorTexture = textureLoader.load('./wall/castle_brick_broken_06_diff_1k.jpg')

wallColorTexture.colorSpace = THREE.SRGBColorSpace

// Roof Textures

const roofNormalTexture = textureLoader.load('./roof/roof_slates_02_nor_gl_1k.jpg')
const roofARMTexture = textureLoader.load('./roof/roof_slates_02_arm_1k.jpg')
const roofColorTexture = textureLoader.load('./roof/roof_slates_02_diff_1k.jpg')

roofColorTexture.colorSpace = THREE.SRGBColorSpace

roofColorTexture.repeat.set(3,1)
roofColorTexture.wrapS = THREE.RepeatWrapping
roofARMTexture.repeat.set(3,1)
roofARMTexture.wrapS = THREE.RepeatWrapping
roofNormalTexture.repeat.set(3,1)
roofNormalTexture.wrapS = THREE.RepeatWrapping

// Bush Textures

const bushNormalTexture = textureLoader.load('./bush/leaves_forest_ground_nor_gl_1k.jpg')
const bushARMTexture = textureLoader.load('./bush/leaves_forest_ground_arm_1k.jpg')
const bushColorTexture = textureLoader.load('./bush/leaves_forest_ground_diff_1k.jpg')

bushColorTexture.colorSpace = THREE.SRGBColorSpace

bushColorTexture.repeat.set(2,1)
bushColorTexture.wrapS = THREE.RepeatWrapping
bushARMTexture.repeat.set(2,1)
bushARMTexture.wrapS = THREE.RepeatWrapping
bushNormalTexture.repeat.set(2,1)
bushNormalTexture.wrapS = THREE.RepeatWrapping

// Grave

const graveNormalTexture = textureLoader.load('./grave/plastered_stone_wall_nor_gl_1k.jpg')
const graveARMTexture = textureLoader.load('./grave/plastered_stone_wall_arm_1k.jpg')
const graveColorTexture = textureLoader.load('./grave/plastered_stone_wall_diff_1k.jpg')

graveColorTexture.colorSpace = THREE.SRGBColorSpace

graveColorTexture.repeat.set(0.3,0.4)
graveARMTexture.repeat.set(0.3,0.4)
graveNormalTexture.repeat.set(0.3,0.4)

// Door
const doorAlphaTexture = textureLoader.load('./door/alpha.jpg')
const doorHeightTexture = textureLoader.load('./door/height.jpg')
const doorColorTexture = textureLoader.load('./door/color.jpg')
const doorNormalTexture = textureLoader.load('./door/normal.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./door/ambientOcclusion.jpg')
const doorMetalnessTexture = textureLoader.load('./door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./door/roughness.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace

/**
 * House
 */
// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20,20,100,100),
    new THREE.MeshStandardMaterial({
        alphaMap: floorAlphaTexture,
        transparent: true,
        map: floorColorTexture,
        aoMap: floorARMTexture,
        roughnessMap: floorARMTexture,
        metalnessMap: floorARMTexture,
        normalMap: floorNormalTexture,
        displacementMap: floorDisplacementTexture,
        displacementScale: 0.3,
        displacementBias: -0.2
    })
)
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

gui.add(floor.material, 'displacementScale').max(1).min(0).step(0.001).name('floorDisplacementScale')
gui.add(floor.material, 'displacementBias').max(1).min(-1).step(0.001).name('floorDisplacementBias')

// House container
const house = new THREE.Group()
scene.add(house)

// Walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4,2.5,4),
    new THREE.MeshStandardMaterial({
        map: wallColorTexture,
        roughnessMap: wallARMTexture,
        aoMap: wallARMTexture,
        metalnessMap: wallARMTexture,
        normalMap: wallNormalTexture
    })
)
walls.position.y = 1.25 
house.add(walls)

// Roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5,1.5,4),
    new THREE.MeshStandardMaterial({
        map: roofColorTexture,
        roughnessMap: roofARMTexture,
        aoMap: roofARMTexture,
        metalnessMap: roofARMTexture,
        normalMap: roofNormalTexture
    })
)
roof.position.y = 2.5 + 0.75
roof.rotation.y = Math.PI * 0.25
house.add(roof)

// Door 
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2,2.2,100,100),
    new THREE.MeshStandardMaterial({
        transparent: true,
        alphaMap: doorAlphaTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.15,
        displacementBias: - 0.04,
        map: doorColorTexture,
        roughnessMap: doorRoughnessTexture,
        aoMap: doorAmbientOcclusionTexture,
        metalnessMap: doorMetalnessTexture,
        normalMap: doorNormalTexture
    })
)
door.position.y = 1
door.position.z = 2 + 0.01
house.add(door)

//Bushes
const bushGeometry = new THREE.SphereGeometry(1,16,16)
const bushMaterial = new THREE.MeshStandardMaterial({
        color: '#ccffcc',
        map: bushColorTexture,
        roughnessMap: bushARMTexture,
        aoMap: bushARMTexture,
        metalnessMap: bushARMTexture,
        normalMap: bushNormalTexture
    })

const bush1 = new THREE.Mesh(bushGeometry,bushMaterial)
bush1.scale.set(0.5,0.5,0.5)
bush1.position.set(0.8,0.2,2.2)
bush1.rotation.x = -0.75

const bush2 = new THREE.Mesh(bushGeometry,bushMaterial)
bush2.scale.set(0.25,0.25,0.25)
bush2.position.set(1.4,0.1,2.1)
bush2.rotation.x = -0.75

const bush3 = new THREE.Mesh(bushGeometry,bushMaterial)
bush3.scale.set(0.4,0.4,0.4)
bush3.position.set(-0.8, 0.1, 2.2)
bush3.rotation.x = -0.75

const bush4 = new THREE.Mesh(bushGeometry,bushMaterial)
bush4.scale.set(0.15,0.15,0.15)
bush4.position.set(-1,0.05,2.6)
bush4.rotation.x = -0.75

house.add(bush1,bush2,bush3,bush4)

// Graves 
const graveGeometry = new THREE.BoxGeometry(0.6,0.8,0.2)
const graveMaterial = new THREE.MeshStandardMaterial({
        map: graveColorTexture,
        roughnessMap: graveARMTexture,
        aoMap: graveARMTexture,
        metalnessMap: graveARMTexture,
        normalMap: graveNormalTexture
    })

const graves = new THREE.Group()
scene.add(graves)

for(let i = 0; i < 30; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = Math.random() * 4 + 3
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius
    const grave = new THREE.Mesh(graveGeometry,graveMaterial)
    grave.position.x = x
    grave.position.z = z
    grave.position.y = Math.random() * 0.4
    grave.rotation.x = (Math.random() - 0.5) * 0.4
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4
    graves.add(grave)
}



/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5)
directionalLight.position.set(3, 2, -8)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const timer = new Timer()

const tick = () =>
{
    // Timer
    timer.update()
    const elapsedTime = timer.getElapsed()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()