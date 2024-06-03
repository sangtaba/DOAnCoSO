var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')

listImg.forEach(imgElement=>{
    imgElement.addEventListener('click', e=>{
        imgFeature.src = e.target.getAttribute('src')
    })

})


