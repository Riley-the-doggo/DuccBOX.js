!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).firebase,t.firebase.INTERNAL.modularAPIs)}(this,(function(t,e){"use strict";try{(function(){function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function s(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}var o=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,a.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),a=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],a=s?c(s,r):"Error",u=this.serviceName+": "+a+" ("+i+").",l=new o(i,u,r);return l},t}();function c(t,e){return t.replace(u,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var u=/\{\$([^}]+)}/g;function l(t,e,n){void 0===e&&(e=1e3),void 0===n&&(n=2);var r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}function f(t){return t&&t._delegate?t._delegate:t}var g,h,p=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}();!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(h||(h={}));var d={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},m=h.INFO,w=((g={})[h.DEBUG]="log",g[h.VERBOSE]="log",g[h.INFO]="info",g[h.WARN]="warn",g[h.ERROR]="error",g),y=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),o=w[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,s(["["+i+"]  "+t.name+":"],n))}},_=function(){function t(t){this.name=t,this._logLevel=m,this._logHandler=y,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in h))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?d[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,h.DEBUG],t)),this._logHandler.apply(this,s([this,h.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,h.VERBOSE],t)),this._logHandler.apply(this,s([this,h.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,h.INFO],t)),this._logHandler.apply(this,s([this,h.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,h.WARN],t)),this._logHandler.apply(this,s([this,h.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,s([this,h.ERROR],t)),this._logHandler.apply(this,s([this,h.ERROR],t))},t}();function v(t){return Array.prototype.slice.call(t)}function b(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function S(t,e,n){var r,i=new Promise((function(i,s){b(r=t[e].apply(t,n)).then(i,s)}));return i.request=r,i}function C(t,e,n){var r=S(t,e,n);return r.then((function(t){if(t)return new O(t,r.request)}))}function E(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function I(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return S(this[e],r,arguments)})}))}function T(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function P(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return C(this[e],r,arguments)})}))}function L(t){this._index=t}function O(t,e){this._cursor=t,this._request=e}function M(t){this._store=t}function F(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function j(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new F(n)}function k(t){this._db=t}E(L,"_index",["name","keyPath","multiEntry","unique"]),I(L,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),P(L,"_index",IDBIndex,["openCursor","openKeyCursor"]),E(O,"_cursor",["direction","key","primaryKey","value"]),I(O,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(O.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,n),b(e._request).then((function(t){if(t)return new O(t,e._request)}))}))})})),M.prototype.createIndex=function(){return new L(this._store.createIndex.apply(this._store,arguments))},M.prototype.index=function(){return new L(this._store.index.apply(this._store,arguments))},E(M,"_store",["name","keyPath","indexNames","autoIncrement"]),I(M,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),P(M,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),T(M,"_store",IDBObjectStore,["deleteIndex"]),F.prototype.objectStore=function(){return new M(this._tx.objectStore.apply(this._tx,arguments))},E(F,"_tx",["objectStoreNames","mode"]),T(F,"_tx",IDBTransaction,["abort"]),j.prototype.createObjectStore=function(){return new M(this._db.createObjectStore.apply(this._db,arguments))},E(j,"_db",["name","version","objectStoreNames"]),T(j,"_db",IDBDatabase,["deleteObjectStore","close"]),k.prototype.transaction=function(){return new F(this._db.transaction.apply(this._db,arguments))},E(k,"_db",["name","version","objectStoreNames"]),T(k,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[M,L].forEach((function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=v(arguments),n=e[e.length-1],r=this._store||this._index,i=r[t].apply(r,e.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[L,M].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})}));const A="0.0.900-exp.6ef484a04",N=1e4,D=`w:${A}`,R="FIS_v2",x=36e5,B=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function q(t){return t instanceof o&&t.code.includes("request-failed")}function $({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function H(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function K(t,e){const n=(await e.json()).error;return B.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function V({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function U(t,{refreshToken:e}){const n=V(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}(e)),n}async function z(t){const e=await t();return e.status>=500&&e.status<600?t():e}function G(t){return new Promise((e=>{setTimeout(e,t)}))}const W=/^[cdef][\w-]{21}$/;function J(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return W.test(e)?e:""}catch(t){return""}}function Y(t){return`${t.appName}!${t.appId}`}const Z=new Map;function Q(t,e){const n=Y(t);X(n,e),function(t,e){const n=function(){!tt&&"BroadcastChannel"in self&&(tt=new BroadcastChannel("[Firebase] FID Change"),tt.onmessage=t=>{X(t.data.key,t.data.fid)});return tt}();n&&n.postMessage({key:t,fid:e});0===Z.size&&tt&&(tt.close(),tt=null)}(n,e)}function X(t,e){const n=Z.get(t);if(n)for(const t of n)t(e)}let tt=null;const et="firebase-installations-store";let nt=null;function rt(){return nt||(nt=function(t,e,n){var r=S(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(t){n&&n(new j(i.result,t.oldVersion,i.transaction))}),r.then((function(t){return new k(t)}))}("firebase-installations-database",1,(t=>{switch(t.oldVersion){case 0:t.createObjectStore(et)}}))),nt}async function it(t,e){const n=Y(t),r=(await rt()).transaction(et,"readwrite"),i=r.objectStore(et),s=await i.get(n);return await i.put(e,n),await r.complete,s&&s.fid===e.fid||Q(t,e.fid),e}async function st(t){const e=Y(t),n=(await rt()).transaction(et,"readwrite");await n.objectStore(et).delete(e),await n.complete}async function ot(t,e){const n=Y(t),r=(await rt()).transaction(et,"readwrite"),i=r.objectStore(et),s=await i.get(n),o=e(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||Q(t,o.fid),o}async function at(t){let e;const n=await ot(t,(n=>{const r=function(t){return lt(t||{fid:J(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(B.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:async function(t,e){try{return it(t,await async function(t,{fid:e}){const n=$(t),r=V(t),i={fid:e,authVersion:R,appId:t.appId,sdkVersion:D},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await z((()=>fetch(n,s)));if(o.ok){const t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:H(t.authToken)}}throw await K("Create Installation",o)}(t,e))}catch(n){throw q(n)&&409===n.customData.serverCode?await st(t):await it(t,{fid:e.fid,registrationStatus:0}),n}}(t,n)}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ct(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function ct(t){let e=await ut(t);for(;1===e.registrationStatus;)await G(100),e=await ut(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await at(t);return n||e}return e}function ut(t){return ot(t,(t=>{if(!t)throw B.create("installation-not-found");return lt(t)}))}function lt(t){return 1===(e=t).registrationStatus&&e.registrationTime+N<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}async function ft({appConfig:t,platformLoggerProvider:e},n){const r=function(t,{fid:e}){return`${$(t)}/${e}/authTokens:generate`}(t,n),i=U(t,n),s=e.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:D}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await z((()=>fetch(r,a)));if(c.ok){return H(await c.json())}throw await K("Generate Auth Token",c)}async function gt(t,e=!1){let n;const r=await ot(t.appConfig,(r=>{if(!pt(r))throw B.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await ht(t.appConfig);for(;1===n.authToken.requestStatus;)await G(100),n=await ht(t.appConfig);const r=n.authToken;return 0===r.requestStatus?gt(t,e):r}(t,e),r;{if(!navigator.onLine)throw B.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await ft(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await it(t.appConfig,r),n}catch(n){if(!q(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await it(t.appConfig,n)}else await st(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function ht(t){return ot(t,(t=>{if(!pt(t))throw B.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+N<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n}))}function pt(t){return void 0!==t&&2===t.registrationStatus}async function dt(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await at(t);e&&await e}(n.appConfig);return(await gt(n,e)).token}function mt(t){return B.create("missing-app-config-values",{valueName:t})}const wt="installations-exp",yt=t=>{const n=t.getProvider("app-exp").getImmediate();return{app:n,appConfig:function(t){if(!t||!t.options)throw mt("App Configuration");if(!t.name)throw mt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(n),platformLoggerProvider:e._getProvider(n,"platform-logger"),_delete:()=>Promise.resolve()}},_t=t=>{const n=t.getProvider("app-exp").getImmediate(),r=e._getProvider(n,wt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await at(e.appConfig);return r?r.catch(console.error):gt(e).catch(console.error),n.fid}(r),getToken:t=>dt(r,t)}};e._registerComponent(new p(wt,yt,"PUBLIC")),e._registerComponent(new p("installations-exp-internal",_t,"PRIVATE")),e.registerVersion("@firebase/installations-exp",A);const vt="@firebase/remote-config-exp";class bt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}const St=new a("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}."});const Ct=["1","true","t","yes","y","on"];class Et{constructor(t,e=""){this._source=t,this._value=e}asString(){return this._value}asBoolean(){return"static"!==this._source&&Ct.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let t=Number(this._value);return isNaN(t)&&(t=0),t}getSource(){return this._source}}async function It(t){const e=f(t),[n,r]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!!(n&&n.config&&n.eTag&&n.eTag!==r)&&(await Promise.all([e._storageCache.setActiveConfig(n.config),e._storage.setActiveConfigEtag(n.eTag)]),!0)}function Tt(t){const e=f(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then((()=>{e._isInitializationComplete=!0}))),e._initializePromise}async function Pt(t){const e=f(t),n=new bt;setTimeout((async()=>{n.abort()}),e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:n}),await e._storageCache.setLastFetchStatus("success")}catch(t){const n=function(t,e){return t instanceof o&&-1!==t.code.indexOf(e)}(t,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(n),t}}function Lt(t){const e=f(t);return function(t={},e={}){return Object.keys(Object.assign(Object.assign({},t),e))}(e._storageCache.getActiveConfig(),e.defaultConfig).reduce(((e,n)=>(e[n]=Ot(t,n),e)),{})}function Ot(t,e){const n=f(t);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const r=n._storageCache.getActiveConfig();return r&&void 0!==r[e]?new Et("remote",r[e]):n.defaultConfig&&void 0!==n.defaultConfig[e]?new Et("default",String(n.defaultConfig[e])):(n._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new Et("static"))}class Mt{constructor(t,e,n,r){this.client=t,this.storage=e,this.storageCache=n,this.logger=r}isCachedDataFresh(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const n=Date.now()-e,r=n<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${r}.`),r}async fetch(t){const[e,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(t.cacheMaxAgeMillis,e))return n;t.eTag=n&&n.eTag;const r=await this.client.fetch(t),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===r.status&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}function Ft(t=navigator){return t.languages&&t.languages[0]||t.language}class jt{constructor(t,e,n,r,i,s){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=s}async fetch(t){const[e,n]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),r=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,i={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},s={sdk_version:this.sdkVersion,app_instance_id:e,app_instance_id_token:n,app_id:this.appId,language_code:Ft()},o={method:"POST",headers:i,body:JSON.stringify(s)},a=fetch(r,o),c=new Promise(((e,n)=>{t.signal.addEventListener((()=>{const t=new Error("The operation was aborted.");t.name="AbortError",n(t)}))}));let u;try{await Promise.race([a,c]),u=await a}catch(t){let e="fetch-client-network";throw"AbortError"===t.name&&(e="fetch-timeout"),St.create(e,{originalErrorMessage:t.message})}let l=u.status;const f=u.headers.get("ETag")||void 0;let g,h;if(200===u.status){let t;try{t=await u.json()}catch(t){throw St.create("fetch-client-parse",{originalErrorMessage:t.message})}g=t.entries,h=t.state}if("INSTANCE_STATE_UNSPECIFIED"===h?l=500:"NO_CHANGE"===h?l=304:"NO_TEMPLATE"!==h&&"EMPTY_CONFIG"!==h||(g={}),304!==l&&200!==l)throw St.create("fetch-status",{httpStatus:l});return{status:l,eTag:f,config:g}}}class kt{constructor(t,e){this.client=t,this.storage=e}async fetch(t){const e=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,e)}async attemptFetch(t,{throttleEndTimeMillis:e,backoffCount:n}){await function(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(St.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(t.signal,e);try{const e=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),e}catch(e){if(!function(t){if(!(t instanceof o&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e))throw e;const r={throttleEndTimeMillis:Date.now()+l(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(r),this.attemptFetch(t,r)}}}class At{constructor(t,e,n,r,i){this.app=t,this._client=e,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}function Nt(t,e){const n=t.target.error||void 0;return St.create(e,{originalErrorMessage:n&&n.message})}const Dt="app_namespace_store";class Rt{constructor(t,e,n,r=function(){return new Promise(((t,e)=>{const n=indexedDB.open("firebase_remote_config",1);n.onerror=t=>{e(Nt(t,"storage-open"))},n.onsuccess=e=>{t(e.target.result)},n.onupgradeneeded=t=>{const e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(Dt,{keyPath:"compositeKey"})}}}))}()){this.appId=t,this.appName=e,this.namespace=n,this.openDbPromise=r}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(t){const e=await this.openDbPromise;return new Promise(((n,r)=>{const i=e.transaction([Dt],"readonly").objectStore(Dt),s=this.createCompositeKey(t);try{const t=i.get(s);t.onerror=t=>{r(Nt(t,"storage-get"))},t.onsuccess=t=>{const e=t.target.result;n(e?e.value:void 0)}}catch(t){r(St.create("storage-get",{originalErrorMessage:t&&t.message}))}}))}async set(t,e){const n=await this.openDbPromise;return new Promise(((r,i)=>{const s=n.transaction([Dt],"readwrite").objectStore(Dt),o=this.createCompositeKey(t);try{const t=s.put({compositeKey:o,value:e});t.onerror=t=>{i(Nt(t,"storage-set"))},t.onsuccess=()=>{r()}}catch(t){i(St.create("storage-set",{originalErrorMessage:t&&t.message}))}}))}async delete(t){const e=await this.openDbPromise;return new Promise(((n,r)=>{const i=e.transaction([Dt],"readwrite").objectStore(Dt),s=this.createCompositeKey(t);try{const t=i.delete(s);t.onerror=t=>{r(Nt(t,"storage-delete"))},t.onsuccess=()=>{n()}}catch(t){r(St.create("storage-delete",{originalErrorMessage:t&&t.message}))}}))}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}class xt{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),r=await t;r&&(this.lastFetchStatus=r);const i=await e;i&&(this.lastSuccessfulFetchTimestampMillis=i);const s=await n;s&&(this.activeConfig=s)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}}e._registerComponent(new p("remote-config-exp",(function(t,{instanceIdentifier:n}){const r=t.getProvider("app-exp").getImmediate(),i=t.getProvider("installations-exp-internal").getImmediate();if("undefined"==typeof window)throw St.create("registration-window");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw St.create("registration-project-id");if(!o)throw St.create("registration-api-key");if(!a)throw St.create("registration-app-id");n=n||"firebase";const c=new Rt(a,r.name,n),u=new xt(c),l=new _(vt);l.logLevel=h.ERROR;const f=new jt(i,e.SDK_VERSION,n,s,o,a),g=new kt(f,c),p=new Mt(g,c,u,l),d=new At(r,p,u,c,l);return Tt(d),d}),"PUBLIC").setMultipleInstances(!0)),e.registerVersion(vt,"0.0.900-exp.6ef484a04");class Bt{constructor(t,e){this.app=t,this._delegate=e}get defaultConfig(){return this._delegate.defaultConfig}set defaultConfig(t){this._delegate.defaultConfig=t}get fetchTimeMillis(){return this._delegate.fetchTimeMillis}get lastFetchStatus(){return this._delegate.lastFetchStatus}get settings(){return this._delegate.settings}set settings(t){this._delegate.settings=t}activate(){return It(this._delegate)}ensureInitialized(){return Tt(this._delegate)}fetch(){return Pt(this._delegate)}fetchAndActivate(){return async function(t){return t=f(t),await Pt(t),It(t)}(this._delegate)}getAll(){return Lt(this._delegate)}getBoolean(t){return function(t,e){return Ot(f(t),e).asBoolean()}(this._delegate,t)}getNumber(t){return function(t,e){return Ot(f(t),e).asNumber()}(this._delegate,t)}getString(t){return function(t,e){return Ot(f(t),e).asString()}(this._delegate,t)}getValue(t){return Ot(this._delegate,t)}setLogLevel(t){!function(t,e){const n=f(t);switch(e){case"debug":n._logger.logLevel=h.DEBUG;break;case"silent":n._logger.logLevel=h.SILENT;break;default:n._logger.logLevel=h.ERROR}}(this._delegate,t)}}function qt(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("remote-config-exp").getImmediate({identifier:e});return new Bt(n,r)}var $t;($t=r.default).INTERNAL.registerComponent(new p("remoteConfig-compat",qt,"PUBLIC").setMultipleInstances(!0)),$t.registerVersion("@firebase/remote-config-compat","0.0.900-exp.6ef484a04")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-remote-config-compat.js - be sure to load firebase-app.js first.")}}));
//# sourceMappingURL=firebase-remote-config-compat.js.map