import { Common } from './cscreenshot.common';
import { ViewBase } from 'tns-core-modules/ui/core/view';
export declare class Cscreenshot extends Common {
  constructor();
  take(view: ViewBase, callback: any): void;
}
