let ParticleSystem = function (origin) {
  this.origin = origin.copy();
  this.particles = [];
}
ParticleSystem.prototype.applyGravity = function () {
  for (var i = 0; i < this.particles.length; i++) {
    let force = gravity.copy();
    force.mult(this.particles[i].mass);
    this.particles[i].applyForce(force);
  }
}
ParticleSystem.prototype.applyRepeller = function (r) {
  for (var i = 0; i < this.particles.length; i++) {
    let p = this.particles[i];
    let force = r.calculateRepullsion(p);
    p.applyForce(force);
  }
}
ParticleSystem.prototype.applyForce = function (f) {
  for (var i = 0; i < this.particles.length; i++) {
    let force = f.copy();
    this.particles[i].applyForce(force);
  }
}
ParticleSystem.prototype.update = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}
ParticleSystem.prototype.addParticles = function () {
  let randNum = random(1);
  if (randNum < 0.5) {
    this.particles.push(new Particle(this.origin));
  } else {
    this.particles.push(new Particle2(this.origin));
  }
}
