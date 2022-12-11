import React from 'react'

const MenuCard = ({menuData}) => {
//  console.log(menuData);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{

      const {id, name, category, image, description} = curElem;

        return (
            <>
            <div className='card-container'  key={id}>
         <div className='card'>
             <div className='card-body'>
                 <span className='card-number card-circle subtle' key={id}>1</span>
                 <span className='card-author subtle'>{name}</span>
                 <h2 className='card-title'>{name}</h2>
                 <span className='card-description subtle'>
                     {/* i love maggie and Maggi is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century. The Maggi company was acquired by Nestlé in 1947. */}
                     {description}
 
 
 
                 </span>
                 <div className='card-read'>Read</div>
             </div>
             <img src={image} alt='images'  className='card-media'  />
             <span className='card-tag  subtle'>Order Now</span>
         </div>
      </div>
      </>

        );
         

    })}
    </section>
   
    
    </>
  )
}

export default MenuCard