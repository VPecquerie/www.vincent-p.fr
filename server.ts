import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';

// Express Engine
import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import {ValueProvider} from '@angular/core';

// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';
import { renderModuleFactory } from '@angular/platform-server';
import { readFileSync } from 'fs';

import * as minifyHTML from 'express-minify-html';

enableProdMode();

// Express server
const app = express();

app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main');
const template = readFileSync(join(__dirname, '..', 'dist', 'browser', 'index.html')).toString();


app.engine('html', (_, options, callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options['req']['url'],
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP),
            // make req and response accessible when angular app runs on server
            <ValueProvider>{
                provide: REQUEST,
                useValue: options['req']
            },
            <ValueProvider>{
                provide: RESPONSE,
                useValue: options['req']['res'],
            },
        ]
    }).then(html => {
        callback(null, html);
    });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.use(compression());


// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
        maxAge: '1y',
    })
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});

// Start up the Node server
app.listen(4000, () => {
    console.log(`Node Express server listening on http://localhost:4000`);
});
