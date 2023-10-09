import shared from "./globalMiddlewares";
import addresses from "./addresses";
// import salesAd from "./salesAd";
import users from "./users";
// import salesCommentsMiddlewares from "./salesComments";

const middlewares = {
    ...shared,
    ...addresses,
    // ...salesAd,
    ...users
    // ...salesCommentsMiddlewares,
};

export default middlewares;
