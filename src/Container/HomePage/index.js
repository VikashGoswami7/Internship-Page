import React from 'react'
import Form from '../../Component/Form'
import Intro from '../../Component/Intro'
import Footer from '../Footer'

const index = () => {
  return (
    <section>
      <div className='container' style={{margin:"0",padding:"0"}}>
        <div className='home'>
          <Intro />
          <Form />
          <Footer />
        </div>
      </div>
    </section>

  )
}

export default index