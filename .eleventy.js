'use strict';

module.exports = config => {
    config.addPassthroughCopy( 'src/js' );
    return {
	'dir': {
	    'input': 'src',
	    'data': '_data',
	    'output': 'dist',
	},
    };
};
