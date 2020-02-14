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
    if (document.getElementById("postingDate").value == "") 
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
        document.getElementById("errorLog").innerHTML = "Form Valid. Review your input <br>Click Submit to Continue.<br>Click Edit to create changes";

        document.getElementById("submit").disabled = false;
        document.getElementById("edit").disabled = false;
        document.getElementById("verify").disabled = true;
        disableSwitch();
    }
    else document.getElementById("errorLog").innerHTML = errorlog;
}



function clearForm() {
    document.getElementById("eventType").value = "invalid";
    document.getElementById("eventName").value = "";
    document.getElementById("eventDateStart").value = "";
    document.getElementById("eventDateEnd").value = "";
    document.getElementById("postingDate").value = "";

    document.getElementById("errorLog").innerHTML = "Form Cleared."

    document.getElementById("verify").disabled = false;s
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = true;
    

}

function disableSwitch() {
    document.getElementById("eventType").disabled = !document.getElementById("eventType").disabled;
    document.getElementById("eventName").disabled = !document.getElementById("eventName").disabled;
    document.getElementById("eventDateStart").disabled = !document.getElementById("eventDateStart").disabled;
    document.getElementById("eventDateEnd").disabled = !document.getElementById("eventDateEnd").disabled;
    document.getElementById("postingDate").disabled = !document.getElementById("postingDate").disabled;
}

function editForm() {
    disableSwitch();
    document.getElementById("verify").disabled = false;
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = true;
}


