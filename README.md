API details::
URL: "http://localhost:4000/crawl",
METHOD: POST,
REQUEST PAYLOAD: {
    "urlToCrawl": "https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=640254&CatId=3"
},

Ex. RESPONSE: 
On Success: {
    "success": true,
    "data": [
        {
            "comment": "Must buy product at this price",
            "rating": "4.0",
            "date": "Aug 20, 2021",
            "name": "RISHABH"
        },
        {
            "comment": "It seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated. I don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10.",
            "rating": "4.3",
            "date": "Jul 10, 2021",
            "name": "don,"
        },
        {
            "comment": "It seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated.\nI don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10.",
            "rating": "3.5",
            "date": "Aug 07, 2020",
            "name": "AChipps,"
        }
    ],
    "errorMessage": ""
}

On failure: {
    "success": true,
    "errorMessage": <error message>
}