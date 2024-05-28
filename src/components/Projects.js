import '../App.css';
import { FaFileExcel, FaFilePdf, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';

const projects = [
    {
        title:'Economic Analysis of Automobile Sector',
        description: 'An economic analysis of the Indian automobile sector was done taking into consideration demand supply curve Sales of different brands Market share Demand Curve, Elasticity cross price elasticity and demand elasticity etc.',
        fileType: 'pptx',
        fileUrl: '/Automobile_group 4.pptx'
    },{
        title:'Financial Analysis of the Oil and gas sector',
        description:'A comprehensive industry analysis of the Oil and Gas sector of India and ranking top 5 companies based on net profit operating cashflow etc also analysing the financial position of the companies based on some important ratios.',
        fileType: 'pptx',
        fileUrl: '/Group 1 PPT.pptx'
    },{
        title:'An analysis on the working Capital Management and Dividend Policy of “Jublient Ingrevia Ltd.” based on Historical Data',
        description:'Calculation and Interpretation of various factors such as Cost of Equity, Cost of Capital, Cost of Debt etc. and the dividend policy and structure analysis of the company based on the historical data has been performed.',
        fileType: 'xlsx',
        fileUrl: '/FM project.xlsx'
    }
];

const DownloadButton = ({ fileType, fileUrl }) => {
    const renderIcon = () => {
      switch (fileType) {
        case 'xlsx':
          return <FaFileExcel style={{ color: 'green', marginRight:'6px' }} />;
        case 'pdf':
          return <FaFilePdf style={{ color: 'red', marginRight:'6px' }} />;
        case 'docx':
          return <FaFileWord style={{ color: 'blue', marginRight:'6px' }} />;
          case 'pptx':
            return <FaFilePowerpoint style={{ color: 'orange', marginRight: '6px' }} />;
        default:
          return null;
      }
    };
  
    return (
      <a href={fileUrl} download>
        <button className='button'>
          {renderIcon()}
          Download
        </button>
      </a>
    );
  };
  

function Projects(){
    return (
        <div className='project-section'>
            <div className='section-title'>Projects</div>
            <div className='projects-list'>
                {projects.map(project => <div className='project-card'>
                    <div className='project-card-title'>
                        <div className='project-title'>{project.title}</div>
                        <div className='projects-download-btn'>
                        <DownloadButton fileType={project.fileType} fileUrl={project.fileUrl} />
                        </div>
                    </div>
                        <div className='project-desc'>{project.description}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Projects;