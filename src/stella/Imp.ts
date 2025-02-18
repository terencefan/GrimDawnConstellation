import { Affinities, Star, Stella } from "./common";

export class Imp extends Stella {
  constructor() {
    super();
    this.addStar(new Star({ fireDamage: 15, aetherDamage: 15 }));
    this.addStar(new Star({ spirit: 15, defensiveAbility: 10 }));
    this.addStar(new Star({ physique: 15, aetherResistance: 8 }));
    this.addStar(new Star({ fireDamage: 24, aetherDamage: 24 }));
    this.addStar(new Star({ skill: "Aetherfire" }));
  }

  public requirement(): Affinities {
    return new Affinities({ Primordial: 1 });
  }

  public completeBonus(): Affinities {
    return new Affinities({ Eldritch: 3, Primordial: 3 });
  }
}
