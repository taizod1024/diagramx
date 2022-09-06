import { apphelper } from '../AppHelper';
import { Diagram } from '../Diagram';

/** user info class */
class AppDiagramHelper {
  async getAllDiagramsAsync(): Promise<Diagram[]> {
    const response: Response = await fetch('/api/getAllDiagramsAsync');
    if (!response.ok) {
      const message = apphelper.responseToMessage(response);
      throw message;
    }
    const diagrams = (await response.json()).diagrams;
    return diagrams;
  }
}
export const appdiagramhelper = new AppDiagramHelper();
