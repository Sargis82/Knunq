import CountdownTimer from "./CountdownTimer"
import ConfirmPresence from "./ConfirmPresence";

import cross from "../images/cross.png"
import kidsImage from "../images/kids_image.jpg"
import flFrame from "../images/flowers-circular-frame.png"
import church from "../images/church.png"
import restaurant from "../images/palermo-hall.jpg"

export default function MkrtutyunFullPage() {
    return <>
        <div className="main">
            <img className="cross" src={cross} alt="image_cross" />
            <h2>ՄԿՐՏՈւԹՅԱՆ ՀՐԱՎԻՐԱՏՈՄՍ</h2>
            <div className="frameAndKids">
                <img className="kids-image" src={kidsImage} alt="image_kids" />
                <img className="fl-frame" src={flFrame} alt="frame" />
            </div>
            <h3>Հարազատներ, ընկերներ, բարեկամներ,</h3>
            <h3>ցանկանում ենք ձեզ հետ կիսել մեր երեխաների</h3>
            <h1>Եվայի և Մուշեղի</h1>
            <h3>Մկրտության լուսավոր օրը</h3>
            
            <CountdownTimer />

            <h3>Սպասում ենք ձեզ</h3>
            <p className="date">19 հոկտեմբեր 2024թ․</p>
            <p className="time">16:00</p>
            <h4>Սուրբ Աստվածածին Կաթողիկե Եկեղեցի</h4>
            <h5>Հասցե՝ ք․Երևան, Ջրվեժ, Մելքոնյան փողոց, 92</h5>
            <img className="church" src={church} alt="image_church" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5126.455461227671!2d44.5852236991372!3d40.18216969650206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa39b737e6791%3A0x1d5c8eac4b085e9b!2z1Y3VuNaC1oDVoiDUsdW91b_VvtWh1a7VodWu1avVtiDUv9Wh1anVuNWy1avVr9WlINS11a_VpdWy1aXWgdWr!5e0!3m2!1shy!2sam!4v1728586002224!5m2!1shy!2sam" style={{border:"0", maxWidth:"600px", width:"100%", minHeight: "350px", }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
            <p className="time">17:00</p>
            <h4>Պալերմո Մյուզիք Հոլ</h4>
            <h5>Հասցե՝ ք․Երևան, Ջրվեժ, 15 փողոց, 21</h5>

            <img className="restaurant" src={restaurant} alt="image_restaurant" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d762.0013831926591!2d44.60159667194263!3d40.18669031718075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa528fc458983%3A0xdf209a02dd1b83dc!2sPalermo%20Hall!5e0!3m2!1shy!2sam!4v1728587159923!5m2!1shy!2sam" style={{border:"0", maxWidth:"600px", width:"100%", minHeight: "350px", }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
            <ConfirmPresence />

        </div>

    </>
}

