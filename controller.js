const moment = require( "moment" );
const axios = require( "axios" );
const cheerio = require('cheerio');

exports.getCrawlResultsInJson = async ( req ) => {

    const { urlToCrawl } = req.body;

    const xhrRes = await axios( urlToCrawl );

    const html = xhrRes.data;
    const domManipulator = cheerio.load( html );

    const customerReviews = domManipulator( "#CustomerReviewsBlock #customerReviews #customerReviews" );

    let responseArrOfReviews = [];

    customerReviews.each( function( review ) {

        responseArrOfReviews.push( {
            comment: domManipulator( this ).find( ".review > .rightCol > blockquote > p").text(),
            rating: domManipulator( this ).find( ".review > .leftCol > .itemReview > dd > .itemRating > strong").text(),
            date: domManipulator( this ).find( " .review > .leftCol > .reviewer > dd:nth-child(4)").text(),
            name: domManipulator( this ).find( " .review > .leftCol > .reviewer > dd:nth-child(2)").text()
        } );
        
    });

    return Promise.resolve( responseArrOfReviews );
};