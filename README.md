# Vincent PECQUERIE Personal Web Site

This is my personal website on which we can find my resume, experience and skills. 
It's also a kind of sandbox to test new technologies like Service Workers, accessibility, SEO... 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`

### Test

After installed the project, you can run lint tests.
Thanks to the package.json file, just run `npm run lint`. 
This will do the following step for you : 

1. Run [HtmlLint](https://github.com/htmllint/htmllint) test.
2. Run [StyleLint](https://github.com/stylelint/stylelint) test.
3. Run [TsLint](https://github.com/palantir/tslint) test.

### Documentation

I used compodoc to documentate my code. 
Thanks to the package.json file, just run `npm run build:doc` to build the documentation or `npm run serve:doc` to start the documentation with live reload functionnalities. 

## Angular Universal "Gotchas"
Moved to [/angular/universal/blob/master/docs/gotchas.md](https://github.com/angular/universal/blob/master/docs/gotchas.md)

## License
This project is licensed under the GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details.