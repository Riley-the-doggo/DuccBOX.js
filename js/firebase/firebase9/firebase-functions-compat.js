!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,(function(e,t){"use strict";try{(function(){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var o=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,s.prototype.create),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),s=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],c=s?a(s,r):"Error",u=this.serviceName+": "+c+" ("+i+").",l=new o(i,u,r);return l},e}();function a(e,t){return e.replace(c,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var c=/\{\$([^}]+)}/g;function u(e){return e&&e._delegate?e._delegate:e}var l=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}();function p(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function f(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map((e=>f(e)));if("function"==typeof e||"object"==typeof e)return p(e,(e=>f(e)));throw new Error("Data cannot be encoded in JSON: "+e)}function h(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((e=>h(e))):"function"==typeof e||"object"==typeof e?p(e,(e=>h(e))):e}const d="functions-exp",g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends o{constructor(e,t,n){super(`functions-exp/${e}`,t||""),this.details=n}}class y{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((e=>this.auth=e),(()=>{})),this.messaging||t.get().then((e=>this.messaging=e),(()=>{})),this.appCheck||n.get().then((e=>this.appCheck=e),(()=>{}))}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(){if(this.appCheck){return(await this.appCheck.getToken()).token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}const w="us-central1";function b(e){return new Promise(((t,n)=>{setTimeout((()=>{n(new m("deadline-exceeded","deadline-exceeded"))}),e)}))}class E{constructor(e,t,n,r,i="us-central1",o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new y(t,n,r),this.cancelAllRequests=new Promise((e=>{this.deleteService=()=>Promise.resolve(e())}));try{const e=new URL(i);this.customDomain=e.origin,this.region=w}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function v(e,t,n){return r=>async function(e,t,n,r){const i=e._url(t),o={data:n=f(n)},s={},a=await e.contextProvider.getContext();a.authToken&&(s.Authorization="Bearer "+a.authToken);a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken);null!==a.appCheckToken&&(s["X-Firebase-AppCheck"]=a.appCheckToken);const c=r.timeout||7e4,u=await Promise.race([I(i,o,s,e.fetchImpl),b(c),e.cancelAllRequests]);if(!u)throw new m("cancelled","Firebase Functions instance was deleted.");const l=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!g[t])return new m("internal","internal");r=g[t],i=t}const o=e.message;"string"==typeof o&&(i=o),n=e.details,void 0!==n&&(n=h(n))}}catch(e){}return"ok"===r?null:new m(r,i,n)}(u.status,u.json);if(l)throw l;if(!u.json)throw new m("internal","Response is not valid JSON object.");let p=u.json.data;void 0===p&&(p=u.json.result);if(void 0===p)throw new m("internal","Response is missing data field.");return{data:h(p)}}(e,t,r,n||{})}async function I(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let o=null;try{o=await i.json()}catch(e){}return{status:i.status,json:o}}function T(e,t,n){!function(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}(u(e),t,n)}var k;k=fetch.bind(self),t._registerComponent(new l(d,((e,{instanceIdentifier:t})=>{const n=e.getProvider("app-exp").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging"),o=e.getProvider("app-check-internal");return new E(n,r,i,o,t,k)}),"PUBLIC").setMultipleInstances(!0)),t.registerVersion("@firebase/functions-exp","0.0.900-exp.6ef484a04");class N{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return function(e,t,n){return v(u(e),t,n)}(this._delegate,e,t)}useFunctionsEmulator(e){const t=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(null==t)throw new o("functions","No origin provided to useFunctionsEmulator()");if(null==t[2])throw new o("functions","Port missing in origin provided to useFunctionsEmulator()");return T(this._delegate,t[1],Number(t[2]))}useEmulator(e,t){return T(this._delegate,e,t)}}const A=(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("functions-exp").getImmediate({identifier:null!=t?t:"us-central1"});return new N(n,r)};!function(){const e={Functions:N};r.default.INTERNAL.registerComponent(new l("functions-compat",A,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}(),r.default.registerVersion("@firebase/functions-compat","0.0.900-exp.6ef484a04")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-functions-compat.js - be sure to load firebase-app.js first.")}}));
//# sourceMappingURL=firebase-functions-compat.js.map
