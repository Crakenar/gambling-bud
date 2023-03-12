const GamblerType = require("./GamblerSchema");
const {GraphQLNonNull, GraphQLString, GraphQLID} = require("graphql");
const Gambler = require("./Gambler");

const GamblerMutations = {
    addClient: {
        type: GamblerType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            email: { type: GraphQLNonNull(GraphQLString) },
            phone: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
            const gambler = new Gambler({
                name: args.name,
                email: args.email,
                phone: args.phone
            });
            return gambler.save()
            //Gambler.create(gambler);
        }
    },
    deleteGambler: {
        type: GamblerType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve(parent, args) {
            return Gambler.findByIdAndRemove(args.id)
        }
    },
}

module.exports = GamblerMutations
