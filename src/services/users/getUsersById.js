import users from "../../data/users.json" assert {type: "json"};

const getUsersById = (id) => {
    const { name, email, profilePicture } = users.users.find((user) => user.id === id);
    return { name, email, profilePicture };
}

export default getUsersById;