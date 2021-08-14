import{registerVersion as e,_registerComponent as t,_getProvider as n,getApp as o}from"https://www.gstatic.com/firebasejs/9.0.0-beta.7/firebase-app.js";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var r=function(e){function t(n,o,i){var r=e.call(this,o)||this;return r.code=n,r.customData=i,r.name="FirebaseError",Object.setPrototypeOf(r,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,a.prototype.create),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),a=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=t[0]||{},i=this.service+"/"+e,a=this.errors[e],c=a?s(a,o):"Error",u=this.serviceName+": "+c+" ("+i+").",p=new r(i,u,o);return p},e}();function s(e,t){return e.replace(c,(function(e,n){var o=t[n];return null!=o?String(o):"<"+n+"?>"}))}var c=/\{\$([^}]+)}/g;function u(e){return e&&e._delegate?e._delegate:e}var p=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}();function f(e){return Array.prototype.slice.call(e)}function l(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function d(e,t,n){var o,i=new Promise((function(i,r){l(o=e[t].apply(e,n)).then(i,r)}));return i.request=o,i}function g(e,t,n){var o=d(e,t,n);return o.then((function(e){if(e)return new v(e,o.request)}))}function h(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function w(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return d(this[t],o,arguments)})}))}function y(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return this[t][o].apply(this[t],arguments)})}))}function m(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return g(this[t],o,arguments)})}))}function b(e){this._index=e}function v(e,t){this._cursor=e,this._request=t}function k(e){this._store=e}function I(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function S(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new I(n)}function _(e){this._db=e}function T(e,t,n){var o=d(indexedDB,"open",[e,t]),i=o.request;return i&&(i.onupgradeneeded=function(e){n&&n(new S(i.result,e.oldVersion,i.transaction))}),o.then((function(e){return new _(e)}))}function C(e){return d(indexedDB,"deleteDatabase",[e])}h(b,"_index",["name","keyPath","multiEntry","unique"]),w(b,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),m(b,"_index",IDBIndex,["openCursor","openKeyCursor"]),h(v,"_cursor",["direction","key","primaryKey","value"]),w(v,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(v.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),l(t._request).then((function(e){if(e)return new v(e,t._request)}))}))})})),k.prototype.createIndex=function(){return new b(this._store.createIndex.apply(this._store,arguments))},k.prototype.index=function(){return new b(this._store.index.apply(this._store,arguments))},h(k,"_store",["name","keyPath","indexNames","autoIncrement"]),w(k,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),m(k,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),y(k,"_store",IDBObjectStore,["deleteIndex"]),I.prototype.objectStore=function(){return new k(this._tx.objectStore.apply(this._tx,arguments))},h(I,"_tx",["objectStoreNames","mode"]),y(I,"_tx",IDBTransaction,["abort"]),S.prototype.createObjectStore=function(){return new k(this._db.createObjectStore.apply(this._db,arguments))},h(S,"_db",["name","version","objectStoreNames"]),y(S,"_db",IDBDatabase,["deleteObjectStore","close"]),_.prototype.transaction=function(){return new I(this._db.transaction.apply(this._db,arguments))},h(_,"_db",["name","version","objectStoreNames"]),y(_,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[k,b].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=f(arguments),n=t[t.length-1],o=this._store||this._index,i=o[e].apply(o,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[b,k].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,o=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(o.push(e.value),void 0===t||o.length!=t?e.continue():i(o)):i(o)}))}))})}));const j=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function x(e){return e instanceof r&&e.code.includes("request-failed")}function O({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function D(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function P(e,t){const n=(await t.json()).error;return j.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function K({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function M(e,{refreshToken:t}){const n=K(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}(t)),n}async function E(e){const t=await e();return t.status>=500&&t.status<600?e():t}function A(e){return new Promise((t=>{setTimeout(t,e)}))}const N=/^[cdef][\w-]{21}$/;function B(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return N.test(t)?t:""}catch(e){return""}}function q(e){return`${e.appName}!${e.appId}`}const $=new Map;function F(e,t){const n=q(e);V(n,t),function(e,t){const n=function(){!L&&"BroadcastChannel"in self&&(L=new BroadcastChannel("[Firebase] FID Change"),L.onmessage=e=>{V(e.data.key,e.data.fid)});return L}();n&&n.postMessage({key:e,fid:t});0===$.size&&L&&(L.close(),L=null)}(n,t)}function V(e,t){const n=$.get(e);if(n)for(const e of n)e(t)}let L=null;const H="firebase-installations-store";let U=null;function R(){return U||(U=T("firebase-installations-database",1,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(H)}}))),U}async function W(e,t){const n=q(e),o=(await R()).transaction(H,"readwrite"),i=o.objectStore(H),r=await i.get(n);return await i.put(t,n),await o.complete,r&&r.fid===t.fid||F(e,t.fid),t}async function G(e){const t=q(e),n=(await R()).transaction(H,"readwrite");await n.objectStore(H).delete(t),await n.complete}async function J(e,t){const n=q(e),o=(await R()).transaction(H,"readwrite"),i=o.objectStore(H),r=await i.get(n),a=t(r);return void 0===a?await i.delete(n):await i.put(a,n),await o.complete,!a||r&&r.fid===a.fid||F(e,a.fid),a}async function z(e){let t;const n=await J(e,(n=>{const o=function(e){return Q(e||{fid:B(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(j.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:async function(e,t){try{return W(e,await async function(e,{fid:t}){const n=O(e),o=K(e),i={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.0.900-exp.6ef484a04"},r={method:"POST",headers:o,body:JSON.stringify(i)},a=await E((()=>fetch(n,r)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:D(e.authToken)}}throw await P("Create Installation",a)}(e,t))}catch(n){throw x(n)&&409===n.customData.serverCode?await G(e):await W(e,{fid:t.fid,registrationStatus:0}),n}}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Y(e)}:{installationEntry:t}}(e,o);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Y(e){let t=await Z(e);for(;1===t.registrationStatus;)await A(100),t=await Z(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await z(e);return n||t}return t}function Z(e){return J(e,(e=>{if(!e)throw j.create("installation-not-found");return Q(e)}))}function Q(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function X({appConfig:e,platformLoggerProvider:t},n){const o=function(e,{fid:t}){return`${O(e)}/${t}/authTokens:generate`}(e,n),i=M(e,n),r=t.getImmediate({optional:!0});r&&i.append("x-firebase-client",r.getPlatformInfoString());const a={installation:{sdkVersion:"w:0.0.900-exp.6ef484a04"}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await E((()=>fetch(o,s)));if(c.ok){return D(await c.json())}throw await P("Generate Auth Token",c)}async function ee(e,t=!1){let n;const o=await J(e.appConfig,(o=>{if(!ne(o))throw j.create("not-registered");const i=o.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return o;if(1===i.requestStatus)return n=async function(e,t){let n=await te(e.appConfig);for(;1===n.authToken.requestStatus;)await A(100),n=await te(e.appConfig);const o=n.authToken;return 0===o.requestStatus?ee(e,t):o}(e,t),o;{if(!navigator.onLine)throw j.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(o);return n=async function(e,t){try{const n=await X(e,t),o=Object.assign(Object.assign({},t),{authToken:n});return await W(e.appConfig,o),n}catch(n){if(!x(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await W(e.appConfig,n)}else await G(e.appConfig);throw n}}(e,t),t}}));return n?await n:o.authToken}function te(e){return J(e,(e=>{if(!ne(e))throw j.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n}))}function ne(e){return void 0!==e&&2===e.registrationStatus}async function oe(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await z(e);t&&await t}(n.appConfig);return(await ee(n,t)).token}function ie(e){return j.create("missing-app-config-values",{valueName:e})}const re=e=>{const t=e.getProvider("app-exp").getImmediate(),o=n(t,"installations-exp").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:o}=await z(t.appConfig);return o?o.catch(console.error):ee(t).catch(console.error),n.fid}(o),getToken:e=>oe(o,e)}};t(new p("installations-exp",(e=>{const t=e.getProvider("app-exp").getImmediate();return{app:t,appConfig:function(e){if(!e||!e.options)throw ie("App Configuration");if(!e.name)throw ie("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ie(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:n(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),t(new p("installations-exp-internal",re,"PRIVATE")),e("@firebase/installations-exp","0.0.900-exp.6ef484a04");const ae=new a("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function se(){return await new Promise((function(e,t){try{var n=!0,o="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(o);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))&&"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}const ce="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";var ue;function pe(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function fe(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),o=new Uint8Array(n.length);for(let e=0;e<n.length;++e)o[e]=n.charCodeAt(e);return o}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(ue||(ue={}));const le="firebase-messaging-store";let de=null;function ge(){return de||(de=T("firebase-messaging-database",1,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(le)}}))),de}async function he(e){const t=ye(e),n=await ge(),o=await n.transaction(le).objectStore(le).get(t);if(o)return o;{const t=await async function(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map((e=>e.name)).includes("fcm_token_details_db"))return null;let t=null;return(await T("fcm_token_details_db",5,(async n=>{var o;if(n.oldVersion<2)return;if(!n.objectStoreNames.contains("fcm_token_object_Store"))return;const i=n.transaction.objectStore("fcm_token_object_Store"),r=await i.index("fcmSenderId").get(e);if(await i.clear(),r)if(2===n.oldVersion){const e=r;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:pe(e.vapidKey)}}}else if(3===n.oldVersion){const e=r;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:pe(e.auth),p256dh:pe(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:pe(e.vapidKey)}}}else if(4===n.oldVersion){const e=r;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:pe(e.auth),p256dh:pe(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:pe(e.vapidKey)}}}}))).close(),await C("fcm_token_details_db"),await C("fcm_vapid_details_db"),await C("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await we(e,t),t}}async function we(e,t){const n=ye(e),o=(await ge()).transaction(le,"readwrite");return await o.objectStore(le).put(t,n),await o.complete,t}function ye({appConfig:e}){return e.appId}async function me(e,t){const n={method:"DELETE",headers:await ve(e)};try{const o=await fetch(`${be(e.appConfig)}/${t}`,n),i=await o.json();if(i.error){const e=i.error.message;throw ae.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw ae.create("token-unsubscribe-failed",{errorInfo:e})}}function be({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function ve({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ke({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const i={web:{endpoint:n,auth:t,p256dh:e}};return o!==ce&&(i.web.applicationPubKey=o),i}async function Ie(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:fe(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:pe(t.getKey("auth")),p256dh:pe(t.getKey("p256dh"))},o=await he(e.firebaseDependencies);if(o){if(function(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,i=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&o&&i&&r}(o.subscriptionOptions,n))return Date.now()>=o.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await ve(e),o=ke(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(o)};let r;try{const n=await fetch(`${be(e.appConfig)}/${t.token}`,i);r=await n.json()}catch(e){throw ae.create("token-update-failed",{errorInfo:e})}if(r.error){const e=r.error.message;throw ae.create("token-update-failed",{errorInfo:e})}if(!r.token)throw ae.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await we(e.firebaseDependencies,o),n}catch(t){throw await Se(e),t}}(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await me(e.firebaseDependencies,o.token)}catch(e){console.warn(e)}return _e(e.firebaseDependencies,n)}return _e(e.firebaseDependencies,n)}async function Se(e){const t=await he(e.firebaseDependencies);t&&(await me(e.firebaseDependencies,t.token),await async function(e){const t=ye(e),n=(await ge()).transaction(le,"readwrite");await n.objectStore(le).delete(t),await n.complete}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function _e(e,t){const n={token:await async function(e,t){const n=await ve(e),o=ke(t),i={method:"POST",headers:n,body:JSON.stringify(o)};let r;try{const t=await fetch(be(e.appConfig),i);r=await t.json()}catch(e){throw ae.create("token-subscribe-failed",{errorInfo:e})}if(r.error){const e=r.error.message;throw ae.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw ae.create("token-subscribe-no-token");return r.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await we(e,n),n.token}async function Te(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;const o=await je();if(function(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}(o))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=ue.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(o,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:o}=Notification;n&&o&&n.length>o&&console.warn(`This browser only supports ${o} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={FCM_MSG:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const o=t.notification.body;o&&(e.notification.body=o);const i=t.notification.image;i&&(e.notification.image=i)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const o=t.fcmOptions.analytics_label;o&&(e.fcmOptions.analyticsLabel=o)}(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function Ce(e){var t,n;const o=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG;if(!o)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const i=function(e){var t,n,o;const i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(o=e.notification)||void 0===o?void 0:o.click_action;if(i)return i;return r=e.data,"object"==typeof r&&r&&"google.c.a.c_id"in r?self.location.origin:null;var r}(o);if(!i)return;const r=new URL(i,self.location.href),a=new URL(self.location.origin);if(r.host!==a.host)return;let s=await async function(e){const t=await je();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(r);var c;return s?s=await s.focus():(s=await self.clients.openWindow(i),await(c=3e3,new Promise((e=>{setTimeout(e,c)})))),s?(o.messageType=ue.NOTIFICATION_CLICKED,o.isFirebaseMessaging=!0,s.postMessage(o)):void 0}function je(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function xe(e){return ae.create("missing-app-config-values",{valueName:e})}class Oe{constructor(e,t,n){this.onBackgroundMessageHandler=null,this.onMessageHandler=null;const o=function(e){if(!e||!e.options)throw xe("App Configuration Object");if(!e.name)throw xe("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw xe(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}function De(e=o()){return n(u(e),"messaging-sw-exp").getImmediate()}function Pe(e,t){return function(e,t){if(void 0!==self.document)throw ae.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=u(e),t)}t(new p("messaging-sw-exp",(e=>{se().then((e=>{if(!e)throw ae.create("unsupported-browser")})).catch((e=>{throw ae.create("indexed-db-unsupported")}));const t=new Oe(e.getProvider("app-exp").getImmediate(),e.getProvider("installations-exp-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(Te(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(async function(e,t){var n,o;const{newSubscription:i}=e;if(!i)return void await Se(t);const r=await he(t.firebaseDependencies);await Se(t),t.vapidKey=null!==(o=null===(n=null==r?void 0:r.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==o?o:ce,await Ie(t)}(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil(Ce(e))})),t}),"PUBLIC"));export{De as getMessaging,Pe as onBackgroundMessage};
//# sourceMappingURL=firebase-messaging-sw.js.map