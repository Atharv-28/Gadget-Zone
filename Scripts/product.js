class Product {
    constructor(proImg, name, brandName, productType, specification, price) {
        this.proImg = proImg;
        this.name = name;
        this.brandName = brandName;
        this.productType = productType;
        this.specification = specification;
        this.price = price;
        this.aoi = proImg.getAttribute("src");
    }
    getProImg() {
        return this.aoi;
    }
    getName() {
        return this.name;
    }
    getBrandName() {
        return this.brandName;
    }
    getProType() {
        return this.productType;
    }
    getSpecification() {
        return this.specification;
    }
    getPrice() {
        return this.price;
    }
}


class Cart {
    constructor(proImg, name, brandName, productType, specification, price) {
        this.proImg = proImg;
        this.name = name;
        this.brandName = brandName;
        this.productType = productType;
        this.specification = specification;
        this.price = price;
    }
    getProImg() {
        return this.proImg;
    }
    getName() {
        return this.name;
    }
    getBrandName() {
        return this.brandName;
    }
    getProType() {
        return this.productType;
    }
    getSpecification() {
        return this.specification;
    }
    getPrice() {
        return this.price;
    }
}
//Adding Products 

//Laptops
var img1 = new Image();
img1.src = "./Assets/product-imgs/HP-Victus-15.jpg";
var spec1 = ["Processor- i7 ", " Ram- 16gb ", " Ssd- 512gb ", " GraphicsCard- RTX3050 "];
var myProduct1 = [new Product(img1, "Victus-15", "HP", "Laptop", spec1, "₹88,000")];

var img2 = new Image();
img2.src = "./Assets/product-imgs/Asus-Tuf-15.jpg";
var spec2 = ["Processor- i5 ", " Ram- 8gb ", " Ssd- 512gb ", " GraphicsCard- GTX1650 "];
myProduct1.push(new Product(img2, "TUF-15", "Asus", "Laptop", spec2, "₹60,000"));

var img3 = new Image();
img3.src = "./Assets/product-imgs/Asus-Rog-15.jpg";
var spec3 = ["Processor- i9 ", " Ram- 32gb ", " Ssd- 2tb ", " GraphicsCard- RTX3080 "];
myProduct1.push(new Product(img3, "ROG-15", "Asus", "Laptop", spec3, "₹2,30,000"));

var img4 = new Image();
img4.src = "./Assets/product-imgs/Alienware-17.png";
var spec4 = ["Processor- i9 ", " Ram- 32gb ", " Ssd- 2tb ", " GraphicsCard- RTX3070 "];
myProduct1.push(new Product(img4, "Alienware-17", "Dell", "Laptop", spec4, "₹2,45,000"));

var img5 = new Image();
img5.src = "./Assets/product-imgs/Acer-Predetor.jpg";
var spec5 = ["Processor- i5 ", " Ram- 16gb ", " Ssd- 512 ", " GraphicsCard- RTX3050 "];
myProduct1.push(new Product(img5, "Predetor", "Acer", "Laptop", spec5, "₹68,000"));

var img6 = new Image();
img6.src = "./Assets/product-imgs/Lenovo_Legion_7.jpg";
var spec6 = ["Processor- i7 ", " Ram- 16gb ", " Ssd- 512 ", " GraphicsCard- RTX3060 "];
myProduct1.push(new Product(img6, "Legion-7", "Lenovo", "Laptop", spec6, "₹1,02,000"));

//Home-appliences
//Washing Machines
var img7 = new Image();
img7.src = "./Assets/product-imgs/Bosch-frontLoad.jpg";
var spec7 = ["Front-Load Washing ", " 10 Washing Modes", "7 Kg"];
myProduct1.push(new Product(img7, "Series-6", "Bosch", "HA", spec7, "₹39,000"));

var img8 = new Image();
img8.src = "./Assets/product-imgs/ifb-frontLoad.jpg";
var spec8 = ["Front-Load Washing ", " 8 Washing Modes", "5 Kg"];
myProduct1.push(new Product(img8, "Senator-Aqua", "IFB", "HA", spec8, "₹33,000"));

