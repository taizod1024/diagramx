import md5 from 'md5';

/** client principal from swa */
type ClientPrincipal = {
  userId: string;
  userRoles: string[];
  identityProvider: string;
  userDetails: string;
};

/** user info class */
export class UserInfo {
  /** current user */
  me: ClientPrincipal;

  /** whether user info was get or not */
  getDone: boolean;

  /** avatar url */
  avatarUrl: string;

  /** display name */
  displayName: string;

  /** constructor */
  constructor() {
    this.me = {
      userId: '',
      userRoles: [],
      identityProvider: '',
      userDetails: '',
    };
    this.getDone = false;
    this.avatarUrl = '';
    this.displayName = '';
  }

  /** get user info */
  async getAsync(context?: any): Promise<void> {
    let clientPrincipal;
    if (!context) {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      clientPrincipal = payload.clientPrincipal;
    } else {
      const header = context.req.headers['x-ms-client-principal'];
      if (!header) return;
      const encoded = Buffer.from(header, 'base64');
      const decoded = encoded.toString('ascii');
      clientPrincipal = JSON.parse(decoded);
    }
    Object.assign(this.me, clientPrincipal);
    this.getDone = true;
    const hash = md5(this.me.userDetails.toLowerCase());
    this.avatarUrl = `https://www.gravatar.com/avatar/${hash}`;
    this.displayName = this.isEmail() ? this.me.userDetails : (this.me.identityProvider + " / " + this.me.userDetails);
  }

  /** is login */
  isLogin(): boolean {
    return Boolean(this.getDone && this.me.userDetails);
  }

  /** is not login */
  isNotLogin(): boolean {
    return Boolean(this.getDone && !this.me.userDetails);
  }

  /** is email */
  isEmail(): boolean {
    return Boolean(this.getDone && this.me.userDetails.match(/@/));
  }
}
