
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import gsap from 'gsap'
import * as dat from 'lil-gui'


/**
 * Base
 */
const textureLoader = new THREE.TextureLoader();

const cubeTextLoader = new THREE.CubeTextureLoader();

const fontLoader = new FontLoader()






const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
const matcapTexture = textureLoader.load('/textures/matcaps/8.png');
const gradientTexture = textureLoader.load('/textures/gradient/5.jpg');
gradientTexture.minFilter= THREE.NearestFilter;
gradientTexture.magFilter= THREE.NearestFilter;
gradientTexture.generateMipmaps=false;


const enviromentMapTexture = cubeTextLoader.load([
    '/textures/environmentMaps/1/px.jpg',
    '/textures/environmentMaps/1/nx.jpg',
    '/textures/environmentMaps/1/py.jpg',
    '/textures/environmentMaps/1/ny.jpg',
    '/textures/environmentMaps/1/pz.jpg',
    '/textures/environmentMaps/1/nz.jpg'
])

/**
 * Debug
 */
 const gui = new dat.GUI({
    // closed: true,
    width: 400
})
 const group = new THREE.Group();
const parameters = {
    color: 0xff0000,
    spin: () =>

    {
   
        
      
        gsap.to(group.rotation, { y: group.rotation.y + Math.PI * 2 })
    }
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// const axishelper = new THREE.AxesHelper();
// scene.add(axishelper)

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
 //const material = new THREE.MeshBasicMaterial( )
// material.map=doorColorTexture;
// material.color.set('blue')
// material.opacity=0.5
//   material.transparent= true;
// material.alphaMap=doorAlphaTexture;
// material.side= THREE.DoubleSide;
// const mesh = new THREE.Mesh(geometry, material)


// const material = new THREE.MeshNormalMaterial( )
// material.flatShading= true;


// const material = new THREE.MeshMatcapMaterial( );
// material.matcap=matcapTexture;


// const material = new THREE.MeshDepthMaterial( );
 
//l

//const material = new THREE.MeshLambertMaterial( );


// const material = new THREE.MeshPhongMaterial( );
// material.shininess=100;
// material.specular= new THREE.Color('pink')


// const material = new THREE.MeshToonMaterial( );
// material.gradientMap=gradientTexture

const material = new THREE.MeshStandardMaterial( );
material.metalness=0.7;
material.roughness=0.2;
material.envMap=enviromentMapTexture; 
fontLoader.load(
    '/fonts/helvetiker_bold.typeface.json',
    (font)=>{
      const textGeomerty = new TextGeometry(
          'What God cannot do does not exist',
          {
              font:font,
              size:0.3,
              height:0.3,
              curveSegments:5,
              bevelEnabled:true,
              bevelThickness:0.03,
              bevelSize:0.02,
              bevelOffset:0,
              bevelSegments:5,
            
          }
      )

      textGeomerty.center();
    //   textGeomerty.translate(
    //       - (textGeomerty.boundingBox.max.x - 0.02) * 0.5,
    //       -  (textGeomerty.boundingBox.max.y - 0.02) * 0.5,
    //       -  (textGeomerty.boundingBox.max.z - 0.02) * 0.5,
    //   )

      
      const textMaterial = new THREE.MeshStandardMaterial();
const text= new THREE.Mesh(textGeomerty,material);
// textMaterial.matcap= matcapTexture;
// text.position.x=-0.5;
material.envMap=enviromentMapTexture; 
const donutGemorty = new THREE.TorusGeometry(0.3,0.2,20,45)


scene.add(text);

for (let index = 0; index < 100; index++) {

    const domut =new THREE.Mesh(donutGemorty,material);
    domut.position.x= (Math.random() - 0.5) * 10;
    domut.position.y= (Math.random() - 0.5) * 10;
    domut.position.z= (Math.random() - 0.5) * 10;

    domut.rotation.x = Math.random() * Math.PI;
    domut.rotation.y = Math.random() * Math.PI;


    const scale = Math.random()
    domut.scale.x = scale;
    domut.scale.z= scale;
    domut.scale.y= scale;
    scene.add(domut);
    
}
// gsap.to(cube1.position,{
//         y:2,
//         duration:1,
//         delay:1,
//     })

gui.add(material, 'metalness').min(0).max(1).step(0.0001).name('metalness')
gui.add(material, 'roughness').min(0).max(1).step(0.0001).name('roughness')
 gui
    .addColor(parameters, 'color')
    .onChange(() =>
    {
        material.color.set(parameters.color)
    })

gui.add(material, 'wireframe');
    }
)


//material.map=doorColorTexture;
// material.aoMap= doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.01;
// material.metalnessMap=doorMetalnessTexture;
// material.roughnessMap=doorRoughnessTexture;
// material.normalMap = doorNormalTexture;
// material.normalScale.x=0.1;
// material.normalScale.y=10.1;
// material.alphaMap=doorAlphaTexture;
// material.transparent=true;
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5,64,64),
    material
)
sphere.position.x= -1.5;
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1,100,100),
    material
)
const toy = new THREE.Mesh(
    new THREE.TorusGeometry(0.3,0.2,64,128),
    material
)
// plane.geometry.setAttribute('uv2',new THREE.BufferAttribute(plane.geometry.attributes.uv.array,2));
// sphere.geometry.setAttribute('uv2',new THREE.BufferAttribute(sphere.geometry.attributes.uv.array,2));
// toy.geometry.setAttribute('uv2',new THREE.BufferAttribute(toy.geometry.attributes.uv.array,2));

