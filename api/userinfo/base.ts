import md5 from 'md5';
import { ClientPrincipal } from '../share/ClientPrincipal';

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

  /** get done */
  getDone(): void {
    this.isGetDone = true;
    const hash = md5(this.me.userDetails.toLowerCase());
    if (this.me.identityProvider === 'github') {
      this.avatarUrl = `https://github.com/${this.me.userDetails}.png`;
    } else if (this.me.identityProvider === 'google') {
      this.avatarUrl = `https://www.gravatar.com/avatar/${hash}`;
    } else {
      this.avatarUrl = '';
    }
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
