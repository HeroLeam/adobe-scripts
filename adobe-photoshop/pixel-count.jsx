/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// ----------------------------------------------------------------------------------- //

var doc = app.activeDocument;
var channel = doc.activeChannels[0];
var histogram = channel.histogram;
var totalPixelCount = 0;

for (var i = 0; i < histogram.length; i++) {
  totalPixelCount += histogram[i];
}
var pixelCount = totalPixelCount - histogram[0];
var d = new ActionDescriptor();
d.putString(stringIDToTypeID("textData"), totalPixelCount);
executeAction(stringIDToTypeID("textToClipboard"), d, DialogModes.NO);
