import CountdownTimer from "./CountdownTimer"
import ConfirmPresence from "./ConfirmPresence";

import cross from "../images/cross.png"
import kidsImage from "../images/kids_image.jpg"
import flFrame from "../images/flowers-circular-frame.png"
import church from "../images/church.png"
import restaurant from "../images/palermo-hall.jpg"
import makaryanner from "../images/makaryanner.png"

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
            <div className="main-btn">
                <a href="https://www.google.com/maps/dir//%D5%8D%D5%B8%D6%82%D6%80%D5%A2+%D4%B1%D5%BD%D5%BF%D5%BE%D5%A1%D5%AE%D5%A1%D5%AE%D5%AB%D5%B6+%D4%BF%D5%A1%D5%A9%D5%B8%D5%B2%D5%AB%D5%AF%D5%A5+%D4%B5%D5%AF%D5%A5%D5%B2%D5%A5%D6%81%D5%AB+92+%D5%84%D5%A5%D5%AC%D6%84%D5%B8%D5%B6%D5%B5%D5%A1%D5%B6+%D5%93.+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+2227/@40.1820742,44.5863175,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x406aa39b737e6791:0x1d5c8eac4b085e9b" target="_blank"><i className="fas fa-map-marker-alt"></i>Ինչպես հասնել</a>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5126.455461227671!2d44.5852236991372!3d40.18216969650206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa39b737e6791%3A0x1d5c8eac4b085e9b!2z1Y3VuNaC1oDVoiDUsdW91b_VvtWh1a7VodWu1avVtiDUv9Wh1anVuNWy1avVr9WlINS11a_VpdWy1aXWgdWr!5e0!3m2!1shy!2sam!4v1728586002224!5m2!1shy!2sam" style={{border:"0", maxWidth:"600px", width:"100%", minHeight: "350px", }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        
            <p className="time">17:00</p>
            <h4>Պալերմո Մյուզիք Հոլ</h4>
            <h5>Հասցե՝ ք․Երևան, Ջրվեժ, 15 փողոց, 21</h5>

            <img className="restaurant" src={restaurant} alt="image_restaurant" />
            <div className="main-btn">
                <a href="https://www.google.com/maps/dir//Palermo+Hall+Jrvezh+15%2F21+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0014/@40.1867159,44.602181,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406aa528fc458983:0xdf209a02dd1b83dc!2m2!1d44.602181!2d40.1867159?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i className="fas fa-map-marker-alt"></i>Ինչպես հասնել</a>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d762.0013831926591!2d44.60159667194263!3d40.18669031718075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa528fc458983%3A0xdf209a02dd1b83dc!2sPalermo%20Hall!5e0!3m2!1shy!2sam!4v1728587159923!5m2!1shy!2sam" style={{border:"0", maxWidth:"600px", width:"100%", minHeight: "350px", }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <h4 style={{marginTop: "50px"}}>Հարգանքով՝</h4>

            <h5>Վահան և Աստղիկ Մակարյաններ</h5>
            <img className="makaryanner" src={makaryanner} alt="image_Makaryanner" />

            <ConfirmPresence />

        </div>

    </>
}

