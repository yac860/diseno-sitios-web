var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades ha terminado la actividad"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0Mg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RW4gSFRNTCBleGlzdGUgdW4gZXNxdWVsZXRvIGLhc2ljbyBkZSBldGlxdWV0YXMgcXVlIGNvbWllbnphIHBvciBIVE1MIHkgZGVudHJvIHRlbmVtb3MgZG9zIGdyYW5kZXMgYmxvcXVlcyBIRUFEIHkgQk9EWS4","RWwgYXNpZGUgY29udGllbmUgaW5mb3JtYWNp824gYWNjZXNvcmlhLCBxdWUgbm8gc3VlbGUgYfFhZGlyIHVuIHZhbG9yIHNpZ25pZmljYXRpdm8gYSBsYSB0ZW3hdGljYSBkZWwgc2l0aW8u","","",""];imaW=["","","","",""];queW=["","","","",""]; c=[119,108,0,0,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="act2_resources/media/"; textBNext="Siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
