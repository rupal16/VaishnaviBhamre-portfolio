import '../App.css';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpeg';

const categories = [
    {
        title:'Resume',
        bg:'#C1DE6A',
        linkToPage:'/resume',
    },{
        title:'Projects',
        bg:'#F0C568',
        linkToPage:'/projects',
    },{
        title:'Certifications',
        bg:'#80D8DA',
        linkToPage:'/certifications',
    }
];

function Home(){
    return (
        <div className='home-section'>
            {/* <div className="home-pic"> */}
            <div className='home-section-top'>
                <img className="home-pic" src={profile} alt='profile img' />
                {/* </div> */}
                <div className='home-right'>
                    <div className='home-name'>Vaishnavi Pramod Bhamre</div>
                    <div className='home-subtitle'>A bit about me</div>
                    <div className='home-about'>Hi, I am Vaishnavi Bhamre. I am a bachelor's in business administration graduate from Jalgaon, Maharashtra. I am currently pursuing PGDM (finance) at N.L Dalmia Institute (Mumbai).
Along with my academics I have an artistic side to me as well. I love creating mandala art as it helps me to concentrate on things and build my patience. I also love singing and watching movies.
Hobbies and interest as such have helped me to develop my skills, nurture my creativity and inspired me to keep on learning.</div>
                </div>
            </div>
            <div className='home-section-bottom'>
                {categories.map((category, index) => <Link to={category.linkToPage} className='home-category hover-effect' style={{backgroundColor:`${category.bg}`, textDecoration:'none', color:'black'}}>{category.title}</Link>)}
            </div>
        </div>
    )
}

export default Home;