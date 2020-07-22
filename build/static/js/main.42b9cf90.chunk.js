(this["webpackJsonpreact-starter-template"]=this["webpackJsonpreact-starter-template"]||[]).push([[0],{213:function(e,a,t){},220:function(e,a,t){e.exports={skipLink:"navbar_skipLink__3TdC_"}},232:function(e,a,t){e.exports=t(435)},237:function(e,a,t){},390:function(e,a,t){},391:function(e,a,t){},402:function(e,a,t){},435:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=t(31),s=(t(237),t(220)),i=t.n(s),m=t(14),d=t(8),u=t(11),E=t(437);var b=()=>{const e=Object(m.useFirebase)(),a=Object(o.f)(),t=Object(u.b)(e=>!e.firebase.auth.isEmpty);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.skipLink},r.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light border-bottom justify-content-between"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},"react_starter_template"),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(d.b,{className:"nav-item nav-link active",to:"/home"},"Home"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/admin",className:"nav-item nav-link "},"Account"),r.a.createElement(E.a,{className:"nav-item nav-link ",variant:"outline-secondary",onClick:()=>{e.auth().signOut().then((function(){console.log("signed out"),a.push("/sign-in")})).catch((function(e){console.log(e)}))}},"Logout")):r.a.createElement(d.b,{to:"/sign-in"},"Sign In"))))};var p=()=>{const e=Object(u.b)(e=>e.firestore.data.users);Object(m.useFirestoreConnect)({collection:"users",storeAs:"users"});return r.a.createElement("div",{className:"",style:{textAlign:"center"}},"Top Profiles",r.a.createElement(E.a,null,"Add Profile"),(()=>{let a=[];for(let t in e)a.push(e[t]);return a.map((e,a)=>{let t=e.displayName,n=e.email,l=e.avatarUrl;return r.a.createElement("div",{key:a},r.a.createElement("img",{src:l,alt:t,height:"100px",width:"100px"}),t," - ",n)})})())};var g=()=>r.a.createElement("main",{id:"mainContent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mt-5 p-0"},r.a.createElement("h3",null,"Home")),r.a.createElement(p,null))),f=t(20),h=t(230);var v=function(e){let a=e.role,t=e.children,l=Object(h.a)(e,["role","children"]);const c=Object(u.b)(e=>e.firebase.auth),s=Object(n.useState)(!0),i=Object(f.a)(s,2),m=i[0],d=i[1];return void 0===a&&(a=!1),r.a.createElement(o.a,Object.assign({},l,{render:e=>c.isEmpty?m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"alert alert-danger login-alert",role:"alert"},"Please login first!",r.a.createElement("button",{className:"btn-success alert-close-btn",onClick:()=>d(!1)},"X"))):r.a.createElement(g,e):t}))},N=t(439),_=t(438);var k=({heading:e,body:a,type:t,small:l,variant:c,confirmButtonText:o,handleConfirm:s,style:i})=>{const m=Object(n.useState)(!0),d=Object(f.a)(m,2),u=d[0],b=d[1];return u&&("alert"===t?r.a.createElement(N.a,{variant:c,onClose:()=>b(!1),style:i,dismissible:!0},r.a.createElement(N.a.Heading,null,e),r.a.createElement("p",null,a),o&&r.a.createElement(E.a,{variant:"outline-danger",onClick:s},o," ")):"toast"===t&&r.a.createElement(_.a,{onClose:()=>b(!1),style:i},r.a.createElement(_.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},e.toUpperCase()),r.a.createElement("small",null,l)),r.a.createElement(_.a.Body,null,a)))};t(213);var A=()=>{const e=Object(m.useFirebase)(),a=Object(o.f)(),t=Object(n.useState)(""),l=Object(f.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(""),u=Object(f.a)(i,2),E=u[0],b=u[1],p=Object(n.useState)([]),g=Object(f.a)(p,2),h=g[0],v=g[1],N=t=>{let n=c.length>=1?c:"",r=E.length>=1?E:"";e.login({provider:"email"===t?null:t,type:"popup",email:n,password:r}).then(()=>{a.push("/admin")}).catch(e=>{e.code.includes("account-exists")&&v([...h,"Account Exists"])})};return r.a.createElement("div",{className:"login__page"},h.length>=1&&r.a.createElement(k,{type:"alert",variant:"danger",heading:"Error",body:h.map((e,a)=>r.a.createElement("div",{key:a},e))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-4 col-md-offset-4"},r.a.createElement("div",{className:"login__card"},r.a.createElement("div",{className:"card-block"},r.a.createElement("form",{name:"userform",method:"post"},r.a.createElement("h3",null,"Log In "),r.a.createElement(d.b,{to:"sign-up"},"Sign up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",required:!0,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",required:!0,onChange:e=>b(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-primary btn-block",onClick:e=>{e.preventDefault(),N("email")}},"Login with Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("facebook")}},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),"Login with Facebook"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("twitter")}},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"Login with Twitter"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("github")}},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Login with Github"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}),"Login with Google")))))))))};var w=()=>{const e=Object(m.useFirebase)(),a=Object(o.f)(),t=Object(n.useState)(""),l=Object(f.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(""),u=Object(f.a)(i,2),E=u[0],b=u[1],p=Object(n.useState)([]),g=Object(f.a)(p,2),h=g[0],v=g[1],N=t=>{let n=c.length>=1?c:"",r=E.length>=1?E:"";"email"===t?e.createUser({email:c,password:E}).then(()=>{a.push("/home")}).catch(e=>{e.code.includes("account-exists")&&v([...h,"Account Exists"])}):e.login({provider:"email"===t?null:t,type:"popup",email:n,password:r}).then(()=>{a.push("/home")}).catch(e=>{e.code.includes("account-exists")&&v([...h,"Account Exists"])})};return r.a.createElement("div",{className:"login__page"},h.length>=1&&r.a.createElement(k,{type:"alert",variant:"danger",heading:"Error",body:h.map((e,a)=>r.a.createElement("div",{key:a},e))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-4 col-md-offset-4"},r.a.createElement("div",{className:"login__card"},r.a.createElement("div",{className:"card-block"},r.a.createElement("form",{name:"userform",method:"post"},r.a.createElement("h3",null,"Sign up "),r.a.createElement(d.b,{to:"sign-in"},"Log In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",required:!0,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",required:!0,onChange:e=>b(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-primary btn-block",onClick:e=>{e.preventDefault(),N("email")}},"Login with Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("facebook")}},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),"Login with Facebook"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("twitter")}},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"Login with Twitter"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("github")}},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Login with Github"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),N("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}),"Login with Google")))))))))};t(390),t(391);var O=e=>{const a=Object(u.b)(e=>e.firebase.auth).uid;Object(m.useFirebaseConnect)("users/".concat(a,"/images"));const t=Object(u.b)(e=>e.firebase.data.users&&e.firebase.data.users[a].images);return r.a.createElement("div",{className:"user-image-gallery"},t&&Object.keys(t).map((e,a)=>{let n=t[e];return r.a.createElement("a",{href:n,target:"_blank",key:a,rel:"noopener noreferrer"},r.a.createElement("img",{src:n,alt:"insert alt"}))}))};const y="dkpyudrbl",C="bstms1tm";var j=t(51),P={apiKey:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",authDomain:"date-me-3d9bd.firebaseapp.com",databaseURL:"https://date-me-3d9bd.firebaseio.com",projectId:"date-me-3d9bd",storageBucket:"date-me-3d9bd.appspot.com",messagingSenderId:"152433085453",appId:"1:152433085453:web:2f1f5f60c0e996addbd944",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-starter-tempalate",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",REACT_APP_FIREBASE_AUTH_DOMAIN:"date-me-3d9bd.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://date-me-3d9bd.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"date-me-3d9bd",REACT_APP_FIREBASE_STORAGE_BUCKET:"date-me-3d9bd.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"152433085453",REACT_APP_FIREBASE_APP_ID:"1:152433085453:web:2f1f5f60c0e996addbd944",REACT_APP_CLOUDINARY_KEY:"482976654162835",REACT_APP_CLOUDINARY_SECRET:"nuEBvV9jlMhkc0nvklr9FyE89k8",REACT_APP_CLOUDINARY_CLOUD_NAME:"dkpyudrbl",REACT_APP_CLOUDINARY_UPLOAD_PRESET:"bstms1tm"}).REACT_APP_FIREBASE_MEASUREMENT_ID};j.initializeApp(P);j.auth(),j.firestore(),j.storage();var I=()=>{const e=Object(u.b)(e=>e.firebase.auth).uid,a=j.database().ref().child("users").child(e).child("images");return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"upload"},r.a.createElement("button",{onClick:(()=>{cloudinary.openUploadWidget({cloud_name:y,upload_preset:C,tags:["dating"]},(function(e,t){var n;e?console.log(e):(n=t[0].secure_url,a.push(n,e=>console.log(e)))}))}).bind(void 0),className:"upload-button"},"Add Image")))};var R=()=>{const e=Object(u.b)(e=>e.firebase.profile),a=e.displayName,t=e.avatarUrl,n=e.email;return r.a.createElement("div",{className:"admin-page"},r.a.createElement("section",{className:"left-panel"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",{className:"display-name"},a),r.a.createElement("div",{className:"email"},n),r.a.createElement(I,null)),r.a.createElement("section",{className:"main-content"},r.a.createElement(O,null)))};var S=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(o.c,null,r.a.createElement(v,{exact:!0,path:"/admin"},r.a.createElement(R,null)),r.a.createElement(o.a,{path:"/home",component:g}),r.a.createElement(o.a,{path:"/sign-in",component:A}),r.a.createElement(o.a,{path:"/sign-up",component:w})));const T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(402);var F=()=>r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{className:"notfound"},r.a.createElement("div",{className:"notfound-404"},r.a.createElement("h1",null,"404")),r.a.createElement("h2",null,"Oops, The Page you are looking for can't be found!"),r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"arrow"}),"Return To Homepage")));class L extends r.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){}render(){return this.state.hasError?r.a.createElement(F,null):this.props.children}}var x=Object(o.g)(L),U=t(93),B=t(30),G=t(225);const H={};var M=t(147);const W={imageUrls:[]};var K=Object(B.c)({errors:function(e=H,a){switch(a.type){case"GET_ERRORS":return a.payload;default:return e}},profileImages:function(e=W,a){switch(a.type){case"SET_IMAGES":return Object(M.a)(Object(M.a)({},e),{},{imageUrls:Object.assign([],a.payload)});default:return e}},firebase:m.firebaseReducer,firestore:U.firestoreReducer}),q=t(226);const Y=Object(q.createLogger)(),z=[G.a,Y];var J=Object(B.e)(K,{},Object(B.d)(Object(B.a)(...z))),X=(t(434),t(227));const V={firebase:t.n(X).a,config:{userProfile:"users",useFirestoreForProfile:!0,presence:"presence",sessions:"sessions"},dispatch:J.dispatch,createFirestoreInstance:U.createFirestoreInstance};c.a.render(r.a.createElement(u.a,{store:J},r.a.createElement(m.ReactReduxFirebaseProvider,V,r.a.createElement(d.a,null,r.a.createElement(x,null,r.a.createElement(S,null))))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-starter-tempalate",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/react-starter-tempalate","/service-worker.js");T?function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):D(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[232,1,2]]]);
//# sourceMappingURL=main.42b9cf90.chunk.js.map