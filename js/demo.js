/*
 * biaobiaoqi
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global window, blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from api:
    $.ajax({
        url: (window.location.protocol === 'https:' ?
                'https://' : 'http://') +
                'localhost:9292/getPhotosLists/',
        data: {
            format: 'json',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        alert("哈哈");

        var carouselLinks = [],
            linksContainer = $('#links'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos.photo, function (index, photo) {
            baseUrl = 'http://biaobiaoqi.u.qiniudn.com/' + photo.id; 
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '?imageView/2/w/75/h/75')) //small
                .prop('href', baseUrl + '?imageView/2/w/800/h/800') //big
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl + '?imageView/2/w/300/h/300',//middle
                title: photo.title
            });
        });
        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    });

});
