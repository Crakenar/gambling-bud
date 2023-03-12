const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");
const Gambler = require('../gamblers/Gambler');
const GamblerType = require('../gamblers/GamblerSchema');

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        gambler: {
            type: GamblerType,
            resolve(parent, args){
                return Gambler.findById(parent.clientId)
            }
        }
    })
});

module.exports = GameType
