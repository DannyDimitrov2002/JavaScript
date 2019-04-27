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
 
var myX=10, myY=10,mishkaX=0,mishkaY=0,broiZmii=4;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var pole=[],zmiiGlaviX=[],zmiiGlaviY=[],zmiiDuljini=[],zmiiPosoki=[],zmiiJivaLiE=[],isKeyDown=[];
var zmiiMinalaPrezX=[],zmiiMinalaPrezY=[],zmiiFunkciaZaIzborNaPosoka=[];
var posokaX=[0,1,0,-1];
var posokaY=[1,0,-1,0];
for(x=0;x<25;x++){
    pole[x]=[];
    pole[x][0]=2;
    pole[x][24]=2;
    for(y=1;y<24;y++){
        pole[x][y]=0;
 
        if(Math.random()<0.07){
            pole[x][y]=2;
        }                
    }
}
generateAFood();
function generateAFood(){
    var fX=Math.floor(Math.random()*23)+1,fY=Math.floor(Math.random()*23)+1;
    while(pole[fX][fY]!=0){
        fX=Math.floor(Math.random()*23)+1;
        fY=Math.floor(Math.random()*23)+1;
    }
    pole[fX][fY]=1;
}
for(y=0;y<25;y++){
    pole[0][y]=2;
    pole[24][y]=2;    
}
for(y=0;y<250;y++){
    isKeyDown[y]=false;
}
for(iZ=0;iZ<broiZmii;iZ++){
    zmiiGlaviX[iZ]=2+5*iZ;
    zmiiGlaviY[iZ]=12;
    zmiiJivaLiE[iZ]=true;
    zmiiDuljini[iZ]=2;
    zmiiMinalaPrezX[iZ]=[];
    zmiiMinalaPrezX[iZ][0]=zmiiGlaviX[iZ];
    zmiiMinalaPrezY[iZ]=[];
    zmiiMinalaPrezY[iZ][0]=zmiiGlaviY[iZ];
    pole[zmiiGlaviX[iZ]][zmiiGlaviY[iZ]]=3;
 
}
 
function AI(indexZmiq){
    var kopiePole=[],j,end;
    for(j=0;j<25;j++){
      kopiePole[j]=[];    
    }
    for(y=0;y<25;y++){
         for(x=0;x<25;x++){
           if(pole[x][y]==0){
            kopiePole[x][y]=-1;  
           }
           if(pole[x][y]==2){
             kopiePole[x][y]="s";
           }
           if(pole[x][y]==1){
            kopiePole[x][y]=0;
           }
           if(pole[x][y]==3){
            kopiePole[x][y]="s";  
           }
           if(pole[x][y]==4){
            kopiePole[x][y]="s";  
           }
         }
      }
    function IzkustvenIntelect(){
    var Stop;
    Stop=false;
    for(;!Stop;){
    Stop=true;
    for(y=0;y<25;y++){
    for(x=0;x<25;x++){
    if(kopiePole[x][y]>=0 && kopiePole[x][y]<=100){
     if(x+1<25 && kopiePole[x+1][y]==-1){
      kopiePole[x+1][y]=kopiePole[x][y]+1;
      Stop=false;
     }
     if(x-1>=0 && kopiePole[x-1][y]==-1){
      kopiePole[x-1][y]=kopiePole[x][y]+1;
      Stop=false;
     }
     if(y+1<25 && kopiePole[x][y+1]==-1){
      kopiePole[x][y+1]=kopiePole[x][y]+1;
      Stop=false;
     }
     if(y-1>=0 && kopiePole[x][y-1]==-1){
      kopiePole[x][y-1]=kopiePole[x][y]+1;
      Stop=false;
     }
    }
    }
    }
    }
}
  IzkustvenIntelect();
  var promenenX,promenenY,vX,vY;
  vX=zmiiGlaviX[indexZmiq];
  vY=zmiiGlaviY[indexZmiq];
promenenX=0;
promenenY=0;
 if(vX-1>=0 && vX+1<25 && kopiePole[vX-1][vY]!="s" && kopiePole[vX+1][vY]!="s"){
   if(kopiePole[vX-1][vY]<kopiePole[vX+1][vY]){
     promenenX=vX-1;
   }
   if(kopiePole[vX+1][vY]<=kopiePole[vX-1][vY]){
     promenenX=vX+1;
   }
 }else{
 
   if(vX-1<0 || (vX-1>=0 && kopiePole[vX-1][vY]=="s")){
     promenenX=vX+1;
   }
   if(vX+1>24 || (vX+1<=24 && kopiePole[vX+1][vY]=="s")){
     promenenX=vX-1;
   }
 }
 if(vY-1>=0 && vY+1<25  && kopiePole[vX][vY-1]!="s" && kopiePole[vX][vY+1]!="s"){
   if(kopiePole[vX][vY-1]<kopiePole[vX][vY+1]){
     promenenY=vY-1;
   }
   if(kopiePole[vX][vY+1]<=kopiePole[vX][vY-1]){
     promenenY=vY+1;
   }
 }else{
   if(vY-1<0 || (vX-1>=0 && kopiePole[vX][vY-1]=="s")){
     promenenY=vY+1;
   }
   if(vY+1>24 || (vY+1<=24 && kopiePole[vX][vY+1]=="s")){
     promenenY=vY-1;
   }
 }
 var f,s;
 if((promenenX<0 || promenenX>24 )){
    f=1000
}else{
  f=kopiePole[promenenX][vY];  
}
    if((promenenY<0 || promenenY>24 )){
    s=1000
}else{
  s=kopiePole[vX][promenenY];  
}
 
 
 
 if((f<=s  &&  kopiePole[promenenX][vY]!="s" ) || kopiePole[vX][promenenY]=="s"){
 
   if(promenenX==vX-1){
    return 0;  
   }
   if(promenenX==vX+1){
    return 1;  
   }
 }
 if((s<f && kopiePole[vX][promenenY]!="s") || kopiePole[promenenX][vY]=="s"){
   
        if(promenenY==vY-1){
    return 2;  
   }
   if(promenenY==vY+1){
    return 3;  
   }
 }
 
}
window.addEventListener("keyup", function (args) {      //vika se pri puskane na kopche natiskano do sega
    isKeyDown[args.which]=false;
}, false);
window.addEventListener("keydown", function (args) {      //vika se pri puskane na kopche natiskano do sega
    isKeyDown[args.which]=true;
}, false);
 
