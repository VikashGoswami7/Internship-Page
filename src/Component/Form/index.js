import Textarea from '@mui/joy/Textarea';
import React from 'react';
import './index.css';


const index = () => {
  return (
    <section>
      <div className='container' style={{ margin: "0", padding: "0" }}>
        <div className='application'>
          <div className='form'>
            <span>Apply For College Summer Intership</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>

            <div className='inputbox' >
              <div className='l-input'>
                <span>Student Name</span>
                <input />
              </div>
              <div className='r-input'>
                <span>Position/Title</span>
                <input />
              </div>
            </div>


            <div className='inputbox' >
              <div className='l-input'>
                <span>Student Phone Number</span>
                <input />
              </div>
              <div className='r-input'>
                <span>Student E-mail Id</span>
                <input />
              </div>
              <span></span>
            </div>


            <div className='inputbox' >
              <div className='l-input'>
                <span>Name of College/University</span>
                <input />
              </div>
              <div className='r-input'>
                <span>Duration number of months</span>
                <input />
              </div>
              <span></span>
            </div>


            <div className='inputbox' >
              <div className='l-input'>
                <span>Start Date of Internship (Availability)</span>
                <input type='date' />
              </div>
              <div className='r-input'>
                <span>End Date of Internship (Projected)</span>
                <input type='date' />
              </div>
              <span></span>
            </div>

            <div className='c-inputbox'>

              <span>Are you willing to work during weekends and holidays?</span>
              <div>
                <input type='radio' checked />
                <label>Yes</label>
              </div>
              <div>
                <input type='radio' />
                <label>No</label>
              </div>

            </div>

            <div className='c-inputbox'>
              <span>What is your role and responsibilities in that company?</span>
              <Textarea placeholder="Type here" minRows={8} />
            </div>

            <div className='c-inputbox'>
              <span>What is your reason for applying internship here?</span>
              <Textarea placeholder="Type here" minRows={8} />
            </div>

            <button>Request Now</button>

          </div>

        </div>
      </div>
    </section>

  )
}

export default index