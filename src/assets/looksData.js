import look1img from "../assets/look1nobg.png";
import look1bg from "../assets/guell.jpg"
import look1watch from "../assets/watch.png";
import look1jacket from "../assets/jacket.png"
import look1earrings from "../assets/earrings.png"
import look1shoes from "../assets/shoes.png"
import look1top from "../assets/top.png"
import look1pants from "../assets/pants.png"

import look2img from "../assets/look2nobg.png"
import look2bg from "../assets/coffeeparis.jpg"
import look2beret from "../assets/beret.png"
import look2coat from "../assets/blackcoat.png"
import look2earrings from "../assets/pearlearrings.png"
import look2boots from "../assets/blackbooties.png"
import look2sweater from "../assets/greysweater.png"
import look2watch from "../assets/silverwatch.png"
import look2bag from "../assets/zvbag.png"
import look2glasses from "../assets/blacksunglasses.png"
import look2tights from "../assets/tightscloseup.jpeg"


import look3img from "../assets/outfit3nobg.png"
import look3bg from "../assets/ams3.jpg"
import look3skirt from "../assets/burberrynobg.png"
import look3boots from "../assets/docswhitenobg.png"
import look3bag from "../assets/pradabeigenobg.png"
import look3puffer from "../assets/puffernobg.png"
import look3shirt from "../assets/turtlenecknobg.png"

