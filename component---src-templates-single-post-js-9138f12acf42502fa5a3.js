(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8iUL":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("b+5I");t.a=function(e){var t=e.author,a=e.date;return n.a.createElement("p",{className:"info"},"By"," ",n.a.createElement(l.Link,{to:"/authors/"+Object(c.slugify)(t),className:"link"},t),", on ",a,".")}},"93cd":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("XjCY"),c=a("Wbzz"),o="2855661546";t.a=function(){return n.a.createElement(c.StaticQuery,{query:o,render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Latest Blogs"),n.a.createElement("section",{className:"posts-container"},e.allMarkdownRemark.edges.map((function(e){var t=e.node;return n.a.createElement(l.a,{key:t.id,title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date,slug:t.fields.slug,tags:t.frontmatter.tags,imgSrc:t.frontmatter.image[0].childImageSharp.fluid.src})})),n.a.createElement(c.Link,{to:"/articles"},n.a.createElement("button",{className:"tag"},"More blogs →"))))}})}},XjCY:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=(a("CyK1"),a("rtRN")),o=a("8iUL");t.a=function(e){var t=e.title,a=e.slug,r=e.author,i=e.date,s=e.imgSrc,m=e.tags;return n.a.createElement(l.Link,{to:"/"+a},n.a.createElement("section",{className:"post"},n.a.createElement("img",{src:s,alt:"Blog Cover",width:"128px",height:"128px",id:"blog-img"})," ",n.a.createElement("section",{className:"blog-info"},n.a.createElement("h3",null,t),n.a.createElement(o.a,{author:r,date:i}),n.a.createElement(c.a,{tagsList:m}))))}},"b+5I":function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},desn:function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",(function(){return f}));var r=a("q1tI"),n=a.n(r),l=a("Bl7J"),c=a("vrFN"),o=(a("CyK1"),a("rtRN")),i=a("8iUL"),s=a("93cd"),m=a("Wbzz"),u=a("XjCY"),g="4146590038",d=function(){return n.a.createElement(m.StaticQuery,{query:g,render:function(e){var t=e.allMarkdownRemark.totalCount-2,a=Math.floor(Math.random()*t),r=0;do{r=Math.floor(Math.random()*t)}while(r===a);var l=[e.allMarkdownRemark.edges[a],e.allMarkdownRemark.edges[r]];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Also Read"),n.a.createElement("section",{className:"posts-container"},l.map((function(e){var t=e.node;return n.a.createElement(u.a,{title:t.frontmatter.title,slug:t.fields.slug,author:t.frontmatter.author,date:t.frontmatter.date,imgSrc:t.frontmatter.image[0].childImageSharp.fluid.src,tags:t.frontmatter.tags})}))))}})},f="27079647";t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter;return n.a.createElement(l.a,null,n.a.createElement(c.a,{title:a.title}),n.a.createElement("section",null,n.a.createElement("p",{id:"single-blog-title"},a.title),n.a.createElement("img",{src:a.image[0].childImageSharp.fluid.src,alt:"Blog Cover",id:"single-blog-img"}),n.a.createElement("section",{className:"single-blog-container"},n.a.createElement(i.a,{author:a.author,date:a.date}),n.a.createElement(o.a,{tagsList:a.tags}),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:t.markdownRemark.html},className:"single-blog-matter"})),n.a.createElement(s.a,null),n.a.createElement(d,null)))}},rtRN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("b+5I");t.a=function(e){var t=e.tagsList;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return n.a.createElement(l.Link,{key:e,to:"/tags/"+Object(c.slugify)(e)},n.a.createElement("button",{className:"tag-btn"},e))})))}}}]);
//# sourceMappingURL=component---src-templates-single-post-js-9138f12acf42502fa5a3.js.map