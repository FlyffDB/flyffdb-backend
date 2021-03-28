const { gql } = require('apollo-server');

const typeDefs = gql`
  type LocalilzationText {
    en: String,
    fr: String,
    kr: String
  }

  type WorldLocation {
    world: Int
    x: String
    y: String
    z: String
  }

  type Class {
    id: ID
    name: LocalilzationText
    type: String
    parent: Class
    icon: String
  }

  type NPC {
    id: ID
    name: LocalilzationText
    place: String
    menus: [String]
    locations: [WorldLocation]
    image: String
  }

  type Query {
    classes: [Class]
    class(id: ID): Class
    npc(id: ID): NPC
    npcs: [NPC]
  }
`;

export {
  typeDefs
}