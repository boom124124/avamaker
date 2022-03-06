var body
var hair
var clothes
var expression
var hairAcc
var earAcc
var faceAcc
var backgroundOptions
var backgroundSet
var eyeColor
var backgroundColor = 200


function preload() {
  //SKIN/BODY

  //skin previews
  skin1Preview = loadAnimation("skin1Preview.png");
  skin2Preview = loadAnimation("skin2Preview.png");
  skin3Preview = loadAnimation("skin3Preview.png");
  skin4Preview = loadAnimation("skin4Preview.png");
  skin5Preview = loadAnimation("skin5Preview.png");
  skin6Preview = loadAnimation("skin6Preview.png");

  //actual skin bodies things
  skin1 = loadAnimation("skin1.png");
  skin2 = loadAnimation("skin2.png");
  skin3 = loadAnimation("skin3.png");
  skin4 = loadAnimation("skin4.png");
  skin5 = loadAnimation("skin5.png");
  skin6 = loadAnimation("skin6.png");

  //HAIR

  hair1Auburn = loadAnimation("hair1aub.png");
  hair1Blond = loadAnimation("hair1bld.png");
  hair1Black = loadAnimation("hair1blk.png");
  hair1Brown = loadAnimation("hair1brn.png");
  hair1Ginger = loadAnimation("hair1gng.png");






  // HEAD ACC
  headband = loadAnimation("headband.png");
  beanie = loadAnimation("beanie.png");
  beret = loadAnimation("beret.png");
  hat = loadAnimation("hat.png");

  //EAR ACC
  earring1 = loadAnimation("earring1.png");
  earring2 = loadAnimation("earring2.png");
  earring3 = loadAnimation("earring3.png");
  earring4 = loadAnimation("earring4.png");
}

