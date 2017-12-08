function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function historyTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"components\u002Fchat-component\u002Fhistory\u002Fhistory.pug":"div.history\n    each dataItem in data\n        div.history__message-box\n            div.history__picture\n                img(\n                src=dataItem.picture\n                title='user pic'\n                )\n                span.history__time=dataItem.time\n            div.history__message\n                span.history__sender=dataItem.sender\n                p.history__text=dataItem.message"};
;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n\u003Cdiv class=\"history\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var dataItem = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n  \u003Cdiv class=\"history__message-box\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"history__picture\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", dataItem.picture, true, false)+" title=\"user pic\"") + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\u003Cspan class=\"history__time\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = dataItem.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"history__message\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\u003Cspan class=\"history__sender\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = dataItem.sender) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n      \u003Cp class=\"history__text\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = dataItem.message) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var dataItem = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n  \u003Cdiv class=\"history__message-box\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"history__picture\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", dataItem.picture, true, false)+" title=\"user pic\"") + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\u003Cspan class=\"history__time\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = dataItem.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"history__message\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\u003Cspan class=\"history__sender\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = dataItem.sender) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + "\n      \u003Cp class=\"history__text\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "components\u002Fchat-component\u002Fhistory\u002Fhistory.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = dataItem.message) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}