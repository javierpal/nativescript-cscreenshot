<template>
    <Page ref="view">
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <StackLayout>
            <Label class="message" :text="msg"/>
            <Label class="message" :text="repMsg" v-bind:key="index" v-for="index in 10"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
  import { Cscreenshot } from 'nativescript-cscreenshot';
  import { ImageSource } from "@nativescript/core/image-source";
  import { knownFolders } from "@nativescript/core/file-system";
  import * as fs from "@nativescript/core/file-system";

  export default {
    data() {
      return {
        msg: 'Hello Vue!',
        repMsg: 'repeated'
      }
    },
    mounted() {
      let screen = new Cscreenshot();
      let view = this.$refs.view.nativeView;
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
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
