
var places = [];
function loadPlaces() {

    function update() {

        $('select[bind="places"]').each(function(index) {

            ret = '';
            for(place of places) {
                ret += '<option value="' + place.id + '">' + place.name + '</option>'
            }

            $(this).html(ret);

        });
    }


    if(places.length == 0) {
        $.ajax({
        url: 'rest/api.php/places'
        }).done(function(data) {
            places = JSON.parse(data);
            update();
        });
    } else {
        update();
    }
}

