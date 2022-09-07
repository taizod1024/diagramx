import { UserInfo } from './base';

/** user info class */
export class ApiUserInfo extends UserInfo {
  /** constructor */
  constructor(context?: any) {
    super(context);
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
}
