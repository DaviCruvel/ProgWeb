(function () {

  let FPS = 50; //130 bom valor
  const TAMX = 300;
  const TAMY = 400;
  const PROB_ARVORE = 3;
  const PROB_ARBUSTO_CHAMAS = 0;
  const PROB_ROCHA = 0;
  const PROB_TOCOS = 0;
  const PROB_ARV_GRANDE = 0;
  const PROB_CACHORRO = 0;
  const PROB_COGUMELO = 0;

  let montanha;
  let skier;
  let pontuacao = 20;
  let incremento = 20;
  let segundo = 1000;

  const arvores = [];
  const arbustoFogo = [];
  const rochas = [];
  const tocosDeArvore = [];
  const arvsGrande = [];
  const matilha = [];
  const cogumelos = [];

  function init() {
    montanha = new Montanha();
    skier = new Skier();
    setInterval(run, segundo/FPS);
  }

  function contadorPontos (){
    let p = document.getElementById("pontuacao");
    setInterval(function() {
      p.innerHTML = pontuacao + "m";
      pontuacao = pontuacao + incremento;
    }, 1000);
  }

  window.onload = function(){
    var display = document.querySelector(".ponto");
    contadorPontos(display);
  }

  /* FALTA TERMINAR */  
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') skier.mudarDirecao(-1);
    else if (e.key === 'ArrowRight') skier.mudarDirecao(+1);
    
    if(e.key === 'f' && FPS < segundo){

      incremento = 200;
      pontuacao = pontuacao + incremento;
 
      FPS = 1000;
      setInterval(run, 1000/FPS);
      
      window.addEventListener('keydown', (e) => {
        if(e.key === 's'){
          incremento = 20;
          if(pontuacao > 1000 && segundo < 1000 && FPS != 50){
            FPS = 50;
            segundo = 1000;
            pontuacao = pontuacao - 20;
            setInterval(run, segundo/FPS);
          }else{
            FPS = 50;
            segundo = 1000;
            pontuacao = pontuacao + incremento;
            setInterval(run, segundo/FPS);
          }
        }
      })
    }
  })

  class Montanha {
    constructor() {
      this.element = document.getElementById('montanha');
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}px`;
    }
  }

  class Skier {
    constructor() {
      this.element = document.getElementById('skier');
      this.direcoes = ['para-esquerda', 'para-frente', 'para-direita'];
      this.direcao = 1;
      this.element.className = this.direcoes[this.direcao];
      this.element.style.top = '20px';
      this.element.style.left = parseInt(TAMX/2)-8 + 'px';
    }
    mudarDirecao(giro) {
      if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
        this.direcao += giro;
        this.element.className = this.direcoes[this.direcao];
      }
    }
    andar() {
      if (this.direcao === 0) {
        FPS = 1000;
        this.element.style.left = parseInt(this.element.style.left)-1 + 'px';
      }else if (this.direcao === 2) {
        this.element.style.left = parseInt(this.element.style.left)+1 + 'px';
      }
    }
  }

  class Arvore {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'arvore';
      montanha.element.appendChild(this.element);
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = Math.floor(Math.random() * TAMX) + 'px';

    }
  }

  class ArbustoEmChamas {
    constructor(){
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.element.className = 'arbustoEmChamas';
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
    }
  }

  class Rocha {
    constructor(){
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.element.className = 'rocha';
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
    }
  }

  class TocoDeArvore {
    constructor(){
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.element.className = 'tocoArvore';
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
    }
  }

  class ArvoreGrande {
    constructor(){
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.element.className = 'arvoreGrande';
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
    }
  }

  class Cachorro {
    constructor(){
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.element.className = 'cachorro';
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
    }
  }

  class Cogumelo {
    constructor(){
      this.element = document.createElement('div');
      montanha.element.appendChild(this.element);
      this.element.className = 'cogumelo';
      this.element.style.top = `${TAMY}px`;
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
    }
  }

  function temColisaoComSkier(idObjeto1, idObjeto2){
    var objeto1 = document.getElementById(idObjeto1).getBoundingClientRect();
    var objeto2 = document.getElementById(idObjeto2).getBoundingClientRect();
    var pontos_obj1 = [{x:objeto1.left, y:objeto1.top},
                       {x:objeto1.left+objeto1.width, y:objeto1.top},
                       {x:objeto1.left+objeto1.width, y:objeto1.top+objeto1.height},
                       {X:objeto1.left, y:objeto1.top+objeto1.height}];
  
    var pontos_obj2 = [{x:objeto2.left, y:objeto2.top},
                        {x:objeto2.left+objeto2.width, y:objeto2.top},
                        {x:objeto2.left+objeto2.width, y:objeto2.top+objeto2.height},
                        {X:objeto2.left, y:objeto2.top+objeto2.height}];
  
    var i = 0;
    var colidiu = false;
    while(colidiu === false && (i < 3)){
      ((pontos_obj1[i].x>=objeto2.left && pontos_obj1[i].x<=objeto2.left+objeto2.width && pontos_obj1[i].y >= objeto2.top && pontos_obj1[i].y <= objeto2.top+objeto2.height) || 
      (pontos_obj2[i].x>=objeto1.left && pontos_obj2[i].x<=objeto1.left+objeto1.width && pontos_obj2[i].y >= objeto1.top && pontos_obj2[i].y <= objeto1.top+objeto1.height))?colidiu=true:i++;
    }
    return colidiu;
  }

  function run() {
    skier.andar();
    const random = Math.random() * 100;
    if (random <= PROB_ARVORE) {
      const arvore = new Arvore();
      arvores.push(arvore);
    }
    arvores.forEach(a => {
      a.element.style.top = parseInt(a.element.style.top)-1 + 'px';
    })

    const random_arbChamas = Math.random() * 100;
    if(random_arbChamas <= PROB_ARBUSTO_CHAMAS){
      const arbusto = new ArbustoEmChamas();
      arbustoFogo.push(arbusto);
    }
    arbustoFogo.forEach((a) => {
      a.element.style.top = `${parseInt(a.element.style.top)-1}px`;
    })
  
    const random_rochas = Math.random() * 100;
    if(random_rochas <= PROB_ROCHA){
      const rocha = new Rocha();
      rochas.push(rocha);
    }
    rochas.forEach((a) => {
      a.element.style.top = `${parseInt(a.element.style.top)-1}px`;
    })

    const random_tocos = Math.random() * 100;
    if(random_tocos <= PROB_TOCOS){
      const toco = new TocoDeArvore();
      tocosDeArvore.push(toco);
    }
    tocosDeArvore.forEach((a) => {
      a.element.style.top = `${parseInt(a.element.style.top)-1}px`;
    })
  
    const random_arvGrande = Math.random() * 100;
    if(random_arvGrande <= PROB_ARV_GRANDE){
      const arvGrande = new ArvoreGrande();
      arvsGrande.push(arvGrande);
    }
    arvsGrande.forEach((a) => {
      a.element.style.top = `${parseInt(a.element.style.top)-1}px`;
    })

    const random_cachorro = Math.random() * 100;
    if(random_cachorro <= PROB_CACHORRO){
      const cao = new Cachorro();
      matilha.push(cao);
    }
    matilha.forEach((a) => {
      a.element.style.top = `${parseInt(a.element.style.top)-1}px`;
    })

    const random_cogumelo = Math.random() * 100;
    if(random_cogumelo <= PROB_COGUMELO){
      const cog = new Cogumelo();
      cogumelos.push(cog);
    }
    cogumelos.forEach((a) => {
      a.element.style.top = `${parseInt(a.element.style.top)-1}px`;
    })

  }


  init();

})()