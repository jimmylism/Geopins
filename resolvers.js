const user = {
    _id: "1",
    name: "Becca",
    email: "becca@gmail.com",
    picture: "https://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: () => user
    }
}