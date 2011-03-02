$(window).load(function () {
	// Creates canvas 320 × 200 at 10, 50
	var paper = Raphael(10, 50, 1000, 600);

    $.getJSON('data.json', function(data){
        $.each(data, function(key, val) {
            $.each(val, function(a, b) {
                $.each(b, function(c, d) {

                    x = d['x'] + 1;
                    y = d['y'] + 1;

                    var circle = paper.circle(x*500, y*300, 2);
                    circle.attr("stroke", d['color']);
					
					circle.node.id= d['id'];
					circle.node.onclick=function(){alert(this.id)};
                });
            });
        });
    });

});