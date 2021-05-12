import { Observable, ViewBase } from '@nativescript/core';

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