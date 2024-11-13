## What I learn
* OKLCH => new way of define color in CSS (experiment)
* Component concept & config
* String interpolation `{{}}`
* Property binding (for attributes) `<img [src]='myValue'>`.
By adding 'attr' in front of the attribute name you want to bind dynamically, you're "telling" Angular that it shouldn't try to find a property with the specified name but instead bind the respective attribute - in the example above, the aria-valuenow and aria-valuemax attributes would be bound dynamically.
`[attr.aria-valuenow]="currentVal" 
[attr.aria-valuemax]="maxVal"`
* So called 'getter' : `get myValue(){return myValue}`
* Event listeners `(click)="myMethod"` and Event handlers.
* State
* Zone.js vs Signal (<= Angular v.16)
* Use `set` to update a value `this.selectedUser.set()` and use `selectedUser` as a function : `{{selectedUser().name}}`
* computed (to use with signal)


# Angular Introduction
* NodeJS with Homebreww `brew install node`
* Angular cli (sudo) `npm i @angular/cli`
* VS Code extensions : 
** Angular Language Service
** Angular Essentails by John Papa
* Create a new Angular project `ng new myFolder/my-new-project`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
