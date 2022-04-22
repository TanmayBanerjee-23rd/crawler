'use strict';

const express = require( "express" );
const moment = require( "moment" );

const router = express.Router();
router.use( express.json( { type: 'application/json' } ) );

const controler = require( "./controller" );

router.post( "/", ( req, res ) => {

    console.log( `${ moment().format( "YYYY-MM-DD hh:mm:ss" ) } :: ${ req.headers[ "user-agent" ] } :: 
        LOG_INFO :: Incoming request `, req.originalUrl );

    /*
    req body :: { urlToCrawl: string! }
    */

    controler.getCrawlResultsInJson( req )
    .then( results => res.status( 200 ).send( {
        success: true,
        data: results,
        errorMessage: ""
    } ) )
    .catch( err => {
        
        console.log( `${ moment().format( "YYYY-MM-DD hh:mm:ss" ) } :: ${ req.headers[ "user-agent" ] } :: 
        LOG_ERROR :: failed request ${ req.originalUrl } execution due to :: `, err.message );

        res.send( {
            success: false,
            data: {},
            errorMessage: err.message
        } );
    } );
    
} );

module.exports = router;