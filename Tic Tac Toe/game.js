var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX=10, myY=10,mishkaX=0,mishkaY=0 , naHod=2, x , y;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var nimerPole, pole=[];
pole[0]=[];
pole[1]=[];
pole[2]=[];
pole[3]=[];
 for(y=0; y<3; y=y+1){
        for(x=0; x<3; x=x+1){
        pole[x][y]=0;
        }
 }
window.addEventListener("keyup", function (args) {      //vika se pri puskane na kopche natiskano do sega
}, false);

window.addEventListener("mouseup", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
    if(pole[Math.floor(mishkaX/150)][Math.floor(mishkaY/150)]==0){
    pole[Math.floor(mishkaX/150)][Math.floor(mishkaY/150)]=naHod;
    if(naHod==1){
    naHod=2;
    }else{
    naHod=1;
    }
    console.log(naHod);
    myY=mishkaY;
    }
}, false);


function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    myX=myX+(mishkaX-myX)/10;

    setTimeout(update, 10); //kolko chesto da se dviji
}

function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;                                    //NEBARAI Tezi redove- s tqh zapochva draw-a!
var x, y , poredno
    for(x=0; x<3; x=x+1){
        for(y=0; y<3; y=y+1){
        poredno=x+3*y;
        if(pole[x][y]==0){
            context.fillStyle = "#000000";
            context.fillRect(150*x,150*y ,148 ,148 );
        }
                    if(pole[x][y]==1){
            context.fillStyle = "#CF0000";
            context.fillRect(150*x,150*y ,148 ,148 );
        }
                    if(pole[x][y]==2){
            context.fillStyle = "#0000FF";
            context.fillRect(150*x,150*y ,148 ,148 );
                    }

        }
         
    }
 //risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!