var img9 = new Image();
img9.src = "./Assets/product-imgs/samsung-frontLoad.jpeg";
var spec9 = ["Front-Load Washing ", " 8 Washing Modes", "7 Kg"];
myProduct1.push(new Product(img9, "Smart-Clean", "Samsung", "HA", spec9, "₹36,000"));

var img10 = new Image();
img10.src = "./Assets/product-imgs/whirpool-topLoad.jpeg";
var spec10 = ["Top-Load Washing ", " 6 Washing Modes", "4 Kg"];
myProduct1.push(new Product(img10, "360", "Whirpool", "HA", spec10, "₹24,000"));

//Microwaves
var img11 = new Image();
img11.src = "./Assets/product-imgs/LG-microwave.jpeg";
var spec11 = ["Smart Oven", " 6 Cooking Modes", "15 Litres"];
myProduct1.push(new Product(img11, "Microwave", "LG", "HA", spec11, "₹4,500"));

var img12 = new Image();
img12.src = "./Assets/product-imgs/Samsung-microwave.jpeg";
var spec12 = ["Smart Oven", " 8 Cooking Modes", "25 Litres"];
myProduct1.push(new Product(img12, "Microwave", "Samsung", "HA", spec12, "₹11,500"));

var img13 = new Image();
img13.src = "./Assets/product-imgs/whirpool-microwave.jpeg";
var spec13 = ["Smart Oven", " 9 Cooking Modes", "22 Litres"];
myProduct1.push(new Product(img13, "Microwave", "Whirpool", "HA", spec13, "₹12,000"));

//Fridge
var img14 = new Image();
img14.src = "./Assets/product-imgs/whirpool-fridge.jpg";
var spec14 = ["Convertable ", " Dual Door Fridge ", " 122 Litres"];
myProduct1.push(new Product(img14, "Convertable", "Whirpool", "HA", spec14, "₹72,000"));

var img15 = new Image();
img15.src = "./Assets/product-imgs/LG-fridge.jpg";
var spec15 = ["Smart Inverter Compressor ", " Dual Door Fridge ", " 132 Litres"];
myProduct1.push(new Product(img15, "SIC", "LG", "HA", spec15, "₹82,000"));

var img16 = new Image();
img16.src = "./Assets/product-imgs/samsung-fridge.jpg";
var spec16 = ["Convertable ", " Dual Door Fridge ", " 92 Litres"];
myProduct1.push(new Product(img16, "Convertable", "Samsung", "HA", spec16, "₹42,000"));

//Mobiles
var img17 = new Image();
img17.src = "./Assets/product-imgs/vivo-t2x.png";
var spec17 = ["Processor- MTK 6020 ", " Ram- 8GB ", " Storage- 128GB ", " Battery- 5000mAh "];
myProduct1.push(new Product(img17, "T2x 5g", "Vivo", "Mobiles", spec17, "₹16,000"));

var img18 = new Image();
img18.src = "./Assets/product-imgs/poco-m4.png";
var spec18 = ["Processor- MTK 700 ", " Ram- 4GB ", " Storage- 64GB ", " Battery- 5000mAh "];
myProduct1.push(new Product(img18, "M4 5g", "Poco", "Mobiles", spec18, "₹12,000"));

var img19 = new Image();
img19.src = "./Assets/product-imgs/samsung-s23ultra.png";
var spec19 = ["Processor- Snapdragon 8 Gen 2 ", " Ram- 12GB ", " Storage- 256GB ", " Battery- 5000mAh "];
myProduct1.push(new Product(img19, "S23 Ultra", "Samsung", "Mobiles", spec19, "₹1,25,000"));

var img20 = new Image();
img20.src = "./Assets/product-imgs/apple-14pro.png";
var spec20 = ["Processor- A16 ", " Ram- 6GB ", " Storage- 128GB ", " Battery- 3000mAh "];
myProduct1.push(new Product(img20, "iPhone 14 Pro", "Apple", "Mobiles", spec20, "₹1,20,000"));

var img21 = new Image();
img21.src = "./Assets/product-imgs/realme-c55.png";
var spec21 = ["Processor- MTK G88 ", " Ram- 6GB ", " Storage- 64GB ", " Battery- 5000mAh "];
myProduct1.push(new Product(img21, "C55", "Realme", "Mobiles", spec21, "₹12,000"));

