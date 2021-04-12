import React from 'react';


function Card({title, imageSource}) {
  return (
    <div className="card text-center bg-dark">
        <img src={imageSource} alt=""/>
        <div className="card-body text-light">
            <h4 className="card-title">{title} </h4>
            <p className="card-text-secundary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh et elit aliquam 
                tincidunt sed ac ipsum. Ut placerat gravida arcu sed facilisis. Ut pellentesque dapibus augue,
                 non bibendum risus vulputate in. Aenean semper eget purus at scelerisque. Nulla in nulla ac 
                 nisi tincidunt aliquet vitae vel orci. Phasellus quam lorem, molestie id convallis id, sagittis 
                 eget massa.  </p>
                 <a href="#!" className="btn btn-outline-secundary border-0">
                     Go to this web-site
                 </a>
        </div>
    </div>
  );
}

export default Card;
