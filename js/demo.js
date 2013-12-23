/*
 * biaobiaoqi
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global window, blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from api: getHorizPhotosList
    $.ajax({
        url: (window.location.protocol === 'https:' ?
                'https://' : 'http://') +
                '106.186.114.43:9292/getHorizPhotosList/',
        data: {
            format: 'json',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'callback'
    }).done(function (result) {
        var carouselLinks = [],
            linksContainer = $('#hlinks'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos, function (index, photo) {
            baseUrl = 'http://r-gallery.u.qiniudn.com/' + photo.id; 
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '?imageView/2/w/75/h/75')) //small
                .prop('href', baseUrl + '?imageView/2/w/800/h/800') //big
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl + '?imageView/2/w/600/h/600',//middle
                title: photo.title
            });
        });
        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    });


    // Load demo images from api: getVerticPhotosList
    $.ajax({
        url: (window.location.protocol === 'https:' ?
                'https://' : 'http://') +
                '106.186.114.43:9292/getVerticPhotosList/',
        data: {
            format: 'json',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'callback'
    }).done(function (result) {
        var carouselLinks = [],
            linksContainer = $('#vlinks'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos, function (index, photo) {
            baseUrl = 'http://r-gallery.u.qiniudn.com/' + photo.id; 
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '?imageView/2/w/75/h/75')) //small
                .prop('href', baseUrl + '?imageView/2/w/800/h/800') //big
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl + '?imageView/2/w/600/h/600',//middle
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
