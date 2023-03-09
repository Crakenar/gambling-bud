const ProjectType = require("./ProjectSchema");
const {GraphQLEnumType, GraphQLID, GraphQLNonNull, GraphQLString} = require("graphql");
const Project = require("./Project");

const ProjectMutations = {
    addProject: {
        type: ProjectType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            description: { type: GraphQLNonNull(GraphQLString) },
            status: { type: new GraphQLEnumType( {
                    name: 'ProjectStatus',
                    values: {
                        'new': { value: 'Not Started' },
                        'progress': { value: 'In Progress' },
                        'completed': { value: 'Completed' }
                    }
                }),
                defaultValue: 'Not Started',
            },
            clientId: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
            const project = new Project({
                name: args.name,
                description: args.description,
                status: args.status,
                clientId: args.clientId
            });
            return project.save()
            //Project.create(project);
        }
    },
    deleteProject: {
        type: ProjectType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve(parent, args) {
            return Project.findByIdAndRemove(args.id)
        }
    },
    updateProject: {
        type: ProjectType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            status: { type: new GraphQLEnumType( {
                    name: 'ProjectStatusUpdate',
                    values: {
                        'new': { value: 'Not Started' },
                        'progress': { value: 'In Progress' },
                        'completed': { value: 'Completed' }
                    }
                }),
            },
        },
        resolve(parent, args) {
            return Project.findByIdAndUpdate(
                args.id,
                {
                    $set: {
                        name: args.name,
                        description: args.description,
                        status: args.status
                    }
                },
                { new: true}
            )
        }
    }
}

module.exports = ProjectMutations
