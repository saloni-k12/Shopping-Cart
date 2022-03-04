import Realm from 'realm';
export const LOGIN_SCHEMA = "Login";

export const LoginSchema = {
    name: LOGIN_SCHEMA,
    primaryKey: 'username',
    properties: {
        username: 'string',
        password: 'string',
    }
};
const databaseOptions={
    path: 'Login.realm',
    schema: [LoginSchema],
};

export const insertLogin = newLogin => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(LOGIN_SCHEMA, newLogin);
            resolve(newLogin);
        });
    }).catch((error) => reject(error));
}); 
export default new Realm(databaseOptions);