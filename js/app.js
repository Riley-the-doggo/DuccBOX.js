"use strict";
let socket;

//Fuzzy_Ducc is the ducc king
/*
██████╗░██╗░░░██╗░█████╗░░█████╗░██████╗░░█████╗░██╗░░██╗░░░░░░░░██╗░██████╗
██╔══██╗██║░░░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗██╔╝░░░░░░░░██║██╔════╝
██║░░██║██║░░░██║██║░░╚═╝██║░░╚═╝██████╦╝██║░░██║░╚███╔╝░░░░░░░░░██║╚█████╗░
██║░░██║██║░░░██║██║░░██╗██║░░██╗██╔══██╗██║░░██║░██╔██╗░░░░██╗░░██║░╚═══██╗
██████╔╝╚██████╔╝╚█████╔╝╚█████╔╝██████╦╝╚█████╔╝██╔╝╚██╗██╗╚█████╔╝██████╔╝
╚═════╝░░╚═════╝░░╚════╝░░╚════╝░╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░╚════╝░╚═════╝░
Made by I like food#8767
*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/
 
const version = " v4.7.3 M2";
const Wrapper = document.getElementById("Wrapper");
import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "./node_modules/three/build/three.module.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls } from "./node_modules/three/examples/jsm/controls/PointerLockControls.js";
import { Stats } from "./node_modules/three/examples/jsm/libs/stats.module.js";
import './lib.js'
class DuccBOX {
  constructor(startAs, StartMsg,render) {
    let dev;
    console.log(StartMsg);
    if (startAs == "startAsLocal") {
      dev = true;
      console.log("[DuccBOX] Launch {startAsLocal}");
    }
    if ((startAs = "startAsINIT")) {
      dev = false;
      console.log("[DuccBOX] Launch {startAsINIT}");
    }
    if(render == true ){
      document.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="manifest" href="manifest.webmanifest">
          <link rel="icon" type="image/svg+xml" href="img/app.svg">
          <meta property="og:title" content="DuccBOX an open world sandbox" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://duccboxjs-281f7.web.app" />
          <meta property="og:image" content="https://duccboxjs-281f7.web.app/img/logo.png" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="DuccBOX M2 is an Open world sandbox made with WebGL/Three.js"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>DuccBOX an open world sandbox</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link href="css/style.css" type="text/css" rel="stylesheet" />
          <style>
          body{
              background-color: gray;
              background-image: url(https://media.tenor.com/images/5c28d62f119f98ee5bbb33d015c3255b/tenor.gif);
              background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            font-family: Arial, Helvetica, sans-serif;
            }
            #Wrapper{
              position: fixed;
            }
            canvas {
              width: 100%;
              height: 100%
            }
            
            @font-face {
              font-family: ms-comic;
              src: url(../font/comicbd.ttf);
            }
            @font-face {
            font-family: stfpro;
            src: url(../font/SFPro/SF-Pro-Display-HeavyItalic.otf);
            }
            @font-face {
            font-family: stfpro-main;
            src: url(../font/SFPro/sfwin/SFPro/TrueType/SFProDisplay-Regular.ttf);
            }
            @font-face {
            font-family: px-sans;
            src: url(../font/px_sans_nouveaux.woff);
            }
            #comic{
              font-family: ms-comic;
            }
            #cords{   border-style: solid;
              border-color: black;
            border-width: 1px;
            position: fixed;
            top: auto;
            }
            
            input:focus {
            background-color: lightblue;
            }
            #duccbox-help-menu{
            margin: auto;
            width: 50%;
            padding: 10px;
            border-color: black;
            margin: 0.5cm;
            }
            #login{
              margin: auto;
              width: 60%;
              padding: 10px;
            }
            button{
              background-color: #708b82;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              float: right;
            }
            input[type=text]:focus,input[type=text]:hover{
              background-color: lightblue;
              }
              input[type=text], select, textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: vertical;
              }
          </style>
        </head>
        <body>
          <div style="position: fixed; display: none; background-color: rgb(189, 13, 13);   opacity: 0.5;" id="you-died">
      
          </div>
          <div id ='Wrappder'><div style="position: fixed;" id='DuccBOX'>
        <p class="rev" onclick="const params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100';window.open('/Milestone-builds.html', 'test', params);" id="rev">______|DuccBOX.js REV [REV_ID]</p>7
        <br/>
        <p class="cords" id="cords"></p><br/>
        <p id="username"></p>
        <p id="prog"></p>
        <p id='id1'></p>
       <h1 id='kicked'></h1>
       <p onclick="window.open('../account/index.html','New Tab',
        'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');"><kbd>Account</kbd></p>
       <div id='Help' style="border-style: solid; position: fixed;">
         <samp><p>DuccBOX.js controls.</p>
          <!--[if lte IE 8]>
            <h1>Browser is ducced</h1>
      <![endif]-->
           <p><kbd>W</kbd>forward</p></br>
           <p><kbd>A</kbd>left</p></br>
           <p><kbd>S</kbd>backword</p></br>
           <p><kbd>D</kbd>left</p></br>
           <p><kbd>R</kbd>Rotate right</p></br>
           <p><kbd>E</kbd>Rotate left</p></br>
           <p><kbd>X</kbd>Open Help</p></br>
           <p><kbd>L</kbd>Open Login Menu</p></br>
           <p><kbd onclick="document.getElementById('Help').style.display='none'">Close Help</kbd></br></samp>
       </div>
        <div id="chat" style="position: fixed;
        bottom: 0;
        right: 0;
        width: 240px">    <ul id="messages"></ul>
          <form id="form"  action="">
            <input id="input" autocomplete="off" />
            <button style="background-color: #7c7878; /* Green */
            border: none;
            color: rgb(0, 0, 0);
            padding: 10px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 10px;">Send</button>
          </form></div>
          <div id='eRR' style="
          display: none;
          margin: auto;
          width: 50%;
          border: 3px solid rgb(148, 37, 37);
          padding: 10px;">
       <samp><h1>DuccBOX.js object [cube10] has peformed an ilegal aciton</h1></br>
         <kbd onclick="document.getElementById('eRR').style.display = 'none'">Close Window</kbd></samp>
          </div>
          <div id='login-box' style="
          bottom: 0;
          display: none;
          position: fixed;
          margin: auto;
          width: 50%;
          border: 3px solid rgb(0, 0, 0);
          padding: 10px;">
       <samp><form id='login-form-box'>
         <input type="text" id='email' value="email@email">
         <input type="text" id="pass" value="pass">
         <input type="submit" value="login">
         </form>
       </br>
      </br>
         <p id='login-status'></br>
         <kbd onclick="document.getElementById('login-box').style.display = 'none'">Exit login form</kbd></samp>
          </div>
         </div> 
         <div id='DuccBOXF3' style="display: none;
         position: fixed;
         border-style: solid;">
         </br>
       </br>
       </br>
       </br>
       <div>
         <samp><kbd>DuccBOX.js 4.0 M2</kbd>
       </br>
       <p id='F3CORDS'></p></br>
       <p id='F3RENDER'></p></br>
       <p id='F3WINDOW'></p></br>
       <p id='F3HEAP'></p></br>
       <p id="F3DATE"></p></br>
      </samp>
       </div>
         </div></div>
         <noscript><h1>DuccBOX.js will not run without javaScript...</h1></noscript>
       <script>window.addEventListener("keydown", function () {switch (event.keyCode) {case 52:document.getElementById('DuccBOXF3').style.display = 'none';document.getElementById('DuccBOX').style.display = 'block';break;}})</script>
        </body>
      </html>
      <!--Loaded from javascript-->
      `)
      console.log('[DUCCBOX] extra pram [render:true] loaded html')
    }
    let players = [];
    console.log("[DuccBOX] Loading init chunk");
    if (!THREE) {
      throw new Error(
        "[DuccBOX] THIS IS A FATAL THREE.JS ERROR PLEASE REPORT THIS TO @I like food#8767 [ENV THREE = NULL]"
      );
    }
    console.log(`%c
