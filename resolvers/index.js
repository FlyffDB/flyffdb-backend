const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')


const adapter = new FileSync('data/items.json');
const db = low(adapter);

const resolvers = {
  Query: {
    weapons: () => db.get('weapons'),
    equipment: () => db.get('equipment')
  },
};

export {
  resolvers
}