const looksData = [
    {
        id: 1,
        title: "The \"Thursday in Barcelona\"",
        description: "go people watching. drink white wine. life is good",
        image: look1img,
        bgimage: look1bg,
        thumbnails: [
            {   id: 1,
                name: "watch",
                link: "https://us.cluse.com/products/la-tetragone-gold-mesh-white?channable=0035666964004357303130313230373030328a&variant=21354566549587&gclid=CjwKCAiAtK79BRAIEiwA4OskBrnQ1PXq8lxsuD0j1KVLMyGZsIoKx4vt_jSs7NBFPyeCU3f2jKnxbxoCYc8QAvD_BwE",
                image: look1watch,
            },
            {   id: 2,
                name: "jacket",
                link: "https://www.stories.com/en_usd/clothing/jackets-coats/jackets/product.short-oversized-puffer-jacket-beige.0912017002.html?gclid=CjwKCAiAtK79BRAIEiwA4OskBiFlpvrUXCqul6EJqOR8xvlGjRqkI5UfpO0RxglxXx-xJBFhRrXaLxoCRvkQAvD_BwE",
                image: look1jacket
            },
            {   id:3,
                name:"earrings", 
                link: "https://bananarepublic.gap.com/browse/product.do?pid=590651002&vid=1&tid=brpl000011&kwid=1&ap=7&gclid=CjwKCAiAtK79BRAIEiwA4OskBgqeC5CJkijvqOZVgSxB1_uzB_KI2S7lr4iM-AB1240DdnwvAotamhoCij0QAvD_BwE&gclsrc=aw.ds",
                image: look1earrings
            },
            {   id: 4,
                name: "shoes",
                link: "https://www.converse.com/shop/p/canvas-platform-chuck-taylor-all-star-womens-high-top-shoe/560846C_075.html?cp=PLA_PRF_CNV_NA_US_EN_20190226_CPCS_CPCS-Shopping-[B]%20Shoes%20-%20Womens_X_X_X_X_Google_X_X__Desktop/Tablet-[B]%20Shoes%20-%20Womens_X_X&gclid=CjwKCAiAtK79BRAIEiwA4OskBnbC6ae1QmdWn9HPeMwn_P_acahVBexRJODhXyhADxtDfmhwntve2RoCi4kQAvD_BwE",
                image: look1shoes
            },
            {   id: 5,
                name: "top",
                link: "https://www.zara.com/us/en/cropped-tank-top-trf-p03253314.html?v1=51061437&gclid=CjwKCAiAtK79BRAIEiwA4OskBv3pJ6MIfqR3VF1UuIfIhuK0HAspOkKZEFKzQixjrnGZ9I3rGcR8dhoCBCkQAvD_BwE",
                image: look1top
            },
            {   id:6,
                name: "pants",
                link: "https://www.abercrombie.com/shop/us/p/ultra-high-rise-cropped-wide-leg-jeans-41305342?seq=01&source=googleshopping&cmp=PLA:EVG:20:A:D:USCA:X:GGL:X:SHOP:X:X:X:X:x:SC+Shopping+-+ANF+-+Desktop_All+Products_PRODUCT_GROUP&gclid=CjwKCAiAtK79BRAIEiwA4OskBvYQFvsb0Z5EgDJl5NAQ5JBIyQLnkfc7RT_JkEp1JR4o3pacu8BeFxoCbD0QAvD_BwE&gclsrc=aw.ds",
                image: look1pants
            }

        ]

    },
    {
        id: 2,
        title:"The \"Morning Coffee in Paris\"",
        description: "take a quick break from the glamour",
        image: look2img,
        bgimage: look2bg,
        thumbnails: [
            {   id:1,
                name: "beret",
                link: "https://www.zara.com/us/en/wool-beret-p03739226.html?v1=71292478",
                image: look2beret,
            },
            {   id:2,
                name: "coat",
                link: "https://www.amazon.com/Loose-Women-Black-Covered-Button/dp/B07WT9R4D2",
                image: look2coat
            },
            {   id:3,
                name:"pearl earrings", 
                link:"https://www.talbots.com/freshwater-pearl-leverback-earrings/P184065367.html?dwvar_P184065367_color=PEARL/STERLING%20SILVER&dwvar_P184065367_sizeType=AC&dwvar_P184065367_size=001",
                image: look2earrings
            },
            {   id: 4,
                name: "boots",
                link: "https://www.revolve.com/tony-bianco-brazen-bootie-in-black-luxe/dp/TONR-WZ143/?d=F&_cclid=Google_CjwKCAiAt9z-BRBCEiwA_bWv-IOM71aYsbYps2TIWoxZoJHSdbtEvGWiSOTabf7JLrFAjoxK4nQVdRoC1U0QAvD_BwE&countrycode=US&currency=USD&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-IOM71aYsbYps2TIWoxZoJHSdbtEvGWiSOTabf7JLrFAjoxK4nQVdRoC1U0QAvD_BwE&gclsrc=aw.ds&product=TONR-WZ143&bneEl=false&",
                image: look2boots
            },
            {   id: 5,
                name: "sweater",
                link: "https://us.shein.com/Turtle-Neck-Drop-Shoulder-Rib-knit-Sweater-Dress-p-1635926-cat-2218.html?url_from=adplaswdress04200918833M_ssc&gclid=Cj0KCQiAifz-BRDjARIsAEElyGKoPYTKH1_cc4K9KIHxvydvQ5ThUDk0ypwggAXOyEzR2qaUPN-8l8IaAmr4EALw_wcB",
                image: look2sweater
            },
            {   id:6,
                name: "watch",
                link: "https://vincerowatches.com/products/the-eros-mesh-silver-sunray?variant=30343054688346&glCountry=US&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-K_BWl86EmMu5495Ct0NopcFNGZTbsvR4CJoL01TQ2Y9NoDYRLJlPBoC6RsQAvD_BwE",
                image: look2watch
            },
            {   id:7,
                name: "bag",
                link:"https://www.bloomingdales.com/shop/product/zadig-voltaire-rock-leather-shoulder-bag?ID=3048038&pla_country=US&cm_mmc=Google-PLA-ADC-_-Focus_and_Market_Share_TROAS-_-zadig_and_voltaire-_-3607621991068USA&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-NzKbNbP7rXt7QLWs4S9sw0tJeToq9odRjF0zz2M2bPXTPy6H6yzJxoCUKIQAvD_BwE",
                image: look2bag
            }
            ,
            {   id:8,
                name: "glasses",
                link: "https://www.shopbop.com/halfmoon-magic-sunglasses-le-specs/vp/v=1/1592660453.htm?gclid=CjwKCAiAt9z-BRBCEiwA_bWv-GcbMFi-oqadWq6cXSE6cDICRn-o9zR3RAgnGXx-7LEsB_vp52BYZBoCKP8QAvD_BwE&currencyCode=USD&extid=SE_froogle_SC_usa&cvosrc=cse.google.LSPEC30041&cvo_campaign=SB_Google_USD&ef_id=CjwKCAiAt9z-BRBCEiwA_bWv-GcbMFi-oqadWq6cXSE6cDICRn-o9zR3RAgnGXx-7LEsB_vp52BYZBoCKP8QAvD_BwE:G:s&s_kwcid=AL!3510!3!58973625617!!!g!320506749744!",
                image: look2glasses
            },
            {   id:9,
                name: "tights",
                link:"https://www.farfetch.com/shopping/women/gucci-double-g-net-tights-item-15432610.aspx?fsb=1&size=20&storeid=9352&utm_source=google&utm_medium=cpc&utm_keywordid=119358254&utm_shoppingproductid=15432610-83&pid=google_search&af_channel=Search&c=2069190620&af_c_id=2069190620&af_siteid=&af_keywords=pla-297945814069&af_adset_id=81772945332&af_ad_id=277393252298&af_sub1=119358254&af_sub5=15432610-83&is_retargeting=true&shopping=yes&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-DU_2Sh_VksCbtPXkfGBR20mrgmArom60LI6tlJ2yFdYYb2SuzrRJBoCkskQAvD_BwE",
                image: look2tights
            }
        ]


    },
    {
        id: 3,
        title:"The \"Amsterdam\"",
        description:"van gogh would approve",
        image: look3img,
        bgimage: look3bg,
        thumbnails: [
            {   id: 1,
                name: "skirt",
                link: "https://www.fwrd.com/mobile/product-burberry-belted-mini-skirt-in-archive-beige/BURF-WQ3/?d=Womens&aliasURL=product-burberry-belted-mini-skirt/BURF-WQ3&site=f&product=BURF-WQ3",
                image: look3skirt,
            },
            {   id:2,
                name: "white docs",
                link: "https://www.drmartens.com.au/1460-mono-smooth-leather-boots-14357100-wsm.html?ef_id=EAIaIQobChMIkMa86s3B7AIVzRErCh114QfREAQYAiABEgJDVfD_BwE:G:s&s_kwcid=AL!6457!3!425130317464!!!u!302713503780!&gclid=EAIaIQobChMIkMa86s3B7AIVzRErCh114QfREAQYAiABEgJDVfD_BwE#93=3651",
                image: look3boots
            },
            {   id: 3,
                name:"prada bag", 
                link: "https://www.prada.com/us/en/women/bags/shoulder_bags/products.re-edition_2000_nylon_mini_bag.1NE515_2DH0_F0770.html?utm_campaign=GoogleShopping_US&utm_medium=CPC&utm_source=Google&utm_content=Shopping&s_kwcid=AL!8549!3!333836067834!!!g!838323195081!&gclid=CjwKCAiAz4b_BRBbEiwA5XlVVoH0s6ywhS0SuWm73on7wqG2_ayazoUicg0XSfmThtE7Sxz009RaqBoCcY0QAvD_BwE&gclsrc=aw.ds",
                image: look3bag
            },
            {   id: 4,
                name: "puffer",
                link: "https://www.xdreams.co/collections/outerwear/products/lhs-cream-short-puffer",
                image: look3puffer
            },
            {   id: 5,
                name: "shirt",
                link:"https://bananarepublicfactory.gapfactory.com/browse/product.do?pid=653179011&vid=1&tid=bfpl000002&kwid=1&ap=7&gclid=CjwKCAiAz4b_BRBbEiwA5XlVVpwxWWCbTn-vw6o41ArnwfmC5zgl2wmasQqxVzCtKbc6xoTQ4WgfxRoCXRUQAvD_BwE&gclsrc=aw.ds",
                image: look3shirt
            }
        ]


    }

]

export default looksData;