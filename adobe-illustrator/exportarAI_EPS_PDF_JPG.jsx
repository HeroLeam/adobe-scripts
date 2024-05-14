/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Generates multiple file types

// Get file name
var arquivo = activeDocument.fullName;
var nomeArquivo = activeDocument.name.split(".")[0].replace(/\s/g, "_");

// Replace keywords
nomeArquivo = nomeArquivo.replace(/(\b|\s)(bordado|liner|aviamentos)(\b|\s)/gi, function (match, p1, p2, p3) {
  var palavraSubstituida = "";
  if (p2.toLowerCase() === "bordado") { palavraSubstituida = "_bordado"; } else if (p2.toLowerCase() === "liner") { palavraSubstituida = "_liner"; } else if (p2.toLowerCase() === "aviamentos") { palavraSubstituida = "_aviamentos"; } else if (p2.toLowerCase() === "aplique") { palavraSubstituida = "_aplique"; }
  return p1 + palavraSubstituida + p3.trim();
}
).toLowerCase();

// ----------------------------------------------------------------------------------- //

// Save .ai
var aiOpcoes = new IllustratorSaveOptions();
aiOpcoes.embedICCProfile = true;
var aiCaminho = new File(arquivo.parent.fsName + "/" + nomeArquivo + ".ai");
activeDocument.saveAs(aiCaminho, aiOpcoes);

// Save .eps
var epsOpcoes = new EPSSaveOptions();
var epsCaminho = new File(arquivo.parent.fsName + "/" + nomeArquivo + ".eps");

epsOpcoes.compatibility = Compatibility.ILLUSTRATOR10;
epsOpcoes.preview = EPSPreview.None;
epsOpcoes.embedAllFonts = false;
epsOpcoes.embedLinkedFiles = false;
epsOpcoes.includeDocumentThumbnails = false;
epsOpcoes.cmykPostScript = false;
epsOpcoes.compatibleGradientPrinting = false;
activeDocument.saveAs(epsCaminho, epsOpcoes);

// Save .pdf
var pdfOpcoes = new PDFSaveOptions();
var pdfCaminho = new File(arquivo.parent.fsName + "/" + nomeArquivo + ".pdf");

pdfOpcoes.pDFXStandard = PDFXStandard.PDFX1A2001;
pdfOpcoes.compatibility = PDFCompatibility.ACROBAT4;
pdfOpcoes.colorConversionID = ColorConversion.COLORCONVERSIONREPURPOSE;
activeDocument.saveAs(pdfCaminho, pdfOpcoes);

// Save .jpg
var jpgOpcoes = new ExportOptionsJPEG();
jpgOpcoes.qualitySetting = 50;
var jpgCaminho = new File(arquivo.parent.fsName + "/" + nomeArquivo + ".jpg");
activeDocument.exportFile(jpgCaminho, ExportType.JPEG, jpgOpcoes);

alert("Arquivos exportados com sucesso!");
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);