const productImg = document.getElementById('product-img');
const toggleImagesArr = [...document.querySelectorAll('#toggle-images img')];

const displayProduct = () =>{
    toggleImagesArr.map(images => {
        images.addEventListener('click', (e) =>{
            productImg.children[0].remove();
            console.log(e.src.slice('-thumbnail','').pop())
            productImg.appendChild();
            
        })
        // images.src.split('/').pop() // Image name
    })  
}

displayProduct();

const toggleImages = () =>{

}




// Get the value of product-img
// get the vlaue of toggle-imagss


