(this["webpackJsonpleewannacott-website"]=this["webpackJsonpleewannacott-website"]||[]).push([[0],{147:function(e,t,a){e.exports=a(460)},151:function(e,t,a){},152:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},153:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},448:function(e,t,a){},450:function(e,t,a){},460:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),o=a(35),i=(a(151),a(152),a(153),a(154),a(21)),s=a(22),m=a(24),u=a(23),h=a(4),E=a(462),p=(a(430),a(431),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"display-4"},"Tweet Repair Game.",l.a.createElement("a",{href:"https://tweet-repair-game.herokuapp.com/"},l.a.createElement("button",{className:"btn btn-light"},"View Live Example.")),l.a.createElement("a",{href:"https://github.com/LeeWannacott/tweet-repair-game-django"},l.a.createElement("button",{className:"btn btn-light"},"View GitHub Page."))),l.a.createElement("hr",null),l.a.createElement("p",null,"Tweet repair game started during Global Game Jam 2020. Uses Django, Javascript and the Twitter API."),l.a.createElement("img",{src:"https://raw.githubusercontent.com/LeeWannacott/tweet-repair-game-django/master/Picture_of_tweet_repair_game.png",style:{width:"70em"},className:"projectimages"}),l.a.createElement("h2",{className:"display-4"},"Image Selector.",l.a.createElement("a",{href:"https://github.com/LeeWannacott/image-selector-opencv-python/blob/master/image_selector_from_video.py"},l.a.createElement("button",{className:"btn btn-light",onClick:"www.google.com"},"View Source Code.")),l.a.createElement("a",{href:"https://github.com/LeeWannacott/image-selector-opencv-python"},l.a.createElement("button",{className:"btn btn-light",onClick:"window.location.href='www.google.com'"},"View Github Page."))),l.a.createElement("hr",null),l.a.createElement("p",null,"Speeds up image selection, tagging and bounding boxing of relevant images to then use in machine learning models."),l.a.createElement("img",{src:"https://raw.githubusercontent.com/LeeWannacott/image-selector-opencv-python/master/Example_of_use.png",style:{width:"70em"},className:"projectimages"}),l.a.createElement("h2",{className:"display-4"},"Mark-Your-Spreadsheet.",l.a.createElement("a",{href:"https://github.com/LeeWannacott/MYS-Mark-Your-Spreadsheet"},l.a.createElement("button",{className:"btn btn-light"},"View GitHub Page."))),l.a.createElement("hr",null),l.a.createElement("p",null,"Software that applies conditional highlighting and grades students Excel spreadsheets. "),l.a.createElement("img",{src:"https://raw.githubusercontent.com/LeeWannacott/MYS-Mark-Your-Spreadsheet/master/CompareAllExample.png",style:{width:"70em"},className:"projectimages"}))}}]),a}(n.Component)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null))}}]),a}(n.Component),g=a(48),b=a.n(g),_=(a(79),a(448),a(449),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={repos:[],loading:!1,data:!1,user:[],stars:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("script");t.src="https://leewannacott.github.io/table-sort-js/#/.js",t.type="text/javascript",t.async=!0,document.body.appendChild(t),this.setState({loading:!0}),b.a.get("https://api.github.com/users/leewannacott/repos?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(t){var a=t.data;e.setState({repos:a})})),b.a.get("https://api.github.com/users/leewannacott?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(t){var a=t.data;e.setState({user:a})})),b.a.get("https://api.github.com/users/leewannacott/starred?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(t){var a=t.data;e.setState({stars:a})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},console.log(this.state.stars.length),l.a.createElement("div",{className:"bioInfo"},l.a.createElement("a",{href:this.state.user.html_url,className:"GitHubIcon"},l.a.createElement("img",{src:this.state.user.avatar_url,className:"GitHubIcon"})),l.a.createElement("span",{style:{textAlign:"left",marginLeft:"1em",marginTop:" 0.5em",marginRight:"1em"}},l.a.createElement("p",null,"Following: "+this.state.user.following+" ",l.a.createElement("br",null),"Followers: "+this.state.user.followers+" ",l.a.createElement("br",null),"Repositories: "+this.state.user.public_repos,l.a.createElement("br",null),"Stars: "+this.state.stars.length+" ")),l.a.createElement("img",{src:"http://ghchart.rshah.org/be4eb9/LeeWannacott",className:"GitHubChart",alt:"Lee Wannacott GitHub chart"}),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://media.xconomy.com/wordpress/wp-content/images/2016/06/06161811/github-logo.jpg",alt:"GitHub Icon",style:{width:"8em",marginTop:"1em",marginLeft:"1em",alignContent:"flex-end"}}))),l.a.createElement("h6",{style:{textAlign:"left",marginTop:"0.25em"}},"Statistics on public repositories pulled from the GitHub API v3:"),l.a.createElement("table",{className:"table-sort"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Repository Name"),l.a.createElement("th",null,"Language"),l.a.createElement("th",null,"Created"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Forks"),l.a.createElement("th",null,"Open issues"),l.a.createElement("th",null,"Watchers"),l.a.createElement("th",null,"Stars"),l.a.createElement("th",null,"Size (MB)"))),l.a.createElement("tbody",null,this.state.repos.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:e.html_url},e.name)),l.a.createElement("td",null,"    ",e.language),l.a.createElement("td",null,"    ",e.created_at.split("-")[0]+"-"+e.created_at.split("-")[1]),l.a.createElement("td",null,"    ",e.description),l.a.createElement("td",null,"    ",e.forks),l.a.createElement("td",null,"    ",e.open_issues),l.a.createElement("td",null,"    ",e.watchers),l.a.createElement("td",null,"    ",e.stargazers_count),l.a.createElement("td",null,"    ",Math.round(e.size/1e3)))})))))}}]),a}(n.Component)),v=(a(450),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h6",{className:"heading"},"Email: WannacottL@gmail.com"),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.linkedin.com/in/lee-wannacott-64289b174/"},l.a.createElement("img",{src:"https://cdn.fastly.picmonkey.com/content4/previews/icons_linkedin/icons_linkedin_11_550.png",className:"hover-images",alt:"https://www.linkedin.com/in/lee-wannacott-64289b174/",style:{width:"5em",marginTop:"0.25em",marginLeft:"1em"}})),l.a.createElement("a",{href:"https://github.com/LeeWannacott"},l.a.createElement("img",{src:"https://miro.medium.com/max/796/1*WY7ELhXIVxbGlUwmhA1PSw.jpeg",className:"hover-images",alt:"https://github.com/LeeWannacott",style:{width:"10em",marginTop:"0.25em",marginLeft:"1em"}})),l.a.createElement("a",{href:"mailto:WannacottL@gmail.com"},l.a.createElement("img",{src:"https://lh3.googleusercontent.com/qTG9HMCp-s_aubJGeQWkR6M_myn-aXDJnraWn9oePcY1dGbYqXibaeLQBAeMdmxSBus=s180",className:"hover-images",alt:"mailto:WannacottL@gmail.com"})))}}]),a}(n.Component)),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-light navbar-expand-xl",style:{backgroundColor:"#e3f2fd"}},l.a.createElement("a",{className:"navbar-brand"},"Lee Wannacott"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a.Link,{className:"Nav-link",as:o.b,to:"/Projects"},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a.Link,{className:"Nav-link",as:o.b,to:"/GitHub"},"Github Statistics")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a.Link,{className:"Nav-link",as:o.b,to:"/Contact"},"Contact")),l.a.createElement("img",{src:"https://cdn.auth0.com/blog/react-js/react.png",className:"react-spinner",style:{width:"3em",marginLeft:"34em"}}))))),l.a.createElement("div",null,l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:d}),l.a.createElement(h.a,{path:"/Projects",component:p}),l.a.createElement(h.a,{path:"/GitHub",component:_}),l.a.createElement(h.a,{path:"/Contact",component:v}))))}}]),a}(n.Component);var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(f,null)),l.a.createElement("footer",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(458),a(459);var w=l.a.createElement(o.a,null,l.a.createElement(T,null));c.a.render(w,document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.b469ca0b.chunk.js.map