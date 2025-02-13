import './project.scss'
import projectImg1 from '../../../shared/images/Vector(8).png'
import projectImg2 from '../../../shared/images/Layer_1.png'



export const Project = () => {
    return (
        <div className="project-container">
            <h2 className='project_text1'>Big project?</h2>
            <p className='project_text2'>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Faucibus sed blandit tellus, lobortis.
                Mattis leo mauris tincidunt pulvinar 
                cras mattis tristique. Urna molestie nisl lobortis ut
                sit at ultricies duis cursus. Semper
                phasellus tristique ullamcorper 
                velit dolor ac. Odio at imperdiet laoreet risus</p>

                <button className='project_btn'>How big?</button>


                <img className='projectImg2' src={projectImg2} alt="" />

                <img className='projectImg1' src={projectImg1} alt="" />

        </div>
    );
}

 
