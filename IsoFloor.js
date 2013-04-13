function IsoFloor() {
    this.o = new Quad(
    [-5., -.05,-.2],
    [-5., -.05, 2.],
    [ 5., -.05,-.2],
    [ 5., -.05, 2.])
	.setTexture(WOOD_TEXTURE)
	.translate(lightPos)
	.invertNorms();

    this.o2= new Quad(
    [-5.0, 5.0,-.05],
    [-5.0, 0.0,-.05],
    [ 5.0, 5.0,-.05],
    [ 5.0, 0.0,-.05])
	.setTexture(HELL_TEXTURE)
	.translate(lightPos)
	.invertNorms();
}

IsoFloor.prototype.initBuffers = function(gl_) {
    this.o.initBuffers(gl_);
    this.o2.initBuffers(gl_);
}

IsoFloor.prototype.draw = function(gl_, shader_) {

    theMatrix.push();
    theMatrix.mul(theMatrix.vMatrix);
    theMatrix.mul(theMatrix.lightMatrix);
    this.o.draw(gl_, shader_);
//  this.o2.draw(gl_, shader_);
    theMatrix.pop();
}
