var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 1500;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var ezra=new Image;
ezra.src="fgdg.jpg";
var lovec=new Image;
lovec.src="vCHoY (1).png";
var shturmovak=new Image;
shturmovak.src="CloneJetTrooperPhaseI-BFOS.png";
var clone=new Image;
clone.src="Clone_Troopers_5.jpg";
var kanan=new Image;
kanan.src="SW_CI_rebels_kanan.jpg";
var zep=new Image;
zep.src="SW_CI_rebels_zeb.jpg";
var inkvizitor=new Image;
inkvizitor.src="SW_CI_rebels_inquisitor.jpg";
var myX=20, myY=252,mishkaX=0,mishkaY=0, patronDX=4, patronDY=3, patronX=80, patronY=252, vragX=[], vragY=[], vrag2X=3000, vrag2Y=Math.random()*550, vrag3X=20000, vrag3Y=Math.random()*550;
var vrpatX=[], vrpatY=[], jediX=0, jediY=-700, sitX=8000, sitY=200;
var zebX=100, zebY=1000000000000;
vrpatX[1]=5000; vrpatY[1]=Math.random()*550;
vrpatX[2]=15000; vrpatY[2]=Math.random()*550; 

vragX[1]=2000;  vragY[1]=Math.random()*550;
vragX[2]=4000;  vragY[2]=Math.random()*550;
vragX[3]=6000;  vragY[3]=Math.random()*550;

window.addEventListener("keyup", function (args) {      //vika se pri puskane na kopche natiskano do sega
console.log(args.which);
    
if(args.which==74){
jediX=0;
jediY=200;
} 

if(args.which==76){
zebX=0;
zebY=200;
}
    
if(args.which==87){
myY=myY-15;
}
if(args.which==83){
myY=myY+15;
}

}, false);

window.addEventListener("mouseup", function (args) {
mishkaX=args.clientX-canvas.offsetLeft;
mishkaY=args.clientY-canvas.offsetTop;
    
patronX=myX;
patronY=myY;
patronDX=(mishkaX-myX)/100;
patronDY=(mishkaY-myY)/100;
}, false);


function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
patronX=patronX+patronDX;
patronY=patronY+patronDY;

jediX=jediX+2;
zebX=zebX+3;
    
vrpatX[1]=vrpatX[1]-2;
vrpatX[2]=vrpatX[2]-2;    

sitX=sitX-2;
vrag2X=vrag2X-3;    
vrag3X=vrag3X-5;
vragX[1]=vragX[1]-3;
vragX[2]=vragX[2]-3;
vragX[3]=vragX[3]-3;
    
    
if(patronX<vrag3X+120 && vrag3X<patronX+120 &&
      patronY<vrag3Y+126 && vrag3Y<patronY+126){
      console.log("igracha se bluska");
vrag3X=20000;
vrag3Y=Math.random()*550;
}
    
    if(patronX<vrag2X+115 && vrag2X<patronX+115 &&
      patronY<vrag2Y+116 && vrag2Y<patronY+116){
      console.log("igracha se bluska");
vrag2X=3000;
vrag2Y=Math.random()*550;
}
    
    if(patronX<vragX[1]+75 && vragX[1]<patronX+75 &&
      patronY<vragY[1]+116 && vragY[1]<patronY+116){
      console.log("igracha se bluska");
vragX[1]=4000;
vragY[1]=Math.random()*500;
}
    
    if(patronX<vragX[2]+115 && vragX[2]<patronX+115 &&
      patronY<vragY[2]+116 && vragY[2]<patronY+116){
      console.log("igracha se bluska");
vragX[2]=5000;
vragY[2]=Math.random()*500;
}
    
    if(patronX<vragX[3]+115 && vragX[3]<patronX+115 &&
      patronY<vragY[3]+116 && vragY[3]<patronY+116){
      console.log("igracha se bluska");
vragX[3]=5000;
vragY[3]=Math.random()*500;
}
    
    if(jediX<sitX+110 && sitX<jediX+110 &&
      jediY<sitY+168 && sitY<jediY+168){
      console.log("igracha se bluska");
sitX=5000;
sitY=200;
}

    setTimeout(update, 10); //kol;ko chesto da se dviji
}

function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;                                    //NEBARAI Tezi redove- s tqh zapochva draw-a!
    context.fillStyle = "#ff0000"; 
    context.fillRect(vrpatX[1], vrpatY[1], 60, 10);
    context.fillRect(vrpatX[2], vrpatY[2], 60, 10);
    
    context.fillStyle = "#ffff00";//izbor na cvqt

    context.drawImage(ezra, myX, myY, 105, 145);
    context.drawImage(lovec, vrag3X , vrag3Y, 120, 121);
    context.drawImage(shturmovak, vrag2X, vrag2Y, 120, 121);
        context.drawImage(clone, vragX[1], vragY[1], 80, 121);
        context.drawImage(clone, vragX[2], vragY[2], 80, 121);
        context.drawImage(clone, vragX[3], vragY[3], 80, 121);
    
    context.drawImage(zep, zebX, zebY, 220, 336);
    context.drawImage(inkvizitor,sitX, sitY, 220, 336);
    context.drawImage(kanan, jediX, jediY, 220, 336);
    
    context.fillRect(patronX, patronY, 10, 10);
    
    context.fillStyle = "#0000ff";
    //risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!