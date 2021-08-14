!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,(function(e,t){"use strict";try{(function(){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var o=function(e){function t(n,r,s){var o=e.call(this,r)||this;return o.code=n,o.customData=s,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,i.prototype.create),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),i=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},s=this.service+"/"+e,i=this.errors[e],c=i?a(i,r):"Error",u=this.serviceName+": "+c+" ("+s+").",l=new o(s,u,r);return l},e}();function a(e,t){return e.replace(c,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var c=/\{\$([^}]+)}/g;function u(e){return e&&e._delegate?e._delegate:e}var l,h=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}();!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(l||(l={}));const d="firebasestorage.googleapis.com";class p extends o{constructor(e,t){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function _(){return new p("unknown","An unknown error occurred, please check the error payload for server response.")}function g(){return new p("canceled","User canceled the upload/download.")}function m(){return new p("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function b(e){return new p("invalid-argument",e)}function w(){return new p("app-deleted","The Firebase app was deleted.")}function y(e,t){return new p("invalid-format","String does not match format '"+e+"': "+t)}function v(e){throw new p("internal-error","Internal error: "+e)}class R{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=l.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=l.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=l.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw v("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class k{createConnection(){return new R}}class T{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=T.makeFromUrl(e,t)}catch(t){return new T(e,"")}if(""===n.path)return n;throw new p("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===d?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<a.length;t++){const r=a[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new T(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new p("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function U(e){return"string"==typeof e||e instanceof String}function O(e){return C()&&e instanceof Blob}function C(){return"undefined"!=typeof Blob}function P(e,t,n,r){if(r<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw b(`Invalid value for '${e}'. Expected ${n} or less.`)}function S(e,t){const n=t.match(/^(\w+):\/\/.+/);let r=t;return null==(null==n?void 0:n[1])&&(r=`https://${t}`),`${r}/v0${e}`}function A(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}class I{constructor(e,t,n,r,s,o,i,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=i,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=this;function t(t,n){const r=e.resolve_,s=e.reject_,o=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(o,o.getResponseText());void 0!==t?r(t):r()}catch(e){s(e)}else if(null!==o){const t=_();t.serverResponse=o.getResponseText(),e.errorCallback_?s(e.errorCallback_(o,t)):s(t)}else if(n.canceled){s(e.appDelete_?w():g())}else{s(new p("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new E(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,o=!1,i=0;function a(){return 2===i}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function l(t){s=setTimeout((()=>{s=null,e(h,a())}),t)}function h(e,...t){if(c)return;if(e)return void u.call(null,e,...t);if(a()||o)return void u.call(null,e,...t);let n;r<64&&(r*=2),1===i?(i=2,n=0):n=1e3*(r+Math.random()),l(n)}let d=!1;function p(e){d||(d=!0,c||(null!==s?(e||(i=2),clearTimeout(s),l(0)):e||(i=1)))}return l(0),setTimeout((()=>{o=!0,p(!0)}),n),p}((function(t,n){if(n)return void t(!1,new E(!1,null,!0));const r=e.pool_.createConnection();function s(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(s),r.send(e.url_,e.method_,e.body_,e.headers_).then((()=>{null!==e.progressCallback_&&r.removeUploadProgressListener(s),e.pendingConnection_=null;const n=r.getErrorCode()===l.NO_ERROR,o=r.getStatus();if(!n||e.isRetryStatusCode_(o)){const e=r.getErrorCode()===l.ABORT;return void t(!1,new E(!1,null,e))}const i=-1!==e.successCodes_.indexOf(o);t(!0,new E(i,r))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class E{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function q(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function M(...e){const t=q();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(C())return new Blob(e);throw new p("unsupported-environment","This browser doesn't seem to support creating Blobs")}const L="raw",B="base64",F="base64url",N="data_url";class z{constructor(e,t){this.data=e,this.contentType=t||null}}function D(e,t){switch(e){case L:return new z(j(t));case B:case F:return new z(H(e,t));case N:return new z(function(e){const t=new $(e);return t.base64?H(B,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw y(N,"Malformed data URL.")}return j(t)}(t.rest)}(t),new $(t).contentType)}throw _()}function j(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function H(e,t){switch(e){case B:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw y(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case F:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw y(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw y(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class ${constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw y(N,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class G{constructor(e,t){let n=0,r="";O(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(O(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new G(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new G(n,!0)}}static getBlob(...e){if(C()){const t=e.map((e=>e instanceof G?e.data_:e));return new G(M.apply(null,t))}{const t=e.map((e=>U(e)?D(L,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new G(r,!0)}}uploadData(){return this.data_}}function X(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}function W(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function V(e,t){return t}class K{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||V}}let Z=null;function Y(){if(Z)return Z;const e=[];e.push(new K("bucket")),e.push(new K("generation")),e.push(new K("metageneration")),e.push(new K("name","fullPath",!0));const t=new K("name");t.xform=function(e,t){return function(e){return!U(e)||e.length<2?e:W(e)}(t)},e.push(t);const n=new K("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new K("timeCreated")),e.push(new K("updated")),e.push(new K("md5Hash",null,!0)),e.push(new K("cacheControl",null,!0)),e.push(new K("contentDisposition",null,!0)),e.push(new K("contentEncoding",null,!0)),e.push(new K("contentLanguage",null,!0)),e.push(new K("contentType",null,!0)),e.push(new K("metadata","customMetadata",!0)),Z=e,Z}function J(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new T(n,r);return t._makeStorageReference(s)}})}(r,e),r}function Q(e,t,n){const r=X(t);if(null===r)return null;return J(e,r,n)}function ee(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}function te(e,t,n){const r=X(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const s of n.prefixes){const n=s.replace(/\/$/,""),o=e._makeStorageReference(new T(t,n));r.prefixes.push(o)}if(n.items)for(const s of n.items){const n=e._makeStorageReference(new T(t,s.name));r.items.push(n)}return r}(e,t,r)}class ne{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function re(e){if(!e)throw _()}function se(e,t){return function(n,r){const s=Q(e,r,t);return re(null!==s),s}}function oe(e,t){return function(n,r){const s=Q(e,r,t);return re(null!==s),function(e,t,n){const r=X(t);if(null===r)return null;if(!U(r.downloadTokens))return null;const s=r.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const r=e.bucket,s=e.fullPath;return S("/b/"+o(r)+"/o/"+o(s),n)+A({alt:"media",token:t})}))[0]}(s,r,e.host)}}function ie(e){return function(t,n){let r;var s,o;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new p("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new p("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new p("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new p("unauthorized","User does not have permission to access '"+s+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ae(e){const t=ie(e);return function(n,r){let s=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,s=new p("object-not-found","Object '"+o+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function ce(e,t,n){const r=S(t.fullServerUrl(),e.host),s=e.maxOperationRetryTime,o=new ne(r,"GET",se(e,n),s);return o.errorHandler=ae(t),o}function ue(e,t,n,r,s){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),s&&(o.maxResults=s);const i=S(t.bucketOnlyServerUrl(),e.host),a=e.maxOperationRetryTime,c=new ne(i,"GET",function(e,t){return function(n,r){const s=te(e,t,r);return re(null!==s),s}}(e,t.bucket),a);return c.urlParams=o,c.errorHandler=ie(t),c}function le(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class he{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function de(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){re(!1)}return re(!!n&&-1!==(t||["active"]).indexOf(n)),n}const pe=262144;function fe(e,t,n,r,s,o,i,a){const c=new he(0,0);if(i?(c.current=i.current,c.total=i.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw new p("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let l=u;s>0&&(l=Math.min(l,s));const h=c.current,d=h+l,f={"X-Goog-Upload-Command":l===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},_=r.slice(h,d);if(null===_)throw m();const g=t.maxUploadRetryTime,b=new ne(n,"POST",(function(e,n){const s=de(e,["active","final"]),i=c.current+l,a=r.size();let u;return u="final"===s?se(t,o)(e,n):null,new he(i,a,"final"===s,u)}),g);return b.headers=f,b.body=_.uploadData(),b.progressCallback=a||null,b.errorHandler=ie(e),b}const _e="running",ge="paused",me="success",be="canceled",we="error";function ye(e){switch(e){case"running":case"pausing":case"canceling":return _e;case"paused":return ge;case"success":return me;case"canceled":return be;case"error":default:return we}}class ve{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=t,this.complete=n;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function Re(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class ke{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Y(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i=le(t,r,s),a={name:i.fullPath},c=S(o,e.host),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},l=ee(i,n),h=e.maxUploadRetryTime,d=new ne(c,"POST",(function(e){let t;de(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){re(!1)}return re(U(t)),t}),h);return d.urlParams=a,d.headers=u,d.body=l,d.errorHandler=ie(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const s=e.maxUploadRetryTime,o=new ne(n,"POST",(function(e){const t=de(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){re(!1)}n||re(!1);const s=Number(n);return re(!isNaN(s)),new he(s,r.size(),"final"===t)}),s);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=ie(t),o}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,t,n);this._request=s,s.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=pe*this._chunkMultiplier,t=new he(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,s)=>{let o;try{o=fe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const i=this._ref.storage._makeRequest(o,r,s);this._request=i,i.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){pe*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ce(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const c=le(t,r,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ee(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=G.getBlob(u,r,l);if(null===h)throw m();const d={name:c.fullPath},p=S(o,e.host),f=e.maxUploadRetryTime,_=new ne(p,"POST",se(e,n),f);return _.urlParams=d,_.headers=i,_.body=h.uploadData(),_.errorHandler=ie(t),_}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=g(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=ye(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const s=new ve(t,n,r);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ye(this._state)){case me:Re(this._resolve.bind(null,this.snapshot))();break;case be:case we:Re(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ye(this._state)){case _e:case ge:e.next&&Re(e.next.bind(e,this.snapshot))();break;case me:e.complete&&Re(e.complete.bind(e))();break;case be:case we:e.error&&Re(e.error.bind(e,this._error))();break;default:e.error&&Re(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Te{constructor(e,t){this._service=e,this._location=t instanceof T?t:T.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Te(e,t)}get root(){const e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new T(this._location.bucket,e);return new Te(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new p("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function xe(e){const t={prefixes:[],items:[]};return Ue(e,t).then((()=>t))}async function Ue(e,t,n){const r={pageToken:n},s=await Oe(e,r);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await Ue(e,t,s.nextPageToken)}async function Oe(e,t){null!=t&&"number"==typeof t.maxResults&&P("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ue(e.storage,e._location,"/",n.pageToken,n.maxResults);return(await e.storage.makeRequestWithTokens(r)).getPromise()}async function Ce(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const s=S(t.fullServerUrl(),e.host),o=ee(n,r),i=e.maxOperationRetryTime,a=new ne(s,"PATCH",se(e,r),i);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=o,a.errorHandler=ae(t),a}(e.storage,e._location,t,Y());return(await e.storage.makeRequestWithTokens(n)).getPromise()}async function Pe(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=S(t.fullServerUrl(),e.host),s=e.maxOperationRetryTime,o=new ne(r,"GET",oe(e,n),s);return o.errorHandler=ae(t),o}(e.storage,e._location,Y());return(await e.storage.makeRequestWithTokens(t)).getPromise().then((e=>{if(null===e)throw new p("no-download-url","The given file does not have any download URLs.");return e}))}async function Se(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=S(t.fullServerUrl(),e.host),r=e.maxOperationRetryTime,s=new ne(n,"DELETE",(function(e,t){}),r);return s.successCodes=[200,204],s.errorHandler=ae(t),s}(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function Ae(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new T(e._location.bucket,n);return new Te(e.storage,r)}function Ie(e,t){if(e instanceof Me){const n=e;if(null==n._bucket)throw new p("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new Te(n,n._bucket);return null!=t?Ie(r,t):r}if(void 0!==t){if(t.includes(".."))throw b('`path` param cannot contain ".."');return Ae(e,t)}return e}function Ee(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Me)return new Te(e,t);throw b("To use ref(service, url), the first argument must be a Storage instance.")}return Ie(e,t)}function qe(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:T.makeFromBucketSpec(n,e)}class Me{constructor(e,t,n,r,s,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=d,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?T.makeFromBucketSpec(s,this._host):qe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=qe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){P("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){P("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear(),Promise.resolve()}_makeStorageReference(e){return new Te(this,e)}_makeRequest(e,t,n){if(this._deleted)return new x(w());{const r=function(e,t,n,r,s,o){const i=A(e.urlParams),a=e.url+i,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new I(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}function Le(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new ke(e,new G(t),n)}(e=u(e),t,n)}function Be(e){return async function(e){e._throwIfRoot("getMetadata");const t=ce(e.storage,e._location,Y());return(await e.storage.makeRequestWithTokens(t)).getPromise()}(e=u(e))}function Fe(e,t){return Ee(e=u(e),t)}function Ne(e,{instanceIdentifier:n}){const r=e.getProvider("app-exp").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Me(r,s,o,new k,n,t.SDK_VERSION)}t._registerComponent(new h("storage-exp",Ne,"PUBLIC").setMultipleInstances(!0)),t.registerVersion("@firebase/storage","0.0.900-exp.6ef484a04");class ze extends o{constructor(e,t){super(De(e),`Firebase Storage: ${t} (${De(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}_codeEquals(e){return De(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function De(e){return"storage/"+e}function je(e){return new ze("invalid-argument",e)}function He(e,t){return new ze("invalid-format","String does not match format '"+e+"': "+t)}const $e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ge{constructor(e,t){this.data=e,this.contentType=t||null}}function Xe(e,t){switch(e){case $e.RAW:return new Ge(We(t));case $e.BASE64:case $e.BASE64URL:return new Ge(Ve(e,t));case $e.DATA_URL:return new Ge(function(e){const t=new Ke(e);return t.base64?Ve($e.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw He($e.DATA_URL,"Malformed data URL.")}return We(t)}(t.rest)}(t),new Ke(t).contentType)}throw new ze("unknown","An unknown error occurred, please check the error payload for server response.")}function We(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Ve(e,t){switch(e){case $e.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw He(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case $e.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw He(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw He(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Ke{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw He($e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}const Ze={STATE_CHANGED:"state_changed"},Ye={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};class Je{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}class Qe{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Je(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Je(t,this,this._ref))}),t)}on(e,t,n,r){let s;return t&&(s="function"==typeof t?e=>t(new Je(e,this,this._ref)):{next:t.next?e=>t.next(new Je(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,s,n||void 0,r||void 0)}}class et{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new tt(e,this._service)))}get items(){return this._delegate.items.map((e=>new tt(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}class tt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=function(e,t){return Ae(e,t)}(this._delegate,e);return new tt(t,this.storage)}get root(){return new tt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new tt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Qe(Le(this._delegate,e,t),this)}putString(e,t=L,n){this._throwIfRoot("putString");const r=Xe(t,e),s=Object.assign({},n);return null==s.contentType&&null!=r.contentType&&(s.contentType=r.contentType),new Qe(new ke(this._delegate,new G(r.data,!0),s),this)}listAll(){return function(e){return xe(e=u(e))}(this._delegate).then((e=>new et(e,this.storage)))}list(e){return function(e,t){return Oe(e=u(e),t)}(this._delegate,e||void 0).then((e=>new et(e,this.storage)))}getMetadata(){return Be(this._delegate)}updateMetadata(e){return function(e,t){return Ce(e=u(e),t)}(this._delegate,e)}getDownloadURL(){return function(e){return Pe(e=u(e))}(this._delegate)}delete(){return this._throwIfRoot("delete"),function(e){return Se(e=u(e))}(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw function(e){return new ze("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function nt(e){return/^[A-Za-z]+:\/\//.test(e)}class rt{constructor(e,t){this.app=e,this._delegate=t,this.INTERNAL={delete:()=>this._delegate._delete()}}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(nt(e))throw je("ref() expected a child path but got a URL, use refFromURL instead.");return new tt(Fe(this._delegate,e),this)}refFromURL(e){if(!nt(e))throw je("refFromURL() expected a full URL but got a child path, use ref() instead.");try{T.makeFromUrl(e,this._delegate.host)}catch(e){throw je("refFromUrl() expected a valid full URL but got an invalid one.")}return new tt(Fe(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t){!function(e,t,n){e.host=`http://${t}:${n}`}(this._delegate,e,t)}}function st(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage-exp").getImmediate({identifier:t});return new rt(n,r)}!function(e){const t={TaskState:Ye,TaskEvent:Ze,StringFormat:$e,Storage:rt,Reference:tt};e.INTERNAL.registerComponent(new h("storage",st,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.0.900-exp.6ef484a04")}(r.default)}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-storage-compat.js - be sure to load firebase-app.js first.")}}));
//# sourceMappingURL=firebase-storage-compat.js.map
