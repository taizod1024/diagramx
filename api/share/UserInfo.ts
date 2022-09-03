import md5 from 'md5';
import { ClientPrincipal } from './ClientPrincipal';

/** user info class */
export class UserInfo {
  /** context */
  context: any;

  /** current user */
  me: ClientPrincipal;

  /** whether user info was get or not */
  isGetDone: boolean;

  /** avatar url */
  avatarUrl: string;

  /** display name */
  displayName: string;

  /** constructor */
  constructor(context?: any) {
    this.context = context;
    this.me = {
      userId: '',
      userRoles: [],
      identityProvider: '',
      userDetails: '',
    };
    this.isGetDone = false;
    this.avatarUrl = '';
    this.displayName = '';
  }

  /** get user info on client */
  async getAsync(): Promise<void> {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    Object.assign(this.me, clientPrincipal);
    this.getDone();
  }

  /** get user info on server */
  get(): void {
    const header = this.context.req?.headers['x-ms-client-principal'];
    if (!header) return;
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    const clientPrincipal = JSON.parse(decoded);
    Object.assign(this.me, clientPrincipal);
    this.getDone();
  }

  /** get done */
  getDone(): void {
    this.isGetDone = true;
    const hash = md5(this.me.userDetails.toLowerCase());
    this.avatarUrl = `https://www.gravatar.com/avatar/${hash}`;
    this.displayName = this.isEmail()
      ? this.me.userDetails
      : this.me.identityProvider + ' / ' + this.me.userDetails;
  }

  /** is login */
  isLogin(): boolean {
    return Boolean(this.isGetDone && this.me.userDetails);
  }

  /** is not login */
  isNotLogin(): boolean {
    return Boolean(this.isGetDone && !this.me.userDetails);
  }

  /** is email */
  isEmail(): boolean {
    return Boolean(this.isGetDone && this.me.userDetails.match(/@/));
  }
}
