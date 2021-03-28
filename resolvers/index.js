import { classes, npcs } from '@flyffdb/flyff-data';

const resolvers = {
  Query: {
    classes: () => classes.value(),
    class: (parent, args, context, info) => classes.find({ id: parseInt(args.id) }).value(),
    npc: (parent, args, context, info) => npcs.find({ id: parseInt(args.id) }).value(),
    npcs: () => npcs.value()
  },
  Class: {
    parent: (parent, args, context, info) =>  classes.find({ id: parseInt(parent.parent) }).value()
  }
};

export {
  resolvers
}