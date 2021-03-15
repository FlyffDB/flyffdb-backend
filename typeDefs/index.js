const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Job {
    ACROBAT
    ASSIST
    BILLPOSTER
    BLADE
    ELEMENTOR
    JESTER
    KNIGHT
    MAGE
    MERCENARY
    PSYKEEPER
    RANGER
    RINGMASTER
    VAGRANT
  }

  enum Rarity {
    GREEN
    BLUE
  }

  enum Sex {
    MALE
    FEMALE
    SEXLESS
  }

  enum Stat {
    STR
    INT 
    DEX
    STA
    DEF 
    HP
    ATK
    MP
    CRIT
    ADOCH
    HIT
    PARRY
    RANGE
    REFLECT
    BLOCK
    SHORT_BLOCK
    DISTANCE_ATK
  }

  type StatValues {
    name: Stat
    value: String
  }

  type SetEffects {
    one: [StatValues]
    two: [StatValues]
    three: [StatValues]
    four: [StatValues]
  }

  type Equipment {
    name: String
    icon: String
    sex: Sex
    job: Job
    minDefense: Int
    maxDefense: Int
    stats: [StatValues]
    level: Int
    npcPrice: Int
    rarity: Rarity
  }

  type EquipmentSet {
    name: String
    sex: Sex
    pieces: [Equipment]
    effects: SetEffects
    rarity: Rarity
    job: Job
  }

  type Weapon {
    name: String
    icon: String
    job: Job
    minDamage: Int
    maxDamage: Int
    stats: [StatValues]
    level: Int
    npcPrice: Int
    rarity: Rarity
  }

  type Query {
    equipment: [Equipment]
    weapons: [Weapon]
    equipmentSet: [EquipmentSet]
  }
`;

export {
  typeDefs
}