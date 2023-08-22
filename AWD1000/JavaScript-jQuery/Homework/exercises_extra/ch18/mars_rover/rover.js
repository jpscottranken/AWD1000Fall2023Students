"use strict";

const domain = "https://api.nasa.gov/mars-photos/api/v1/rovers";
// for better results, sign up for an API key and replace DEMO_KEY with your key
const request = "?api_key=DEMO_KEY&page=1";

const roverData = new Map();

// asynchronous getJson() function that makes API requests goes here

const getSelectedDate = () => {
    const year = $("#year").val();
    const month = $("#month").val();
    const date = $("#date").val();
    return `${year}-${month}-${date}`;
};

const clearPrevious = () => {
    $("#display").html(""); 
    $("#camera").html("");
    $("#year").html("");
    $("#month").html("");
    $("#date").html("");
};

const displayRoverData = rover => {
    $("#name").text(rover.name);
    $("#status").text(rover.status);
    $("#photos").text(rover.total_photos);
    $("#landing").text(rover.landing_date);
    $("#max").text(rover.max_date);
};

const getOptionHtml = (min, max, selected) => {
    let options = "";
    for (let i = min; i <= max; i++) {
        if (i == selected) {
            options += `<option selected>${i}</option>`;
        } else {
            options += `<option>${i}</option>`;
        }
    }
    return options;
};

$(document).ready( async () => {
    // get rover data
    const url = domain + request;
    const json = await getJson(url);                    // asynchronous call to getJson()

    // create options for dropdown and also store 
    // rover data in Map for later use
    let roverOptions = '<option></option>';
    for (let rover of json.rovers) {
        roverData.set(rover.name, rover);
        roverOptions += `<option>${rover.name}</option>`;
    }
    $("#rover").append(roverOptions);

    // change event handler for rover dropdown
    $("#rover").change( evt => {
        clearPrevious();

        // get data for currently selected rover
        const name = $(evt.currentTarget).val();
        const data = roverData.get(name);

        if (data) { // display options if user has selected a rover
            $("#options").show();
            displayRoverData(data);

            // get options for camera dropdown
            let cameraOptions= '<option value="">All Cameras</option>';
            for (let camera of data.cameras) {
                cameraOptions += `<option value="${camera.name}">${camera.full_name}</option>`;
            }
            $("#camera").append(cameraOptions);

            // get options for year, month, and data dropdowns based on
            // date range for rover 
            const landingDateParts = data.landing_date.split("-");
            const maxDateParts = data.max_date.split("-");

            $("#year").append( getOptionHtml(landingDateParts[0], maxDateParts[0], maxDateParts[0]) );
            $("#month").append( getOptionHtml(1, 12, maxDateParts[1]) );
            $("#date").append( getOptionHtml(1, 31, maxDateParts[2]) );

        } else {    
            $("#options").hide();
        }
    });

    // click event handler for View Photos button
    $("#view").click( async () => {
        $("#display").html("Loading...");

        // get rover, date, and camera info and build API URL
        const rover = $("#rover").val();
        const date = getSelectedDate();
        const camera = $("#camera").val();

        let url = `${domain}/${rover}/photos/${request}&earth_date=${date}`;
        if (camera) {
            url += `${url}&camera=${camera}`;
        }

        // get and display photo data
        const json = await getJson(url);                     // asynchronous call to getJson()

        if (!json.photos || json.photos == 0) {
            if (camera) {
                $("#display").html(`No photos for ${camera} camera on ${date}`);
            } else {
                $("#display").html(`No photos for ${date}`);
            }
        } else {
            let html = "";
            for (let photo of json.photos) {
                html += `<img src="${photo.img_src}" title="${photo.camera.full_name}">`;
            }
            $("#display").html(html);
        }
    });
});