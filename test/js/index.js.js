webpackJsonp([0],{0:function(e,n,t){"use strict";var o=t(1),r=t(4),i=t(5),s=t(11),u=t(13).observ,c={"/home":{load:t(37)},"/user":{load:t(39)},"/train":{load:t(41)}},a=function(e){return Promise.resolve(e.load(u)).then(function(){i.view.set(e.render),s("")})},l=function(e){var n=c[e];return i.view.set(null),s.wait(),n?(console.log(n),void n.load().then(a)):i.atom.set("/home")};i.atom(l),c[i.atom()]?l(i.atom()):i.atom.set("/home"),e.exports=o.toArray(c,function(e,n){return{path:n,label:r.capitalize(n.slice(1))}})},11:function(e,n,t){"use strict";var o=t(9),r=t(4),i=t(12),s=function(e){return function(n){e||(e=o.body.style),e.cursor=n}}(o&&o.body&&o.body.style);e.exports=i(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","e-resize","n-resize","ne-resize","nw-resize","s-resize","se-resize","sw-resize","w-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","col-resize","row-resize","all-scroll","zoom-in","zoom-out","grab","grabbing"],function(e,n){return e[r.toCamel(n)]=function(){return s(n)}},s)},37:function(e,n,t){"use strict";e.exports=function(){return new Promise(function(e){t.e(1,function(n){e(t(38))})})}},39:function(e,n,t){"use strict";e.exports=function(){return new Promise(function(e){t.e(2,function(n){e(t(40))})})}},41:function(e,n,t){"use strict";e.exports=function(){return new Promise(function(e){t.e(3,function(n){e(t(42))})})}}});