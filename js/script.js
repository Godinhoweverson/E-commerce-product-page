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
        console.log('next')
        nextOrprevious = true;
        if(toggleImagesArrDisplay.length !== index){
            index += 1;
            
        productImg.insertBefore(toggleImagesArrDisplay[index - 1], nextBtnMobile);
        };
    });

    
    previousBtnMobile.addEventListener('click', ()=>{
        console.log('previous')
        nextOrprevious = true;
        if(index > 1){
            index -= 1;
            productImg.insertBefore(toggleImagesArrDisplay[index - 1], nextBtnMobile);
        };
    });

};

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

