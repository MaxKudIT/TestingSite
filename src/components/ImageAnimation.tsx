import React, { FC, useEffect } from "react";
import foo1 from '../images_for_homepage/foo1.png'
import foo2 from '../images_for_homepage/foo2.png'
import foo3 from '../images_for_homepage/foo3.png'
import foo4 from '../images_for_homepage/foo4.png'
import foo5 from '../images_for_homepage/foo5.png'
import deco1 from '../images_for_homepage/deco1.png'
import deco2 from '../images_for_homepage/deco2.png'
import deco3 from '../images_for_homepage/deco3.png'
import deco4 from '../images_for_homepage/deco4.png'
import deco5 from '../images_for_homepage/deco5.png'
import clot1 from '../images_for_homepage/clot1.png'
import clot2 from '../images_for_homepage/clot2.png'
import clot3 from '../images_for_homepage/clot3.png'
import clot4 from '../images_for_homepage/clot4.png'
import clot5 from '../images_for_homepage/clot5.png'
import sad1 from '../images_for_homepage/sad1.png'
import sad2 from '../images_for_homepage/sad2.png'
import sad3 from '../images_for_homepage/sad3.png'
import sad4 from '../images_for_homepage/sad4.png'
import sad5 from '../images_for_homepage/sad5.png'
import anime from 'animejs';
const ImageAnimation:FC<{index: number}> = ({index}) =>
  {
    useEffect(() => {
        // Анимация изображения
        const animation = anime.timeline({
          easing: 'easeInOutSine',
          duration: 500,
          
        });
    
        animation
          .add({
            targets: '.image-homepage',
            opacity: [0, 1],
            translateY: [-40, 0],
            delay: anime.stagger(300), // задержка между анимациями
          })
          .add({
            targets: '.image-homepage',
            opacity: [1, 0],
            translateY: [0, 20],
            delay: anime.stagger(500, { start: 2000 }), // задержка для второго изображения
          });
      }, [index]);
      const calculateImages = (index: number) => {
        if (index === 0)
        {
            return [foo1, foo2, foo3, foo4, foo5]
        }
        if (index === 1)
        {
            return [deco1, deco2, deco3, deco4, deco5]
        }
        if(index === 2)
        {
            return [clot1, clot2, clot3, clot4, clot5]
        }
        if (index === 3)
        {
            return [sad1, sad2, sad3, sad4, sad5]
        }
      }
    return (
        <div className="image-carousel">
        {calculateImages(index)?.map(el => <img className="image-homepage" src={el} alt=""/>)}

        </div>
    )
  }

  export default ImageAnimation;