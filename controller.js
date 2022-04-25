const moment = require( "moment" );
const axios = require( "axios" );
const cheerio = require('cheerio');

exports.getCrawlResultsInJson = async ( req ) => {

    const { urlToCrawl } = req.body;

    if ( !urlToCrawl ) throw Error( "Please provide the Url to Crawl!" );

    if ( !urlToCrawl.includes( "https://www.tigerdirect.com" ) ) throw Error( "Url to crawl should start with 'https://www.tigerdirect.com'!" );

    const xhrRes = await axios( urlToCrawl );

    const html = xhrRes.data;
    const domManipulator = cheerio.load( html );

    const customerReviews = domManipulator( "#CustomerReviewsBlock #customerReviews #customerReviews" );

    let reviews = [];

    customerReviews.each( function( ) {

        reviews.push( {
            comment: domManipulator( this ).find( ".review > .rightCol > blockquote > p").text(),
            rating: domManipulator( this ).find( ".review > .leftCol > .itemReview > dd > .itemRating > strong").text(),
            date: domManipulator( this ).find( " .review > .leftCol > .reviewer > dd:nth-child(4)").text(),
            name: domManipulator( this ).find( " .review > .leftCol > .reviewer > dd:nth-child(2)").text()
        } );
        
    });
    
    let responseObj = { reviews };

    if ( domManipulator( ".reviewPage > dd > a").attr('title').trim() === "Previous" ) {

        responseObj.previousReviewsPageUrl = "https://www.tigerdirect.com"+ domManipulator( ".reviewPage > dd > a:nth-child(1)").attr( "href" ).trim();
        
        if ( domManipulator( ".reviewPage > dd > a:nth-child(2)").attr( "href" ) ) {
            responseObj.nextReviewsPageUrl = "https://www.tigerdirect.com"+ domManipulator( ".reviewPage > dd > a:nth-child(2)").attr( "href" ).trim();
        }
    
    } else responseObj.nextReviewsPageUrl = "https://www.tigerdirect.com"+ domManipulator( ".reviewPage > dd > a").attr('href').trim();


    return Promise.resolve( responseObj );
};