var img22 = new Image();
img22.src = "./Assets/product-imgs/redmi-10power.png";
var spec22 = ["Processor- Snapdragon 680 ", " Ram- 8GB ", " Storage- 128GB ", " Battery- 6000mAh "];
myProduct1.push(new Product(img22, "10 Power", "Redmi", "Mobiles", spec22, "₹13,000"));

//PC Components
var img23 = new Image();
img23.src = "./Assets/product-imgs/amd-ryzen7.png";
var spec23 = ["Ryzen 7-3700X ", " 3.6Ghz-4.4Ghz ", " Cache- 32MB ", " Cores- 8, Threads- 16 "];
myProduct1.push(new Product(img23, "Ryzen 7", "AMD", "PC", spec23, "₹28,500"));

var img24 = new Image();
img24.src = "./Assets/product-imgs/intel-i9.png";
var spec24 = ["Intel i9-12900KF ", " 5.2Ghz ", " Cache- 30MB ", " Cores- 16, Threads- 24 "];
myProduct1.push(new Product(img24, "i9", "Intel", "PC", spec24, "₹37,000"));

var img25 = new Image();
img25.src = "./Assets/product-imgs/acer-monitor.png";
var spec25 = ["27 inch ", " Full HD ", " LED ", " IPS Panel ", " 75Hz"];
myProduct1.push(new Product(img25, "Monitor", "Acer", "PC", spec25, "₹10,550"));

var img26 = new Image();
img26.src = "./Assets/product-imgs/Asrock-motherboard.png";
var spec26 = ["B450 ", " ATX "];
myProduct1.push(new Product(img26, "Steel Legend", "ASRock", "PC", spec26, "₹9,400"));

var img27 = new Image();
img27.src = "./Assets/product-imgs/wd-ssd.png";
var spec27 = ["Nvme SSD ", " 240GB "];
myProduct1.push(new Product(img27, "WD-Green", "Western Digital", "PC", spec27, "₹1,700"));

var img28 = new Image();
img28.src = "./Assets/product-imgs/corsair-ram.png";
var spec28 = ["DDR4 ", " 8GB ", " 3200MHz"];
myProduct1.push(new Product(img28, "Vengeance", "Corsair", "PC", spec28, "₹2,300"));

//Accessories
var img29 = new Image();
img29.src = "./Assets/product-imgs/zeb-key-mouse-1.png";
var spec29 = ["Combo ", " Pack of 2 ", " Wired"];
myProduct1.push(new Product(img29, "Zeb-Transformer", "Zebronics", "ACC", spec29, "₹1,200"));

var img30 = new Image();
img30.src = "./Assets/product-imgs/zeb-key-mouse-2.png";
var spec30 = ["Combo ", " Pack of 2 ", " Wired"];
myProduct1.push(new Product(img30, "Zeb-Transformer", "Zebronics", "ACC", spec30, "₹1,300"));

var img31 = new Image();
img31.src = "./Assets/product-imgs/ant-key-mouse-1.png";
var spec31 = ["Combo ", " Pack of 2 ", " Wired"];
myProduct1.push(new Product(img31, "KM1600", "Ant Esports", "ACC", spec31, "₹800"));

var img32 = new Image();
img32.src = "./Assets/product-imgs/mouse-pad.png";
var spec32 = ["Non-Slip ", " Rubber Base "];
myProduct1.push(new Product(img32, "MP_2084K", "NOCKOUT", "ACC", spec32, "₹198"));

var img33 = new Image();
img33.src = "./Assets/product-imgs/usb-hub.png";
var spec33 = ["Usb C ", " 4 in 1 "];
myProduct1.push(new Product(img33, "Multiport Adapter", "Bestor", "ACC", spec33, "₹400"));



//Animation 
function buttonAnimation(Vari) {
    Vari.classList.add("pressed");
    setTimeout(function () {
        Vari.classList.remove("pressed");
    }, 150);
}








//Search Bar Working
// Add this JavaScript code below your existing code

