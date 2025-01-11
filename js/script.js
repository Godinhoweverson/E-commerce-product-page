const productImg = document.getElementById('product-img');
const previousBtnMobile = document.getElementById('previous-btn-mobile');
const nextBtnMobile = document.getElementById('next-btn-mobile');
const slideShow = document.getElementById('slideShow');
const closeIcon = document.getElementById('close-icon');
const toggleImagesArr = [...document.querySelectorAll('#toggle-images img')];
const toggleImagesArrDisplay = [...document.querySelectorAll('#toggle-images-display img')];
const displayImg = document.getElementById('displayImg');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const navbar = document.querySelector('nav');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const count = document.getElementById('count');
const addCart = document.getElementById('add-cart');
const price = document.getElementById('price').textContent;
const cart = document.getElementById('cart');
const popUp = document.getElementById('pop-up');
const productCart = document.getElementById('product-cart');


// HANDLE INCREMENT & DECREMENT

let handleQuantity = 0;

increment.addEventListener('click', () => {
    handleQuantity += 1;
    count.innerHTML = handleQuantity;
 });  

decrement.addEventListener('click', () => {
    handleQuantity -= 1;
    count.innerHTML = handleQuantity < 0 ? handleQuantity = 0 : handleQuantity; 
});



function handleProductQuantity (){
    let total;
    addCart.addEventListener('click', () =>{
        total = Number(count.innerHTML);
        total *= Number(price);
        popUp.style.display = 'none';
    });
    cart.addEventListener('click', () => {
        if(popUp.style.display ==='flex'){
            popUp.style.display = 'none';
        }else{
            popUp.style.display = 'flex';
            productCart.innerHTML = ''
            const p = document.createElement('p');
            p.innerHTML = 'Your cart is empty';
            if(total){
                displayCartContent(total, Number(price), Number(count.innerHTML));
            }else{
                productCart.appendChild(p);
            };
        };
    });
};

handleProductQuantity();


const displayCartContent = (totalPrice, price, quantity)=>{
    const contentCart = document.createElement(div);
    
}

// HANDLE PRODUCT IMAGES

function toggle(nextOrprevious, index){
    if(nextOrprevious){

        if(displayImg.children.length > 2){
            displayImg.children[1].remove();
        }

        // Reset the values
        toggleImagesArrDisplay.forEach((e)=>{
            e.classList.remove('active-style');
        });
        
        toggleImagesArrDisplay[index - 1].classList.add('active-style');
        
        const img = document.createElement('img');
        img.src = toggleImagesArrDisplay[index- 1].src.replace('-thumbnail', '');

        displayImg.insertBefore(img,nextBtn);
    }else{
        displayImg.insertBefore(toggleImagesArrDisplay[index- 1],nextBtn);
    };
};

const displayProduct = () =>{
    let nextOrprevious = false;

    productImg.addEventListener('click', () =>{
        if(innerWidth > 1020){
            slideShow.style.display = 'flex';
            let index = Number(productImg.children[0].src.split('-').pop().split('.')[0]);
            
            nextOrprevious = true;
            toggle(nextOrprevious, index)
            
            nextBtn.addEventListener('click', ()=>{
                nextOrprevious = true;
                if(toggleImagesArrDisplay.length !== index){
                    index += 1;
                    toggle(nextOrprevious, index);
                };
            });

            
            previousBtn.addEventListener('click', ()=>{
                nextOrprevious = true;
                if(index > 1){
                    index -= 1;
                    toggle(nextOrprevious, index)
                };
            });
        };
    });
    
    closeIcon.addEventListener('click', () =>{
        slideShow.style.display = 'none';
    });

};

const toggleImages = () =>{
    toggleImagesArr.map(images => {
        images.addEventListener('click', (e) =>{
            productImg.children[0].src = e.target.src.replace('-thumbnail', '');  
        })
        // images.src.split('/').pop() // Image name
    })  
}

toggleImages();

const toggleMobile = () => {

    let nextOrprevious = false;
    let index = Number(productImg.children[0].src.split('-').pop().split('.')[0]);

    nextBtnMobile.addEventListener('click', ()=>{
        nextOrprevious = true;
        if(toggleImagesArrDisplay.length !== index){
            index += 1;
            productImg.children[0].remove();
            const img = document.createElement('img');
            img.src = toggleImagesArrDisplay[index- 1].src.replace('-thumbnail', '');
            productImg.appendChild(img);
        };
    });

    previousBtnMobile.addEventListener('click', ()=>{
        nextOrprevious = true;
        if(index > 1){
            index -= 1;
            productImg.children[0].remove();
            const img = document.createElement('img');
            img.src = toggleImagesArrDisplay[index- 1].src.replace('-thumbnail', '');
            productImg.appendChild(img);
        };
    });

};

const handleNav = () => {
    iconOpen.addEventListener('click',() =>{
        navbar.style.display = 'flex';
    });

    iconClose.addEventListener('click',() =>{
        navbar.style.display = 'none';
    });
};

handleNav();


// Function to handle resizing logic
function handleResize() {
    if (window.innerWidth < 1020) {
        slideShow.style.display = 'none';
        toggleMobile()
    } else {
        displayProduct();
    }
}

window.addEventListener('resize',handleResize);
handleResize();

