define( [ "qlik"
],
function ( qlik) {

	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element) {
			//add your rendering code here
			$element.html( "<img height=\"50px\" src=\"/extensions/GFTLogo/GFT.png\"></img>" );
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

