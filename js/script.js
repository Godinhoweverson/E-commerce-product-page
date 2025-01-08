const productImg = document.getElementById('product-img');
const slideShow = document.getElementById('slideShow');
const toggleImagesArr = [...document.querySelectorAll('#toggle-images img')];
const displayImg = document.getElementById('displayImg');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');


const displayProduct = () =>{
    let nextOrprevious = false;
    productImg.addEventListener('click', () =>{
       slideShow.style.display = 'flex';
       let index = Number(productImg.children[0].src.split('-').pop().split('.')[0]);
        console.log(index)
       nextBtn.addEventListener('click', ()=>{
        nextOrprevious = true;
        index += 1;
        toggle(nextOrprevious, index)
       })
        
       function toggle(){
        if(nextOrprevious, index){
            if(displayImg.children[1]){
                displayImg.children[1].remove();
            }
            displayImg.insertBefore(toggleImagesArr[index- 1],nextBtn);
        }else{
            displayImg.insertBefore(toggleImagesArr[index- 1],nextBtn);
        }
       }
    })
}

displayProduct();

const toggleImages = () =>{
    toggleImagesArr.map(images => {
        images.addEventListener('click', (e) =>{
            productImg.children[0].src = e.target.src.replace('-thumbnail', '');  
        })
        // images.src.split('/').pop() // Image name
    })  
}

toggleImages();