// Get references to the search elements
var searchInput = document.getElementById('searchbar');
var searchInputMob = document.getElementById('mob-searchbar');
var searchButton = document.getElementById('search-but');
var searchButtonMob = document.getElementById('mob-search-but');
var resultsContainer = document.getElementById('results');
var resultsContainersCont = document.getElementById('res-section');
// For width more than 650px
// Event listener for the search button click
searchButton.addEventListener('click', function () {
    var searchTerm = searchInput.value;
    searchTerm.toLowerCase();
    if (searchTerm.length !== 0) {
        var results = searchProducts(searchTerm);
        displayResults(results);
    }
    else if (searchTerm.length === 0) {
        resultsContainersCont.style.display = "none";
    }
});

// Function to search for products based on the given search term
function searchProducts(searchTerm) {
    var matchingProducts = [];

    for (var i = 0; i < myProduct1.length; i++) {
        var search_product = myProduct1[i];
        var search_productName = search_product.getName().toLowerCase();

        if (search_productName.includes(searchTerm)) {
            matchingProducts.push(search_product);
        }
    }

    return matchingProducts;
}

// Function to display the search results
function displayResults(results) {
    // Clear previous results
    resultsContainer.innerHTML = '';
    resultsContainersCont.style.display = "inline";
    resultsContainer.style.display = "inline";
    if (results.length === 0) {
        alert("No result found")
        resultsContainer.textContent = 'No results found.';
    } else {
        for (var i = 0; i < results.length; i++) {
            var res_product = results[i];
            var res_productElement = hapCreation([res_product], 0); // Create a product element using the existing hapCreation function

            resultsContainer.appendChild(res_productElement);
        }
    }
}


// For width less than 650px
searchButtonMob.addEventListener('click', function () {
    var searchTerm = searchInputMob.value;
    searchTerm.toLowerCase();
    if (searchTerm.length !== 0) {
        var results = searchProductsMob(searchTerm);
        displayResultsMob(results);
    }
    else if (searchTerm.length === 0) {
        resultsContainersCont.style.display = "none";
    }

});

// Function to search for products based on the given search term
function searchProductsMob(searchTerm) {
    var matchingProducts = [];

    for (var i = 0; i < myProduct1.length; i++) {
        var search_product = myProduct1[i];
        var search_productName = search_product.getName().toLowerCase();

        if (search_productName.includes(searchTerm)) {
            matchingProducts.push(search_product);
        }
    }

    return matchingProducts;
}

// Function to display the search results
function displayResultsMob(results) {
    // Clear previous results
    resultsContainer.innerHTML = '';
    resultsContainersCont.style.display = "inline-block";
    resultsContainer.style.display = "inline-block";
    if (results.length === 0) {
        alert("No result foundMob")
        resultsContainer.textContent = 'No results found.';
    } else {
        for (var i = 0; i < results.length; i++) {
            var res_product = results[i];
            var res_productElement = hapCreation([res_product], 0); // Create a product element using the existing hapCreation function

            resultsContainer.appendChild(res_productElement);
        }
    }
}






function plClicked() {
    var plOr = document.getElementById("p-o-id");
    plOr.classList.add("pressedpo")
    setTimeout(function () {
        plOr.classList.remove("pressedpo");
    }, 100)
}





// type Variables
var typeHA = 0;
var typeLap = 0;
var typeMob = 0;
var typeComp = 0;
var typeAcc = 0;





// Trending Page
var trendProductArray = [];
var i = 0;
document.addEventListener("DOMContentLoaded", function () {



    for (var re = 0; re < myProduct1.length; re++) {
        proTypevar = myProduct1[re].getProType();
        if (proTypevar == "Laptop") {
            typeLap++;
        }
        else if (proTypevar == "HA") {
            typeHA += 1;
        }
        else if (proTypevar == "Mobiles") {
            typeMob++;
        }
        else if (proTypevar == "PC") {
            typeComp++;
        }
        else if (proTypevar == "ACC") {
            typeAcc += 1;
        }
    }



    var trp1 = Math.random();
    trp1 = trp1 * typeLap;
    trp1 = Math.floor(trp1);

    var trp2 = Math.random();
    trp2 = trp2 * typeHA;
    trp2 = Math.floor(trp2);
    trp2 += typeLap;

    var trp3 = Math.random();
    trp3 = trp3 * typeHA;
    trp3 = Math.floor(trp3);
    trp3 += typeLap + (typeHA / 2);

    var trp4 = Math.random();
    trp4 = trp4 * typeMob;
    trp4 = Math.floor(trp4);
    trp4 += typeLap + typeHA;

    var trp5 = Math.random();
    trp5 = trp5 * typeComp;
    trp5 = Math.floor(trp5);
    trp5 += typeLap + typeHA + typeMob;

    var trp6 = Math.random();
    trp6 = trp6 * typeAcc;
    trp6 = Math.floor(trp6);
    trp6 += typeLap + typeHA + typeMob + typeComp;

    trendProductArray.push(trp1);
    trendProductArray.push(trp2);
    trendProductArray.push(trp3);
    trendProductArray.push(trp4);
    trendProductArray.push(trp5);
    trendProductArray.push(trp6);
    trendingPageHandle(trendProductArray[i]);



})

