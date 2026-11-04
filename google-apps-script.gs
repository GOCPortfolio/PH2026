/**
 * RSVP receiver for the Precious & Honesty wedding site.
 * Paste this into Extensions > Apps Script of a Google Sheet, then
 * Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone.
 * Copy the Web app URL into CONFIG.rsvp.endpoint in script.js.
 */
var SHEET_NAME = "RSVPs";
var HEADERS = ["Received", "Name", "Phone", "Attending", "Guests", "Message"];

// Stops spreadsheet formulas being injected through form fields (=, +, -, @).
function clean_(value, maxLen) {
  var s = String(value == null ? "" : value).replace(/[\u0000-\u001f]/g, " ").trim().slice(0, maxLen || 500);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sh.setFrozenRows(1);
    sh.getRange("C:C").setNumberFormat("@"); // phone column as plain text keeps leading zeros
  }
  return sh;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.website) return out_("ignored"); // honeypot
    var sh = getSheet_();
    var row = sh.getLastRow() + 1;
    sh.getRange(row, 3).setNumberFormat("@");
    sh.getRange(row, 1, 1, HEADERS.length).setValues([[
      new Date(),
      clean_(data.name, 120),
      clean_(data.phone, 40),
      clean_(data.attending, 40),
      Number(data.guests) || 0,
      clean_(data.message, 1000)
    ]]);
    return out_("ok");
  } catch (err) {
    return out_("error: " + err);
  }
}

function doGet() { return out_("RSVP endpoint is live."); }

function out_(text) {
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.TEXT);
}
