const {GraphQLList, GraphQLID} = require("graphql");
const GamblerType = require("./GamblerSchema");
const Gambler = require("./Gambler");

const GamblerQueries = {
    gamblers : {
        type: new GraphQLList(GamblerType),
        resolve(parent, args){
            return Gambler.find();
        }
    },
    gambler: {
        type: GamblerType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
            return Gambler.findById(args.id);
        }
    },
}

module.exports = GamblerQueries
