// On page load actions.
// Assigns request type based on main <h3> header.
var requestType = $('#ajaxFormName h3').text().trim();

// Copies policy number to the clipboard.
var policyNumber = $('#ajaxFormName li:first-child .right1').text().trim();
navigator.clipboard.writeText(policyNumber);


// Copy button next to policy number.
$('#ajaxFormName li:first-child .right1').after("<button type=\"button\" id=\"copy-policy-button\">Copy</button>");

// Create selection for client type.
var clientType = null;

// If statement to check request type, generates input types and comments based on request type.
if (requestType == "Add Vehicle") {

    // Assign relevant variables for logic check.
    var vehiclePurchaseDate = $('#Q_Intra_AddVeh_VehPurDate .right1').text().trim();
    var titleholder = $('#Q_Intra_AddVeh_VehHolSel .right1').text().trim();
    var vehicleIdentificationNumber = $('#Q_Intra_AddVeh_VIN').text().trim();
    var vehicleYear = $('#Q_Intra_AddVeh_Year .right1').text().trim();
    var vehicleMake = $('#Q_Intra_AddVeh_Make .right1').text().trim();
    var vehicleModel = $('#Q_Intra_AddVeh_Model .right1').text().trim();
    var usageType = $('#Q_Intra_AddVeh_Usage .right1').text().trim();
    var vehicleDamage = $('#Q_Intra_AddVeh_ExistingDmge .right1').text().trim();
    var driver = $('#Q_Intra_AddVeh_FN_PrimDriver .right1').text().trim();
    var garaging = $('#Q_Intra_AddVeh_Vehicle_At_Residence .right1').text().trim();
    var schoolOperator = $('#Q_Intra_School .right1').text().trim();
    var otherOperator = $('#Q_Intra_Other_Operator .right1').text().trim();

    //Copy button next to VIN.
    $('#Q_Intra_AddVeh_VIN').append("<button type=\"button\" id=\"copy-vin-button\">Copy</button>");

    // If statements to check titleholder.
    if (titleholder == "Parent/child at same residence") {

        // Add error/caution flag.
        $('#Q_Intra_AddVeh_VehHolSel .right1').append("<li class=\"caution\">Caution - Verify that unmarried child lives in the residence. Unable to add vehicle in NJ and NY.</li>");

        // Update comments if no other vehicle add warnings or cautions.
        $('body').append("<aside><h2>Select Client Type</h2><input type=\"radio\" id=\"costcoRadio\" name=\"clientTypeRadio\" value=\"Costco\"><label for=\"costcoRadio\"> Costco</label><input type=\"radio\" id=\"advisorRadio\" name=\"clientTypeRadio\" value=\"Advisor\"><label for=\"advisorRadio\"> Advisor</label><input type=\"radio\" id=\"progressiveRadio\" name=\"clientTypeRadio\" value=\"Progressive\"><label for=\"progressiveRadio\"> Progressive</label><h2>" + requestType + "</h2><p>Added " + vehicleYear + " " + vehicleMake + " " + vehicleModel + " effective " + vehiclePurchaseDate + ".</p><button type=\"button\" id=\"copyButton\">Copy</button><button type=\"button\" id=\"emailButton\">Email</button><button type=\"button\" id=\"followupButton\">FUP</button></aside>");

        // Disable email button.
        $('#emailButton').prop('disabled', true);
        $('#emailButton').css('background-color', 'grey');

        // Disable follow up button.
        $('#followupButton').prop('disabled', true);
        $('#followupButton').css('background-color', 'grey');

    } else if (titleholder == "Other") {

        // Add error/caution flag.
        $('#Q_Intra_AddVeh_VehHolSel .right1').append("<li class=\"warning\">Warning! - Unable to add due to titled to OTHER.</li>");

        // Update comments to reflect title being in OTHER name.
        $('body').append("<aside><h2>Select Client Type</h2><input type=\"radio\" id=\"costcoRadio\" name=\"clientTypeRadio\" value=\"Costco\"><label for=\"costcoRadio\"> Costco</label><input type=\"radio\" id=\"advisorRadio\" name=\"clientTypeRadio\" value=\"Advisor\"><label for=\"advisorRadio\"> Advisor</label><input type=\"radio\" id=\"progressiveRadio\" name=\"clientTypeRadio\" value=\"Progressive\"><label for=\"progressiveRadio\"> Progressive</label><h2>" + requestType + "</h2><p>Online request to add " + vehicleYear + " " + vehicleMake + " " + vehicleModel + " purchased " + vehiclePurchaseDate + ".\n\n<br><br>Emailed client to verify titleholder information. If the insured calls in, please review the titling to verify if it qualifies, as the insured listed OTHER.\n\n<br><br>FUP has been set - if the client does not contact us, send Unable to Process email template or call if there is no email on file.\n\n<br><br>Sent email&colon;\n\n<br><br>Policy number&colon; " + policyNumber + "\n\n<br><br>Thank you for requesting to add a vehicle to your policy through our website.\n\n<br><br>Your request listed the titleholder as Other. Please confirm the name(s) on the title so we can proceed with your request. You can provide this information by responding to this email or by calling us at the number below.\n\n<br><br>If you have any questions, please contact us at 1-888-404-5365. We're available Monday through Friday, 7 a.m. to 10 p.m. or Saturday 8:30 a.m. to 7 p.m. Central time.\n\n<br><br>We appreciate your time and attention in this matter.\n\n<br><br>Sincerely,\n\n<br><br>The team at CONNECT, powered by American Family Insurance</p><button type=\"button\" id=\"copyButton\">Copy</button><button type=\"button\" id=\"emailButton\">Email</button><button type=\"button\" id=\"followupButton\">FUP</button></aside>");

    } else {

        // Update comments if no vehicle add warnings or cautions.
        $('body').append("<aside><h2>Select Client Type</h2><input type=\"radio\" id=\"costcoRadio\" name=\"clientTypeRadio\" value=\"Costco\"><label for=\"costcoRadio\"> Costco</label><input type=\"radio\" id=\"advisorRadio\" name=\"clientTypeRadio\" value=\"Advisor\"><label for=\"advisorRadio\"> Advisor</label><input type=\"radio\" id=\"progressiveRadio\" name=\"clientTypeRadio\" value=\"Progressive\"><label for=\"progressiveRadio\"> Progressive</label><h2>" + requestType + "</h2><p>Added " + vehicleYear + " " + vehicleMake + " " + vehicleModel + " effective " + vehiclePurchaseDate + ".</p><button type=\"button\" id=\"copyButton\">Copy</button><button type=\"button\" id=\"emailButton\">Email</button><button type=\"button\" id=\"followupButton\">FUP</button></aside>");

        // Disable email button.
        $('#emailButton').prop('disabled', true);
        $('#emailButton').css('background-color', 'grey');

        // Disable follow up button.
        $('#followupButton').prop('disabled', true);
        $('#followupButton').css('background-color', 'grey');
    }
}

