const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5 ;
var roofObject , ropeObj1 , ropeObj2 , ropeObj3 , ropeObj4 , ropeObj5 ;
var world; 

function setup(){
    createCanvas(1600,700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    roofObject = new roof (width/2, height/4, width/7, 20);
    bobDiameter = 40;
    ropeLength = 30; 

    startBobPositionX = width/2;
    startBobPositionY = height/4 + 500;
    bobObj1 = new Bob (startBobPositionX - bobDiameter *2, startBobPositionY , bobDiameter);
    bobObj2 = new Bob (startBobPositionX - bobDiameter, startBobPositionY , bobDiameter);
    bobObj3 = new Bob (startBobPositionX , startBobPositionY , bobDiameter);
    bobObj4 = new Bob (startBobPositionX + bobDiameter, startBobPositionY , bobDiameter);
    bobObj5 = new Bob (startBobPositionX + bobDiameter *2, startBobPositionY , bobDiameter);

    ropeObj1 = new Rope (startRoofPositionX - bobDiameter *2, startBobPositionY , bobDiameter);
    ropeObj2 = new Rope (startRoofPositionX - bobDiameter, startBobPositionY , bobDiameter);
    ropeObj3 = new Rope (startRoofPositionX , startBobPositionY , bobDiameter);
    ropeObj4 = new Rope (startRoofPositionX + bobDiameter, startBobPositionY , bobDiameter);
    ropeObj5 = new Rope (startRoofPositionX + bobDiameter *2, startBobPositionY , bobDiameter);

    var render = Render.create({
       element : document.body, 
       engine: engine,
       options:{
         width: 1200,
         height: 700,
         wireFrame: false
       } 
    })
}
