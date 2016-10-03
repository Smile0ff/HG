"use strict";
import { sendFeedback } from "../services/feedback";

const FORM = $("#feedback-form");

class Feedback{

    constructor(){
        this.isLoading = false;

        this._events();
    }
    _events(){
        FORM.on("submit", (e) => { this._handleForm(e); });
    }
    _handleForm(e){
        e.preventDefault();

        if(!FORM.valid() || this.isLoading) return;

        this.isLoading = true;

        let formAction = FORM.attr("action"),
            formData = FORM.serializeArray();

        sendFeedback(formAction, formData)
            .done((response) => {
                

                FORM[0].reset();
            })
            .fail((error) => {
                error = JSON.parse(error.responseText);
                
            })
            .always(() => {
                this.isLoading = false;
            });

        return false;
    }
}

export default Feedback;