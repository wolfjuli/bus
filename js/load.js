
var places = {};
function loadPlaces() {

    function update() {

        $('select[bind="places"]').each(function(index) {

            ret = '';
            for(id in places) {
                if(! place.hasOwnProperty(id))
                    continue;
                let place = places[id];
                ret += '<option value="' + place.id + '">' + place.name + '</option>'
            }

            $(this).html(ret);
        });
    }


    if(places.length == 0) {
        $.ajax({
        url: 'rest/api.php/places'
        }).done(function(data) {
            for(d of JSON.parse(data)) {
                places[d.id] = d;
            }

            update();
        });
    } else {
        update();
    }
}

var parts = []
function loadParts() {
 function update() {
    $('div[bind="parts"]').each(function(index) {
            ret = '';
            for(id in parts) {
                if(! parts.hasOwnProperty(id))
                    continue;
                let part = parts[id];
                ret += '<div class="row">';
                ret += '<div class="col-xs-3 col-sm-3">' + part.name   + '</div>'
                ret += '<div class="col-xs-1 col-sm-1">' + part.amount + '</div>'
                ret += '<div class="col-xs-2 col-sm-2">' + part.place  + '</div>'
                ret += '<div class="col-xs-1 col-sm-1">' + part.integrity + '</div>'
                ret += '<div class="col-xs-4 col-sm-4">' + part.description + '</div>'
                ret += '<div class="col-xs-1 col-sm-1"><a href="#edit=' + part.id + '">Edit</a><a href="#delete=' + part.id + '">Delete</a></div>'
                ret += '</div>';
            }

            $(this).html(ret);
        });
    }


    if(parts.length == 0) {
        $.ajax({
        url: 'rest/api.php/parts'
        }).done(function(data) {
            for(d of JSON.parse(data)) {
                parts[d.id] = d;
            }
            update();
        });
    } else {
        update();
    }
}

function getPlaceName(id) {

}