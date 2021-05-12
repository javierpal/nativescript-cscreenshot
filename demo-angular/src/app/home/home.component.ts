import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { Cscreenshot } from 'nativescript-cscreenshot';
import { ImageSource, knownFolders, Folder } from '@nativescript/core';
import * as fs from '@nativescript/core/file-system';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    @ViewChild("main", { static: true }) view: ElementRef;

    ngOnInit(): void {
        // Init your component properties here.
        let screen = new Cscreenshot();
        setTimeout(()=>{
            screen.take(this.view.nativeElement, (image: ImageSource)=>{
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
    }
}
