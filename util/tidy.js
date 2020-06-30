'use strict';

const fse = require( 'fs-extra' );

fse.move( 'dist/redirects/index.html', 'dist/_redirects' )
.then( () => fse.remove( 'dist/redirects' ) )
.catch( err => console.error(err) );
