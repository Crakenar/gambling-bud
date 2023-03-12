const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");
const Gambler = require('../gamblers/Gambler');
const GamblerType = require('../gamblers/GamblerSchema');

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: GamblerType,
            resolve(parent, args){
                return Gambler.findById(parent.clientId)
            }
        }
    })
});

module.exports = ProjectType
