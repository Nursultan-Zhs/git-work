import './baner.scss';
import frameImg from '../../../shared/images/Frame.png'
import fonImg from '../../../shared/images/Vector2.png'
import fonImg2 from '../../../shared/images/Vector(3).png'
import rocketImg from '../../../shared/images/Frame(1).png'
import cloudImg1 from '../../../shared/images/Vector(5).png'
import cloudImg2 from '../../../shared/images/Vector(6).png'
import cloudImg3 from '../../../shared/images/Vector(4).png'
import fireImg1 from '../../../shared/images/Vector.png'
import fireImg2 from '../../../shared/images/Vector(7).png'
import moonImg from '../../../shared/images/Moon.png'
import jupiterImg from '../../../shared/images/Jupiter.png'
import marsImg from '../../../shared/images/Mars.png'
import groupImg from '../../../shared/images/Group2.png'




 export const Baner = () => {
    return (
        <div className='header-container'>

        <img className='header_img1' src={fonImg} alt="" />
        <img className='header_img2' src={fonImg2} alt="" />
        <img className='header_frameImg' src={frameImg} alt="" />
        <img className='header_rocked' src={rocketImg} alt="" />
        <img className='header_cloud1' src={cloudImg1} alt="" />
        <img className='header_cloud2' src={cloudImg2} alt="" />
        <img className='header_cloud3' src={cloudImg3} alt="" />
        <img className='header_fire1' src={fireImg1} alt="" />
        <img className='header_fire2' src={fireImg2} alt="" />
        <img className='header_moon' src={moonImg} alt=""  />
        <p className='header_text1'>Take your brand to the moooooon!</p>
        <img className='header_jupiter' src={jupiterImg} alt=""  />
        <p className='header_text2'>Big Project?</p>
        <img className='header_mars' src={marsImg} alt=""  />
        <p className='header_text3'>Plan your next move!</p>
        <img className='header_group' src={groupImg} alt=""  />
        <h6 className='header_text4'>Why pluto is not a planet?</h6>
        
            
        </div>

    );
}
   

