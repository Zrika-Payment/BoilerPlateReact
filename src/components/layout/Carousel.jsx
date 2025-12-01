import Button from "../common/Button";

function handleClick() {
    const next = document.querySelector('.carousel-next');
    const prev = document.querySelector('.carousel-prev');
    const inner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;
    function updateCarousel() {
        inner.style.transform = `translate(-${index * 600})px`;

    }
    next.addEventListener('click', () => {
        index = (index + 1) % items.length;
        updateCarousel();

    })
    prev.addEventListener('click', () => {
        index = (index - 1) % items.length;
        updateCarousel();
    })
}


export function Carousel({ items }) {

    return (
        <div className=" w-2xl overflow-hidden relative m-auto">
            <div className="carousel-inner w-2xl h-80 object-cover">
                <CaurouselItems Items={items} />
                <NavigationButton />
                <IndicatorDots items={items} />
            </div>
        </div>
    )
}


export function CaurouselItems({ Items }) {

    return (
        <div className="flex transition-transform duration-500 ease-in-out ">
            {Items?.map((list, Index) => <div key={Index} className="carousel-item"><img src={list} alt="List-items" className="w-xl h-80 object-cover " />{list}</div>)}
        </div>
    )

}



export function NavigationButton() {

    return (
        <>
            <Button className="carousel-prev absolute top-2/4 transform translate-y-2/4 bg-fff p-2.5 text-2xl cursor-pointer left-2.5" onClick={handleClick} >left</Button>
            <Button className="carousel-next absolute top-2/4 transform translate-y-2/4 bg-fff p-2.5 text-2xl cursor-pointer right-2.5" onClick={handleClick}>right</Button>
        </>
    )

}

export function IndicatorDots({ items }) {
    return (
        <div>
            {
                items?.map((list, index) => <span key={index}>{index}</span>)
            }
        </div>
    )
}