██████╗░██╗░░░██╗░█████╗░░█████╗░██████╗░░█████╗░██╗░░██╗░░░░░░░░██╗░██████╗
██╔══██╗██║░░░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗██╔╝░░░░░░░░██║██╔════╝
██║░░██║██║░░░██║██║░░╚═╝██║░░╚═╝██████╦╝██║░░██║░╚███╔╝░░░░░░░░░██║╚█████╗░
██║░░██║██║░░░██║██║░░██╗██║░░██╗██╔══██╗██║░░██║░██╔██╗░░░░██╗░░██║░╚═══██╗
██████╔╝╚██████╔╝╚█████╔╝╚█████╔╝██████╦╝╚█████╔╝██╔╝╚██╗██╗╚█████╔╝██████╔╝
╚═════╝░░╚═════╝░░╚════╝░░╚════╝░╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░╚════╝░╚═════╝░
`, `font-family: monospace`);
    let user;
    if (dev == true) {
      socket = io();
    } else {
      const server = "https://duccboxsocket.rileythedoggo.repl.co";
      socket = io(server);
    }
   
    $(document).ready(function () {
      $(document).on("submit", "form", function () {
        return false;
      });
    });
    let PlayerHealth = 20;
    const manager = new THREE.LoadingManager();
    const firebaseConfig = {
      apiKey: "AIzaSyCk1yrVh0zTC8BBu-mirrHaqhaMGcg-6Xo",
      authDomain: "duccboxjs-281f7.firebaseapp.com",
      databaseURL: "https://duccboxjs-default-rtdb.firebaseio.com",
      projectId: "duccboxjs",
      storageBucket: "duccboxjs.appspot.com",
      messagingSenderId: "1070773113218",
      appId: "1:1070773113218:web:578d79b68a8e7d1727ff9b",
      measurementId: "G-7WDEN5SZJ6",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const auth = firebase.auth();
    $(document).ready(function () {
      $(document).on("submit", "form", function () {
        return false;
      });
    });
    document
      .getElementById("login-form-box")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        auth
          .signInWithEmailAndPassword(
            document.getElementById("email").value,
            document.getElementById("pass").value
          )
          .then(() => {
            auth.onAuthStateChanged((user1) => {
              if (user1) {
                user = user1;
                document.getElementById(
                  "login-status"
                ).innerHTML = `<h3>Hello ${user1.displayName}!</h3> <p>User ID: ${user1.uid}</p></br><p>User uuid: ${user1.uuID}</p></br> <kbd onclick="document.getElementById('login-box').style.display = 'none'">Exit login form</kbd>`;
                myName = user1.displayName;
                document.getElementById(
                  "username"
                ).innerHTML = `username: ${myName}`;
              }
            });
          })
          .catch((error) => {
            document.getElementById("login-status").innerHTML =
              "Error:" + error.message;
            setTimeout(() => {
              document.getElementById("login-status").innerHTML = "";
              document.getElementById("new-login-status").innerHTML = "";
            }, 4000);
          });
      });
    function init() {
      let myName = `Guest${Math.floor(Math.random() * 5000)}`;
      console.log("My Name is " + myName);
      const fonts = ["font-family: px-sans;", "font-family: ms-comic;"];
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      if (randomFont == "font-family: ms-comic;") {
        document.getElementById(
          "rev"
        ).innerHTML = `________||DuccBOX.js REV ${version} `;
      }
      if (randomFont == "font-family: px-sans;") {
        document.getElementById(
          "rev"
        ).innerHTML = `______||DuccBOX.js REV ${version} `;
      }
      document.getElementById("rev").style.cssText = randomFont;
      const FontLoad = new THREE.FontLoader();
      let font;
      FontLoad.load(
        "./js/node_modules/three/examples/fonts/helvetiker_bold.typeface.json",
        function (font_) {
          font = font_;
        }
      );
      socket.emit("client-user-joined", myName);
      const Object3D = new THREE.Object3D();
      const mixer = new THREE.AnimationMixer();
      var stats = new Stats();
      stats.showPanel(0);
      document.body.appendChild(stats.dom);
      function ani() {
        stats.begin();
        stats.end();
        requestAnimationFrame(ani);
      }
      requestAnimationFrame(ani);
      console.log(
        "%cDuccBOX is an Open world sandbox made with WebGL/Three.js ",
        "color:blue;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
      console.log(
        "%cNote: This is a Milestone 2 bata build ",
        "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
      console.log(
        "You can find the Source code at [https://github.com/Riley-the-doggo/DuccBOX.js] "
      );
      //Control setup
      let camera,
        controls1,
        controls,
        scene,
        renderer,
        loader,
        skyTexture,
        raycaster;
      let moveForward = false;
      let moveBackward = false;
      let moveLeft = false;
      let moveRight = false;
      let canJump = false;
      let prevTime = performance.now();
      const velocity = new THREE.Vector3();
      const direction = new THREE.Vector3();
      const vertex = new THREE.Vector3();
      const color = new THREE.Color();
      console.info(version);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.y = 10;
      controls = new PointerLockControls( camera, document.body );
      controls.lock();
      loader = new GLTFLoader(manager);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      function helper() {
        scene.add(new THREE.GridHelper(900, 500));
        scene.add(new THREE.AxisHelper(2000));
      }
      loader.load(
        "GLtf/world.glb",
        function (gltf) {
          scene.add(gltf.scene);
          gltf.animations;
          gltf.scene;
          gltf.scenes;
          gltf.cameras;
          gltf.asset;
          gltf.scene.position.y = -1;
        },
        function (xhr) {
          document.getElementById(
            "prog"
          ).innerHTML = `File: World.glb / Loading World:% ${
            (xhr.loaded / xhr.total) * 100
          } % loaded`;
          setTimeout(() => {
            $("#prog").hide();
          }, 9000);
        },
        (function (error) {
          document.getElementById(
            "prog"
          ).innerHTML = `File: world.glb ERROR ${error}`;
        })(
          (skyTexture = new THREE.TextureLoader().load(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CgRkVD-wPJQUneeToWgeDWQrXrKVuG8pruN25ryy7APB99k_mWsu-H6_IGf1tQ4_XGk&usqp=CAU"
          ))
        )
      );
      if (!skyTexture) {
        console.error("DuccBOX.error Failed to load sky-box");
      }
      scene.background = skyTexture;

      socket.on("io-user-joined", () => {
        players.push(myName);
        console.log(players);
        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.position.x = Math.random() * 400;
      });
      function _light() {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-100, 300, -100);
        light.castShadow = true;
        light.shadow.camera.left = -2000;
        light.shadow.camera.right = 2000;
        light.shadow.camera.top = 2000;
        light.shadow.camera.bottom = -2000;
        light.shadow.camera.far = 2000;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        scene.add(light);
        const ambient = new THREE.AmbientLight(0x808080);
        scene.add(ambient);
      }
      _light();
      camera.rotation.y = -1;
      const geometry10 = new THREE.BoxGeometry(3, 3, 3);
      const material10 = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        map: new THREE.CubeTextureLoader()
          .setPath("/img/player/")
          .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]),
      });
      const cube10 = new THREE.Mesh(geometry10, material10);
      scene.add(cube10);
      camera.position.y = 0.5;
      window.addEventListener("keydown", function () {
        switch (event.keyCode) {
          case 87:
            cube10.position.x -= 1;
            break;
          case 65:
            cube10.position.z += 1;
            break;
          case 83:
            cube10.position.x += 1;
            break;
          case 69:
            cube10.rotation.y += 0.5;
            break;
          case 68:
            cube10.position.z -= 1;
            break;
          case 82:
            cube10.rotation.y -= 0.5;
            break;
          case 81:
            cube10.rotation.y += 0.5;
            break;
          case 32:
            cube10.position.y += 2;
            setTimeout(() => {
              cube10.position.y -= 2;
            }, 200);
            break;
        }
      });
      function F3() {
        const mem = performance.memory;
        document.getElementById("F3DATE").innerHTML =
          "BUILD ID:[" + version + "]";
        document.getElementById("DuccBOX").style.display = "none";
        document.getElementById("DuccBOXF3").style.display = "block";
        document.getElementById("F3HEAP").innerHTML =
          "js heap limit is:" + mem.jsHeapSizeLimit + " Bytes";
        function E33341() {
          requestAnimationFrame(E33341);
          (document.getElementById("F3RENDER").innerHTML =
            "used js Heap:" + mem.usedJSHeapSize / 1048576),
            mem.jsHeapSizeLimit / 1048576 + " Bytes";
        }
        E33341();
      }
      window.addEventListener("keydown", function () {
        switch (event.keyCode) {
          case 51:
            F3();
            break;
          case 88:
            document.getElementById("Help").style.display = "block";
            break;
          case 76:
            document.getElementById("login-box").style.display = "block";
            document.getElementById("Help").style.display = "none";
            break;
        }
      });

      /* --------------------------------------------*
     *                                               *
     *                   MULTIPLAYER                 *
     *                                               *
     ------------------------------------------------*/
      setInterval(() => {
        socket.emit("duccbox.update", cube10.position.x, cube10.position.z, cube10.position.y, cube10.rotation.y);
      });

      socket.on("io-user-joined", (pName) => {
        const NEWplayerName = pName;
        const NEWplayerBox = new THREE.BoxGeometry(3, 3, 3);
        const NEWplayerMesh = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        PlayerBOX = new THREE.Mesh(NEWplayerBox, NEWplayerMesh);
        scene.add(PlayerBOX);
      });
      socket.on("duccbox.update.remove", () => {
        delete [PlayerBOX];
      });
      socket.on("duccbox.update.pos", (pos1, pos2, pos3, posRot) => {
        PlayerBOX.position.x = pos1;
        PlayerBOX.position.z = pos2;
        PlayerBOX.position.y = pos3;
        PlayerBOX.rotation.y = posRot;
      });
      socket.emit("joined");
      //sun
      const sunTexture = new THREE.TextureLoader().load("img/2k_sun.jpg");
      /*"Comically large cheese wheel"-sajosup*/
      const sun = new THREE.Mesh(
        new THREE.SphereGeometry(20, 32, 20),
        new THREE.MeshStandardMaterial({
          map: sunTexture,
        })
      );
      let free = false;
      sun.position.y = 800;
      scene.add(sun);
      const geometry1 = new THREE.TorusGeometry(200, 1, 16, 200);
      const material1 = new THREE.MeshStandardMaterial({ color: 0xff6347 });
      const torus1 = new THREE.Mesh(geometry1, material1);
      torus1.position.y = 800;
      scene.add(torus1);

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener("resize", onWindowResize);
      function freecam1() {
        free = true;
        controls1 = new OrbitControls(camera, renderer.domElement);
        controls1.update();
      }
      socket.on("app-reload", () => {
        window.location.reload();
      });
      //Chat applicaiton
      const messages = document.getElementById("messages");
      const form = document.getElementById("form");
      const input = document.getElementById("input");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (input.value) {
          let sendMsg = `web ${myName} ${input.value}`;
          if (input.value.includes("fuck")) {
            sendMsg = `web ${myName} ****`;
          }
          socket.emit("chat message", sendMsg);
          input.value = "";
        }
      });
      let PlayerBOX;
      socket.on("kick", () => {
        socket.emit("client-user-kicked");
        socket.disconnect();
        delete [PlayerBOX];
        delete [cube10];
        document.getElementsByClassName("three_canvas").remove();
        document.getElementById("kicked").innerHTML = "You have been kicked!";
        throw new Error("Kicked by admin.");
      });
      socket.on("chat message", function (msg) {
        const item = document.createElement("li");
        item.textContent = msg;
        messages.appendChild(item);
        console.log("Chat:" + msg);
        window.scrollTo(0, document.body.scrollHeight);
      });
      if (cube10.position.y == -1) {
        document.getElementById("eRR").style.display = "block";
        cube10.position.y = 0;
      }
      cube10.position.y = 0.5;
      document.getElementById("username").innerHTML = `username: ${myName}`;
      document.addEventListener("keydown", function (event) {
        if (event.key == "f") {
          freecam1();
        }
      });
      function animate() {
        requestAnimationFrame(animate);
        (document.getElementById(
          "cords"
        ).innerHTML = `x:${cube10.position.x} y:${cube10.position.y} z:${cube10.position.z} look:${cube10.rotation.y}`),
          () => {
            console.log("DuccBOX.DomUpdate.cords");
          };
        document.getElementById("F3CORDS").innerHTML = `
        POS_x:${cube10.position.x} 
        POS_y:${cube10.position.y} 
        POS_z:${cube10.position.z} 
        ROT_look:${cube10.rotation.y}
        `;
        if (free == false) {
          camera.position.z = cube10.position.z;
          camera.position.x = cube10.position.x;
          camera.position.y = cube10.position.y;
        }
        document.getElementById("F3WINDOW").innerHTML =
          "Window Width:" +
          window.innerWidth +
          "Window Height:" +
          window.innerHeight;
        torus1.rotation.x += 0.007;
        torus1.rotation.y += 0.007;
        torus1.rotation.z += 0.007;
        camera.rotation.y = cube10.rotation.y;
        torus1.position.z += 0.03;
        sun.position.z += 0.03;
        renderer.render(scene, camera);
      }
      animate();
    }
    init();
  }
}

export default new DuccBOX();
new DuccBOX("startAsINIT", "LOADED DUCCBOX.JS REV:" + version);
