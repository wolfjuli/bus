
var placesPromise = undefined;
function loadPlaces() {

    function update(places) {

        $('select[bind="places"]').each(function(index) {

            ret = '';
            for(id in places) {
                if(! places.hasOwnProperty(id))
                    continue;
                let place = places[id];
                ret += '<option value="' + place.id + '">' + place.name + '</option>'
            }

            $(this).html(ret);
        });
    }


    if(placesPromise === undefined) {
        placesPromise = $.ajax({
            url: 'rest/api.php/places'
        }).promise();
    }

    placesPromise.done(function(raw) {
      update(JSON.parse(raw));
    });
}

var partsPromise = undefined;
function loadParts() {
 function update(parts) {
    placesPromise.done(function(raw) {
        let places = JSON.parse(raw);
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
                    ret += '<div class="col-xs-1 col-sm-1"><a href="#edit=' + part.id + '" class="edit-ico">✏</a><a href="#delete=' + part.id + '" class="delete-ico">❎</a></div>'
                    ret += '</div>';
                }

                $(this).html(ret);
            });



            $('tbody[bind="parts"]').each(function(index) {
                ret = '';
                for(id in parts) {

                    if(! parts.hasOwnProperty(id))
                        continue;
                    let part = parts[id];
                    let place = places[part.place];
                    if(place === undefined)
                        place = {"name": ""};

                    ret += '<tr>';
                    ret += '<td>' + part.name + '</td>';
                    ret += '<td>' + part.amount + '</td>';
                    ret += '<td>' + place.name + '</td>';
                    ret += '<td>' + part.integrity + '</td>';
                    ret += '<td>' + (part.description != null ? part.description : "") + '</td>';
                    ret += '<td><a href="#edit=' + part.id + '" class="edit-ico">✏</a><a href="#delete=' + part.id + '" class="delete-ico">❎</a></td>';
                    ret += '</tr>';
                }

                $(this).html(ret);
            });
        });
    }



    if(partsPromise === undefined) {
        partsPromise = $.ajax({
        url: 'rest/api.php/parts'
        }).promise();
    }

    partsPromise.done(function(data) {
        update(JSON.parse(data));
    });
}

function getPlaceName(id) {

}