(this.webpackJsonpfabfits=this.webpackJsonpfabfits||[]).push([[0],{50:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),i=a.n(s),n=a(23),A=a.n(n),l=(a(50),a(11)),o=a(12),r=a(14),j=a(13),d=a(70),m=a(68),b=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(d.a,{bg:"transparent",expand:"md",className:"py-0 fixed-top",children:[Object(c.jsx)(d.a.Brand,{href:"/",children:" FABFITS "}),Object(c.jsx)(d.a.Collapse,{id:"navLinks",children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)("a",{href:"/",children:"HOME"}),Object(c.jsx)("a",{href:"/looks",children:"LOOKS"}),Object(c.jsx)("a",{href:"/contact",children:"CONTACT"})]})})]})}}]),a}(i.a.Component),h=a.p+"static/media/glasspalace.b0acd646.jpg",g=a.p+"static/media/noraglasspalace.7c0e4e5a.jpg",p=a(62),u=a(63),k=a(40),O=a(64),w=a(69),x=a(65),B=a(66),f=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("footer",{className:"page-footer font-small black pt-4",children:Object(c.jsxs)("div",{className:"footer-copyright text-center py-3",children:["\xa9 2021 Copyright:",Object(c.jsx)("a",{href:"https://www.fab-fits.com",children:" Fab-Fits.com"})]})})})}}]),a}(i.a.Component),C=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"parallax"}),Object(c.jsx)("div",{className:"parallax",children:Object(c.jsx)(p.a,{fluid:!0,className:"align-items-center",children:Object(c.jsx)(u.a,{children:Object(c.jsxs)(k.a,{lg:12,className:"text-center",children:[Object(c.jsx)("h1",{children:"WELCOME"}),Object(c.jsx)("p",{children:" to your new virtual stylist."}),Object(c.jsxs)("a",{href:"/looks",children:[" ",Object(c.jsx)(O.a,{variant:"basic",children:" shop the looks"})]})]})})})}),Object(c.jsx)(u.a,{fluid:!0,className:"carouselcontainer",children:Object(c.jsxs)(w.a,{children:[Object(c.jsxs)(w.a.Item,{children:[Object(c.jsx)(x.a,{src:h,alt:"First slide"}),Object(c.jsx)(w.a.Caption,{children:Object(c.jsx)("h2",{children:"discover the latest in european fashion"})})]}),Object(c.jsx)(w.a.Item,{children:Object(c.jsx)(x.a,{src:g,alt:"Second slide"})})]})}),Object(c.jsx)(B.a,{className:"parallax2",children:Object(c.jsx)(k.a,{lg:6,className:"text-center instagrambox",children:Object(c.jsxs)("a",{href:"https://www.instagram.com/fab_fits/",children:[Object(c.jsxs)("span",{className:"btn btn-basic instagrambutton",children:["FOLLOW US ON ",Object(c.jsx)("i",{className:"fab fa-instagram"})," "]})," "]})})}),Object(c.jsx)(f,{})]})}}]),a}(i.a.Component),E=a(42),y=a(67),v=a(43),I=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t,a){e.setState(Object(E.a)({},t,a.target.value))},e.state={name:"",email:"",subject:"",message:""},e}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a={from_name:t.name,from_email:t.email,to_name:"nbmarji",subject:t.subject,message:t.message};v.send("service_mw4f9bb","template_kkbrkjr",a,Object({NODE_ENV:"production",PUBLIC_URL:"/Fab-Fits",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY),alert("email sent"),this.reset()}},{key:"reset",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"chat mt-5",children:[Object(c.jsx)("h2",{children:" let's chat! :) "}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:" inquiries"}),Object(c.jsx)("li",{children:" questions "}),Object(c.jsx)("li",{children:" comments"})]})]}),Object(c.jsxs)(y.a,{onSubmit:this.handleSubmit.bind(this),className:"px-5",children:[Object(c.jsxs)(y.a.Group,{controlId:"email",children:[Object(c.jsx)(y.a.Label,{children:"Email address"}),Object(c.jsx)(y.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email"})]}),Object(c.jsxs)(y.a.Group,{controlId:"name",children:[Object(c.jsx)(y.a.Label,{children:"Name"}),Object(c.jsx)(y.a.Control,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange.bind(this,"name"),placeholder:"Name"})]}),Object(c.jsxs)(y.a.Group,{controlId:"subject",children:[Object(c.jsx)(y.a.Label,{children:"Subject"}),Object(c.jsx)(y.a.Control,{type:"text",name:"subject",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject"})]}),Object(c.jsxs)(y.a.Group,{controlId:"message",children:[Object(c.jsx)(y.a.Label,{children:"Message"}),Object(c.jsx)(y.a.Control,{type:"textarea",value:this.state.message,onChange:this.handleChange.bind(this,"message")})]}),Object(c.jsx)(O.a,{variant:"basic",type:"submit",children:"Submit"})]}),Object(c.jsx)(f,{})]})}}]),a}(i.a.Component),D=[{id:1,title:'The "Thursday in Barcelona"',description:"go people watching. drink white wine. life is good",image:a.p+"static/media/look1nobg.d434bfdd.png",bgimage:a.p+"static/media/guell.287e07ac.jpg",thumbnails:[{id:1,name:"watch",link:"https://us.cluse.com/products/la-tetragone-gold-mesh-white?channable=0035666964004357303130313230373030328a&variant=21354566549587&gclid=CjwKCAiAtK79BRAIEiwA4OskBrnQ1PXq8lxsuD0j1KVLMyGZsIoKx4vt_jSs7NBFPyeCU3f2jKnxbxoCYc8QAvD_BwE",image:a.p+"static/media/watch.195a7302.png"},{id:2,name:"jacket",link:"https://www.stories.com/en_usd/clothing/jackets-coats/jackets/product.short-oversized-puffer-jacket-beige.0912017002.html?gclid=CjwKCAiAtK79BRAIEiwA4OskBiFlpvrUXCqul6EJqOR8xvlGjRqkI5UfpO0RxglxXx-xJBFhRrXaLxoCRvkQAvD_BwE",image:a.p+"static/media/jacket.6d019928.png"},{id:3,name:"earrings",link:"https://bananarepublic.gap.com/browse/product.do?pid=590651002&vid=1&tid=brpl000011&kwid=1&ap=7&gclid=CjwKCAiAtK79BRAIEiwA4OskBgqeC5CJkijvqOZVgSxB1_uzB_KI2S7lr4iM-AB1240DdnwvAotamhoCij0QAvD_BwE&gclsrc=aw.ds",image:a.p+"static/media/earrings.4b59da33.png"},{id:4,name:"shoes",link:"https://www.converse.com/shop/p/canvas-platform-chuck-taylor-all-star-womens-high-top-shoe/560846C_075.html?cp=PLA_PRF_CNV_NA_US_EN_20190226_CPCS_CPCS-Shopping-[B]%20Shoes%20-%20Womens_X_X_X_X_Google_X_X__Desktop/Tablet-[B]%20Shoes%20-%20Womens_X_X&gclid=CjwKCAiAtK79BRAIEiwA4OskBnbC6ae1QmdWn9HPeMwn_P_acahVBexRJODhXyhADxtDfmhwntve2RoCi4kQAvD_BwE",image:a.p+"static/media/shoes.a01909d4.png"},{id:5,name:"top",link:"https://www.zara.com/us/en/cropped-tank-top-trf-p03253314.html?v1=51061437&gclid=CjwKCAiAtK79BRAIEiwA4OskBv3pJ6MIfqR3VF1UuIfIhuK0HAspOkKZEFKzQixjrnGZ9I3rGcR8dhoCBCkQAvD_BwE",image:a.p+"static/media/top.a8a8dc83.png"},{id:6,name:"pants",link:"https://www.abercrombie.com/shop/us/p/ultra-high-rise-cropped-wide-leg-jeans-41305342?seq=01&source=googleshopping&cmp=PLA:EVG:20:A:D:USCA:X:GGL:X:SHOP:X:X:X:X:x:SC+Shopping+-+ANF+-+Desktop_All+Products_PRODUCT_GROUP&gclid=CjwKCAiAtK79BRAIEiwA4OskBvYQFvsb0Z5EgDJl5NAQ5JBIyQLnkfc7RT_JkEp1JR4o3pacu8BeFxoCbD0QAvD_BwE&gclsrc=aw.ds",image:a.p+"static/media/pants.7d187c5e.png"}]},{id:2,title:'The "Morning Coffee in Paris"',description:"take a quick break from the glamour",image:a.p+"static/media/look2nobg.4f9d5bd9.png",bgimage:a.p+"static/media/coffeeparis.4c67b6c2.jpg",thumbnails:[{id:1,name:"beret",link:"https://www.zara.com/us/en/wool-beret-p03739226.html?v1=71292478",image:a.p+"static/media/beret.0980e636.png"},{id:2,name:"coat",link:"https://www.amazon.com/Loose-Women-Black-Covered-Button/dp/B07WT9R4D2",image:a.p+"static/media/blackcoat.43dda282.png"},{id:3,name:"pearl earrings",link:"https://www.talbots.com/freshwater-pearl-leverback-earrings/P184065367.html?dwvar_P184065367_color=PEARL/STERLING%20SILVER&dwvar_P184065367_sizeType=AC&dwvar_P184065367_size=001",image:a.p+"static/media/pearlearrings.8d50826f.png"},{id:4,name:"boots",link:"https://www.revolve.com/tony-bianco-brazen-bootie-in-black-luxe/dp/TONR-WZ143/?d=F&_cclid=Google_CjwKCAiAt9z-BRBCEiwA_bWv-IOM71aYsbYps2TIWoxZoJHSdbtEvGWiSOTabf7JLrFAjoxK4nQVdRoC1U0QAvD_BwE&countrycode=US&currency=USD&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-IOM71aYsbYps2TIWoxZoJHSdbtEvGWiSOTabf7JLrFAjoxK4nQVdRoC1U0QAvD_BwE&gclsrc=aw.ds&product=TONR-WZ143&bneEl=false&",image:a.p+"static/media/blackbooties.3189e68a.png"},{id:5,name:"sweater",link:"https://us.shein.com/Turtle-Neck-Drop-Shoulder-Rib-knit-Sweater-Dress-p-1635926-cat-2218.html?url_from=adplaswdress04200918833M_ssc&gclid=Cj0KCQiAifz-BRDjARIsAEElyGKoPYTKH1_cc4K9KIHxvydvQ5ThUDk0ypwggAXOyEzR2qaUPN-8l8IaAmr4EALw_wcB",image:a.p+"static/media/greysweater.524aad11.png"},{id:6,name:"watch",link:"https://vincerowatches.com/products/the-eros-mesh-silver-sunray?variant=30343054688346&glCountry=US&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-K_BWl86EmMu5495Ct0NopcFNGZTbsvR4CJoL01TQ2Y9NoDYRLJlPBoC6RsQAvD_BwE",image:a.p+"static/media/silverwatch.20c544dd.png"},{id:7,name:"bag",link:"https://www.bloomingdales.com/shop/product/zadig-voltaire-rock-leather-shoulder-bag?ID=3048038&pla_country=US&cm_mmc=Google-PLA-ADC-_-Focus_and_Market_Share_TROAS-_-zadig_and_voltaire-_-3607621991068USA&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-NzKbNbP7rXt7QLWs4S9sw0tJeToq9odRjF0zz2M2bPXTPy6H6yzJxoCUKIQAvD_BwE",image:a.p+"static/media/zvbag.cf689cef.png"},{id:8,name:"glasses",link:"https://www.shopbop.com/halfmoon-magic-sunglasses-le-specs/vp/v=1/1592660453.htm?gclid=CjwKCAiAt9z-BRBCEiwA_bWv-GcbMFi-oqadWq6cXSE6cDICRn-o9zR3RAgnGXx-7LEsB_vp52BYZBoCKP8QAvD_BwE&currencyCode=USD&extid=SE_froogle_SC_usa&cvosrc=cse.google.LSPEC30041&cvo_campaign=SB_Google_USD&ef_id=CjwKCAiAt9z-BRBCEiwA_bWv-GcbMFi-oqadWq6cXSE6cDICRn-o9zR3RAgnGXx-7LEsB_vp52BYZBoCKP8QAvD_BwE:G:s&s_kwcid=AL!3510!3!58973625617!!!g!320506749744!",image:a.p+"static/media/blacksunglasses.8223c1e7.png"},{id:9,name:"tights",link:"https://www.farfetch.com/shopping/women/gucci-double-g-net-tights-item-15432610.aspx?fsb=1&size=20&storeid=9352&utm_source=google&utm_medium=cpc&utm_keywordid=119358254&utm_shoppingproductid=15432610-83&pid=google_search&af_channel=Search&c=2069190620&af_c_id=2069190620&af_siteid=&af_keywords=pla-297945814069&af_adset_id=81772945332&af_ad_id=277393252298&af_sub1=119358254&af_sub5=15432610-83&is_retargeting=true&shopping=yes&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-DU_2Sh_VksCbtPXkfGBR20mrgmArom60LI6tlJ2yFdYYb2SuzrRJBoCkskQAvD_BwE",image:"data:image/jpeg;base64,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"}]},{id:3,title:'The "Amsterdam"',description:"van gogh would approve",image:a.p+"static/media/outfit3nobg.8da8e53b.png",bgimage:a.p+"static/media/ams3.4ded4ee7.jpg",thumbnails:[{id:1,name:"skirt",link:"https://www.fwrd.com/mobile/product-burberry-belted-mini-skirt-in-archive-beige/BURF-WQ3/?d=Womens&aliasURL=product-burberry-belted-mini-skirt/BURF-WQ3&site=f&product=BURF-WQ3",image:a.p+"static/media/burberrynobg.11ee918e.png"},{id:2,name:"white docs",link:"https://www.drmartens.com.au/1460-mono-smooth-leather-boots-14357100-wsm.html?ef_id=EAIaIQobChMIkMa86s3B7AIVzRErCh114QfREAQYAiABEgJDVfD_BwE:G:s&s_kwcid=AL!6457!3!425130317464!!!u!302713503780!&gclid=EAIaIQobChMIkMa86s3B7AIVzRErCh114QfREAQYAiABEgJDVfD_BwE#93=3651",image:a.p+"static/media/docswhitenobg.dfef59cc.png"},{id:3,name:"prada bag",link:"https://www.prada.com/us/en/women/bags/shoulder_bags/products.re-edition_2000_nylon_mini_bag.1NE515_2DH0_F0770.html?utm_campaign=GoogleShopping_US&utm_medium=CPC&utm_source=Google&utm_content=Shopping&s_kwcid=AL!8549!3!333836067834!!!g!838323195081!&gclid=CjwKCAiAz4b_BRBbEiwA5XlVVoH0s6ywhS0SuWm73on7wqG2_ayazoUicg0XSfmThtE7Sxz009RaqBoCcY0QAvD_BwE&gclsrc=aw.ds",image:a.p+"static/media/pradabeigenobg.3907dadd.png"},{id:4,name:"puffer",link:"https://www.xdreams.co/collections/outerwear/products/lhs-cream-short-puffer",image:a.p+"static/media/puffernobg.6162a5a1.png"},{id:5,name:"shirt",link:"https://bananarepublicfactory.gapfactory.com/browse/product.do?pid=653179011&vid=1&tid=bfpl000002&kwid=1&ap=7&gclid=CjwKCAiAz4b_BRBbEiwA5XlVVpwxWWCbTn-vw6o41ArnwfmC5zgl2wmasQqxVzCtKbc6xoTQ4WgfxRoCXRUQAvD_BwE&gclsrc=aw.ds",image:a.p+"static/media/turtlenecknobg.43427ed2.png"}]}],R=a(29);var S=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(p.a,{fluid:!0,className:"align-items-center",children:Object(c.jsx)(k.a,{lg:12,children:Object(c.jsxs)("div",{id:"headingGroup",className:"text-black text-center d-lg-block mt-5",children:[Object(c.jsx)("h1",{className:"",children:"LOOKS"}),Object(c.jsx)("p",{children:"check out our exclusive styles here!"})]})})}),Object(c.jsx)(B.a,{children:D.map((function(e,t){return Object(c.jsx)(k.a,{md:4,className:"lookprev",children:Object(c.jsx)(R.b,{to:"/look/".concat(t+1),children:Object(c.jsx)("img",{src:e.image,alt:""})})},t)}))}),Object(c.jsx)(f,{})]})},Q=function(e){var t=e.match,a=(e.location,t.params.lookId);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsxs)("section",{className:"lookpage",style:{backgroundImage:"url("+D[a-1].bgimage+")"},children:[Object(c.jsx)(B.a,{className:"lookcontent mt-5 justify-content-center",children:Object(c.jsxs)("div",{className:"look ml-5 justify-content-center",children:[Object(c.jsxs)("h4",{children:[" ",D[a-1].title," "]}),Object(c.jsxs)("p",{children:[" ",D[a-1].description," "]}),Object(c.jsx)(x.a,{fluid:!0,src:D[a-1].image,alt:""})]})}),Object(c.jsx)(B.a,{className:"lookcontent mt-5 justify-content-center",children:Object(c.jsx)("div",{className:"lookthumbnails mr-5 ml-5",children:D[a-1].thumbnails.map((function(e){return Object(c.jsx)("span",{children:Object(c.jsxs)("a",{href:e.link,children:[" ",Object(c.jsx)("img",{src:e.image,alt:""})]})},e.id)}))})})]}),Object(c.jsx)(f,{})]})},M=(a(59),a(7)),P=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(R.a,{basename:"/",children:[console.log("working"),Object(c.jsx)(M.a,{exact:!0,path:"/",component:C}),Object(c.jsx)(M.a,{exact:!0,path:"/contact",component:I}),Object(c.jsx)(M.a,{exact:!0,path:"/looks",component:S}),Object(c.jsx)(M.a,{path:"/look/:lookId",component:Q})]})})}}]),a}(i.a.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};A.a.render(Object(c.jsx)(P,{}),document.getElementById("root")),K()}},[[60,1,2]]]);
//# sourceMappingURL=main.2fbb52ee.chunk.js.map