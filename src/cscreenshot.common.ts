import { Observable } from 'tns-core-modules/data/observable';
import { ViewBase } from 'tns-core-modules/ui/core/view';

export class Common extends Observable implements screenShot {
  public fileImage: File;
  constructor() {
    super();
  }
  take(view: ViewBase, callback: any){}
}

export interface screenShot{
  take(view: ViewBase, callback: any);
}