import { apphelper } from '../share/AppHelper';
import { Diagram } from './base';

/** app diagram helper class */
class AppDiagramHelper {
  /** get all diagram */
  async getAllDiagramNamesAsync(): Promise<Diagram[]> {
    const response: Response = await fetch('/api/diagram');
    if (!response.ok) {
      const message = apphelper.responseToMessage(response);
      throw message;
    }
    const diagrams = (await response.json()).diagrams;
    return diagrams;
  }
}
/** app diagram helper object */
export const appdiagramhelper = new AppDiagramHelper();
