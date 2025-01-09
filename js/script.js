const productImg = document.getElementById('product-img');
const slideShow = document.getElementById('slideShow');
const toggleImagesArr = [...document.querySelectorAll('#toggle-images img')];
const toggleImagesArrDisplay = [...document.querySelectorAll('#toggle-images-display img')];
const displayImg = document.getElementById('displayImg');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');


const displayProduct = () =>{
    let nextOrprevious = false;
    productImg.addEventListener('click', () =>{
      
       slideShow.style.display = 'flex';
       let index = Number(productImg.children[0].src.split('-').pop().split('.')[0]);
       nextOrprevious = true;
       toggle(nextOrprevious, index)
       
       previousBtn.addEventListener('click', ()=>{
        nextOrprevious = true;
        if(index > 1){
            index -= 1;
            toggle(nextOrprevious, index)
        };
       });

       nextBtn.addEventListener('click', ()=>{
        nextOrprevious = true;
        if(toggleImagesArrDisplay.length !== index){
            index += 1;
            toggle(nextOrprevious, index)
        };
       })
        
        
       function toggle(nextOrprevious, index){
        if(nextOrprevious){
            if(displayImg.children.length > 2){
                displayImg.children[1].remove()
            }
            
            toggleImagesArrDisplay[index - 1].style = "border: 2px solid var(--Orange); opacity:65%;";
           
            const img = document.createElement('img');
            img.src = toggleImagesArrDisplay[index- 1].src.replace('-thumbnail', '');
 
            displayImg.insertBefore(img,nextBtn);
        }else{
            displayImg.insertBefore(toggleImagesArrDisplay[index- 1],nextBtn);
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



