const {GraphQLList, GraphQLID} = require("graphql");
const ClientType = require("./ClientSchema");
const Client = require("./Client");

const ClientQueries = {
    clients : {
        type: new GraphQLList(ClientType),
        resolve(parent, args){
            return Client.find();
        }
    },
    client: {
        type: ClientType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
            return Client.findById(args.id);
        }
    },
}

module.exports = ClientQueries
