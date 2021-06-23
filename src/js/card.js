
//To create card element 

const container = document.getElementById('card-container');

function listCard(arr){
    arr.forEach((card)=>{
        var li = document.createElement('li');
        li.className = 'glide__slide';
        container.appendChild(li)
        var card = `<div class="card">
        <p class="genre">${card.genre}</p>
        <figure>
        <img src="${card.image}"
        alt="${card.name}"
        srcset="${card.image} 1x, ${card.image2x} 2x,${card.image3x} 3x" >
            <figcaption class="text-2 bold">${card.figcaption}</figcaption>
            <p class="text-3 normal">${card.description}</p>
        </figure>
        <div class="card__points">
          <div class="points">
              <svg xmlns="http://www.w3.org/2000/svg" class="logo" width="13" height="12"><path fill="#FFF" d="M11.806 3.678a2.53 2.53 0 00-.726-.28l.021-.074c.09-.34.363-1.374-.273-2.23-.461-.62-1.162-.81-1.537-.911C8.979.098 8.565 0 8.132 0 7.481 0 6.923.228 6.5.631 6.077.228 5.52 0 4.87 0c-.434 0-.847.098-1.157.182-.377.102-1.078.292-1.54.913-.635.856-.362 1.889-.273 2.23l.021.074a2.548 2.548 0 00-.727.28c-1.257.736-1.56 2.342-.72 3.818.54.95 1.719 1.507 2.773 1.646C3.43 10.493 4.854 11.999 6.5 12c1.647 0 3.072-1.506 3.255-2.857 1.053-.139 2.234-.696 2.773-1.646.84-1.477.537-3.082-.721-3.819zM7.129 2.245c.269-1.017 1.075-.896 1.8-.698.725.196 1.094.394.826 1.412-.27 1.017-1.075 2.47-1.8 2.272-.725-.197-1.095-1.969-.826-2.986zM4.07 1.546c.725-.198 1.531-.318 1.8.698.268 1.018-.1 2.79-.826 2.987-.725.197-1.53-1.256-1.8-2.273-.269-1.017.1-1.215.826-1.412zm.262 6.098C3.756 7.98 2.139 7.6 1.68 6.79c-.46-.808-.367-1.552.21-1.89.576-.336 1.415-.138 1.874.671.461.807 1.145 1.736.569 2.072zM6.5 10.587c-1.04 0-1.882-1.124-1.882-1.732 0-.608.843-.472 1.882-.472s1.881-.136 1.881.472-.842 1.732-1.881 1.732zm4.82-3.796c-.46.81-2.077 1.19-2.653.853-.575-.336.108-1.264.568-2.071.46-.81 1.299-1.007 1.875-.67.577.337.669 1.08.21 1.888z"/></svg>
              <p class="text-5 bold">${card.uproarPoints}</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="bolt" width="18" height="18"><path fill="#FFF" d="M6.98 4.116A.206.206 0 006.795 4h-2.44L6.762.307A.195.195 0 006.77.104.207.207 0 006.589 0H3.293a.207.207 0 00-.184.11l-3.088 6a.195.195 0 00.009.195.208.208 0 00.175.095h2.117L.016 11.722a.197.197 0 00.082.249.21.21 0 00.265-.042l6.589-7.6a.196.196 0 00.029-.213z"/></svg>
              <p class="text-5 bold">${card.boltPoints}</p>
          </div>
          <div class="accept-button">
              <button>Accept </button>
          </div>
      </div>
    </div>`
    li.innerHTML += card;
    })  
    const config = {
        type : 'slider',
        perView : 4,
        breakpoints: {
            1210: {
                perView: 2
            },
            767:{
                perView: 1
            }
        }
    }
    new Glide('.glide', config).mount()
}

listCard(card)

