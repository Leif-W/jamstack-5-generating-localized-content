'use strict';

const axios = require( 'axios' );
const dotenv = require( 'dotenv' );
const result = dotenv.config( );
// Need ./ in require to specify file
const countries = require( './countries.json' );

if ( result.error ) {
    throw result.error;
}
/*
const locales = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
*/

const getNews = async country => {
    const news_url = `https://newsapi.org/v2/top-headlines?country=${ country }&pageSize=5&apiKey=${ process.env.NEWS_API_KEY }`;

    try {
        const response = await axios.get( news_url );
        return {
	    'country': country,
            'articles': response.data.articles,
	}
    } catch ( error ) {
	console.error( error );
    }
};

module.exports = async ( ) => {
    const newsPromises = countries.map( getNews );

    return Promise.all( newsPromises ).then( newsObjects => {
        console.log( 'newsObjects: ', newsObjects );
    return [ ].concat.apply( [ ], newsObjects );
    } );
};
