/*
ZeroTwo-MD V1.0 
 Coded By VihangaYT

Modified File : enhance.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/

const _0x3c2b05=_0x2157;(function(_0x6c013b,_0x4ea00d){const _0x5c6df1={_0x13bd0d:0x15d,_0x3245ac:0x142,_0x45ed06:0x13b,_0x5577b6:0x159,_0x4949de:0x12d},_0x238e86=_0x2157,_0xcc2b01=_0x6c013b();while(!![]){try{const _0x60a748=parseInt(_0x238e86(_0x5c6df1._0x13bd0d))/(0x26f6+0xff*-0x15+0x120a*-0x1)+parseInt(_0x238e86(0x148))/(-0xef0+0x2*0xf95+-0x81c*0x2)*(parseInt(_0x238e86(0x14c))/(-0x2c1*0x7+-0x247e+0x37c8))+-parseInt(_0x238e86(_0x5c6df1._0x3245ac))/(0x77f*-0x3+0xecd*0x1+0x7b4)+-parseInt(_0x238e86(_0x5c6df1._0x45ed06))/(-0x2130+0x1e48+0x2ed)+-parseInt(_0x238e86(_0x5c6df1._0x5577b6))/(-0x24fc+-0x1ded+-0x95*-0x73)+parseInt(_0x238e86(0x143))/(-0x14b7*-0x1+0x11cb+0x267b*-0x1)+-parseInt(_0x238e86(0x158))/(0x265*0x1+0x1*-0x922+0x6c5)*(-parseInt(_0x238e86(_0x5c6df1._0x4949de))/(-0x1*-0x48d+-0x59e*0x3+-0x1*-0xc56));if(_0x60a748===_0x4ea00d)break;else _0xcc2b01['push'](_0xcc2b01['shift']());}catch(_0x1862b8){_0xcc2b01['push'](_0xcc2b01['shift']());}}}(_0x5143,-0x1*0x5caa6+-0x34e70*-0x5+0x38d3e));const {cmd,commands}=require(_0x3c2b05(0x15b));let {img2url}=require(_0x3c2b05(0x161)+_0x3c2b05(0x167)+'\x69\x6d\x61\x67\x65\x2d\x75\x72\x6c');function _0x2157(_0x1fe8fb,_0x4c9974){const _0x5e75c1=_0x5143();return _0x2157=function(_0x5c3e85,_0x36de57){_0x5c3e85=_0x5c3e85-(-0x15*-0xbd+0xb0b+0x1*-0x1961);let _0x13eab1=_0x5e75c1[_0x5c3e85];return _0x13eab1;},_0x2157(_0x1fe8fb,_0x4c9974);}const {getRandom,fetchJson}=require('\x2e\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e'+_0x3c2b05(0x16b)),fs=require('\x66\x73'),config=require(_0x3c2b05(0x13e));var desct='';if(config[_0x3c2b05(0x166)]==='\x53\x49')desct=_0x3c2b05(0x132)+_0x3c2b05(0x14b)+_0x3c2b05(0x136)+_0x3c2b05(0x15e)+'\x20\u0dbb\u0dd6\u0db4\u0dba\u0d9a\u0dca\x20\u0db6\u0dc0'+'\u0da7\x20\u0db4\u0dbb\u0dd2\u0dc0\u0dbb\u0dca\u0dad\u0db1'+'\u0dba\x20\u0d9a\u0dbb\u0dba\u0dd2\x2e\x2e';else desct=_0x3c2b05(0x16d)+_0x3c2b05(0x16c)+'\x77\x20\x71\x75\x61\x6c\x69\x74\x79\x20'+_0x3c2b05(0x146)+'\x75\x61\x6c\x69\x74\x79\x20\x69\x6d\x61'+'\x67\x65\x2e\x2e';var imgmsg='';if(config[_0x3c2b05(0x166)]==='\x53\x49')imgmsg='\x2a\u0da1\u0dcf\u0dba\u0dcf\u0dbb\u0dd6\u0db4\u0dba\u0d9a'+_0x3c2b05(0x12f)+'\u0daf\u0dd9\u0db1\u0dca\u0db1\x20\x21\x2a';else imgmsg='\x2a\x52\x65\x70\x6c\x79\x20\x74\x6f\x20'+_0x3c2b05(0x169);var cantf='';function _0x5143(){const _0x409db6=['\x6a\x67\x52\x49\x47','\x70\x61\x74\x74\x65\x72\x6e','\u0dba\u0dd2\x2e\x20\u0db4\u0dc3\u0dd4\u0dc0\x20\u0db1','\x72\x65\x61\x63\x74','\x68\x61\x6e\x67\x61\x79\x74\x2e\x6d\x65','\x2e\x65\x6e\x68\x61\x6e\x63\x65\x20\x3c','\x20\x61\x67\x61\x69\x6e\x20\x6c\x61\x74','\x6d\x73\x67','\x46\x4f\x4f\x54\x45\x52','\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61','\x39\x32\x38\x41\x70\x63\x62\x4d\x4e','\x39\x35\x38\x32\x34\x32\x30\x56\x54\x7a\x44\x4d\x48','\x71\x75\x61\x6c\x69\x74\x79\x69\x6d\x61','\x2e\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64','\x74\x6f\x68\x64','\x31\x30\x34\x31\x35\x35\x55\x61\x41\x63\x5a\x63','\u0d9a\u0dca\x20\x71\x75\x61\x6c\x69\x74\x79','\x65\x72\x2e\x21\x2a','\x64\x65\x73\x63','\x40\x62\x6c\x61\x63\x6b\x61\x6d\x64\x61','\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65','\x61\x67\x65\x3e','\x73\x73\x61\x67\x65','\x74\x79\x70\x65','\x4c\x41\x4e\x47','\x2f\x74\x65\x6c\x65\x67\x72\x61\x6d\x2d','\x70\x72\x6f\x6d\x69\x73\x65\x73','\x61\x20\x70\x68\x6f\x74\x6f\x20\x21\x2a','\x6b\x77\x6b\x48\x50','\x63\x74\x69\x6f\x6e\x73','\x73\x20\x67\x69\x76\x65\x6e\x20\x6c\x6f','\x49\x74\x20\x63\x6f\x6e\x76\x65\x72\x74','\x75\x73\x65','\x66\x69\x6c\x65\x6e\x61\x6d\x65','\x38\x31\x30\x36\x33\x70\x43\x49\x59\x76\x49','\x73\x59\x64\x70\x70','\u0da7\x20\x6d\x65\x6e\x74\x69\x6f\x6e\x20','\x48\x70\x41\x72\x4d','\x71\x75\x61\x6c\x69\x74\x79\x20\x69\x6d','\u0d91\u0dba\x20\u0dbd\u0db6\u0dcf\x20\u0daf\u0dd3\x20','\x2f\x74\x6f\x6f\x6c\x73\x2f\x65\x6e\x68','\x66\x69\x6c\x65\x2d\x74\x79\x70\x65','\x20\x62\x75\x73\x79\x2e\x20\x54\x72\x79','\x61\x6c\x69\x74\x79\x20\u0dbb\u0dd6\u0db4\u0dba','\x2a\x53\x65\x72\x76\x65\x72\x20\u0d91\u0d9a','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x61\x6c\x69\x61\x73','\x76\x59\x4b\x65\x65','\x32\x38\x31\x36\x31\x36\x35\x6d\x59\x4c\x57\x41\x45','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x69\x6d\x67\x65\x6e\x68\x61\x6e\x63\x65','\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67','\u0dd0\u0dc0\u0dad\x20\u0d8b\u0dad\u0dca\u0dc3\u0dcf\u0dc4','\x71\x75\x6f\x74\x65\x64','\x64\x6f\x77\x6e\x6c\x6f\x61\x64','\x35\x36\x34\x33\x39\x36\x34\x4a\x6e\x74\x43\x61\x56','\x31\x32\x38\x31\x37\x31\x35\x34\x74\x53\x4a\x56\x4f\x55','\x65\x6e\x68\x61\x6e\x63\x65','\x76\x68\x59\x71\x6a','\x69\x6d\x61\x67\x65\x20\x74\x6f\x20\x71','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69','\x31\x34\x57\x51\x63\x55\x78\x48','\x6f\x44\x48\x41\x49','\x65\x78\x74','\u0d87\u0dad\u0dd2\x20\x6c\x6f\x77\x20\x71\x75','\x36\x35\x34\x38\x33\x37\x50\x65\x68\x67\x46\x62','\x71\x75\x61\x6c\x69\x74\x79'];_0x5143=function(){return _0x409db6;};return _0x5143();}if(config[_0x3c2b05(0x166)]==='\x53\x49')cantf=_0x3c2b05(0x137)+'\x20\u0d9a\u0dcf\u0dbb\u0dca\u0dba\u0db6\u0dc4\u0dd4\u0dbd'+_0x3c2b05(0x150)+_0x3c2b05(0x13f)+'\x20\u0d9a\u0dbb\u0db1\u0dca\u0db1\x2e\x20\x21\x2a';else cantf='\x2a\x53\x65\x72\x76\x65\x72\x20\x69\x73'+_0x3c2b05(0x135)+_0x3c2b05(0x154)+_0x3c2b05(0x15f);const _0x4cffb2={};_0x4cffb2[_0x3c2b05(0x14f)]=_0x3c2b05(0x144),_0x4cffb2[_0x3c2b05(0x151)]='\u2197\ufe0f',_0x4cffb2[_0x3c2b05(0x139)]=[_0x3c2b05(0x13d),_0x3c2b05(0x14d),_0x3c2b05(0x15a)+'\x67\x65',_0x3c2b05(0x15c)],_0x4cffb2[_0x3c2b05(0x160)]=desct,_0x4cffb2['\x63\x61\x74\x65\x67\x6f\x72\x79']='\x63\x6f\x6e\x76\x65\x72\x74',_0x4cffb2[_0x3c2b05(0x12b)]=_0x3c2b05(0x153)+'\x72\x65\x70\x6c\x79\x20\x6c\x6f\x77\x20'+_0x3c2b05(0x131)+_0x3c2b05(0x163),_0x4cffb2[_0x3c2b05(0x12c)]=__filename,cmd(_0x4cffb2,async(_0x56ce29,_0x3f1e2c,_0x3fe1bf,{from:_0x431e31,l:_0x1fd9dc,prefix:_0x25cc67,quoted:_0x55f1dc,body:_0x409c89,isCmd:_0x2f7417,command:_0x5bf5fa,args:_0x5853e9,q:_0x39470e,isGroup:_0x16c33d,sender:_0x323407,senderNumber:_0x164b35,botNumber2:_0x3c833f,botNumber:_0x114347,pushname:_0x3a8040,isMe:_0x5a53a0,isOwner:_0x389390,groupMetadata:_0x59515e,groupName:_0x12831b,participants:_0x3a3db5,groupAdmins:_0x58bbf3,isBotAdmins:_0x3521b7,isAdmins:_0x4a1f6f,reply:_0x100b64})=>{const _0x559e62={_0x1adde3:0x162,_0x4dd407:0x164,_0xef7314:0x157,_0x5090f8:0x134,_0x5d1448:0x14e,_0x337643:0x165,_0x24d735:0x140,_0x2236f4:0x165,_0x239b0d:0x130,_0x33948c:0x12e,_0x40d64d:0x149,_0x23b8c6:0x141,_0x4dbfae:0x168,_0x5ac248:0x13c,_0x565a6b:0x16a,_0xeeae57:0x13a,_0x3814f7:0x145},_0x385aa1={_0x194c4c:0x138,_0x45d399:0x147,_0x1e4264:0x152,_0x291c5f:0x133,_0x306987:0x156},_0x1e7f6c=_0x3c2b05,_0x10a85e={'\x76\x59\x4b\x65\x65':function(_0x525f5e,_0x46bc37){return _0x525f5e(_0x46bc37);},'\x73\x59\x64\x70\x70':function(_0x765e83,_0x302868){return _0x765e83===_0x302868;},'\x6a\x67\x52\x49\x47':_0x1e7f6c(_0x559e62._0x1adde3)+_0x1e7f6c(_0x559e62._0x4dd407),'\x48\x70\x41\x72\x4d':_0x1e7f6c(_0x559e62._0xef7314)+'\x67\x65','\x6f\x44\x48\x41\x49':_0x1e7f6c(_0x559e62._0x5090f8),'\x6b\x77\x6b\x48\x50':function(_0xad0010,_0x1b5da3){return _0xad0010+_0x1b5da3;},'\x76\x68\x59\x71\x6a':function(_0x368235,_0x17bd0a){return _0x368235(_0x17bd0a);}};try{const _0x2b760f=_0x3fe1bf['\x71\x75\x6f\x74\x65\x64']?_0x10a85e[_0x1e7f6c(0x12e)](_0x3fe1bf[_0x1e7f6c(0x140)]['\x74\x79\x70\x65'],_0x10a85e[_0x1e7f6c(_0x559e62._0x5d1448)]):![],_0x636d02=_0x3fe1bf[_0x1e7f6c(0x140)]?_0x10a85e[_0x1e7f6c(0x12e)](_0x3fe1bf[_0x1e7f6c(0x140)][_0x1e7f6c(_0x559e62._0x337643)],_0x10a85e[_0x1e7f6c(0x130)])||(_0x2b760f?_0x10a85e[_0x1e7f6c(0x12e)](_0x3fe1bf[_0x1e7f6c(_0x559e62._0x24d735)][_0x1e7f6c(0x155)][_0x1e7f6c(_0x559e62._0x2236f4)],_0x10a85e[_0x1e7f6c(_0x559e62._0x239b0d)]):![]):![];if(_0x10a85e[_0x1e7f6c(_0x559e62._0x33948c)](_0x3fe1bf[_0x1e7f6c(_0x559e62._0x2236f4)],_0x10a85e[_0x1e7f6c(0x130)])||_0x636d02){const _0xeb5a2a=require(_0x10a85e[_0x1e7f6c(_0x559e62._0x40d64d)]);var _0x227457=_0x10a85e['\x76\x59\x4b\x65\x65'](getRandom,'');let _0x528250=_0x636d02?await _0x3fe1bf[_0x1e7f6c(0x140)][_0x1e7f6c(0x141)](_0x227457):await _0x3fe1bf[_0x1e7f6c(_0x559e62._0x23b8c6)](_0x227457),_0x22bed=await _0xeb5a2a['\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72'](_0x528250);await fs[_0x1e7f6c(_0x559e62._0x4dbfae)][_0x1e7f6c(_0x559e62._0x5ac248)](_0x10a85e[_0x1e7f6c(0x16a)]('\x2e\x2f',_0x22bed[_0x1e7f6c(0x14a)]),_0x528250),img2url(_0x10a85e[_0x1e7f6c(_0x559e62._0x565a6b)]('\x2e\x2f',_0x22bed['\x65\x78\x74']))['\x74\x68\x65\x6e'](async _0x2b3dc3=>{const _0x2ac472=_0x1e7f6c,_0x52716c={};_0x52716c[_0x2ac472(0x140)]=_0x3f1e2c,await _0x56ce29[_0x2ac472(_0x385aa1._0x194c4c)+'\x65'](_0x431e31,{'\x69\x6d\x61\x67\x65':await _0x10a85e[_0x2ac472(0x13a)](getBuffer,_0x2ac472(_0x385aa1._0x45d399)+_0x2ac472(_0x385aa1._0x1e4264)+_0x2ac472(_0x385aa1._0x291c5f)+'\x61\x6e\x63\x65\x3f\x75\x72\x6c\x3d'+_0x2b3dc3),'\x63\x61\x70\x74\x69\x6f\x6e':config[_0x2ac472(_0x385aa1._0x306987)]},_0x52716c);});}else return _0x10a85e[_0x1e7f6c(_0x559e62._0xeeae57)](_0x100b64,imgmsg);}catch(_0x4e6395){_0x10a85e['\x76\x59\x4b\x65\x65'](_0x100b64,cantf),_0x10a85e[_0x1e7f6c(_0x559e62._0x3814f7)](_0x1fd9dc,_0x4e6395);}});

// Our Website: https://vihangayt.me