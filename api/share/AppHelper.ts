/** app helper class */
class AppHelper {
  /** http response to message */
  responseToMessage(res: Response): string {
    const message = `${res.status} ${res.statusText} ${res.url}`;
    return message;
  }
}
/** app helper object */
export const apphelper = new AppHelper();
