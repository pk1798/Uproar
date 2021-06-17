const config = {
    type : 'slider',
    perView : 4,
    breakpoints: {
        1023: {
            perView: 2
        },
        767:{
            perView: 1
        }
    }
}
new Glide('.glide', config).mount()
new Glide('.glide-2', config).mount()

