let ParticleSystem = function (origin_) {
    this.origin = origin_.copy();
    this.particles = [];
};
ParticleSystem.prototype.run = function () {
  this.update();
  this.addParticles();
};
ParticleSystem.prototype.update = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
ParticleSystem.prototype.addParticles = function () {
  let randNum = random(1);
  if (randNum < 0.5) {
    this.particles.push(new Particle(this.origin));
  } else {
    this.particles.push(new Particle2(this.origin));
  }
};
