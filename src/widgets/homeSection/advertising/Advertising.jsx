import './advertising.scss'
import img1 from '../../../shared/images/Group(1).png'
import img2 from '../../../shared/images/Group(3).png'
import img3 from '../../../shared/images/Group(2).png'




export const Advertising = () => {
    return (
        <div className='advertising-container'>

        <img className='img1' src={img1} alt="" />

        <img className='img2' src={img2} alt="" />

        <img className='img3' src={img3} alt="" />











            {/* <h2 className='advertising_text1'>What’s your next move?</h2> */}
            {/* <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Faucibus sed blandit tellus,
                lobortis. Mattis leo mauris
                tincidunt pulvinar cras mattis
                tristique. Urna molestie nisl lobortis ut sit 
                at ultricies duis cursus. 
                Semper phasellus tristique 
                ullamcorper velit dolor ac. Odio 
                at imperdiet laoreet risus</p> */}
        </div>
    );
}


