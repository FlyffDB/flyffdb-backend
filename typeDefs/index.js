const { gql } = require('apollo-server');

const typeDefs = gql`
  type Equipment {
    name: String
    gender: String
    job: String # TODO: Update with reference to job type once added
    stats: [Stat]
    levelRequirement: Int
    purchasePrice: Int
    sellPrice: Int
  }

  type EquipmentSet {
    pieces: [Equipment]
  }

  type Stat {
    name: String
    value: String
  }
`;

export default typeDefs;