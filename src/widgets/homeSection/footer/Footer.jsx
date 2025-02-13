import './footer.scss'
import img1 from '../../../shared/images/Footer.png'
import img2 from '../../../shared/images/Astro.png'



export const Footer = () => {
    return (
        <div className='footer-container'>


          <h2 className='text1'>Links</h2>

          <p className='text2'>The project</p>

          <p className='text3'>The author</p>

          <p className='text4'>The company</p>

          <p className='text5'>The need of a job
          Behance</p>

          <img className='img2' src={img2} alt="" />


          <img className='img1' src={img1} alt="" />

          <p className='text6'>Illustrations by @catalyststuff</p>


        </div>
    );
}

