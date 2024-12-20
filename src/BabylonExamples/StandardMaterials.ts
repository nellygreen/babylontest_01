
import {
    Scene, 
    Engine, 
    FreeCamera, 
    Vector3, 
    HemisphericLight, 
    MeshBuilder,
    StandardMaterial,
    Texture,


    } from "@babylonjs/core";

export class StandardMaterials {

    //Declare Properties
    scene: Scene;
    engine: Engine; 
    
    
    //Create Basic Constructor Method (Basic Enviroment/Canvas Setup)
    constructor(private canvas: HTMLCanvasElement) {

    //Create the Enviroment/Canvas (antializing = true)   
    this.engine = new Engine(this.canvas, true);

    //Place the Scene inside the Canvas
    this.scene = this.CreateScene();

    //Render the Scene (Stert render Loop)
    this.engine.runRenderLoop(() => {

        this.scene.render();

    });

    }    
    // Basic Constructor Ends Here
    


    //Create Scene 
    CreateScene():Scene {

        //instantiate the Scene        
        const scene = new Scene(this.engine);

        //create the Camera, set up its Parameters, position the Camera
        const camera = new FreeCamera("camera", new Vector3(0,1,-3.5), this.scene);

        //create Camera Controlls
        camera.attachControl();

        //Setup Camera speed
        camera.speed = 0.25;

        //create the Lighting
        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), this.scene);

        //setup Lighting Intensity
        hemiLight.intensity = 1;

        //create the Ground Plane
        const ground = MeshBuilder.CreateGround("ground", {width:10, height:10}, this.scene);

        //create the Mesh
        const ball = MeshBuilder.CreateSphere("ball", { diameter: 1 }, this.scene);

        //position the Mesh
        ball.position  = new Vector3(0,1,0);

        //Assign  Materials to 3D Objects
        ground.material = this.CreateGroundMaterial();
        ball.material = this.CreateBallMaterial();

        //return the result
        return scene;
    }


    //Creare Standard Materials

    //Create Ground Material
    CreateGroundMaterial(): StandardMaterial {

        //Define Mat as a Standard Mat
        const groundMat = new StandardMaterial("groundMat", this.scene);

        //Create const for UV Scale
        const uvScale = 3;

        //Create the array that will manage all Textures of the mat (for scale etc.)
        const texArray: Texture[] = [];

        //Create Diffuse Texture
        const diffuseTex = new Texture("./textures/stone/Stone_D.png", this.scene);

        //Adjust UV Scale

        //Example for 1 Texture
        //diffuseTex.uScale = 4; //uniform scale
        //diffuseTex.vScale = 4;
        
        //Assign Diffuse to the material
        groundMat.diffuseTexture = diffuseTex;
        texArray.push(diffuseTex); //assign Diffuse to the array        

        //Create Additional Textures

        //Create Normal Map
        const normalTex = new Texture("./textures/stone/Stone_N.png", this.scene);

        //Assign Normal Map to the Material
        groundMat.bumpTexture = normalTex;
        texArray.push(normalTex); //assign Normal to the array

        //Create AO Map
        const aoTex = new Texture("./textures/stone/Stone_AO.png", this.scene);

        //Assign AO Map to the Material
        groundMat.ambientTexture = aoTex;
        texArray.push(aoTex); //assign AO to the array     


        //Create Spec Map
        const specTex = new Texture("./textures/stone/Stone_S.png", this.scene); //spec

        //Assign Spec Map to the Material
        groundMat.specularTexture = specTex;
        texArray.push(specTex); //assign spec to the array

        //Adjust UV Scale for all Maps
        texArray.forEach((tex)=>{
            tex.uScale = uvScale;
            tex.vScale = uvScale;
        })
        

        return groundMat;

    }

    //Create Ball Material
    CreateBallMaterial(): StandardMaterial {

        //Define Mat as a Standard Mat
        const ballMat = new StandardMaterial("ballMat", this.scene);

        //Create const for UV Scale
        const uvScale = 5;

        //Create the array that will manage all Textures of the mat (for scale etc.)
        const texArray: Texture[] = [];

        //Create Diffuse Texture
        const diffuseTex = new Texture("./textures/metal/Metal_D.png", this.scene);

        //Adjust UV Scale

        //Example for 1 Texture
        //diffuseTex.uScale = 4; //uniform scale
        //diffuseTex.vScale = 4;
        
        //Assign Diffuse to the material
        ballMat.diffuseTexture = diffuseTex;
        texArray.push(diffuseTex); //assign Diffuse to the array        

        //Create Additional Textures

        //Create Normal Map
        const normalTex = new Texture("./textures/metal/Metal_N.png", this.scene);

        //Assign Normal Map to the Material
        ballMat.bumpTexture = normalTex;

        //Invert Normal Map
        ballMat.invertNormalMapX = true;
        ballMat.invertNormalMapY = true;

        texArray.push(normalTex); //assign Normal to the array

        //Create AO Map
        const aoTex = new Texture("./textures/metal/Metal_AO.png", this.scene);

        //Assign AO Map to the Material
        ballMat.ambientTexture = aoTex;
        texArray.push(aoTex); //assign AO to the array     

        //Create Spec Map
        const specTex = new Texture("./textures/metal/Metal_S.png", this.scene); //spec

        //Assign Spec Map to the Material
        ballMat.specularTexture = specTex;
        ballMat.specularPower = 30; //adjust specularity
        texArray.push(specTex); //assign spec to the array

        //Adjust UV Scale for all Maps
        texArray.forEach((tex)=>{
            tex.uScale = uvScale;
            tex.vScale = uvScale;
        })
        

        return ballMat;

    }







}