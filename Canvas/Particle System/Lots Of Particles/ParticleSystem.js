let ParticleSystem = function (pos) {
  this.origin = pos.copy();
  this.particles = [];
}
ParticleSystem.prototype.addNewParticles = function () {
  this.particles.push(new Particle(this.origin));
}
ParticleSystem.prototype.run = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}
