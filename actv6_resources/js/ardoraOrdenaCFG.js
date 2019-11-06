var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Felicitades termino la actividad."; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0djY"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RXMgdW5hIHBsYXRhZm9ybWEgYmFzYWRhIGVuIGVsIHNpc3RlbWEgZGUgY29udHJvbCBkZSB2ZXJzaW9uZXMgR2l0LCBjdXlvIHNvZnR3YXJlIGZ1ZSBlc2NyaXRvIGVuIGVsIGZyYW1ld29yayBkZSBhcGxpY2FjaW9uZXMgd2ViIGRlIGPzZGlnbyBhYmllcnRvIGxsYW1hZG8gUnVieSBvbiBSYWlscywgdGFtYmnpbiBjb25vY2lkbyBjb21vIFJvUiBvIFJhaWxzLg","RGVwZW5kaWVuZG8gZGUgbGFzIGF1dG9yaXphY2lvbmVzIHF1ZSBvdG9yZ3VlIGVsIHRpdHVsYXIgZGUgbGEgY3VlbnRhLCBsb3MgdXN1YXJpb3MgcG9kcuFuIHJlYWxpemFyIG1vZGlmaWNhY2lvbmVzIHF1ZSBxdWVkYW4gcmVnaXN0cmFkYXMgZ3JhY2lhcyBhbCBzaXN0ZW1hIGRlIGNvbnRyb2wgZGUgdmVyc2lvbmVzIEdpdC4","RXN0YSBwbGF0YWZvcm1hIGRlIGRlc2Fycm9sbG8gY29sYWJvcmF0aXZvIHRlIHBlcm1pdGUgYWxvamFyIHByb2dyYW1hcyBvIHNpc3RlbWFzIG9wZXJhdGl2b3MsIHBhcmEgcXVlIGxhIGNvbXVuaWRhZCBhY2NlZGEgYSBsb3MgY/NkaWdvcyBmdWVudGUgeSByZWFsaWNlIGNvbWVudGFyaW9zLg","",""];imaW=["","","","",""];queW=["","","","",""]; c=[205,185,166,0,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="actv6_resources/media/"; textBNext="Siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
