
import login from "./Login/login.service";
import create from "./createUser.service"
import update from "./updateUser.service";
import deleteUser from "./deleteUser.service";

const users = {create, login, update, deleteUser};

export default users;
