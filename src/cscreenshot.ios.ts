import { Common } from './cscreenshot.common';
import { ViewBase, ImageSource } from '@nativescript/core';

export class Cscreenshot extends Common {
    take(view: ViewBase, callback: any){
        let iosView = view.ios.view ? view.ios.view : view.ios;
        UIGraphicsBeginImageContextWithOptions(iosView.frame.size, false, 0);
        iosView.drawViewHierarchyInRectAfterScreenUpdates(CGRectMake(0, 0, iosView.frame.size.width, iosView.frame.size.height), true);
        var imageFromCurrentImageContext = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
        callback(ImageSource.fromDataSync(UIImagePNGRepresentation(imageFromCurrentImageContext)));
    }
}
