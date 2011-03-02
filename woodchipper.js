$(window).load(function () {
	// using the example from raphaeljs.com
		
	// Creates canvas 320 × 200 at 10, 50
	var paper = Raphael(10, 50, 1000, 600);

	// Creates circle at x = 50, y = 40, with radius 10
	//var circle = paper.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	//circle.attr("fill", "#f00");

    $.getJSON('http://localhost/Woodchipper-Client/data.json', function(data){
        $.each(data, function(key, val) {
            $.each(val, function(a, b) {
                $.each(b, function(c, d) {
                    //('x: ' + d['x'] + ' y: ' + d['y']);
                    x = d['x'] + 1;
                    y = d['y'] + 1;
                    //alert (x + 1);
                    var circle = paper.circle(x*500, y*300, 1);
                    circle.attr("stroke", d['color']);
                });
            });
        });
     // this is where we do what we want with the tweet

    });

});