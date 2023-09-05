import { useSelector } from "react-redux";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Item
            id={4}
            title="CLASSIC BRACELET"
            price={69}
            image="https://global.danielwellington.com/cdn/shop/products/uuxozkqgdu8ftiqu00zp.png?v=1686813677&width=1080"
          />

          <Item
            id={2}
            title="ELAN RING"
            price={59}
            image="https://global.danielwellington.com/cdn/shop/products/00c43c98468bec00326f64b3348f4bd11025247d.png?v=1688366733&width=1080"
          />

          <Item
            id={3}
            title="ELAN BRACELET"
            price={89}
            image="https://global.danielwellington.com/cdn/shop/products/ftex1qckcu7gnvwbxweu.png?v=1688366580&width=1080"
          />

          <Item
            id={5}
            title="EMALIE RING"
            price={59}
            image="https://global.danielwellington.com/cdn/shop/products/0576c42ca862b892dfa86d8e1bd472bed29792d5.png?v=1679588206&width=1080"
          />

          <Item
            id={1}
            title="CLASSIC RING"
            price={49}
            image="https://global.danielwellington.com/cdn/shop/products/9966827d408aca3abe4b9b356cc32e3641c9c00f.png?v=1679588036&width=1080"
            rating={4}
          />

          <Item
            id={6}
            title="ELEVATION RING"
            price={79}
            image="https://global.danielwellington.com/cdn/shop/products/8a9c5171ee25ab487b44fffeb940c629b636e9aa.png?v=1681886821&width=1080"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
