export interface AffinitiesParams {
  Ascendant?: number;
  Chaos?: number;
  Eldritch?: number;
  Order?: number;
  Primordial?: number;
}

export class Affinities {
  public readonly Ascendant: number = 0;
  public readonly Chaos: number = 0;
  public readonly Eldritch: number = 0;
  public readonly Order: number = 0;
  public readonly Primordial: number = 0;

  constructor(affinities: AffinitiesParams = {}) {
    this.Ascendant = affinities.Ascendant || 0;
    this.Chaos = affinities.Chaos || 0;
    this.Eldritch = affinities.Eldritch || 0;
    this.Order = affinities.Order || 0;
    this.Primordial = affinities.Primordial || 0;
  }
}

export abstract class Stella {
  protected stars: Star[] = [];

  public readonly name: string;

  public addStar(star: Star): void {
    this.stars.push(star);
  }

  public getStars(): Star[] {
    return this.stars;
  }

  constructor() {
    this.name = this.constructor.name;
  }

  public abstract requirement(): Affinities;

  public abstract completeBonus(): Affinities;
}

interface StarParams {
  fireDamage?: number;
  aetherDamage?: number;

  fireResistance?: number;
  aetherResistance?: number;

  physique?: number;
  cunning?: number;
  spirit?: number;

  attackAbility?: number;
  defensiveAbility?: number;

  skill?: string;
}

export class Star {
  public readonly FireDamage: number = 0;
  public readonly AetherDamage: number = 0;

  public readonly FireResistance: number = 0;
  public readonly AetherResistance: number = 0;

  public readonly Physique: number = 0;
  public readonly Cunning: number = 0;
  public readonly Spirit: number = 0;

  public readonly AttackAbility: number = 0;
  public readonly DefensiveAbility: number = 0;

  public readonly Skill: string = "";

  constructor(params: StarParams = {}) {
    this.FireDamage = params.fireDamage || 0;
    this.AetherDamage = params.aetherDamage || 0;

    this.FireResistance = params.fireResistance || 0;
    this.AetherResistance = params.aetherResistance || 0;

    this.Physique = params.physique || 0;
    this.Cunning = params.cunning || 0;
    this.Spirit = params.spirit || 0;

    this.AttackAbility = params.attackAbility || 0;
    this.DefensiveAbility = params.defensiveAbility || 0;

    this.Skill = params.skill || "";
  }
}
