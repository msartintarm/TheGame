
/**
 *  This is an enormous cube, and the viewer
 *  resides in the interior.
 */
function Skybox() { 
    
    // First, create an enormous cube
    const size = 10000;
    this.o = new SixSidedPrism(
	[-size, size, size],
	[-size,-size, size],
	[ size,-size, size],
	[ size, size, size],
	[-size, size,-size],
	[-size,-size,-size],
	[ size,-size,-size],
	[ size, size,-size])
    // Next, set it to the sky
	.setSkyBoxTexture(SKYBOX_TEXTURE_REAL);
}

Skybox.prototype.initBuffers = _oInitBuffers;
Skybox.prototype.draw = function(gl_, shader_) {
    this.o.draw(gl_, shader_);
}
