import React,{useState} from 'react';
import  '../css/navigation.css';

function Navigation() {
    const [flag,setFlag] = useState(false);
   
   
    function openMenu() {
        setFlag(!flag);
        let btn = document.querySelector('.circular-menu_button');

        let item = document.querySelectorAll('.circular-menu_item');
        let len = item.length;

        let arc = 2 * Math.PI * (1 / len);
       let radius = 25;

       
       console.log(flag)
       if(flag) {
           btn.classList.add('circular-menu_button_active');
        for(let i = 0; i < len; i++) {
            let angle = i * arc;
            let x = radius * Math.cos(angle);
            let y = radius * Math.sin(angle);
            item[i].style.left = 50 + x + '%';
            item[i].style.top = 50 + y + '%';
            }
        }
       
            
       else {
        btn.classList.remove('circular-menu_button_active')
        for(let i = 0; i < len; i++) {
            item[i].removeAttribute('style');
        }
       }
      
       
       
    }

    return(
        <div id='menu'>
            <div classname='circular-menu'>
                <a href='#' className='circular-menu_item'>React</a>
                <a href='#' className='circular-menu_item'>express</a>
                <a href='#' className='circular-menu_item'>Redux</a>
                <a href='#' className='circular-menu_item'>webpack</a>
                <a href='#' className='circular-menu_item'>CSS</a>
                <a href='#' className='circular-menu_item'>Node</a>

                <a href='#'  className = 'circular-menu_button' onClick={openMenu}>
                     <span className='circular-menu_lines'></span>
                </a>
            </div>
        </div>
    )
}

export default Navigation;