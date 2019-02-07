# Vincent PECQUERIE Personal Web Site

This is my personal website on which we can find my resume, experience and skills. 
It's also a kind of sandbox to test new technologies like Service Workers, accessibility, SEO... 
It's base on Angular 7 with a NodeJS SSR server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Installation
* `npm install` or `yarn install` (you should prefer yarn).

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.
**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`

### Test

#### Lint

After installed the project, you can run lint tests.
Thanks to the package.json file, just run `npm run lint`. 
This will do the following step for you : 

1. Run [HtmlLint](https://github.com/htmllint/htmllint) tests.
2. Run [StyleLint](https://github.com/stylelint/stylelint) tests.
3. Run [TsLint](https://github.com/palantir/tslint) tests.

#### Karma

After installed the project, you can run karam tests.
Thanks to the package.json file, just run `npm run test`. 
This will do the following step for you : 

1. Run [Karma](https://karma-runner.github.io/latest/index.html) tests.
2. Produce a report.

### Documentation

I used compodoc to documentate my code. 
Thanks to the package.json file, just run `npm run build:doc` to build the documentation or `npm run serve:doc` to start the documentation with live reload. 

## License
This project is licensed under the GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details.

## Third Party

This project use the following project : 

* Framework / Libraries:
    * Front:
        * [Angular](https://angular.io) + [Angular Materrial](https://material.angular.io).
        * [Bootstrap](https://getbootstrap.com/).
        * [Font Awesome](https://origin.fontawesome.com/).
    * Tools:
        * [Cerialize](https://github.com/weichx/cerialize).
        * [Moment](https://momentjs.com/).
        * [Sentry](https://sentry.io/).
    * Tests: 
        * [Karma](https://karma-runner.github.io/)

* Lint:
    * [HtmlLint](https://github.com/htmllint/htmllint)
    * [StyleLint](https://github.com/stylelint/stylelint) 
    * [TsLint](https://github.com/palantir/tslint)

* Documentation:
    * [Compodoc](https://compodoc.app/)
    
