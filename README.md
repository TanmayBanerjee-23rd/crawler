API details::
URL: "http://localhost:4000/crawl",
METHOD: POST,
REQUEST PAYLOAD: {
    "urlToCrawl": "https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=640254&CatId=3"
},

Ex. RESPONSE: 
On Success: {
    "success": true,
    "data": {
        "reviews": [
            {
                "comment": "Simple wired USB keyboard and mouse.  Works fine, fairly well made, low cost good value.  Have used on several systems and they seem robust and reliable.  Have nost 'tested' the spill-resistent feature yet ...",
                "rating": "4.3",
                "date": "Jul 18, 2011",
                "name": "Digi-Ed"
            },
            {
                "comment": "This is a well made keyboard and mouse. They work fine and are all you need at a good price",
                "rating": "5.0",
                "date": "Mar 30, 2011",
                "name": "SCHLEPERMAN"
            },
            {
                "comment": "This keyboard works perfectly and is very cheap. I built a pretty expensive system and went with this cheap keyboard and mouse and I'm not disappointed.",
                "rating": "5.0",
                "date": "Mar 20, 2011",
                "name": "Anonymous"
            },
            {
                "comment": "This is a well made keyboard and mouse.  They work fine and are all you need at a good price",
                "rating": "4.8",
                "date": "Mar 18, 2011",
                "name": "devindedog"
            },
            {
                "comment": "Good buy, the keyboard and mouse are very nice. Also, on the box it said the keyboard was water proof witch is a nice feature. The only bad thing is that the mouse is a little bit small, other then that its great.",
                "rating": "5.0",
                "date": "Jan 24, 2011",
                "name": "rich"
            }
        ],
        "previousReviewsPageUrl": "https://www.tigerdirect.com/applications/searchtools/item-details.asp?EdpNo=4364467&pagenumber=0&RSort=1&csid=ITD&recordsPerPage=5&body=REVIEWS#CustomerReviewsBlock",
        "nextReviewsPageUrl": "https://www.tigerdirect.com/applications/searchtools/item-details.asp?EdpNo=4364467&pagenumber=2&RSort=1&csid=ITD&recordsPerPage=5&body=REVIEWS#CustomerReviewsBlock"
    },
    "errorMessage": ""
}

"previousReviewsPageUrl" can be used to fetch previous set of 5 reviews.
"nextReviewsPageUrl" can be used to fetch next set of 5 reviews.

For the first page of reviews, only nextReviewsPageUrl will be available in the response and vice versa.

For Error handling a global error handler middleware is registered which gracefully handles all the errors thrown from any snippet. It's efficient as we can avoid catch blocks where don't want a customised handling of error.

On failure: {
    "success": true,
    "errorMessage": <error message>
}