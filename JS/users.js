function User(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}

const users = [
    new User("Ultiplox", "12345678", "ultiplox@gmail.com"),
    new User("Jose Rizal", "Josie123", "jose.rizal@gmail.com"),
    new User("Albert Einstein", "Einstein123", "albert.einstein@gmail.com"),
    new User("Leonardo da Vinci", "Leo123", "leonardo.davinci@gmail.com"),
    new User("Marie Curie", "MarieC123", "marie.curie@gmail.com")
];

module.exports = {users};
