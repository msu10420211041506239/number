import './Home.css';
import Data from './data.json'
const Home = () => {
  const handlePaytmClick = () => {
   
    const paytmUrl = 'https://securegw.paytm.in/theia/processTransaction'; 

    const parameters = {
      MID: 'YOUR_MID', 
      ORDER_ID: 'ORDER_ID', 
      TXN_AMOUNT: '10.00', 
      
    };
 const queryString = new URLSearchParams(parameters).toString();
 window.location.href = `${paytmUrl}${queryString}`;
  };
  return (   
    <div id="mu">
      {Data.map((item,index)=>(
        <div id="blow">
          <img src={item.image} alt="" id='jo'></img>
          <div id="li"><h1>{item.Product}</h1>
          <h1>{item.Rating}</h1>
          <button id='add' onClick={handlePaytmClick}>Buy</button>
          </div></div> 
      ))}
 <Images />;</div>
)}

function Images() {
  const imageUrls = [
    'https://m.media-amazon.com/images/I/71XjW8+j9ML._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/512JQ+6XadL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/31QKYTH4pTL._AC_SY200_.jpg'
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const selectedImage = imageUrls[randomIndex];
return (
  <div>
    <h3 id='ku'>25% Discount Today Only</h3>
    <img src={selectedImage} alt="" id='move'/>
  </div>
  );
}

export default Home;


