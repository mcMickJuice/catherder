import {connection} from './dbConnection';

const USER_COLLECTION = 'users';

export function verifyUser(credentials) {
    return connection()
        .then(conn => {
            const users = conn.collection(USER_COLLECTION);

            let {username, password} = credentials;
            return users.findOne({username, password})
        })
    .then(user => {
        if(!user) {
            //user not found
            return false;
        }

        //TODO return more than just username?
        return {username: user.username};
    })
};