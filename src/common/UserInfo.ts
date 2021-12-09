/** client principal from swa */
type ClientPrincipal = {
    userid: string,
    userRoles: string[],
    identityProvider: string,
    userDetails: string
};

/** user info class */
class UserInfo {

    /** current user */
    me: ClientPrincipal;
    
    /** constructor */
    constructor() {
        this.me = {
            userid: "",
            userRoles: [],
            identityProvider: "",
            userDetails: ""
        };
    }

    /** get user info */
    async getUserInfoAsync() {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        this.me = clientPrincipal;
        return this.me;
    }
}
export const Userinfo = new UserInfo();
