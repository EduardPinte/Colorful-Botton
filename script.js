let sunX = 350; 
let sunY = 350;
let sunD = 80;  
let sunR = sunD / 2; 

let triBase = 10;    
let triHeight = 20;   

function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent("canvas-container"); // Atașează canvas-ul la div-ul din HTML
    angleMode(DEGREES); 
}

function draw() {
    background("#eeeeee"); // Fundal gri deschis

    // Desenează elipse (nori, poate?)
    fill("#eeeeee"); // Gri deschis pentru nor
    ellipse(350, 350, 690, 240);
    ellipse(350, 350, 590, 210);
    ellipse(350, 350, 490, 190);
    ellipse(350, 350, 390, 170);
    ellipse(350, 350, 290, 150);
    fill("blue");
    circle(270,290,20);
    fill("red");
    circle(470,390,30);
    fill("green");
    circle(570,420,38);
    fill("pink");
    circle(670,300,50);
    fill("violet");
    circle(110,350,48);
    // Desenează soarele PESTE elipse
    fill("yellow");
    circle(sunX, sunY, sunD);

    // Desenează razele soarelui
    push();
    translate(sunX, sunY);

    for (let i = 0; i < 8; i++) { // Mai simplu, folosim un for
        push();
        rotate(i * 45);
        triangle(sunR, -triBase / 2, sunR, triBase / 2, sunR + triHeight, 0);
        pop();
    }

    pop(); 
    
}
