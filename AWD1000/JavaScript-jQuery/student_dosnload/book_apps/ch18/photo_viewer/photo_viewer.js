"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const getPhoto = (id) => {
    if (id < 1 || id > 5000) {
        return Promise.reject(
            new Error("Photo ID must be between 1 and 5000."));
    } else {
        return fetch(`${domain}/photos/${id}`)
            .then( response => response.json() ); // resolves to photo object
    }
};

const getPhotoAlbum = photo => {
    return fetch(`${domain}/albums/${photo.albumId}`)
        .then( response => response.json() )   // resolves to album object
        .then( album => {
            photo.album = album;               // add album property
            return photo;                      // wraps in Promise object
        });
};

const getPhotoAlbumUser = photo => {
    return fetch(`${domain}/users/${photo.album.userId}`)
        .then( response => response.json() )   // resolves to user object
        .then( user => {
            photo.album.user = user;           // add album.user property
            return photo;                      // wraps in Promise object
        });   
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

    $("#view_button").click( () => {
        const photo_id = $("#photo_id").val();
        getPhoto(photo_id)
            .then(getPhotoAlbum)
            .then(getPhotoAlbumUser)
            .then(displayPhotoData)
            .catch(displayError);
    });
 });