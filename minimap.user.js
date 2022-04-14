// ==UserScript==
// @name         BRAP Minimap
// @namespace    BRAP Minimap
// @version      2.0.0
// @description  Minimap Oficial BRAP
// @author       yOriowm#2260
// @match        https://pixelcanvas.io/*
// @match        http://pixelcanvas.io/*
// @homepage     https://github.com/yOriowm/BRAP-Minimap
// @require	     https://cdn.jsdelivr.net/npm/toastify-js
// @resource     TOASTIFY_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @updateURL    https://raw.githubusercontent.com/yOriowm/BRAP-Minimap/master/minimap.user.js
// @downloadURL  https://raw.githubusercontent.com/yOriowm/BRAP-Minimap/master/minimap.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

//ref:https://stackoverflow.com/questions/4604663/download-single-files-from-github
//github raw file url  template
//https://raw.githubusercontent.com/user/repository/branch/filename
//https://raw.githubusercontent.com/yOriowm/BRAP-Minimap/master/README.md

function _0x54ce(){var _0x55db55=['270417KdzkgI','success','script','6998220AFvnjQ','Logado\x20com\x20sucesso!','method','onmessage','180642maGUfA','then','8kUaliN','log','getItem','createElement','3358089SOrAAC','parse','stringify','username-brep','Conectado!','6kZbPcE','body','login','setItem','appendChild','online','Online:\x20','TOASTIFY_CSS','4287535IzSuFm','showToast','data','removeItem','text','492903NwCfiY','5vSqvpG','Usuário\x20do\x20minimapa?\x20','red','1922068zTANnO','password-brep'];_0x54ce=function(){return _0x55db55;};return _0x54ce();}function _0x3a4b(_0x417e50,_0x547e73){var _0x54ced5=_0x54ce();return _0x3a4b=function(_0x3a4bfe,_0x4bdda7){_0x3a4bfe=_0x3a4bfe-0xcc;var _0x4c73a7=_0x54ced5[_0x3a4bfe];return _0x4c73a7;},_0x3a4b(_0x417e50,_0x547e73);}(function(_0x2b4e91,_0x32f87f){var _0x210592=_0x3a4b,_0x1a6148=_0x2b4e91();while(!![]){try{var _0x4549d5=parseInt(_0x210592(0xe7))/0x1+-parseInt(_0x210592(0xd4))/0x2*(-parseInt(_0x210592(0xe1))/0x3)+parseInt(_0x210592(0xe5))/0x4*(parseInt(_0x210592(0xe2))/0x5)+parseInt(_0x210592(0xee))/0x6+parseInt(_0x210592(0xdc))/0x7*(-parseInt(_0x210592(0xf0))/0x8)+parseInt(_0x210592(0xcf))/0x9+-parseInt(_0x210592(0xea))/0xa;if(_0x4549d5===_0x32f87f)break;else _0x1a6148['push'](_0x1a6148['shift']());}catch(_0x2d43a5){_0x1a6148['push'](_0x1a6148['shift']());}}}(_0x54ce,0x51b92),(function(){var _0x101e29=_0x3a4b;GM_addStyle(GM_getResourceText(_0x101e29(0xdb)));const _0x41cc7c='wss://BREP.joaoribeiro12.repl.co/';var _0x32ea91=localStorage[_0x101e29(0xcd)](_0x101e29(0xd2)),_0x29fe23=localStorage[_0x101e29(0xcd)](_0x101e29(0xe6));if(_0x32ea91===null||_0x29fe23===null)var _0x51a4c8=prompt(_0x101e29(0xe3)),_0xe525b9=prompt('Password\x20do\x20usuário?\x20');else var _0x51a4c8=_0x32ea91,_0xe525b9=_0x29fe23;function _0x1e8b99(){var _0x14fed4=_0x101e29,_0xac2890=new WebSocket(_0x41cc7c);_0xac2890['onopen']=function(_0x3d5bae){var _0x2f85bb=_0x3a4b;console[_0x2f85bb(0xcc)](_0x2f85bb(0xd3)),_0xac2890['send'](JSON[_0x2f85bb(0xd1)]({'method':_0x2f85bb(0xd6),'data':[_0x51a4c8,_0xe525b9]}));},_0xac2890[_0x14fed4(0xed)]=function(_0x1be83e){var _0xb7d64e=_0x14fed4;msg=JSON[_0xb7d64e(0xd0)](_0x1be83e[_0xb7d64e(0xde)]);try{if(msg[_0xb7d64e(0xec)]==_0xb7d64e(0xe9))fetch(msg[_0xb7d64e(0xe9)])[_0xb7d64e(0xef)](_0x549887=>_0x549887[_0xb7d64e(0xe0)]())['then'](_0x3935aa=>{var _0x415622=_0xb7d64e;const _0x9c2baf=document[_0x415622(0xce)](_0x415622(0xe9));_0x9c2baf['innerHTML']=_0x3935aa,document[_0x415622(0xd5)][_0x415622(0xd8)](_0x9c2baf);});else{if(msg[_0xb7d64e(0xec)]==_0xb7d64e(0xd6))msg[_0xb7d64e(0xe8)]==!![]?(Toastify({'text':_0xb7d64e(0xeb),'duration':0xfa0,'backgroundColor':'green'})[_0xb7d64e(0xdd)](),localStorage['setItem']('username-brep',_0x51a4c8),localStorage[_0xb7d64e(0xd7)](_0xb7d64e(0xe6),_0xe525b9)):(Toastify({'text':'Lamento\x20mas\x20credenciais\x20estão\x20erradas!','backgroundColor':_0xb7d64e(0xe4),'duration':0xfa0})[_0xb7d64e(0xdd)](),(_0x32ea91!==null||_0x29fe23!==null)&&(localStorage[_0xb7d64e(0xdf)](_0xb7d64e(0xd2)),localStorage[_0xb7d64e(0xdf)]('password-brep')));else msg[_0xb7d64e(0xec)]==_0xb7d64e(0xd9)&&Toastify({'text':_0xb7d64e(0xda)+msg[_0xb7d64e(0xde)],'duration':0xbb8})[_0xb7d64e(0xdd)]();}}catch(_0x25871f){}};}_0x1e8b99();}()));
