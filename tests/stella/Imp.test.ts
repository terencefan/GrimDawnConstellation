import { Imp } from "../../src/stella/Imp";

describe('Imp Class', () => {
  let imp: Imp;

  beforeEach(() => {
    imp = new Imp();
  });

  test('should have the correct name', () => {
    expect(imp.name).toBe('Imp');
  });

  test('should add stars correctly', () => {
    const stars = imp.getStars();
    expect(stars.length).toBe(5);

    expect(stars[0].FireDamage).toBe(15);
    expect(stars[0].AetherDamage).toBe(15);

    expect(stars[1].Spirit).toBe(15);
    expect(stars[1].DefensiveAbility).toBe(10);

    expect(stars[2].Physique).toBe(15);
    expect(stars[2].AetherResistance).toBe(8);

    expect(stars[3].FireDamage).toBe(24);
    expect(stars[3].AetherDamage).toBe(24);

    expect(stars[4].Skill).toBe('Aetherfire');
  });

  test('should return correct requirement affinities', () => {
    const requirement = imp.requirement();
    expect(requirement.Primordial).toBe(1);
  });

  test('should return correct complete bonus affinities', () => {
    const completeBonus = imp.completeBonus();
    expect(completeBonus.Eldritch).toBe(3);
    expect(completeBonus.Primordial).toBe(3);
  });
});