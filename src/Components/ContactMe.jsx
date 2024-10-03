import React from 'react';

function ContactMe() {
  return (
    <>
      <div className='container bg-dark mt-4 p-5 text-white'>
        <h2 className='font-weight-bold text-center py-4'>Contact Me</h2>
        
        <form className='p-4'>
          <div className='form-group mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' id='name' placeholder='Enter your name' required />
          </div>

          <div className='form-group mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='Enter your email' required />
          </div>

          <div className='form-group mb-3'>
            <label htmlFor='message' className='form-label'>Message</label>
            <textarea className='form-control' id='message' rows='5' placeholder='Write your message' required></textarea>
          </div>

          <div className='text-center'>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMe;