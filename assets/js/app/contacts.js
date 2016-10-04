"use strict";

import "jquery";
import "jquery-validation";
import Feedback from "../components/feedback";
import Map from "../components/map";

$(() => {
    new Map();
    new Feedback();
    
    $("form").validate();
});