function setup() {
  createCanvas(1017, 825);

  sideOptions = createSprite(833, 350, 370, 1017);
  sideOptions.shapeColor = "#a5a58d"

  //background changing stuff

  backgroundChange = createButton("Click to change the color of the background");
  backgroundChange.position(700, 30);
  backgroundChange.size(250, 40)


  // skin color changing stuff

  body = createSprite(300, 500);
  body.scale = 0.46
  body.addAnimation("skin1", skin1);
  body.addAnimation("skin2", skin2);
  body.addAnimation("skin3", skin3);
  body.addAnimation("skin4", skin4);
  body.addAnimation("skin5", skin5);
  body.addAnimation("skin6", skin6);

  // skin1 button
  body1Button = createButton("skin1");
  body1Button.position(680, 90);
  body1Button.mouseClicked(bodyColorChange_body1);

  // skin2 button
  body2Button = createButton("skin2");
  body2Button.position(790, 90);
  body2Button.mouseClicked(bodyColorChange_body2);

  //skin3 button
  body3button = createButton("skin3");
  body3button.position(900, 90);
  body3button.mouseClicked(bodyColorChange_body3);


  //preview for green skin
  body1preview = createSprite(741, 100);
  body1preview.addAnimation("skin1", skin1Preview);


  //preview for purple skin
  body2preview = createSprite(853, 100);
  body2preview.addAnimation("skin2", skin2Preview);
  body2preview.scale = .89;

  //preview for seafoam skin
  body3preview = createSprite(975, 100);
  body3preview.addAnimation("skin3", skin3Preview);
  body3preview.scale = .89;

  // SECOND ROW OF BODY COLOR CHANGE

  //skin4 button
  body4button = createButton("skin4");
  body4button.position(680, 130);
  body4button.mouseClicked(bodyColorChange_body4);

  //skin5 button
  body5button = createButton("skin5");
  body5button.position(790, 130);
  body5button.mouseClicked(bodyColorChange_body5);

  //skin6 button
  body6button = createButton("skin6");
  body6button.position(900, 130);
  body6button.mouseClicked(bodyColorChange_body6);

  //preview for 4
  body4preview = createSprite(741, 140);
  body4preview.addAnimation("skin4", skin4Preview);


  //preview for 5
  body5preview = createSprite(853, 140);
  body5preview.addAnimation("skin5", skin5Preview);
  body5preview.scale = 2.5;

  //preview for 6
  body6preview = createSprite(975, 140);
  body6preview.addAnimation("skin6", skin6Preview);
  body6preview.scale = 1.29;


  //hair type and color stuff

  //FIRST ROW FOR THE HAIR COLOR STUFF : BROWN

  hair = createSprite(300, 496);
  hair.scale = 0.46
  hair.addAnimation("hair1brn", hair1Brown);
  hair.addAnimation("hair1blk", hair1Black);
  hair.addAnimation("hair1bld", hair1Blond);
  hair.addAnimation("hair1gng", hair1Ginger);
  hair.addAnimation("hair1aub", hair1Auburn);

  hairBrown1 = createButton("hair1");
  hairBrown1.position(650, 185);
  hairBrown1.mouseClicked(hairChange_brown1);

  hairBrown2 = createButton("hair2");
  hairBrown2.position(715, 185);
  //hairBrown1.mouseClicked(hairChange_brown2);

  hairBrown3 = createButton("hair3");
  hairBrown3.position(790, 185);
  //hairBrown3.mouseClicked(hairChange_brown3);

  hairBrown4 = createButton("hair4");
  hairBrown4.position(865, 185);
  //hairBrown4.mouseClicked(hairChange_brown4);

  hairBrown5 = createButton("hair5");
  hairBrown5.position(940, 185);
  //hairBrown5.mouseClicked(hairChange_brown5);

  //SECOND ROW FOR THE HAIR COLOR STUFF : BLACK

  hairBlack1 = createButton("hair1");
  hairBlack1.position(650, 215);
  hairBlack1.mouseClicked(hairChange_black1);

  hairBlack2 = createButton("hair2");
  hairBlack2.position(715, 215);
  //hairBlack2.mouseClicked(hairChange_black2);

  hairBlack3 = createButton("hair3");
  hairBlack3.position(790, 215);
  //hairBlack3.mouseClicked(hairChange_black3);

  hairBlack4 = createButton("hair4");
  hairBlack4.position(865, 215);
  //hairBlack4.mouseClicked(hairChange_black4);

  hairBlack5 = createButton("hair5");
  hairBlack5.position(940, 215);
  //hairBlack5.mouseClicked(hairChange_black5);

  //THIRD ROW FOR THE HAIR COLOR STUFF : BLOND

  hairBlond1 = createButton("hair1");
  hairBlond1.position(650, 245);
  hairBlond1.mouseClicked(hairChange_blond1);

  hairBlond2 = createButton("hair2");
  hairBlond2.position(715, 245);
  //hairBlond2.mouseClicked(hairChange_blond2);

  hairBlond3 = createButton("hair2");
  hairBlond3.position(790, 245);
  //hairBlond3.mouseClicked(hairChange_blond3);

  hairBlond4 = createButton("hair4");
  hairBlond4.position(865, 245);
  //hairBlond4.mouseClicked(hairChange_blond4);

  hairBlond5 = createButton("hair5");
  hairBlond5.position(940, 245);
  //hairBlond5.mouseClicked(hairChange_blond5);

  //FOURTH ROW FOR THE HAIR COLOR STUFF : AUBURN

  hairAuburn1 = createButton("hair1");
  hairAuburn1.position(650, 275);
  hairAuburn1.mouseClicked(hairChange_auburn1);

  hairAuburn2 = createButton("hair2");
  hairAuburn2.position(715, 275);
  //hairAuburn2.mouseClicked(hairChange_auburn2);

  hairAuburn3 = createButton("hair3");
  hairAuburn3.position(790, 275);
  //hairAuburn3.mouseClicked(hairChange_auburn3);

  hairAuburn4 = createButton("hair4");
  hairAuburn4.position(865, 275);
  //hairAuburn4.mouseClicked(hairChange_auburn4);

  hairAuburn5 = createButton("hair5");
  hairAuburn5.position(940, 275);
  //hairAuburn5.mouseClicked(hairChange_auburn5);

  //FIFTH ROW FOR THE HAIR COLOR STUFF : GINGER

  hairGinger1 = createButton("hair1");
  hairGinger1.position(650, 305);
  hairGinger1.mouseClicked(hairChange_ginger1);

  hairGinger2 = createButton("hair2");
  hairGinger2.position(715, 305);
  //hairGinger2.mouseClicked(hairChange_ginger2);

  hairGinger3 = createButton("hair3");
  hairGinger3.position(790, 305);
  //hairGinger3.mouseClicked(hairChange_ginger3);

  hairGinger4 = createButton("hair4");
  hairGinger4.position(865, 305);
  //hairGinger4.mouseClicked(hairChange_ginger4);

  hairGinger5 = createButton("hair5");
  hairGinger5.position(940, 305);
  //hairGinger5.mouseClicked(hairChange_ginger5);

  //ACCESSORIES

  //hair accessories : ROW ONE

  hairAcc = createSprite(300, 500);
  hairAcc.scale = 0.46
  hairAcc.addAnimation("headband", headband);
  hairAcc.addAnimation("hat", hat);
  hairAcc.addAnimation("beret", beret);
  hairAcc.addAnimation("beanie", beanie);


  headband = createButton("headband");
  headband.position(650, 370)
  headband.mouseClicked(headAccChange_headband);

  hat = createButton("hat");
  hat.position(762, 370);
  hat.mouseClicked(headAccChange_hat);

  beret = createButton("beret");
  beret.position(830, 370)
  beret.mouseClicked(headAccChange_beret);

  beanie = createButton("beanie");
  beanie.position(920, 370);
  beanie.mouseClicked(headAccChange_beanie);

  //ear accessories : ROW TWO

  earAcc = createSprite(300, 500);
  earAcc.addAnimation("earring1",earring1);
  earAcc.addAnimation("earring2",earring2);
  earAcc.addAnimation("earring3",earring3);
  earAcc.addAnimation("earring4",earring4);
  earAcc.scale = 0.46

  earring1 = createButton("earring1");
  earring1.position(650, 400);
  earring1.mouseClicked(earAccChange_earring1);

  earring2 = createButton("earring2");
  earring2.position(740, 400);
  earring2.mouseClicked(earAccChange_earring2);

  earring3 = createButton("earring3");
  earring3.position(830, 400);
  earring3.mouseClicked(earAccChange_earring3);

  earring4 = createButton("earring4");
  earring4.position(920, 400);
  earring4.mouseClicked(earAccChange_earring4);

  //face accessories : ROW THREE

  //faceAcc = createSprite(300, 700);

  glasses1 = createButton("glasses1");
  glasses1.position(650, 430);
  // glasses1.mouseClicked(faceAccChange_glasses1);

  glasses2 = createButton("glasses2");
  glasses2.position(740, 430);
  // glasses2.mouseClicked(faceAccChange_glasses2);

  glasses3 = createButton("glasses3");
  glasses3.position(830, 430);
  // glasses3.mouseClicked(faceAccChange_glasses3);

  glasses4 = createButton("glasses4");
  glasses4.position(920, 430);
  // glasses4.mouseClicked(faceAccChange_glasses4);

  //CLOTHES
 // clothes = createSprite(300, 600);

  clothes1 = createButton("clothes1");
  clothes1.position(650, 480);
  // clothes1.mouseClicked(clothesChange_clothes1);

  clothes2 = createButton("clothes2");
  clothes2.position(740, 480);
  // clothes2.mouseClicked(clothesChange_clothes2);

  clothes3 = createButton("clothes3");
  clothes3.position(830, 480);
  // clothes3.mouseClicked(clothesChange_clothes3);

  clothes4 = createButton("clothes4");
  clothes4.position(920, 480);
  // clothes4.mouseClicked(clothesChange_clothes4);

  //CLOTHES ROW TWO

  clothes5 = createButton("clothes5");
  clothes5.position(650, 510);
  //clothes5.mouseClicked(clothesChange_clothes5);

  clothes6 = createButton("clothes6");
  clothes6.position(740, 510);
  //clothes6.mouseClicked(clothesChange_clothes6);

  clothes7 = createButton("clothes7");
  clothes7.position(830, 510);
  //clothes7.mouseClicked(clothesChange_clothes7);

  clothes8 = createButton("clothes8");
  clothes8.position(920, 510);
  //clothes8.mouseClicked(clothesChange_clothes8);

  //EXPRESSIONS

 // expression = createSprite(300, 450);

  expression1 = createButton("surprised");
  expression1.position(650, 565);
  //expression1.mouseClicked(expressionChange_expression1);

  expression2 = createButton("smile:closed");
  expression2.position(740, 565);
  //expression2.mouseClicked(expressionChange_expression2);

  expression3 = createButton("smile:opened");
  expression3.position(850, 565);
  //expression3.mouseClicked(expressionChange_expression3);

  expression4 = createButton("neutral");
  expression4.position(960, 565);
  //expression4.mouseClicked(expressionChange_expression4);

  //EYES

  //eyeColor = createSprite(300, 950);

  eyeColor1 = createButton("brown");
  eyeColor1.position(649, 620);
  //eyeColor1.mouseClicked(eyeChange_eyeColor1);

  eyeColor2 = createButton("black");
  eyeColor2.position(724, 620);
  //eyeColor2.mouseClicked(eyeChange_eyeColor2);

  eyeColor3 = createButton("green");
  eyeColor3.position(799, 620);
  //eyeColor3.mouseClicked(eyeChange_eyeColor3);

  eyeColor4 = createButton("blue");
  eyeColor4.position(879, 620);
  //eyeColor4.mouseClicked(eyeChange_eyeColor4);

  eyeColor5 = createButton("hazel");
  eyeColor5.position(950, 620);
  //eyeColor5.mouseClicked(eyeChange_eyeColor5);




}

