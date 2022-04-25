(function(){
    const listElements = document.querySelectorAll('.menu__items-show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu-btn');

    const addClick = ()=>{
        listElements.forEach(element => {
            element.addEventListener('click', ()=>{
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item--active')

                console.log(subMenu.clientHeight);//esta propiedad nos devuelve la altura de un elemento
                if(subMenu.clientHeight === 0){
                    height= subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });
        });

    }
    addClick();
    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('men_item--active');
            }
        })
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links-show')){
                list.classList.remove('menu__links-show');
            }
        }else{
            addClick();
        }
    });
     if(window.innerWidth <= 800){
         addClick();
     }

     menu.addEventListener('click',()=> list.classList.toggle('menu__links-show'));

})();

