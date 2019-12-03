//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (input) => {
  if (input < 3) {throw new Error('Ability scores must be at least 3');}
  else if (input > 18) {throw new Error('Ability scores can be at most 18')}
  else {return Math.floor((input - 10) / 2);}
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }
  static rollAbility() {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    arr.sort(function(a, b){return b - a}).pop();
    const sumArr = arg => arg.reduce((a, b) => a + b, 0);
    return sumArr(arr);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return abilityModifier(this._constitution) + 10;
  }
}

//const Drizzt = new Character();
//console.log(`${Drizzt.strength} ${Drizzt.dexterity} ${Drizzt.constitution} ${Drizzt.intelligence} ${Drizzt.wisdom} ${Drizzt.charisma} ${Drizzt.hitpoints}`)