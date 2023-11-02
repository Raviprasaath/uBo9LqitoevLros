import "./PrimeBenefits.css";
import {
  topCarouselcards,
  PrimeShippingBenefitscards,
  PrimeMusicCards,
  PrimeReadingCards,
  PrimeVideoCards,
  AmazonPaycards,
} from "../PrimeBenefitsConstant";
import Footer from "../Footer/Footer";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
function PrimeBenefits() {
  return (
    <div class="Prime-ben">

      <div className="Prime-Shipping-benefits-header">
        Prime Shipping benefits
      </div>

      <div className="Prime-Shipping-benefits-container">
        {PrimeShippingBenefitscards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="Amazon-pay-header">
        Amazon Pay ICICI card benefits
      </div>
      <div className="Amazon-pay-container">
        {AmazonPaycards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="prime-music-header">
        Amazon Pay ICICI card benefits
      </div>
      <div className="prime-music-container">
        {PrimeMusicCards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="prime-reading-header">
        Prime Reading benefits
      </div>
      <div className="prime-reading-container">
        {PrimeReadingCards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="prime-video-header">
        Prime Video benefits
      </div>
      <div className="prime-video-container">
        {PrimeVideoCards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <FooterForSignIn/>
    </div>
  );
}
export { PrimeBenefits };
