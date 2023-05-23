
import React from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { BsChatSquareQuoteFill } from "react-icons/bs";
const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Efren Reyes',
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text over 2000 years old.Richard McClintock",
            image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
        },
    },
    {
        player: {
            title: "Ronnie O'Sullivan",
            desc: "“Engineer resource maximizing whereas human high quality scenarios via client incentivize next generatio”",
            image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
        },
    },
    {
        player: {
            title: 'Shane Van Boening',
            desc: '“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration”',
            image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) =>
{
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) =>
{
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position)
    {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(1)' };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) =>
{
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="test_icon">
                <BsChatSquareQuoteFill />
            </div>
            <div className="carousel-slide-item__body">
                <p className="detail_text">{item.player.desc}</p>
                <h4 className="sub_heading_title2">{item.player.title}</h4>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () =>
{
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) =>
    {
        if (!isTicking)
        {
            setIsTicking(true);
            setItems((prev) =>
            {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) =>
    {
        if (!isTicking)
        {
            setIsTicking(true);
            setItems((prev) =>
            {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    // const handleDotClick = (idx) =>
    // {
    //     if (idx < activeIdx) prevClick(activeIdx - idx);
    //     if (idx > activeIdx) nextClick(idx - activeIdx);
    // };

    React.useEffect(() =>
    {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() =>
    {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <div className='prv_nxt_btns'>
                    <button className='smoke_btn' onClick={() => prevClick()}>
                        <BiLeftArrowAlt /> Prev
                    </button>
                    <button className='blue_btn' onClick={() => nextClick()}>
                        Next <BiRightArrowAlt />
                    </button>
                </div>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                {/* <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};
export default Carousel;
