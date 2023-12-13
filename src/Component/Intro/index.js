import React from 'react';
import Iimg from '../../Images/intro.png';
import './index.css';

const index = () => {
  return (
    <section>
      <div className='container' style={{margin:"0",padding:"0"}}>
        <div className='intro'>
          <div className='intro-l'>
            <span>Summer Internship</span>
            <span>Application</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
          </div>
          <div className='intro-r'>
            <img src={Iimg} alt='intro' />
          </div>
        </div>
      </div>
    </section>

  )
}

export default index;