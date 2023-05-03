const reviews = [
    {
        id: 1, 
        name: "Susan Smith",
        job: "Web Developer",
        image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jepg", 
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },

    {
        id: 2, 
        name: "Anne Johnson",
        job: "Web Designer",
        image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg", 
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
    },

    {
        id: 3, 
        name: "Peter Jones",
        job: "Intern",
        image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg", 
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },

    {
        id: 4, 
        name: "Bill Anderson",
        job: "The Boss",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg", 
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually say tangent.",
    }
]

const image = document.querySelector("img");
// image.src = reviews.image;
const desc = document.querySelector(".description");
// desc = reviews.text
const author = document.querySelector(".author");
// author = reviews.name
const job = document.querySelector(".job");
// job = reviews.job


const prevBtn = document.querySelector(".prev-buttons")
const nextBtn = document.querySelector(".next-buttons")



nextBtn.addEventListener('click', () => {
        reviews.sort(reviews.id)

        image.innerHTML = (image.src = reviews.image)
        desc.innerHTML = reviews.text
        author.innerHTML = reviews.name
        job.innerHTML = reviews.job

})