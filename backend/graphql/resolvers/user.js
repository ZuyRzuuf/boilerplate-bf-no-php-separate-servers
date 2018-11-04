export default {
    Query: {
        users: (parent, args, {db}, info) => db.user.findAll(),
        user: (parent, {uuid}, {db}, info) => db.user.findById(uuid),
    }
}