document.getElementById("trend-dec").addEventListener("click", function () {
    if (i > 0) {
        i -= 1;
        trendingPageHandle(trendProductArray[i]);
    }
})
document.getElementById("trend-inc").addEventListener("click", function () {
    if (i < 5) {
        i += 1;
        trendingPageHandle(trendProductArray[i]);
    }
})
function trendingPageHandle(a) {
    var j = a;
    document.getElementById("tpi").src = myProduct1[a].getProImg();
    document.getElementById("tpd-bn").innerHTML = myProduct1[a].getBrandName();
    document.getElementById("tpd-name").innerHTML = myProduct1[a].getName();
    document.getElementById("tpd-spec").innerHTML = myProduct1[a].getSpecification();
    document.getElementById("tpd-price").innerHTML = myProduct1[a].getPrice();
}
//Home Appliences cards

function hapCreation(myProduct1, pro_index) {
    var secProA = document.createElement('button');
    var secPro = document.createElement('div');
    var imgDiv = document.createElement('div');
    var detailsDiv = document.createElement('div');
    var imgPro = document.createElement('img');
    var titPro = document.createElement('p');
    var priPro = document.createElement('p');

    secProA.classList.add('section-product-anchor')
    secProA.id = "product-anchor"
    secPro.classList.add('section-products');
    imgDiv.classList.add('section-product-img');
    detailsDiv.classList.add('section-product-details');
    imgPro.classList.add('api-img');
    titPro.classList.add('spd-tit');
    priPro.classList.add('spd-pri');

    // secProA.onclick = openPop()
    imgPro.src = myProduct1[pro_index].getProImg();
    titPro.textContent = myProduct1[pro_index].getName();
    priPro.textContent = myProduct1[pro_index].getPrice();

    imgDiv.appendChild(imgPro);
    detailsDiv.appendChild(titPro);
    detailsDiv.appendChild(priPro);

    secPro.appendChild(imgDiv);
    secPro.appendChild(detailsDiv);

    secProA.appendChild(secPro);

    return secProA;
}
// Cart pro 

// function cartCreation(myCart, pro_index) {
//     var secProA = document.createElement('button');
//     var imgPro = document.createElement('img');
//     var secProDet = document.createElement('div');
//     var titPro = document.createElement('p');
//     var specPro = document.createElement('p');
//     var priPro = document.createElement('p');
//     var delPro = document.createElement('a');
//     var delImg = document.createElement('img');

//     // var temp = myCart[pro_index];

//     secProA.classList.add('indi-cart-pro')
//     secProA.id = "indi-cart-id"
//     imgPro.classList.add("cart-pro-img")
//     secProDet.classList.add("cart-pro-det")
//     titPro.classList.add("cart-pro-br-name")
//     specPro.classList.add("cart-pro-spec")
//     priPro.classList.add("cart-pro-price")
//     delPro.classList.add("cart-pro-del")
//     delImg.classList.add("cart-pro-del-img")

//     imgPro.setAttribute("src", myCart[pro_index].getProImg());
//     titPro.textContent = myCart[pro_index].getName();
//     specPro.textContent = myCart[pro_index].getSpecification();
//     priPro.textContent = myCart[pro_index].getPrice();
//     delImg.src = "./Assets/icons/delete.png";

//     secProDet.appendChild(titPro);
//     secProDet.appendChild(specPro);
//     secProDet.appendChild(priPro);
//     delPro.appendChild(delImg);

//     secProA.appendChild(imgPro);
//     secProA.appendChild(secProDet);
//     secProA.appendChild(delPro);

