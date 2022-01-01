// On page load actions.
// Assigns request type based on main <h3> header.
var requestType = $('#ajaxFormName h3').text().trim();

// Copies policy number to the clipboard.
var policyNumber = $('#ajaxFormName li:first-child .right1').text().trim();
navigator.clipboard.writeText(policyNumber);


// If statement to check if request is to add a vehicle.
if (requestType == "Add Vehicle") {
    // Assign relevant variables for logic check.
    var effectiveDate = $('#Q_Intra_AddVeh_VehPurDate .right1').text().trim();
    var titleholder = $('#Q_Intra_AddVeh_VehHolSel .right1').text().trim();
    var vehicleYear = $('#Q_Intra_AddVeh_Year .right1').text().trim();
    var vehicleMake = $('#Q_Intra_AddVeh_Make .right1').text().trim();
    var vehicleModel = $('#Q_Intra_AddVeh_Model .right1').text().trim();
    var usageType = $('#Q_Intra_AddVeh_Usage .right1').text().trim();
    var vehicleDamage = $('#Q_Intra_AddVeh_ExistingDmge .right1').text().trim();
    var driver = $('#Q_Intra_AddVeh_FN_PrimDriver .right1').text().trim();
    var garaging = $('#Q_Intra_AddVeh_Vehicle_At_Residence .right1').text().trim();
    var schoolOperator = $('#Q_Intra_School .right1').text().trim();
    var otherOperator = $('#Q_Intra_Other_Operator .right1').text().trim();

    // If statements to check titleholder.
    if (titleholder == "Parent/child at same residence") {
        // Add error/caution flag.
        $('#Q_Intra_AddVeh_VehHolSel .right1').append("<li class=\"caution\">Caution - Verify that child lives in the residence.</li>");

        // Update comments if no vehicle add warnings or cautions.
        $('body').append("<aside><h2>" + requestType + "</h2><p>Added " + vehicleYear + " " + vehicleMake + " " + vehicleModel + " effective " + effectiveDate + ".</p><button id=\"copyButton\">Copy</button></aside>");
    }

    else if (titleholder == "Self and/or spouse") {
        // Add error/caution flag.
        $('#Q_Intra_AddVeh_VehHolSel .right1').append("<li class=\"warning\">Warning! - Unable to add due to titled to OTHER.</li>");

        // Update comments to reflect title being in OTHER name.
        $('body').append("<aside><h2>" + requestType + "</h2><p>Online request to add " + vehicleYear + " " + vehicleMake + " " + vehicleModel + " purchased " + effectiveDate + ".\n\n<br><br>Emailed client to verify titleholder information. If the insured calls in, please review the titling to verify if it qualifies, as the insured listed OTHER.\n\n<br><br>FUP has been set - if the client does not contact us, send Unable to Process email template or call if there is no email on file.</p><button id=\"copyButton\">Copy</button></aside>");
    }

    else {
        // Update comments if no vehicle add warnings or cautions.
        $('body').append("<aside><h2>" + requestType + "</h2><p>Added " + vehicleYear + " " + vehicleMake + " " + vehicleModel + " effective " + effectiveDate + ".</p><button id=\"copyButton\">Copy</button></aside>");
    }
}

$('#copyButton').click(function () {
    copyComments();
});

function copyComments() {
    var textToCopy = $('aside p').text().trim();
    navigator.clipboard.writeText(textToCopy);
}