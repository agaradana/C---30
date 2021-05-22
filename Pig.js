class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }

display(){
  //console.log(this.body.speed);//0.27
  if(this.body.speed < 3){
  super.display();//displaying the pig on the screen
  }
  else{
    World.remove(world,this.body);
  }
}
}