//     return secProA;
// }

var totPrice = 0;
var editTotPrice = document.getElementById("tot-price")





document.addEventListener("DOMContentLoaded", function () {
    var laproCreator = document.getElementById('lapro');
    for (let lap_index = 0; lap_index < typeLap; lap_index++) {
        laproCreator.appendChild(hapCreation(myProduct1, lap_index))
    }
    var haproCreator = document.getElementById('hapro');
    for (let hap_index = typeLap; hap_index < typeHA + typeLap; hap_index++) {
        haproCreator.appendChild(hapCreation(myProduct1, hap_index))
    }
    var mobproCreator = document.getElementById('mobpro');
    for (let mob_index = (typeLap + typeHA); mob_index < typeLap + typeHA + typeMob; mob_index++) {
        mobproCreator.appendChild(hapCreation(myProduct1, mob_index));
    }
    var cocoproCreator = document.getElementById('cocopro');
    for (let cocopro_index = typeHA + typeLap + typeMob; cocopro_index < typeHA + typeLap + typeMob + typeComp; cocopro_index++) {
        cocoproCreator.appendChild(hapCreation(myProduct1, cocopro_index));
    }
    var accproCreator = document.getElementById('accpro');
    for (let accpro_index = typeComp + typeHA + typeLap + typeMob; accpro_index < typeComp + typeHA + typeLap + typeMob + typeAcc; accpro_index++) {
        accproCreator.appendChild(hapCreation(myProduct1, accpro_index))
    }

    var myCart;

    function openProduct(proI) {
        popShow.style.display = "block"
        var fi = document.querySelector(".pro-img-pro-page")
        var fb = document.querySelector(".fetch-brand")
        var ft = document.querySelector(".fetch-tit")
        var fs = document.querySelector(".fetch-spec")
        var fp = document.querySelector(".fetch-price")
        fi.src = myProduct1[proI].getProImg()
        fb.innerText = myProduct1[proI].getBrandName()
        ft.innerText = myProduct1[proI].getName()
        fs.innerText = myProduct1[proI].getSpecification()
        fp.innerText = myProduct1[proI].getPrice()


        var aC = document.querySelector(".addtoCart")
        aC.addEventListener("click", function () {
            buttonAnimation(aC)
            console.log(proI);
            var tmpImg = "img" + (proI + 1) + ".src";
            var tmpImg2 = eval(tmpImg);
           // tmpImg2 = tmpImg2.substring(21);
           // tmpImg2 = "." + tmpImg2;
           // console.log(tmpImg2);
            // console.log(img20);
            var tmpImgC = new Image();
            tmpImgC.src = tmpImg2;
            myCart = [new Cart(tmpImgC.src, myProduct1[proI].getName(), myProduct1[proI].getBrandName(), myProduct1[proI].getProType(), myProduct1[proI].getSpecification(), myProduct1[proI].getPrice())]
        })
        var closePop = document.getElementById("c-b");
        closePop.addEventListener("click", function () {
            popShow.style.display = "none"
        })
    }

    var popShow = document.getElementById("p-p");


    var productButton = document.querySelectorAll(".section-product-anchor");
    for (let proI = 0; proI < productButton.length; proI++) {
        var clicBut = productButton[proI];

        clicBut.addEventListener("click", function () {
            openProduct(proI);
        })


    }
    var tpClick = document.getElementById("t-p")
    tpClick.addEventListener("click", function () {
        var pv = trendProductArray[i];
        openProduct(pv);
    })
    //     const cartTemplate = `<button class="indi-cart-pro">
    // <img src="${myCart[index].getProImg()}" alt="" class="cart-pro-img">
    // <div class="cart-pro-det">
    //     <p class="cart-pro-br-name">${myCart[index].getName()}</p>
    //     <p class="cart-pro-spec">${myCart[index].getSpecification()}</p>
    //     <p class="cart-pro-price">${myCart[index].getPrice()}</p>
    // </div>
    // <a class="cart-pro-del"><img src="./Assets/icons/delete.png" alt="" class="cart-pro-del-img">
    // </a>
    // </button>`

    function clickedCart() {
        var jsf = myCart.length;
        console.log(jsf);
        var addCart = document.getElementById("a-c-c")
        var cartHtml = ''; // Variable to store the generated HTML code

        // Iterate over the myCart array
        for (var index = 0; index < jsf; index++) {
            // Generate the HTML code for each cart item using template literals
            var cartItemHtml = `<button class="indi-cart-pro">
                                <img src="${myCart[index].getProImg()}" alt="" class="cart-pro-img">
                                <div class="cart-pro-det">
                                <p class="cart-pro-br-name">${myCart[index].getName()}</p>
                                <p class="cart-pro-spec">${myCart[index].getSpecification()}</p>
                                <p class="cart-pro-price">${myCart[index].getPrice()}</p>
                                </div>
                                <a class="cart-pro-del"><img src="./Assets/icons/delete.png" alt="" class="cart-pro-del-img"></a>
                                </button>`;
            cartHtml += cartItemHtml;
            var tmp1 = myCart[index].getPrice();
            var tmp2 = tmp1.substring(1);
            console.log(tmp2.replaceAll(',', ''))
            totPrice = Number(totPrice) + Number(tmp2.replaceAll(',', ''));
        }
        addCart.innerHTML += cartHtml;
        // for (let index = 0; index < jsf; index++) {
        //     console.log(myCart[index]);
        //     // addCart.appendChild(cartCreation(myCart, index));
        //     // addCart.insertAdjacentHTML("afterbegin", cartTemplate);

        //     
        // }
        editTotPrice.textContent = "Total = ₹" + totPrice;
        showCart.style.display = "block";
        document.querySelector("#p-o-id").addEventListener("click", function () {
            alert("Service Not Available");
        })
        function openCartProduct(proI) {
            showCart.style.display = "none"
            popShow.style.display = "block"
            var fi = document.querySelector(".pro-img-pro-page")
            var fb = document.querySelector(".fetch-brand")
            var ft = document.querySelector(".fetch-tit")
            var fs = document.querySelector(".fetch-spec")
            var fp = document.querySelector(".fetch-price")
            fi.src = myCart[proI].getProImg()
            fb.innerText = myCart[proI].getBrandName()
            ft.innerText = myCart[proI].getName()
            fs.innerText = myCart[proI].getSpecification()
            fp.innerText = myCart[proI].getPrice()


            var aC = document.querySelector(".addtoCart")
            aC.addEventListener("click", function () {
                alert("Already added to cart !!");
            })
            var closePop = document.getElementById("c-b");
            closePop.addEventListener("click", function () {
                popShow.style.display = "none"
            })
        }
        var cartPro = document.querySelectorAll(".indi-cart-pro");
        for (let cartI = 0; cartI < cartPro.length; cartI++) {
            var clickCartPro = cartPro[cartI];
            clickCartPro.addEventListener("click", function () {
                console.log(cartI)
                openCartProduct(cartI);
            })
        }
    }
    var cBM = document.getElementById("c-p-m")

    var showCart = document.getElementById("c-p")
    var cB = document.getElementById("cart-but")
    cB.addEventListener("click", function () {
        buttonAnimation(cB);
        clickedCart();
        // showCart.style.display = "block";
    })
    cBM.addEventListener("click", function () {
        buttonAnimation(cBM)
        clickedCart();
        // showCart.style.display = "block";
    })

    var ccB = document.getElementById("cc-b")
    ccB.addEventListener("click", function () {
        showCart.style.display = "none";
    })



    var bN = document.querySelector(".buy-now")

    bN.addEventListener("click", function () {
        buttonAnimation(bN)
        alert("Service Not Available !! ")
    })

})





// // tab working
// var tab1 = document.getElementById("profile-but-js");
// var tab3 = document.getElementById("seller-but-js");
// var tab1Working = document.querySelector("#pppi-id-js");
// var tab3Working = document.querySelector("#spsi-js");
// tab1.addEventListener("click",function(){
//     tab1Working.style.display = "block"
//     tab3Working.style.display = "none"
// });
// tab3.addEventListener("click",function(){
//     console.log("hi")
//     // tab1Working.style.display = "none"
//     // tab3Working.style.display = "block"
//     // alert("hi")
// });


// function hi(){
//     tab1Working.style.display = "none"
//     tab3Working.style.display = "block"
//     alert("hi")
// }