function moqAI(koqZmiqSme){
    if(!(zmiiPosoki[koqZmiqSme]>=0 && zmiiPosoki[koqZmiqSme]<=3)){
        return Math.floor(Math.random()*4);
    }
    if(Math.random()>0.2 && pole[zmiiGlaviX[koqZmiqSme]+posokaX[zmiiPosoki[koqZmiqSme]]]
                                [zmiiGlaviY[koqZmiqSme]+posokaY[zmiiPosoki[koqZmiqSme]]]<2){
        return zmiiPosoki[koqZmiqSme];
    }else{
        var novaPosoka=zmiiPosoki[koqZmiqSme]+1,drugaPosoka=zmiiPosoki[koqZmiqSme]-1;
        if(novaPosoka>=4){
            novaPosoka=0;
        }
        if(drugaPosoka<0){
            drugaPosoka=3;
        }
        if((Math.random()>0.5 && pole[zmiiGlaviX[koqZmiqSme]+posokaX[novaPosoka]]
                                     [zmiiGlaviY[koqZmiqSme]+posokaY[novaPosoka]]<2) ||
                                 pole[zmiiGlaviX[koqZmiqSme]+posokaX[drugaPosoka]]
                                     [zmiiGlaviY[koqZmiqSme]+posokaY[drugaPosoka]]>=2
          ){
            return novaPosoka;
        }else{
            return drugaPosoka;
        }
    }
}
function moqAIKlaviatura(koqZmiqSme){
    if(!(zmiiPosoki[koqZmiqSme]>=0 && zmiiPosoki[koqZmiqSme]<=3)){
        return Math.floor(Math.random()*4);
    }
 
    if(isKeyDown[37]){
        return 3;
    }
    if(isKeyDown[39]){
        return 1;
    }
    if(isKeyDown[40]){
        return 0;
    }
    if(isKeyDown[38]){
        return 2;
    }
    return zmiiPosoki[koqZmiqSme];
}
 
