import { Common } from './cscreenshot.common';
import { ViewBase } from 'tns-core-modules/ui/core/view';
import { ImageSource } from "tns-core-modules/image-source";

export class Cscreenshot extends Common {
    constructor(){
        super();
    }
    take(view: ViewBase, callback: any){
        let androidView = view.android;
        androidView.setDrawingCacheEnabled(true);
        let bmp: android.graphics.Bitmap = android.graphics.Bitmap.createBitmap(androidView.getDrawingCache());                
        androidView.setDrawingCacheEnabled(false);
        let native: ImageSource = new ImageSource();
        native.setNativeSource(bmp);
        callback(native);
    }
}