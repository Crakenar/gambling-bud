export{}
const {GraphQLList, GraphQLID} = require("graphql");
const ProjectType = require("./ProjectSchema");
const Project = require("./Project");

const ProjectQueries = {
    // projects : {
    //     type: new GraphQLList(ProjectType),
    //     resolve(parent, args){
    //         return Project.find();
    //     }
    // },
    // project: {
    //     type: ProjectType,
    //     args: { id: { type: GraphQLID }},
    //     resolve(parent, args) {
    //         return Project.findById(args.id);
    //     }
    // }
}

module.exports = ProjectQueries;
