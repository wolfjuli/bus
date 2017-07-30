function newPart(event) {
    obj = {};
    $('#newPart input').each(function (index) {
        obj[($(this).attr('name'))] = $(this).val();
    });

    $('#newPart select').each(function (index) {
        obj[($(this).attr('name'))] = $(this).val();
    });

    $('#newPart textarea').each(function (index) {
        obj[($(this).attr('name'))] = $(this).val();
    });

    //$('#newPart')[0].reset();

    $.ajax({
        method: 'post',
        url: 'rest/api.php/parts',
        data: JSON.stringify(obj)
    }).done( function (event) {
        alert('success');
    }).fail (function ( event ) {
        alert("error happened");
        console.log(event);
    });

    event.preventDefault();
    return false;
}