import React, { Component } from 'react';
import Slider from 'react-slick';
import comments from '../../data/dataComments';
import Comment from '../About/Comment';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './Slider.module.css';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', borderRadius: '50%',  }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
                },
                
            ],
            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
        };
        return (
            <div className={s.slider_container}>
                <Slider {...settings}>
                    {comments.map((item) => {
                        return (
                            <Comment
                                key={item.id}
                                img={item.user_img}
                                name={item.name}
                                date={item.date}
                                text={item.text}
                                value={item.value}
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
