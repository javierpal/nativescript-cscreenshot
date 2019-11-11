import { Cscreenshot } from 'nativescript-cscreenshot';
import { ImageSource } from "tns-core-modules/image-source";
import { knownFolders, Folder } from "tns-core-modules/file-system";
import * as fs from "tns-core-modules/file-system";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    // let view = page.getViewById('main');
    // console.log(view);
    //console.log(page.android);

    let view = page.getViewById('main');
    let screen = new Cscreenshot();
    setTimeout(()=>{
        screen.take(view, (image: ImageSource)=>{
            const folderDest = fs.path.join(knownFolders.documents().path, "screenshots");
            const pathDest = fs.path.join(folderDest, "Wow-Auctnr_"+new Date().toUTCString()+".png");
            if(!fs.File.exists(folderDest)){
                fs.Folder.fromPath(folderDest);
            }
            console.log(pathDest);
            const saved: boolean = image.saveToFile(pathDest, "png");
            if (saved) {
                console.log("Image saved successfully!");
            }
        });
    }, 1000);
    page.bindingContext = new HomeViewModel();
}
