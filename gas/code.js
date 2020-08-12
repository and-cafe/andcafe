function getArray(sheetName) {
  let sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  let rows = sheet.getDataRange().getValues();

  return Array.prototype.concat.apply([], rows);
}

function doGet(e) {
  let data = {
    'holidays': getArray('holidays'),
  };

  return ContentService.createTextOutput(JSON.stringify(data, null, 2))
  .setMimeType(ContentService.MimeType.JSON);
}
