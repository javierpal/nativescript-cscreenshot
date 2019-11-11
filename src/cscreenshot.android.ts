import { Common } from './cscreenshot.common';
import { ViewBase } from 'tns-core-modules/ui/core/view';
import { ImageSource } from "tns-core-modules/image-source";

export class Cscreenshot extends Common {
    constructor(){
        super();
    }
    take(view: ViewBase, callback: any){
        let androidView = view.android;
        let bmp: android.graphics.Bitmap = android.graphics.Bitmap.createBitmap(androidView.getWidth(), androidView.getHeight(), android.graphics.Bitmap.Config.ARGB_8888);
        let c: android.graphics.Canvas = new android.graphics.Canvas(bmp);
        androidView.draw(c);
        let native: ImageSource = new ImageSource();
        native.setNativeSource(bmp);
        
        callback(native);
    }
}