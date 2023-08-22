"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const getPhoto = async id => {
    if (id < 1 || id > 5000) {
        return Promise.reject(
            new Error ("Photo ID must be between 1 and 5000."));
    } else {
        const r1 = await fetch(`${domain}/photos/${id}`);
        const photo = await r1.json();
    
        const r2 = await fetch(`${domain}/albums/${photo.albumId}`)
        const album = await r2.json();
        photo.album = album;
    
        const r3 = await fetch(`${domain}/users/${photo.album.userId}`)
        const user = await r3.json();
        photo.album.user = user;
    
        return photo;  // automatically wrapped in a promise
    }
};

const displayPhotoData = photo => {
    let html = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
    html    += `<h4>Title: ${photo.title}</h4>`;
    html    += `<p>Album: ${photo.album.title}</p>`;
    html    += `Posted by: ${photo.album.user.username}`;
    $("#photo").html(html);
};

const displayError = e => {
    let html = `<span>${e}</span>`;
    $("#photo").html(html);
};

$(document).ready( () => {
    $("#view_button").click( async () => {
        const photo_id = $("#photo_id").val();
        try {
            const photo = await getPhoto(photo_id);
            displayPhotoData(photo);
        }
        catch(e) {
            displayError(e);
        }
    });
});