import { UserInfo } from '../UserInfo';

/** user info class */
export class AppUserInfo extends UserInfo {
  /** constructor */
  constructor(context?: any) {
    super(context);
  }

  /** get user info on client */
  async getAsync(): Promise<void> {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    Object.assign(this.me, clientPrincipal);
    this.getDone();
  }
}