// toy.position.x=1.6;
// group.add(plane,sphere,toy)
// scene.add(group)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


const ambientLight= new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight);


const pointLight = new THREE.PointLight(0xffffff,0.5);
pointLight.position.x= 2;
pointLight.position.y= 3;
pointLight.position.z= 4;
scene.add(pointLight);
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
camera.position.x = 1
camera.position.y = 1
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


// gui.hide()
//  gui.add(material, 'metalness').min(0).max(1).step(0.0001).name('metalness')
//  gui.add(material, 'roughness').min(0).max(1).step(0.0001).name('roughness')
//  gui.add(material, 'aoMapIntensity').min(0).max(1000).step(10).name('aoMapIntensity')
//  gui.add(material, 'displacementScale').min(0).max(1).step(0.1).name('displacementScale ')
//  gui.add(material.normalScale, 'x').min(0).max(1).step(0.1).name('normalScaleX')
//  gui.add(material.normalScale, 'y').min(0).max(1).step(0.1).name('normalScaleY')
// //  gui.add(group.position, 'x').min(- 3).max(3).step(0.01).name('side')
// // gui.add(group, 'visible')
// gui.add(group,'visible');
// gui.add(material, 'wireframe')



/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // material.rotation.y=elapsedTime * 0.1;
    // material.rotation.x=elapsedTime * 0.15;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
































// import './style.css'
// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import gsap from 'gsap';

// /// Canvas

// const cursor ={
//     x:0,
//     y:0
// }
// const size={
//     width:window.innerWidth,
//     height:window.innerHeight
// }

// window.addEventListener('resize',()=>{

//     size.width=window.innerWidth,
//     size.height=window.innerHeight

//     camera.aspect= size.width/size.height;
//     camera.updateProjectionMatrix();
//     renderer.setSize(size.width,size.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

// })

// window.addEventListener('dblclick',()=>{

//     if(!document.fullscreenElement){
//         canvas.requestFullscreen();

//     }else{
// document.exitFullscreen();
//     }

// })
// // window.addEventListener('mousemove',(event)=>{

// //     cursor.x = event.clientX /window.innerWidth - 0.5;
// //     cursor.y=-(event.clientY / window.innerHeight - 0.5);
// // })
// //scene
// const scene= new THREE.Scene();