function f(indexGlava)
{
    myX=zmiiGlaviX[indexGlava];
    myY=zmiiGlaviY[indexGlava];
    var q=[], brSlojeni=0, brMahnati=0, hranaX, hranaY, obhodeni=[], put=[];
    for(i=0;i<25;i++)
    {
        put[i]=[];
        obhodeni[i]=[];
        for(j=0;j<25;j++)
        {
            obhodeni[i][j]=false;
            put[i][j]=-1;
            if(pole[i][j]==1)
            {
                hranaX=i;hranaY=j;
            }
        }
    }
   // console.log(hranaX,hranaY);
    q.push(hranaX);q.push(hranaY);
    brSlojeni++;
    put[hranaX][hranaY]=0;
    obhodeni[hranaX][hranaY]=true;
    while(brSlojeni>brMahnati)
    {
        var x=q.shift();
        var y=q.shift();
        brMahnati++;
        if((pole[x+1][y]==0 || pole[x+1][y]==3)&& !obhodeni[x+1][y])////////////
        {
            q.push(x+1);q.push(y);
            brSlojeni++;
            obhodeni[x+1][y]=true;
            put[x+1][y]=put[x][y]+1;
        }
        if((pole[x-1][y]==0 || pole[x-1][y]==3)&& !obhodeni[x-1][y])/////////
        {
            q.push(x-1);q.push(y);
            brSlojeni++;
            obhodeni[x-1][y]=true;
            put[x-1][y]=put[x][y]+1;
        }
         if((pole[x][y+1]==0 || pole[x][y+1]==3)&& !obhodeni[x][y+1])//////////
        {
            q.push(x);q.push(y+1);
            brSlojeni++;
            obhodeni[x][y+1]=true;
            put[x][y+1]=put[x][y]+1;
        }
        if((pole[x][y-1]==0 || pole[x][y-1]==3)&& !obhodeni[x][y-1])///////////
        {
            q.push(x);q.push(y-1);
            brSlojeni++;
            obhodeni[x][y-1]=true;
            put[x][y-1]=put[x][y]+1;
        }
    }
   
    if(put[myX][myY+1]==put[myX][myY]-1)
    {
        return 0;
    }
    if(put[myX+1][myY]==put[myX][myY]-1)
    {
        return 1;
    }
    if(put[myX][myY-1]==put[myX][myY]-1)
    {
        return 2;
    }
    if(put[myX-1][myY]==put[myX][myY]-1)
    {
        return 3;
    }
 
 
}
zmiiFunkciaZaIzborNaPosoka[0]=f;
zmiiFunkciaZaIzborNaPosoka[1]=moqAI;
zmiiFunkciaZaIzborNaPosoka[2]=moqAIKlaviatura;
zmiiFunkciaZaIzborNaPosoka[3]=AI;
function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    for(iZ=0;iZ<broiZmii;iZ++){
        if(zmiiJivaLiE[iZ]){
            var izbranaPosoka=zmiiFunkciaZaIzborNaPosoka[iZ](iZ);
            if((izbranaPosoka+2)%4==zmiiPosoki[iZ] || (!(izbranaPosoka>=0 && izbranaPosoka<4))){
                zmiiJivaLiE[iZ]=false;//shtoto iska da se vrutne naopaki
                console.log("smurt ot obrushtane za",iZ,izbranaPosoka);
               
            }else{
                zmiiPosoki[iZ]=izbranaPosoka;
 //               console.log(iZ,izbranaPosoka);
                if(pole[zmiiGlaviX[iZ]+posokaX[izbranaPosoka]]
                   [zmiiGlaviY[iZ]+posokaY[izbranaPosoka]]<2){
                    if(zmiiMinalaPrezX[iZ][zmiiDuljini[iZ]-1]>=0 &&//moje da e neshto undefined-nato
                       zmiiMinalaPrezX[iZ][zmiiDuljini[iZ]-1]<=24&&//ako sega rastem, naprimer
                       zmiiMinalaPrezY[iZ][zmiiDuljini[iZ]-1]>=0 &&
                       zmiiMinalaPrezY[iZ][zmiiDuljini[iZ]-1]<=24){
                          pole[zmiiMinalaPrezX[iZ][zmiiDuljini[iZ]-1]][zmiiMinalaPrezY[iZ][zmiiDuljini[iZ]-1]]=0;
                    }
                    for(iD=zmiiDuljini[iZ]-1;iD>0;iD--){
                        zmiiMinalaPrezX[iZ][iD]=zmiiMinalaPrezX[iZ][iD-1];
                        zmiiMinalaPrezY[iZ][iD]=zmiiMinalaPrezY[iZ][iD-1];
                    }
                    pole[zmiiGlaviX[iZ]][zmiiGlaviY[iZ]]=4;
                    zmiiGlaviX[iZ]=zmiiGlaviX[iZ]+posokaX[izbranaPosoka];              
                    zmiiGlaviY[iZ]=zmiiGlaviY[iZ]+posokaY[izbranaPosoka];
                    if(pole[zmiiGlaviX[iZ]][zmiiGlaviY[iZ]]==1){
                        zmiiDuljini[iZ]++;
                        generateAFood();
                    }
                    pole[zmiiGlaviX[iZ]][zmiiGlaviY[iZ]]=3;
                    zmiiMinalaPrezX[iZ][0]=zmiiGlaviX[iZ];
                    zmiiMinalaPrezY[iZ][0]=zmiiGlaviY[iZ];
 
                }else{
                    zmiiJivaLiE[iZ]=false;
                    console.log("smurt ot bluskane",iZ);
                }
            }
        }
    }
 //   console.log("grozen si");
    setTimeout(update, 300); //kolko chesto da se dviji
}
 
function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;                                    //NEBARAI Tezi redove- s tqh zapochva draw-a!
    for(x=0;x<25;x++){
        for(y=0;y<25;y++){
            if(pole[x][y]==0){
                context.fillStyle = "#00FF00";//izbor na cvqt
                context.fillRect(x*20, y*20, 19, 19); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==1){
                context.fillStyle = "#FF0000";//izbor na cvqt
                context.fillRect(x*20, y*20, 19, 19); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==2){
                context.fillStyle = "#999999";//izbor na cvqt
                context.fillRect(x*20, y*20, 19, 19); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==3){
                context.fillStyle = "#0090FF";//izbor na cvqt
                context.fillRect(x*20, y*20, 19, 19); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==4){
                context.fillStyle = "#2200AF";//izbor na cvqt
                context.fillRect(x*20, y*20, 19, 19); //risuvane na zapulnen kvadrat s izb
            }
 
        }
    }
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!