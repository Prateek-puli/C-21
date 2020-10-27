class Sprite {
    constructor(x,y,w,h){
        this.xPosition = x;
        this.yPosition = y;
        this.width = w;
        this.height = h;

        this.shapeColor = "grey";

        this.velocityX = 0;
        this.velocityY = 0;
    }

    display(){

        this.xPosition = this.xPosition + this.velocityX;
        this.yPosition = this.yPosition + this.velocityY;
        fill(this.shapeColor);

        ellipse(this.xPosition, this.yPosition, this.width, this.height);
    }

    isTouching(target){

        if(target.xPosition-this.xPosition <= (this.width+target.width)/2 &&
        this.xPosition-target.xPosition <= (this.width+target.width)/2 && 
        target.yPosition-this.yPosition <= (this.height+target.height)/2 && 
        this.yPosition-target.yPosition <= (this.height+target.height)/2){
            return true;
        }
        else{
            return false;
        }
    }

    bounceOff(target) {

        if(target.xPosition-this.xPosition <= (this.width+target.width)/2 &&
        this.xPosition-target.xPosition <= (this.width+target.width)/2 && 
        target.yPosition-this.yPosition <= (this.height+target.height)/2 && 
        this.yPosition-target.yPosition <= (this.height+target.height)/2){
            this.velocityX = -1 * this.velocityX;
            this.velocityY = -1 * this.velocityY;

            target.velocityX = -1 * this.velocityX;
            target.velocityY = -1 * target.velocityY;
        }
    }


}