// const canvas = document.querySelector('.webgl');


// //red cube

// // const geometry = new THREE.BoxGeometry(1,1,1);
// // const material = new THREE.MeshBasicMaterial({color:'red'})
// // const cube = new THREE.Mesh( geometry, material );

// // cube.position.set(0.7,1.2,1)
// // cube.scale.set(2,0.5,0.5);

// // cube.rotation.set(Math.PI*0.5 ,3,2)

// // scene.add( cube );

// //GROUP
// const group = new THREE.Group();


// // const positionArray = new Float32Array([
// //     0,0,0,
// //     0,1,0,
// //     1,0,0
// // ]
// // );

// // const positionAttribute = new THREE.BufferAttribute(positionArray,3);


// const geomtry = new THREE.BufferGeometry();
// const count = 500;
// const positionArray = new Float32Array(count * 3 * 3);
// for (let i = 0; i< count *3 * 3; i++)
// {
// positionArray[i] = (Math.random() * 0.5) * 4;

// }
// const positionAttribute = new THREE.BufferAttribute(positionArray,3);
//  geomtry.setAttribute('position',positionAttribute);


// const cube1= new THREE.Mesh(
//     geomtry,
//     new THREE.MeshBasicMaterial({color:'blue',wireframe:true})
// )
// const cube2= new THREE.Mesh(
//     new THREE.PlaneGeometry(2,2,2),
//     new THREE.MeshBasicMaterial({color:'yellow',wireframe:true})
// )
// const cube3= new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1,5,5,5),
//     new THREE.MeshBasicMaterial({color:'green'})
// )


// // // cube3.position.set(5,-0.6,2);
// // cube2.position.set(-5,0.6,2);
// //   group.add(cube1)
// scene.add(cube1)

// //axishelper
// // const axishelper = new THREE.AxesHelper(5)

// // scene.add(axishelper);



// //Camera 
// const aspectRatio= window.innerWidth / window.innerHeight
// const camera = new THREE.PerspectiveCamera( 75, size.width /size.height, 0.1, 1000 );
// // const camera = new THREE.OrthographicCamera(-1 * aspectRatio,1 * aspectRatio,1,-1,0.1,100);
// camera.position.z=3;
// // camera.position.y=2;
//   //camera.lookAt(cube1.position);
// const controls = new OrbitControls(camera,canvas)
// // controls.target.y=1;
// // controls.update();

// controls.enableDamping = true;


// // const helper = new THREE.CameraHelper( camera );
// // scene.add( helper );

// //

// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(size.width,size.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

// renderer.render(scene,camera);
// const clock = new THREE.Clock()

// //animation

// // gsap.to(cube1.position,{
// //     y:2,
// //     duration:1,
// //     delay:1,
// // })
// // gsap.to(cube1.position,{
// //     y:0,
// //     duration:1,
// //     delay:2,
// // })
// // gsap.to(cube2.position,{
// //     y:-2,
// //     duration:1,
// //     delay:3,
// // })

// // gsap.to(camera.position,{
// //     y:0,
// //     duration:1,
// //     delay:4,
// // })

// // gsap.to(camera.position,{
// //     x:-2,
// //     duration:1,
// //     delay:5,
// // })

// // gsap.to(camera.position,{
// //     x:-0,
// //     duration:1,
// //     delay:6,
// // })


// const tick = () =>{


//     const elpsa = clock.getElapsedTime();

//     // cube1.position.y = Math.cos(elpsa);

//   //  cube1.rotation.y  = Math.PI * elpsa * 0.2;


// //   camera.position.x= cursor.x * 13;
// //   camera.position.y=cursor.y * 13 ;

// // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
// // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
// // camera.position.y=cursor.y * 3 ;
// //     camera.lookAt(cube1.position)
// controls.update();
//     renderer.render(scene,camera);
//     window.requestAnimationFrame(tick);

// }

//  tick();