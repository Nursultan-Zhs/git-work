import './brand.scss'
import cosmosImg from '../../../shared/images/Group.png'
import asteroidImg from '../../../shared/images/Asteroid.png'


export  const Brand = () => {
    return (
        <div className="brand-container">

            <h2 className="brand_text1">Your brand... in the moon</h2>
            <p className="brand_text2">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Faucibus sed blandit tellus, lobortis. Mattis leo mauris tincidunt
                pulvinar cras mattis tristique. Urna molestie nisl lobortis ut sit
                at ultricies duis cursus. Semper phasellus tristique ullamcorper 
                velit dolor ac. Odio at imperdiet laoreet risus</p>

            <button className='brand_btn'>Huston, we have a solution!</button>

            

                <img className='brand_img' src={cosmosImg} alt="" />

                <img className='brand_img2' src={asteroidImg} alt="" />


        </div>
    );
}

 