# Nativescript Cscreenshot :camera:

This is a plugin was created so you can take video screenshots easily and then store it as you like

this plugin is based on enchev's NativeScript Screenshot [nativescript-screenshot](https://github.com/enchev/nativescript-screenshot)
but updated for better stability and angular, vue and react compatibility (still testing vue and react)

## Installation

Use the install command:

```javascript
tns plugin add nativescript-cscreenshot
```

## Usage 

Just import the plugin in your project and use ir like this
	
using Typescript:

```typescript
    import { Cscreenshot } from 'nativescript-cscreenshot';
    import { ImageSource } from "tns-core-modules/image-source";

    // then in your take a screenshot method
    let screen = new Cscreenshot();

    // Using vanilla Nativescript
    let view = page.getViewById('main');

    // Using Angular Nativescript
    @ViewChild("main", { static: true }) main: ElementRef;
    let view = this.view.nativeElement;

    screen.take(view, (image: ImageSource)=>{
        // Do whatever you want with the returned source image
    });
```

## License

Apache License Version 2.0, January 2004
