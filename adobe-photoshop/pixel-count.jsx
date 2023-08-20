/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// ----------------------------------------------------------------------------------- //

#target photoshop

// Get the current Photoshop document
var doc = app.activeDocument;

// Get the brightness (Y) channel of the image
var channel = doc.activeChannels[0];

// Get the histogram of the luminosity channel
var histogram = channel.histogram;

// Get the total sum of histogram values
var totalPixelCount = 0;
for (var i = 0; i < histogram.length; i++) {
  totalPixelCount += histogram[i];
}

// Get the selected pixel amount value from the histogram
var pixelCount = totalPixelCount - histogram[0];

// Copy the value to the clipboard
var d = new ActionDescriptor();
d.putString(stringIDToTypeID("textData"), totalPixelCount);
executeAction(stringIDToTypeID("textToClipboard"), d, DialogModes.NO);

// ----------------------------------------------------------------------------------- //

// Show an alert
// alert("Pixels: " + totalPixelCount);