function draw() {
  background(backgroundColor);

  backgroundChange.mouseClicked(backgroundChangeFunction);

  drawSprites();
}

//backgroundChangeFunction

function backgroundChangeFunction() {
  backgroundColor = rgb(random(0, 255), random(0, 255), random(0, 255));
}

//FUNCTIONS FOR BODY COLOR TO CHANGE

//1
function bodyColorChange_body1() {
  body.changeAnimation("skin1", skin1);
}
//2
function bodyColorChange_body2() {
  body.changeAnimation("skin2", skin2);
}
//3
function bodyColorChange_body3() {
  body.changeAnimation("skin3", skin3);
}

//4
function bodyColorChange_body4() {
  body.changeAnimation("skin4", skin4);
}
//5
function bodyColorChange_body5() {
  body.changeAnimation("skin5", skin5);
}
//6
function bodyColorChange_body6() {
  body.changeAnimation("skin6", skin6);
}

//FUNCTIONS FOR THE HAIR TO CHANGE

//brown

function hairChange_brown1() {
  hair.changeAnimation("hair1brn", hair1Black);
}

//black
function hairChange_black1() {
  hair.changeAnimation("hair1blk", hair1Black);
}
//blond
function hairChange_blond1() {
  hair.changeAnimation("hair1bld", hair1Blond);
}

//auburn
function hairChange_auburn1() {
  hair.changeAnimation("hair1aub", hair1Auburn);
}
//ginger
function hairChange_ginger1() {
  hair.changeAnimation("hair1gng", hair1Ginger);
}



//FUNCTIONS FOR THE HEAD ACCESSORY TO CHANGE
function headAccChange_beanie(){
hairAcc.changeAnimation("beanie",beanie);
}

function headAccChange_beret(){
hairAcc.changeAnimation("beret",beret);
}

function headAccChange_hat(){
hairAcc.changeAnimation("hat",hat);
}

function headAccChange_headband(){
hairAcc.changeAnimation("headband",headband);
}

//FUNCTIONS FOR THE EAR ACCESSORY TO CHANGE
function earAccChange_earring1(){
  earAcc.changeAnimation("earring1",earring1);
}

function earAccChange_earring2(){
  earAcc.changeAnimation("earring2",earring2);
}

function earAccChange_earring3(){
  earAcc.changeAnimation("earring3",earring3);
}

function earAccChange_earring4(){
  earAcc.changeAnimation("earring4",earring4);
}