if (requestType == "Add Mortgage Company") {
    // Assign relevant variables for logic check.
    var effectiveDate = $('#ajaxFormName > ul > li:nth-child(3) > div.right1').text().trim();
    var mortgagePlace = $('#Q_Intra_AddMort_Mortgage_Type .right1').text().trim();
    var mortgageBill = $('#Q_Intra_AddMort_Send_Bill .right1').text().trim();

    if (mortgageBill == "Yes") {

        // Add error/caution flag.
        $('#Q_Intra_AddMort_Send_Bill .right1').append("<li class=\"caution\">Caution - Verify that billing method is on MORTGAGE. Reprint bill if needed.</li>");

    } else {

        // Add error/caution flag.
        $('#Q_Intra_AddMort_Send_Bill .right1').append("<li class=\"caution\">Caution - Verify that billing method is DF/CCF/CCM/PAW.</li>");

    }

    // Update comments if no other vehicle add warnings or cautions.
    $('body').append("<aside><h2>Select Client Type</h2><input type=\"radio\" id=\"costcoRadio\" name=\"clientTypeRadio\" value=\"Costco\"><label for=\"costcoRadio\"> Costco</label><input type=\"radio\" id=\"advisorRadio\" name=\"clientTypeRadio\" value=\"Advisor\"><label for=\"advisorRadio\"> Advisor</label><input type=\"radio\" id=\"progressiveRadio\" name=\"clientTypeRadio\" value=\"Progressive\"><label for=\"progressiveRadio\"> Progressive</label><h2>" + requestType + "</h2><p>Updated " + mortgagePlace + " mortgage effective " + effectiveDate + ".</p><button type=\"button\" id=\"copyButton\">Copy</button><button type=\"button\" id=\"emailButton\">Email</button><button type=\"button\" id=\"followupButton\">FUP</button></aside>");

    // Disable email button.
    $('#emailButton').prop('disabled', true);
    $('#emailButton').css('background-color', 'grey');

    // Disable follow up button.
    $('#followupButton').prop('disabled', true);
    $('#followupButton').css('background-color', 'grey');
}

// Else statement (temporary) to make <h3> visible on all requests.
else {
    $('body').append("<aside><h2>" + requestType + "</h2></p><button type=\"button\" id=\"copyButton\">Copy</button></aside>");
}

// Events
$('#copyButton').click(function() {
    copyComments();
});

$('#emailButton').click(function() {
    window.open("mailto:EMAIL?subject=Policy Number " + policyNumber + "&body=" + errorVehicleTitleOtherCostcoEmail);
});

$('#followupButton').click(function() {
    window.open("https://amfam.sharepoint.com/sites/cahphs/Lists/FUPDiary2/Item/newifs.aspx?Source=https://amfam.sharepoint.com/:u:/r/sites/cahphs/SitePages/SubmissionConformation.aspx?csf=1&web=1&e=pZ1RMH");
});

$('#copy-policy-button').click(function() {
    navigator.clipboard.writeText($('#ajaxFormName li:first-child .right1').text().trim());
});

$('#copy-vin-button').click(function() {
    navigator.clipboard.writeText($('#Q_Intra_AddVeh_VIN .right1').text().trim());
});

// Functions
function copyComments() {
    var textToCopy = $('aside p').text().trim();
    navigator.clipboard.writeText(textToCopy);
}

// Email strings.
var errorVehicleTitleOtherCostcoEmail = "Policy number: " + policyNumber + "%0D%0A%0D%0AThank you for requesting to add a vehicle to your policy through our website. %0D%0A%0D%0AYour request listed the titleholder as Other. Please confirm the name(s) on the title so we can proceed with your request. You can provide this information by responding to this email or by calling us at the number below.  %0D%0A  %0D%0AIf you have any questions, please contact us at 1-888-404-5365. We're available Monday through Friday, 7 a.m. to 10 p.m. or Saturday 8:30 a.m. to 7 p.m. Central time.%0D%0A%0D%0AWe appreciate your time and attention in this matter. %0D%0A%0D%0ASincerely, %0D%0A%0D%0AThe team at CONNECT, powered by American Family Insurance%0D%0A";