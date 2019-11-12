# Nativescript Cscreenshot :camera:

This plugin was created so you can take screenshots of views easily and then store it as you like.

this plugin is based on enchev's NativeScript Screenshot [nativescript-screenshot](https://github.com/enchev/nativescript-screenshot)
but updated for better stability and angular, vue and react compatibility (still testing vue and react)

## Installation

Use the install command:

```javascript
tns plugin add nativescript-cscreenshot
```

## Usage 

Just import the plugin in your project and use it like this
	
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

    // Using Vue Nativescript
    let view = this.$refs.main.nativeView;

    screen.take(view, (image: ImageSource)=>{
        // Do whatever you want with the returned source image
    });
```
    and in your template
```xml
    <!-- Assign the reference name depending on the framework -->
    <!-- 'id=""' for vanilla nativescript -->
    <!-- '#main' for angular nativescript -->
    <!-- 'ref="main"' for Vue nativescript -->
    <GridLayout id="main" #main ref="main">
        <!-- Content of your app here -->
    </GridLayout>
```

## License

Apache License Version 2.0, January 2004
