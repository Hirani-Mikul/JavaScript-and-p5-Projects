let ParticleSystem = function () {
  this.particles = [];
}
ParticleSystem.prototype.update = function () {
  for (var i = this.particles.length -1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}
ParticleSystem.prototype.addParticles = function (x, y, f) {
  this.particles.push(new Particle(createVector(x, y), f));
}
ParticleSystem.prototype.run = function () {
  this.update();
  this.addParticles();
}
