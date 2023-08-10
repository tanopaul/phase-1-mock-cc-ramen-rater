// write your code here

let ramenMenu = document.getElementById('ramen-menu');
const menu = document.querySelector('#ramen-detail');
const selectedImg = document.querySelector('.detail-image');
const selectedName = document.querySelector('.name');
const selectedRest = document.querySelector('.restaurant');
const rating = document.querySelector('#rating-display');
const comment = document.querySelector('#comment-display');
const url = 'http://localhost:3000/ramens';
const form = document.getElementById('new-ramen');
const editForm = document.getElementById('edit-ramen');



function ramenNavRender(ramen) {
    let ramenImg = document.createElement('img');
    ramenImg.src = ramen.image;
    ramenMenu.appendChild(ramenImg);

    ramenImg.addEventListener('click', () => {
        selectedImg.src = ramen.image;
        selectedName.textContent = ramen.name;
        selectedRest.textContent = ramen.restaurant;
        rating.textContent = ramen.rating;
        comment.textContent = ramen.comment;
        menu.append(selectedImg);
        menu.append(selectedName);
        menu.append(selectedRest);
        

        
    })

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }

    ramenNavRender(newRamen);
    e.target.name.value = '';
    e.target.restaurant.value = '';
    e.target.image.value = '';
    e.target.rating.value = '';
    e.target['new-comment'].value = '';
    
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    rating.textContent = e.target.rating.value;
    comment.textContent = e.target['new-comment'].value;
    e.target.rating.value = '';
    e.target['new-comment'].value = '';

})




fetch(url)
.then(resp => resp.json())
.then(data => {
    data.forEach(ramen => {
        ramenNavRender(ramen);
    });
    
        selectedImg.src = data[0].image;
        selectedName.textContent = data[0].name;
        selectedRest.textContent = data[0].restaurant;
        rating.textContent = data[0].rating;
        comment.textContent = data[0].comment;
        menu.append(selectedImg);
        menu.append(selectedName);
        menu.append(selectedRest);
        
        


    console.log(data)
})