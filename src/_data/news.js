'use strict';

const axios = require( 'axios' );
const dotenv = require( 'dotenv' );
const result = dotenv.config( );

if ( result.error ) {
    throw result.error;
}

const news_url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${ process.env.NEWS_API_KEY }`;

module.exports = async ( ) => {
    try {
        const response = await axios.get( news_url );
        return response.data;
    } catch ( error ) {
	console.error( error );
    }
};
