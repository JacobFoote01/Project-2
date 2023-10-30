import React from 'react';

function BoxComponent() {
  return (
    <>
    <p className="box">
        <img src="https://media.printables.com/media/prints/535541/images/4318807_180994b9-7fb7-4ebf-80c3-680811e39674/thumbs/inside/1280x960/png/nissan-gtr-r34_zeichnung_schatten.webp" alt="R34" />
        <div>
            <input type='text' value="Year"/>
            <input type='text' value="Make"/>
            <input type='text' value="Model"/>
        </div>
    </p>
    <br/>
    <p className="box">
        <img src="https://sundownsilhouette.com/cdn/shop/products/NissanSkylineR32GTRSVGEPSVectorart_600x600.jpg?v=1671809537" alt="Your car" />
        <div>
            <input type='text' value="Year"/>
            <input type='text' value="Make"/>
            <input type='text' value="Model"/>
        </div>
    </p>
    </>
  );
}

export default BoxComponent;
