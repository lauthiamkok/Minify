// Set up the paths for the application.
requirejs.config({
	paths: {
		"domReady": "lib/require/domReady",
		"jquery": "lib/jquery/jquery-1.7.2.min",
		"templates": "templates",
		"text": "lib/require/text",
		"util": "lib/util",
		"views": "views"
	}
});

// Run the scripts when the DOM-READY event has fired.
require(
	[
		"jquery",
		"util",
		"domReady!"
	],
	function( $, util ){


		(function(){

			var faq = null;
			var loaded = false;
			var body = $( "body" );
			var helpLink = $( "p.m-help a" );

			// Handle the help link click - this will lazy-load the
			// FAQ module when it is needed for the first time.
			var handleHelpClick = function( event ){

				event.preventDefault();

				require(
					[ "views/faq" ],
					function( FAQ ){

						// Initialize the module on the first
						// request for its use.
						if (!loaded){

							loaded = true;
							faq = new FAQ();

						}

						faq.open( body );

					}
				);

			};

			// Bind click handler for the FAQ link.
			helpLink.click( handleHelpClick );

		})();


	}
);