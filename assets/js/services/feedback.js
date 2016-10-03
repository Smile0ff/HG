"use strict";

export function sendFeedback(url, data){

    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: data
    });

}