import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import particlesVertexShader from './shaders/particles/vertex.glsl'
import particlesFragmentShader from './shaders/particles/fragment.glsl'



/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const textureLoader = new THREE.TextureLoader()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

    // Materials
    particlesMaterial.uniforms.uResolution.value.set(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 18)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setClearColor('#181818')
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)

/**
 * Displacment
 */
const displacment = {}

// 2d canvas
displacment.canvas = document.createElement('canvas')
displacment.canvas.width = 128
displacment.canvas.height = 128
displacment.canvas.style.position ='fixed'
displacment.canvas.style.width = '256px'
displacment.canvas.style.height = '256px'
displacment.canvas.style.top = 0
displacment.canvas.style.left = 0
displacment.canvas.style.zIndex = 10

document.body.append(displacment.canvas)

displacment.context = displacment.canvas.getContext('2d')
displacment.context.fillRect(0, 0, displacment.canvas.width, displacment.canvas.height)

// Glow image
displacment.glowImage = new Image()
displacment.glowImage.src = './glow.png'

// Interactive plane
displacment.intetactivePlane = new THREE.Mesh(
    new THREE.PlaneGeometry(10,10),
    new THREE.MeshBasicMaterial({color: 'red', side: THREE.DoubleSide})
)
scene.add(displacment.intetactivePlane)

displacment.raycaster = new THREE.Raycaster()
displacment.intetactivePlane.visible = false

// Cordinates
displacment.screenCursor = new THREE.Vector2(9999,9999)
displacment.canvasCursor = new THREE.Vector2(9999,9999)
displacment.canvasCursorPrevious = new THREE.Vector2(9999, 9999)

window.addEventListener('pointermove', (event) => {
    displacment.screenCursor.x = (event.clientX / sizes.width) * 2 - 1
    displacment.screenCursor.y = - (event.clientY / sizes.height) * 2 + 1
})

displacment.texture = new THREE.CanvasTexture(displacment.canvas)

/**
 * Particles
 */
const particlesGeometry = new THREE.PlaneGeometry(10, 10, 128, 128)
particlesGeometry.setIndex(null)
particlesGeometry.deleteAttribute('normal')
const intensitiesArray = new Float32Array(particlesGeometry.attributes.position.count)
const anglesArray = new Float32Array(particlesGeometry.attributes.position.count)
for(let i = 0; i < particlesGeometry.attributes.position.count; i++) {
    intensitiesArray[i] = Math.random()
    anglesArray[i] = Math.random() * Math.PI * 2
}
particlesGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensitiesArray, 1))
particlesGeometry.setAttribute('aAngle', new THREE.BufferAttribute(anglesArray, 1))

const particlesMaterial = new THREE.ShaderMaterial({
    vertexShader: particlesVertexShader,
    fragmentShader: particlesFragmentShader,
    uniforms:
    {
        uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)),
        uPictureTexture: new THREE.Uniform(textureLoader.load('./picture-1.png')),
        uDisplacementTexture: new THREE.Uniform(displacment.texture)
    }
})
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Animate
 */
const tick = () =>
{
    // Update controls
    controls.update()

    /**
     * Raycaster
     */

    displacment.raycaster.setFromCamera(displacment.screenCursor, camera)
    const intersections = displacment.raycaster.intersectObject(displacment.intetactivePlane)
    
    if(intersections.length) {
        const uv = intersections[0].uv
        displacment.canvasCursor.x = uv.x * displacment.canvas.width
        displacment.canvasCursor.y = (1 - uv.y) * displacment.canvas.height
    }

    /**
     * Displacement
     */
    // Fade out
    displacment.context.globalCompositeOperation = 'source-over'
    displacment.context.globalAlpha = 0.02
    displacment.context.fillRect(0,0, displacment.canvas.width, displacment.canvas.height)

    // Speed alpha
    const cursorDistance = displacment.canvasCursorPrevious.distanceTo(displacment.canvasCursor)
    displacment.canvasCursorPrevious.copy(displacment.canvasCursor)
    const alpha = Math.min(cursorDistance * 0.1, 1)

    // Glow
    const glowSize = displacment.canvas.width * 0.25
    displacment.context.globalAlpha = alpha
    displacment.context.globalCompositeOperation = 'lighten'
    displacment.context.drawImage(
        displacment.glowImage,
        displacment.canvasCursor.x - glowSize * 0.5,
        displacment.canvasCursor.y - glowSize * 0.5,
        glowSize,
        glowSize
    )

    displacment.texture.needsUpdate = true

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()