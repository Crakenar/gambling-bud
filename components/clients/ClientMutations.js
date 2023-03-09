const ClientType = require("./ClientSchema");
const {GraphQLNonNull, GraphQLString, GraphQLID} = require("graphql");
const Client = require("./Client");

const ClientMutations = {
    addClient: {
        type: ClientType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            email: { type: GraphQLNonNull(GraphQLString) },
            phone: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
            const client = new Client({
                name: args.name,
                email: args.email,
                phone: args.phone
            });
            return client.save()
            //Client.create(client);
        }
    },
    deleteClient: {
        type: ClientType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve(parent, args) {
            return Client.findByIdAndRemove(args.id)
        }
    },
}

module.exports = ClientMutations
