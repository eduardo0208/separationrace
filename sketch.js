var x = 106
var y = 160

var x1 = 106 
var y1 = 110
  
var D = 18
var E = 370

var D1 = 19
var E1 = 371

var opcao = 1
var tela = 0

var R = 1
var resp = 0

var R1=1
var resp1=0
let img;
function preload(){
 img = loadImage('cred lop.jpg') 
  img2 = loadImage('credlop.png')
  imgmenu = loadImage('tela menu.png')
  img3 = loadImage('corrida.png')
  imgp1 = loadImage('cgfgg.png')
} // carregar as imagens e colocalas em variaveis

function setup() {
  createCanvas(400, 450);
}
//criar o plano cinza

function draw() {
  background(220);
  if(tela==0)
  menu();
  if(tela==1)
    fase1();
  if(tela==2)
    descrição();
  if(tela==3)
    instrucoes();
  if(tela==4)
    creditos();
  if(resp==1 && tela==1)
    pergunta2();
  if(resp==2 && tela==1)
    pergunta3();
  if(resp1==2 && resp==2)
    pergunta4();
  if(resp1==1 && resp==1)
    pergunta5();
}

function menu(){ //criar funçao propria para organizar melhor o codigo
   
  image(imgmenu, 0, 0); //carregar imagem
  fill(10) //cor
  rect(x, y, 185, 45); //quadrado de seleção
  
  textSize(40);  //tamanho da fonte
  stroke(255,0,0)  // borda
  
  strokeWeight(3);  // tamanho da borda
  fill(10);
  text(' Separation Race', 40, 50); // texto

  textSize(32);
  text('Iniciar jogo', 120, 190);
  text('Instruções', 125, 330);
  text('Descrição', 127, 260);
  text('Créditos', 137, 400);
}

function fase1(){
  
  image(img3, 0, 0);
  textSize(40);
  text('FASE 1', 140, 70)
  rect(x1, y1, 185, 90);
  
  textSize(12)
  text('qual é o melhor metodo a ser\n usado no preparo de café \n para separar o pó da parte \n liquida?',115,130)
  
   rect( D, E, 165, 50)
  
  textSize(25)
   text('decantação', 230, 400)
  text('filtração', 40, 400)
  if(resp==0 && resp!=1)
  image(imgp1, 105,355)
  
}

function pergunta2(){
  image(img3, 0, 0);
  
  textSize(40);
  text('FASE 2', 140, 70)
  rect(x1, y1, 185, 90);
  textSize(12)
  text('qual é o melhor metodo a ser\nusado para separar agua e oleo?',110,130)
  rect( D, E, 165, 50)
  textSize(25)
   text('decantação', 230, 400)
  text('filtração', 40, 400)
  if(tela==1 && tela!==0)
  image(imgp1, 110, 285)
}

function pergunta3(){
image(img3, 0, 0);
    
  textSize(40);
  text('FASE 3', 140, 70)
  rect(x1, y1, 185, 90);
  textSize(12)
  text('qual metodo de separação usado\n no tratamento da agua?',110, 130)
  rect( D1, E1, 165, 50)
  textSize(25)
   text('flotação', 230, 400)
  text('centrifugação', 25, 400)
  image(imgp1, 110, 225)
}

function pergunta4(){
image(img3, 0, 0);
  textSize(40);
  text('FASE 4', 140, 70)
  rect(x1, y1, 185, 90);
  textSize(12)
  text('qual metodo de separação usado\n no para separar o ouro da areia\n os dois na agua?',110, 130)
  rect( D1, E1, 165, 50)
  textSize(25)
   text('flocutação', 230, 400)
  text('levigação', 25, 400)
  image(imgp1, 110, 165)
}

function pergunta5(){
image(imgmenu, 0, 0);
  image(imgp1, 110, 75)
   stroke(255,0,0)  // borda
  
  strokeWeight(3);  // tamanho da borda
  fill(10);
  text('PARABÉNS \n   VOCÊ \n CHEGOU', 135, 50)
}

function instrucoes(){
  image(imgmenu, 0, 0);
  textSize(42)
  text('Instruções', 110, 60)
  textSize(14)
  text('Para jogar você precisa apenas mover as setas do teclado\n para a opção correta de separação que vai estar na  tela \n e apertar a tecla enter na opção desejada.',20 ,200)
 }

function descrição(){
  image(imgmenu, 0, 0);
  textSize(40)
  fill(10)
  text('Descrição', 110, 60)
  textSize(16)
  strokeWeight(3);
  fill(255, 255, 255)
  text('Separation Race é um jogo formulado para alunos\n do 6º ano do ensino fundamental, na matéria de \n ciências o jogo é referente a habilidade (EF06CI03),\n que é Selecionar métodos mais adequados para a\n separação de diferentes sistemas heterogêneos a \n partir da identificação de processos de separação\n de materiais (como a produção de sal de cozinha,\n a destilação de petróleo, entre outros).', 25, 180)

}

function creditos() {
  image(imgmenu, 0, 0);
  textSize(40)
  text('Créditos', 125, 40)
  image(img,10, 60)
  image(img2,10, 250)
  textSize(28)
  fill(1)
  text('Bruna Lorena',180 ,190 )
  text('Eduardo Santos', 190 ,380)
  text('(Programador)', 200, 410)
  textSize(16)
  text('(Estudante de licenciatura \n em Biologia)', 190, 220)
  
}
  
 function keyPressed() {
    if(key=="ArrowLeft" && D1>190 && resp==2){
    D1=D1-190
    R1=R1-1
    console.log(R1)
  }
   
   if(key=="ArrowRight"&& D1< 190 && resp==2){
    D1=D1+190
    R1=R1+1
    console.log(R1)
  }
  
    if(key=="Enter" && tela==1 && resp==2){
     resp1=R1
       }
   if(key=="Enter" && tela==1){
     resp=R
       }
  
  if(key=="ArrowUp" && y>190){
    y=y-70
    opcao=opcao-1
    console.log(opcao)
  }
  if(key=="ArrowDown"&& y < 330 && tela==0){
    y=y+70
    opcao=opcao+1
    console.log(opcao)
  }
   if(key=="ArrowLeft" && D>190){
    D=D-190
    R=R-1
    console.log(R)
  }
   if(key=="ArrowRight"&& D< 190){
    D=D+190
    R=R+1
    console.log(R)
  }
  if(key=="Enter" && tela==0){
     tela=opcao
       }
  
  if(key=="Escape"){
    tela=0
  }
   
  
}
  