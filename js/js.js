function validate() {
    var errorlog = "";
    var isEventTypeOK = true;
    if (document.getElementById("eventType").value == "invalid")
    {
        isEventTypeOK = false;
        errorlog = errorlog + "<br>Event Type Invalid!";
    }

    var isEventNameOK = true;
    if (document.getElementById("eventName").value == "") 
    {
        isEventTypeOK = false;
        errorlog = errorlog + "<br>Event Name Invalid!";
    }

    var isEventDateOK = true;
    if (document.getElementById("eventDateStart").value > document.getElementById("eventDateEnd").value || document.getElementById("eventDateStart").value == "" || document.getElementById("eventDateEnd").value == "")
    {
        isEventDateOK = false;
        errorlog = errorlog + "<br>Event Date Invalid!";
    }

    var isPostingDateOK = true;
    if (document.getElementById("postingDate").checkValidity() == false) 
    {
        isPostingDateOK = false;
        errorlog = errorlog + "<br>Posting Date Invalid!";
    }
    
    var isCheckBoxOK = true;
    var j = 0;
    for (var i = 1; i <= 4; i++)
    {
        if (document.getElementById("question" + i).checked) j++;
    }

    if (j == 0) 
    {
        errorlog = errorlog + "<br>Check at least one option in the checklist!";
    }

    
    if (isEventTypeOK && isEventNameOK && isEventDateOK && isPostingDateOK) {
        document.getElementById("errorLog").innerHTML = "Event Created.";
    }
    else {
        document.getElementById("errorLog").innerHTML = errorlog;
        return false;
    }
}



function clearForm() {
    document.getElementById("eventType").value = "invalid";
    document.getElementById("eventName").value = "";
    document.getElementById("eventDateStart").value = "";
    document.getElementById("eventDateEnd").value = "";
    document.getElementById("postingDate").value = "";

    document.getElementById("errorLog").innerHTML = "Entry Cancelled."
}


