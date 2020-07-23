(this["webpackJsonpreact-starter-template"]=this["webpackJsonpreact-starter-template"]||[]).push([[0],{222:function(e,a,t){},229:function(e,a,t){e.exports={skipLink:"navbar_skipLink__3TdC_"}},240:function(e,a,t){e.exports=t(441)},245:function(e,a,t){},398:function(e,a,t){},407:function(e,a,t){},408:function(e,a,t){},441:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=t(31),s=(t(245),t(229)),i=t.n(s),m=t(8),d=t(9),E=t(10),u=t(447);var b=()=>{const e=Object(m.useFirebase)(),a=Object(o.f)(),t=Object(E.b)(e=>!e.firebase.auth.isEmpty);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.skipLink},r.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light border-bottom justify-content-between"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},"react_starter_template"),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(d.b,{className:"nav-item nav-link active",to:"/home"},"Home"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/admin",className:"nav-item nav-link "},"Account"),r.a.createElement(u.a,{className:"nav-item nav-link ",variant:"outline-secondary",onClick:()=>{e.auth().signOut().then((function(){console.log("signed out"),a.push("/sign-in")})).catch((function(e){console.log(e)}))}},"Logout")):r.a.createElement(d.b,{to:"/sign-in"},"Sign In"))))};var p=()=>{const e=Object(E.b)(e=>e.firestore.data.users);Object(m.useFirestoreConnect)({collection:"users",storeAs:"users"});return r.a.createElement("div",{className:"",style:{textAlign:"center"}},"Top Profiles",r.a.createElement(u.a,null,"Add Profile"),e&&Object.keys(e).map((a,t)=>{let n=e[a],l=n.displayName,c=n.email,o=n.avatarUrl;return r.a.createElement("div",{key:t},r.a.createElement("img",{src:o,alt:l,height:"100px",width:"100px"}),l," - ",c)}))};var f=()=>r.a.createElement("main",{id:"mainContent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mt-5 p-0"},r.a.createElement("h3",null,"Home")),r.a.createElement(p,null))),g=t(19),h=t(236);var _=function(e){let a=e.role,t=e.children,l=Object(h.a)(e,["role","children"]);const c=Object(E.b)(e=>e.firebase.auth),s=Object(n.useState)(!0),i=Object(g.a)(s,2),m=i[0],d=i[1];return void 0===a&&(a=!1),r.a.createElement(o.a,Object.assign({},l,{render:e=>c.isEmpty?m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"alert alert-danger login-alert",role:"alert"},"Please login first!",r.a.createElement("button",{className:"btn-success alert-close-btn",onClick:()=>d(!1)},"X"))):r.a.createElement(f,e):t}))},v=t(451),A=t(450);var N=({heading:e,body:a,type:t,small:l,variant:c,confirmButtonText:o,handleConfirm:s,style:i})=>{const m=Object(n.useState)(!0),d=Object(g.a)(m,2),E=d[0],b=d[1];return E&&("alert"===t?r.a.createElement(v.a,{variant:c,onClose:()=>b(!1),style:i,dismissible:!0},r.a.createElement(v.a.Heading,null,e),r.a.createElement("p",null,a),o&&r.a.createElement(u.a,{variant:"outline-danger",onClick:s},o," ")):"toast"===t&&r.a.createElement(A.a,{onClose:()=>b(!1),style:i},r.a.createElement(A.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},e.toUpperCase()),r.a.createElement("small",null,l)),r.a.createElement(A.a.Body,null,a)))};t(222);var C=()=>{const e=Object(m.useFirebase)(),a=Object(o.f)(),t=Object(n.useState)(""),l=Object(g.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(""),E=Object(g.a)(i,2),u=E[0],b=E[1],p=Object(n.useState)([]),f=Object(g.a)(p,2),h=f[0],_=f[1],v=t=>{let n=c.length>=1?c:"",r=u.length>=1?u:"";e.login({provider:"email"===t?null:t,type:"popup",email:n,password:r}).then(()=>{a.push("/admin")}).catch(e=>{e.code.includes("account-exists")&&_([...h,"Account Exists"])})};return r.a.createElement("div",{className:"login__page"},h.length>=1&&r.a.createElement(N,{type:"alert",variant:"danger",heading:"Error",body:h.map((e,a)=>r.a.createElement("div",{key:a},e))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-4 col-md-offset-4"},r.a.createElement("div",{className:"login__card"},r.a.createElement("div",{className:"card-block"},r.a.createElement("form",{name:"userform",method:"post"},r.a.createElement("h3",null,"Log In "),r.a.createElement(d.b,{to:"sign-up"},"Sign up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",required:!0,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",required:!0,onChange:e=>b(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-primary btn-block",onClick:e=>{e.preventDefault(),v("email")}},"Login with Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("facebook")}},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),"Login with Facebook"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("twitter")}},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"Login with Twitter"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("github")}},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Login with Github"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}),"Login with Google")))))))))};var P=()=>{const e=Object(m.useFirebase)(),a=Object(o.f)(),t=Object(n.useState)(""),l=Object(g.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(""),E=Object(g.a)(i,2),u=E[0],b=E[1],p=Object(n.useState)([]),f=Object(g.a)(p,2),h=f[0],_=f[1],v=t=>{let n=c.length>=1?c:"",r=u.length>=1?u:"";"email"===t?e.createUser({email:c,password:u}).then(()=>{a.push("/home")}).catch(e=>{e.code.includes("account-exists")&&_([...h,"Account Exists"])}):e.login({provider:"email"===t?null:t,type:"popup",email:n,password:r}).then(()=>{a.push("/home")}).catch(e=>{e.code.includes("account-exists")&&_([...h,"Account Exists"])})};return r.a.createElement("div",{className:"login__page"},h.length>=1&&r.a.createElement(N,{type:"alert",variant:"danger",heading:"Error",body:h.map((e,a)=>r.a.createElement("div",{key:a},e))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-4 col-md-offset-4"},r.a.createElement("div",{className:"login__card"},r.a.createElement("div",{className:"card-block"},r.a.createElement("form",{name:"userform",method:"post"},r.a.createElement("h3",null,"Sign up "),r.a.createElement(d.b,{to:"sign-in"},"Log In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",required:!0,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",required:!0,onChange:e=>b(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-primary btn-block",onClick:e=>{e.preventDefault(),v("email")}},"Login with Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("facebook")}},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),"Login with Facebook"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("twitter")}},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"Login with Twitter"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("github")}},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Login with Github"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),v("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}),"Login with Google")))))))))};t(398);var O=e=>{const a=Object(E.b)(e=>e.firebase.auth).uid;Object(m.useFirebaseConnect)("users/".concat(a,"/images"));const t=Object(E.b)(e=>e.firebase.data.users&&e.firebase.data.users[a].images);return r.a.createElement("div",{className:"user-image-gallery"},t&&Object.keys(t).map((e,a)=>{let n=t[e].url;return r.a.createElement("a",{href:n,target:"_blank",key:a,rel:"noopener noreferrer"},r.a.createElement("img",{src:n,alt:"insert alt"}))}))};const k="dkpyudrbl",R="bstms1tm";var w=t(448),y=t(449);var S=({handleClick:e,styleClass:a,btnText:t})=>r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"upload"},r.a.createElement(u.a,{onClick:(()=>{cloudinary.openUploadWidget({cloud_name:k,upload_preset:R,tags:["dating"]},(function(a,t){a?console.log(a):e(t[0].secure_url)}))}).bind(void 0),className:a},r.a.createElement(y.a,{placement:"bottom",delay:{show:50,hide:300},overlay:e=>r.a.createElement(w.a,Object.assign({id:"add-image-tooltip"},e),"Add Image")},r.a.createElement("div",{className:""},t))))),T=t(29),I=t.n(T),j=(t(442),t(400),t(402),t(404),{apiKey:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",authDomain:"date-me-3d9bd.firebaseapp.com",databaseURL:"https://date-me-3d9bd.firebaseio.com",projectId:"date-me-3d9bd",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/dateMe",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",REACT_APP_FIREBASE_AUTH_DOMAIN:"date-me-3d9bd.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://date-me-3d9bd.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"date-me-3d9bd",REACT_APP_FIREBASE_STORAGE_BUCKET:"date-me-3d9bd.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"152433085453",REACT_APP_FIREBASE_APP_ID:"1:152433085453:web:2f1f5f60c0e996addbd944",REACT_APP_CLOUDINARY_KEY:"482976654162835",REACT_APP_CLOUDINARY_SECRET:"nuEBvV9jlMhkc0nvklr9FyE89k8",REACT_APP_CLOUDINARY_CLOUD_NAME:"dkpyudrbl",REACT_APP_CLOUDINARY_UPLOAD_PRESET:"bstms1tm"}).REACT_APP_FIREBASE_REACT_APP_STORAGE_BUCKET,messagingSenderId:"152433085453",appId:"1:152433085453:web:2f1f5f60c0e996addbd944",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/dateMe",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",REACT_APP_FIREBASE_AUTH_DOMAIN:"date-me-3d9bd.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://date-me-3d9bd.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"date-me-3d9bd",REACT_APP_FIREBASE_STORAGE_BUCKET:"date-me-3d9bd.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"152433085453",REACT_APP_FIREBASE_APP_ID:"1:152433085453:web:2f1f5f60c0e996addbd944",REACT_APP_CLOUDINARY_KEY:"482976654162835",REACT_APP_CLOUDINARY_SECRET:"nuEBvV9jlMhkc0nvklr9FyE89k8",REACT_APP_CLOUDINARY_CLOUD_NAME:"dkpyudrbl",REACT_APP_CLOUDINARY_UPLOAD_PRESET:"bstms1tm"}).REACT_APP_FIREBASE_MEASUREMENT_ID});I.a.initializeApp(j);I.a.auth(),I.a.firestore(),I.a.storage();t(407);var D=()=>{const e=Object(m.useFirestore)(),a=Object(E.b)(e=>e.firebase),t=a.auth.uid,n=a.profile;return r.a.createElement("div",{className:""},r.a.createElement(S,{handleClick:a=>{let r=n;r.avatarUrl=a,e.collection("users").doc(t).update(r).then(e=>{console.log(e)})},styleClass:"none",btnText:"Update Profile Photo"}))};var F=()=>{const e=Object(E.b)(e=>e.firebase.profile),a=e.displayName,t=e.avatarUrl,n=e.email,l=Object(E.b)(e=>e.firebase.auth).uid,c=I.a.database().ref().child("users").child(l).child("images"),o=new Date;return r.a.createElement("div",{className:"admin-page"},r.a.createElement("section",{className:"left-panel"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",{className:"display-name"},a),r.a.createElement("div",{className:"email"},n),r.a.createElement(D,null)),r.a.createElement("section",{className:"main-content"},r.a.createElement(O,null),r.a.createElement(S,{handleClick:e=>c.push({url:e,timestamp:o.toDateString()}),styleClass:"upload-button",btnText:r.a.createElement("i",{class:"fa fa-plus","aria-hidden":"true"})})))};var L=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(o.c,null,r.a.createElement(_,{exact:!0,path:"/admin"},r.a.createElement(F,null)),r.a.createElement(o.a,{path:"/home",component:f}),r.a.createElement(o.a,{path:"/sign-in",component:C}),r.a.createElement(o.a,{path:"/sign-up",component:P})));const U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(408);var B=()=>r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{className:"notfound"},r.a.createElement("div",{className:"notfound-404"},r.a.createElement("h1",null,"404")),r.a.createElement("h2",null,"Oops, The Page you are looking for can't be found!"),r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"arrow"}),"Return To Homepage")));class G extends r.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){}render(){return this.state.hasError?r.a.createElement(B,null):this.props.children}}var M=Object(o.g)(G),H=t(98),K=t(28),Y=t(233);const W={};var q=t(157);const z={imageUrls:[]};var J=Object(K.c)({errors:function(e=W,a){switch(a.type){case"GET_ERRORS":return a.payload;default:return e}},profileImages:function(e=z,a){switch(a.type){case"SET_IMAGES":return Object(q.a)(Object(q.a)({},e),{},{imageUrls:Object.assign([],a.payload)});default:return e}},firebase:m.firebaseReducer,firestore:H.firestoreReducer}),V=t(234);const X=Object(V.createLogger)(),$=[Y.a,X];var Q=Object(K.e)(J,{},Object(K.d)(Object(K.a)(...$)));t(440);const Z={firebase:I.a,config:{userProfile:"users",useFirestoreForProfile:!0,presence:"presence",sessions:"sessions"},dispatch:Q.dispatch,createFirestoreInstance:H.createFirestoreInstance};c.a.render(r.a.createElement(E.a,{store:Q},r.a.createElement(m.ReactReduxFirebaseProvider,Z,r.a.createElement(d.a,null,r.a.createElement(M,null,r.a.createElement(L,null))))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dateMe",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/dateMe","/service-worker.js");U?function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):x(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[240,1,2]]]);
//# sourceMappingURL=main.d02b264f.chunk.js.map