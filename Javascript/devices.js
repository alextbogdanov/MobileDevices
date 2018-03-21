// CHANGE DEVICE
function changeDevice(element) {
    var selectedDevice = element.options[element.selectedIndex].text;
    var activeDiv = $('.selected-device');
    if(selectedDevice === "-- Изберете устройство --") {
        activeDiv.fadeOut(600).removeClass('selected-device');
        $('#device-info-choose').fadeIn(600).addClass('selected-device');
    }
    else if(selectedDevice === "Nokia 9300 Communicator") {
        activeDiv.fadeOut(600).removeClass('selected-device');
        $('#device-info-nokia9300').fadeIn(600).addClass('selected-device');
    }
    else if(selectedDevice === "Sony Ericsson P900") {
        activeDiv.fadeOut(600).removeClass('selected-device');
        $('#device-info-sonyp900').fadeIn(600).addClass('selected-device');
    }
    else if(selectedDevice === "Blackberry 8700v") {
        activeDiv.fadeOut(600).removeClass('selected-device');
        $('#device-info-blackberry8700v').fadeIn(600).addClass('selected-device');
    }
    else if(selectedDevice === "Sony Ericsson Xperia X1") {
        activeDiv.fadeOut(600).removeClass('selected-device');
        $('#device-info-sonyx1').fadeIn(600).addClass('selected-device');
    }
}

// GALLERIES
// NOKIA 9300 GALLERY
$('#nokia9300-img').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'Images/Devices-Images/NokiaCommunicator-9300/1.JPG'
        }, {
            'src': 'Images/Devices-Images/NokiaCommunicator-9300/2.JPG'
        }, {
            'src': 'Images/Devices-Images/NokiaCommunicator-9300/3.JPG'
        }]
    })

});
// SONY P900 GALLERY
$('#sonyp900-img').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'Images/Devices-Images/SonyEricsson-P900/1.JPG'
        }, {
            'src': 'Images/Devices-Images/SonyEricsson-P900/2.JPG'
        }, {
            'src': 'Images/Devices-Images/SonyEricsson-P900/3.JPG'
        }, {
            'src': 'Images/Devices-Images/SonyEricsson-P900/4.JPG'
        }, {
            'src': 'Images/Devices-Images/SonyEricsson-P900/5.JPG'
        }]
    })

});
// BLACKBERRY 8700V GALLERY
$('#blackberry8700v-img').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'Images/Devices-Images/Blackberry-8700v/1.JPG'
        }, {
            'src': 'Images/Devices-Images/Blackberry-8700v/2.JPG'
        }, {
            'src': 'Images/Devices-Images/Blackberry-8700v/3.JPG'
        }]
    })

});
// SONY X1 GALLERY
$('#sonyx1-img').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'Images/Devices-Images/SonyEricsson-XperiaX1/1.JPG'
        }, {
            'src': 'Images/Devices-Images/SonyEricsson-XperiaX1/2.JPG'
        }, {
            'src': 'Images/Devices-Images/SonyEricsson-XperiaX1/3.JPG'
        }]
    })

});
