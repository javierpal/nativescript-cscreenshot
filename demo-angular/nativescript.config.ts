import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.demoangular',
  appPath: 'src',
  main: 'main.ts',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  useLegacyWorkflow: false,
} as NativeScriptConfig
