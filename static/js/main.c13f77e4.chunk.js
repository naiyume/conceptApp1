(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(2),o=n.n(s),l=(n(12),n(3)),c=n(4),i=n(6),u=n(5),p=(n(13),n(14),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleFileRead=function(e){var t=r.state.fileReader.result,n=r.readFile(t),a=document.createElement("a"),s=new Blob([r.state.excelOutput],{type:"text/plain"});a.href=URL.createObjectURL(s),a.download="myFile.csv",document.body.appendChild(a),console.log(JSON.stringify(n)),r.setState({JSONoutput:n})},r.handleCreateReverse=function(e){var t=r.reverseRead(r.state.textAreaValue),n=document.createElement("a"),a=new Blob([t],{type:"text/plain"});n.href=URL.createObjectURL(a),n.download="myFile.csv",document.body.appendChild(n)},r.handleFileChosen=function(e){r.state.fileReader=new FileReader,r.state.fileReader.onloadend=r.handleFileRead,r.state.fileReader.readAsText(e)},r.getNumSpaces=function(e){for(var t=0,n=0;n<e.length;n++){if("-"!=e.substring(n,n+1))return 16*t+"px";t+=1}return 16*t+"px"},r.removeLeading=function(e){for(var t=0,n=0;n<e.length;n++){if("-"!=e.substring(n,n+1))return e.substring(t);t+=1}return e.substring(t)},r.handleChange=function(e){console.log(r.state.textAreaValue),r.setState({textAreaValue:e.target.value})},r.state={JSONoutput:[],fileReader:"",data:"",excelOutput:"",textAreaValue:""},r}return Object(c.a)(n,[{key:"reverseRead",value:function(e){for(var t=JSON.parse(e),n={},r=0;r<t.length;r++){n[t[r].conceptId]=r}for(var a=[],s=[],o=0;o<t.length;o++)for(var l=t[o],c=Object.keys(l),i=0;i<c.length;i++){var u=l[c[i]];if(c[i].includes("Source")&&(s.includes(o)||s.push(o)),Array.isArray(u)){for(var p=[],d=0;d<u.length;d++){var h=u[d];if(null!=h.match(/[0-9]{9}.json/)){var f=h.substring(0,9);p.push(t[n[f]]),a.includes(n[f])||a.push(n[f])}}p.length>0&&(l[c[i]]=p)}else if("string"==typeof u){if(null!=u.match(/[0-9]{9}.json/)){var g=u.substring(0,9);l[c[i]]=t[n[g]],a.includes(n[g])||a.push(n[g])}}else{for(var v=Object.keys(u),I={},m=0;m<v.length;m++)if(v[m].match(/[0-9]{9}.json/)){var y=v[m].substring(0,9);I[u[v[m]]]=t[n[y]],a.includes(n[y])||a.push(n[y])}Object.keys(u).length>0&&(l[c[i]]=I)}}for(var O=0;O<t.length;O++)a.includes(O)||s.includes(O)||s.push(O);for(var b=[],w=[],x=[],R=[],S=0;S<s.length;S++){var j=[t[s[S]].conceptId],N={};this.recurseRead(t[s[S]],N,"",j),b.push(N);for(var k=Object.keys(N),C=0,E=0;E<k.length;E++)w.includes(k[E])||x.includes(k[E])||(k[E].includes("conceptId")?x.push(k[E]):k[E].includes("subcollection")||k[E].includes("subcollections")||w.push(k[E])),N[k[E]].length>C&&(C=N[k[E]].length);R.push(C)}for(var P=!1,J=0;J<w.length;J++){for(var U=!1,V=0;V<x.length;V++)x[V].includes(w[J])&&(w.splice(J,0,x[V]),J+=1,V=x.length,U=!0);0==U&&0==P&&(w.splice(J,0,"conceptId"),J+=1,P=!0)}var A="";A+=w.map((function(e){return-1!=e.indexOf("conceptId")?"conceptId":-1!=e.indexOf(",")?'"'+e+'"':"0"==e?"":e})).join(",");for(var F=0;F<b.length;F++){for(var M=R[F],D=[],L=b[F],T=0;T<M;T++){for(var B=[],W=0;W<w.length;W++)B.push("");D.push(B)}for(var q=0;q<w.length;q++){var z=w[q];if(L.hasOwnProperty(z)){var $=L[z];if("0"!=z)for(var G=0;G<$.length;G++)D[G][q]=$[G]}}for(var H=0;H<D.length;H++)A+="\n",A+=D[H].map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(",")}return A}},{key:"recurseRead",value:function(e,t,n,r,a){var s=Object.keys(e);if(e.hasOwnProperty("conceptId")&&""!=n){var o=e.conceptId;if("subcollections"==n||"subcollection"==n){for(var l=-1,c=-1,i=0;i<s.length;i++)t.hasOwnProperty("conceptId"+s[i])&&""!=s[i]&&"subcollections"!=s[i]&&"subcollection"!=s[i]&&-1==l&&(l=i),s[i].includes("conceptId")||-1!=c||"subcollections"==s[i]||"subcollection"==s[i]||(c=i);var u="";u=-1==l?s[c]:s[l],t.hasOwnProperty("conceptId"+u)?t["conceptId"+u].includes(o)||t["conceptId"+u].push(o):t["conceptId"+u]=[o]}else t.hasOwnProperty("conceptId"+n)?t["conceptId"+n].includes(o)||t["conceptId"+n].push(o):t["conceptId"+n]=[o]}for(var p=0;p<s.length;p++){var d=e[s[p]];if(Array.isArray(d)){for(var h=[],f=0;f<d.length;f++)if("string"!=typeof d[f]&&!r.includes(d[f].conceptId)&&(r.push(d.conceptId),!n.includes("Source"))){var g=this.recurseRead(d[f],t,s[p],r);h.push(g)}}else if("string"==typeof d)"conceptId"!=s[p]&&"conceptId"!=n?""==n||"subcollection"==n?t.hasOwnProperty(s[p])?t[s[p]].includes(d)||t[s[p]].push(d):t[s[p]]=[d]:t.hasOwnProperty(n)?t[n].includes(d)||t[n].push(d):t[n]=[d]:"conceptId"==s[p]&&""==n&&(t.hasOwnProperty("conceptId"+n)?t["conceptId"+n].includes(d)||t["conceptId"+n].push(d):t["conceptId"+n]=[d]);else if(!d.hasOwnProperty("conceptId")||!r.includes(d.conceptId))if(d.hasOwnProperty("conceptId"))r.push(d.conceptId),this.recurseRead(d,t,s[p],r);else for(var v=Object.keys(d),I=0;I<v.length;I++)d[v[I]].hasOwnProperty("variableName")&&!d[v[I]].variableName.includes("=")&&(d[v[I]].variableName=v[I]+"="+d[v[I]].variableName),this.recurseRead(d[v[I]],t,s[p],r)}}},{key:"generateNine",value:function(){for(var e="",t=0;t<9;t++){e+=Math.floor(10*Math.random())}return e}},{key:"generateRandomUUID",value:function(e){for(var t=this.generateNine();!e.includes(t);){return this.generateNine()}}},{key:"processCluster",value:function(e,t,n,r,a,s,o,l){for(var c=[],i=Object.keys(s),u=[],p={},d=0;d<i.length;d++)u.push(parseInt(i[d])),p[s[i[d]]]=parseInt(i[d]);for(var h=1;h<e.length;h++)for(var f=e[h],g=0;g<f.length;g++)""==f[g].trim()||u.includes(g)||c.includes(g)||c.push(g);var v={},I=e[0];console.log(JSON.stringify(s));for(var m=0;m<I.length;m++)(""!=I[m]&&!c.includes(m)||u.includes(m)&&"thisRowId"==s[m])&&(v[t[m]]=I[m]);console.log(JSON.stringify(v)),v.hasOwnProperty("conceptId")&&""!=v.conceptId||(n.hasOwnProperty(I[r])?(v.conceptId=n[I[r]],a.includes(v.conceptId)||a.push(v.conceptId)):(v.conceptId=this.generateRandomUUID(a),a.push(v.conceptId),n[I[r]]=v.conceptId)),I[p.thisRowId]=v.conceptId;for(var y=Object.keys(p),O=0;O<y.length;O++)if(-1!=y[O].indexOf("Source")){var b=I[p[y[O]]],w=I[p[y[O]]+1];""==b&&n.hasOwnProperty(w)&&(b=n[w]);for(var x=-1,R=0;R<o.length;R++){var S=o[R];""!=b&&S.conceptId==b?(x=O,S.subcollections.includes(v.conceptId+".json")||S.subcollections.push(v.conceptId+".json"),R=o.length):""==b&&w==S["Variable Name"]&&(x=O,b=S.conceptId,S.subcollections.includes(v.conceptId+".json")||S.subcollections.push(v.conceptId+".json"),R=o.length)}if(-1==x){var j={};""==b&&(b=this.generateRandomUUID(a)),j.conceptId=b,j["Variable Name"]=w,j.subcollections=[v.conceptId+".json"],o.push(j)}n[w]=b,a.includes(b)||a.push(b),v[t[p[y[O]]+1]]=b+".json",I[p[y[O]]]=b}for(var N=[],k=[],C=[],E=-1,P={},J=0;J<e.length;J++){for(var U={},V="",A=e[J],F=0;F<c.length;F++){var M=c[F],D=A[M];if(-1!=D.indexOf("=")){V=D,E=M,C.push(D);var L=V.split("=")[1].trim(),T=V.split("=")[0].trim(),B=this.generateRandomUUID(a);n.hasOwnProperty(L)&&(B=n[L]),""!=A[E-1]&&(B=A[E-1]),l.push({conceptId:B,variableName:L}),n[L]=B,a.includes(B)||a.push(B),P[B+".json"]=T,A[E-1]=B}else""!=A[M]&&(U[t[M]]=A[M])}if(p.hasOwnProperty("leftMostId")&&""!=A[p.leftMostId]&&(U.conceptId=A[p.leftMostId]),0!=Object.keys(U).length){for(var W=this.generateRandomUUID(a),q=Object.keys(U),z=0;z<q.length;z++){var $=q[z];n.hasOwnProperty(U[$])&&(W=n[U[$]])}U.hasOwnProperty("conceptId")&&(W=U.conceptId),a.includes(W)||a.push(W),U.conceptId=W,k.push(W+".json");for(var G=0;G<q.length;G++){n[U[q[G]]]=W}N.push(U),e[J][p.leftMostId]=W}}if(0==N.length&&C.length>0)v[t[E]]=P;else{0!=k.length&&(v.subcollection=k);for(var H=0;H<N.length;H++){var K=N[H];K[t[E]]=P,l.push(K)}}return""==e[0][p.thisRowId]?(v.conceptId=this.generateRandomUUID(a),n.hasOwnProperty(v[t[r]])&&(v.conceptId=n[v[t[r]]]),e[0][p.thisRowId]=v.conceptId,n[v[t[r]]]=v.conceptId):(v.conceptId=e[0][p.thisRowId],n[v[t[r]]]=v.conceptId),l.push(v),e}},{key:"CSVToArray",value:function(e){e=e.trim();for(var t=[];-1!=e.indexOf(",");){var n="";'"'==e.substring(0,1)?(n=(e=e.substring(1)).substring(0,e.indexOf('"')),e=(e=e.substring(e.indexOf('"')+1)).substring(e.indexOf(",")+1)):(n=e.substring(0,e.indexOf(",")),e=e.substring(e.indexOf(",")+1)),t.push(n)}return t.push(e),t}},{key:"lookForConcepts",value:function(e,t,n,r){for(var a=-1,s=[],o=1;o<e.length;o++)for(var l=e[o],c=0;c<l.length;c++)""!=l[c]&&(s.includes(c)||s.push(c),-1!=l[c].indexOf("=")&&(n.includes(c)||n.push(c),a=c));for(var i=0;i<s.length;i++)s[i]!=a&&s[i]<r[0]&&"conceptId"!=t[s[i]]&&(r[0]=s[i],r[1]=t[s[i]])}},{key:"getConceptIds",value:function(e){for(var t=0,n=[],r=!0,a=!1,s=[],o=[],l=[],c=[],i=[],u=-1,p=-1,d=e.split("\n"),h=0;h<d.length;h++){var f=d[h],g=this.CSVToArray(f,",");if(r){s=g,r=!1;for(var v=0;v<g.length;v++)"Variable Name"==g[v]&&(t=v),-1!=g[v].indexOf("Source")?o.push(v):-1!=g[v].indexOf("conceptId")?(c.push(v),l.push(g[v])):-1==p&&""!=g[v]&&(o.push(v),p=v);u=g.length,i.push(g.length),i.push("")}else a?""==g[t]?n.push(g):this.lookForConcepts(n,s,o,i):(n.push(g),a=!0)}this.lookForConcepts(n,s,o,i),o.includes(i[0])||i[0]==u||o.push(i[0]);for(var I=[],m=0;m<o.length;m++){for(var y=!1,O=0;O<c.length;O++)o[m]==c[O]+1&&(y=!0);0==y&&I.push(o[m])}I.sort((function(e,t){return t-e}));var b="";r=!0;var w={};d=e.split("\n");for(var x=0;x<d.length;x++){var R=d[x].split(",");if(1==r){for(var S=R[p],j=0;j<I.length;j++)R.splice(I[j],0,"conceptId");b+=R.map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(","),r=!1;for(var N=0;N<R.length;N++)R[N].includes("conceptId")&&N!=R.length-1&&(R[N+1]==S?w[N]="thisRowId":R[N+1]==i[1]?w[N]="leftMostId":w[N]=R[N+1])}else{for(var k=0;k<I.length;k++)R.splice(I[k],0,"");b+="\n",b+=R.map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(",")}}return this.state.data=b,w}},{key:"readFile",value:function(e){for(var t=[],n=[],r=JSON.parse("[]"),a=0,s=[],o=this.getConceptIds(e),l=[],c=!0,i=!1,u=[],p=JSON.parse("{}"),d=this.state.data.split("\n"),h=0;h<d.length;h++){var f=d[h],g=this.CSVToArray(f,",");if(c){u=g,c=!1;for(var v=0;v<g.length;v++)"Variable Name"==g[v]&&(a=v);l.push([g])}else if(i)if(""==g[a])s.push(g);else{var I=this.processCluster(s,u,p,a,r,o,n,t);l.push(I),s=[g],i=!0}else s.push(g),i=!0}var m=this.processCluster(s,u,p,a,r,o,n,t);l.push(m);for(var y=0;y<n.length;y++)t.push(n[y]);for(var O="",b=0;b<l.length;b++)for(var w=l[b],x=0;x<w.length;x++){w[x];O+=w[x].map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(","),b==l.length-1&&x==w.length-1||(O+="\n")}this.setState({excelOutput:O});for(var R=0;R<t.length;R++)JSON.stringify(t[R],null,"    ")+"\n";return t}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App",style:{"text-align":"left"}},a.a.createElement("header",{className:"App-header",style:{"font-size":"16px","padding-top":"50px","padding-bottom":"50px"}},a.a.createElement("h2",null,"CSV to JSONS"),a.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(t){return e.handleFileChosen(t.target.files[0])}}),a.a.createElement("div",{style:{"text-align":"center"}},a.a.createElement("p",null,"CSV Rules:"),a.a.createElement("p",null,"There must be a Variable Name field in every full row"),a.a.createElement("p",null,"The leaf nodes (final unit of response) is the only row that is allowed to have an equals sign")),a.a.createElement("div",{style:{"padding-left":"50px","padding-right":"50px"}},this.state.JSONoutput.map((function(t){return a.a.createElement("p",null,JSON.stringify(t,null,"-").split("\n").map((function(t){return a.a.createElement("span",{style:{"padding-left":e.getNumSpaces(t)}},e.removeLeading(t),a.a.createElement("br",null))})))}))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("h2",null,"JSONS to CSV"),a.a.createElement("p",null,"Enter a list of JSONS, and we will generate a csv file for it"),a.a.createElement("div",null,a.a.createElement("textarea",{value:this.state.textAreaValue,onChange:this.handleChange,rows:10,cols:50})),a.a.createElement("button",{type:"button",onClick:this.handleCreateReverse},"Convert!")))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c13f77e4.chunk.js.map