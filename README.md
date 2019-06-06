# NgDevmark

## start application 

`yarn run start`

## build library
`yarn ng build devmark --watch`

## wanna use devmark?

`app.module.ts`
```diff
+ import { DevmarkModule } from 'devmark'

  @NgModule({
    imports: [
+     DevmarkModule
    ],
  })
  export class AppModule { }
```

`app.component.html`
```diff
+ <lib-devmark></lib-devmark>
```