import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import landingImg from '../assets/svg-1.svg'
import profileimg from '../assets/profile.jpg'
import landingImg1 from '../assets/svg-2.svg'
import landingImg2 from '../assets/svg-3.svg'
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos'

import 'aos/dist/aos.css';


function Landingpage() {
  useEffect(() => {
    AOS.init({
      offset: 200, delay: 0, duration: 1000, easing: 'ease', once: false, mirror: false,
    });
  }, []);

  return (
    <>
       <div className="LandingSection container  ">
        <div style={{height:"800px"}}  className="row align-items-center my-5  ">
          <div className="col-lg-5">
          
          <div data-aos="flip-left">
          
          <p>Marketing Agency</p>
           
           
            <h3>Lead Generation Specialist for Online Businesses</h3>
            <p className='mt-3' style={{textAlign:'justify'}}>We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals. </p>
            <div data-aos="flip-left">
            <button className='btn btn-info'>Get Started</button>
            </div>
            </div>
            
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <div data-aos="fade-left">
          <img style={{width:"100%"}} src={landingImg} alt="landing page" />

          </div>
          </div>
        </div>
        {/* next */}
     
          <div style={{height:"800px",}} className="row align-items-center my-5 bg-white">
            <div className="col-lg-6">
            <div data-aos="flip-left">
            <img  style={{width:"400px", height:"300px"}}  src={profileimg} alt="landing page" />
              </div>
            </div>
            
            <div className="col-lg-6">
            <div data-aos="fade-left">
              <p className='text-info'>Sarah Jeni</p>
              <h3 className='text-black'>Ultra helped me increase <br /> my revenue by over 3X in <br /> less than 3 months!</h3>
              <p className='mt-3 text-black' style={{textAlign:'justify'}}>Their team is wonderful! I can't believe I didn't start <br /> working with them earlier. </p>
              <div data-aos="flip-left">
              <button className='btn btn-info '>View Case Study</button>
              </div>
              </div>
            </div>
          </div>
     
        {/* next */}
        <div style={{height:"800px"}}  className="row align-items-center my-5  ">
          <div className="col-lg-5">
          <div data-aos="flip-up">
            <p>Instant Setup</p>
            <h3>Extremely quick <br /> onboarding process</h3>
            <p className='mt-3' style={{textAlign:'justify'}}>Once you've joined, our team of specialist will reach out to <br /> you and get you set up in minutes. </p>
            <div data-aos="flip-left">
            <button className='btn btn-info'>Learn More</button>
            </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <div data-aos="flip-down">
            <img style={{width:"100%"}} src={landingImg1} alt="landing page" />
            </div>
          </div>
        </div>
        <div className="Features my-5" >
          <h3 style={{marginBottom:'30px'}} className="text-center">Features</h3>
          <Row>
            <Col  className='mb-2' sm={12} md={6} lg={4}>
            <Card  style={{ width: '22rem',height:'400px' }}>
                  <Card.Body>
                  <Card.Title className='text-center '>Starter Pack</Card.Title>
        <h3 className='text-center'>$99.99</h3>
        <p className='text-center'>per month</p><br /><br /><br />
        <p className='text-center'>100 New Users <br /> $10,000 Budget <br /> Retargeting analytics</p>
        <div data-aos="zoom-in">
        <Button variant="info">Choose Plan</Button>
        </div>
                  </Card.Body>
              </Card>
            </Col>
            <Col  className='mb-2' sm={12} md={6} lg={4}>
            <Card style={{ width: '22rem',height:'400px' }}>
                  <Card.Body>
                  <Card.Title className='text-center'>Gold Rush</Card.Title>
        <h3 className='text-center'>$299.99</h3>
        <p className='text-center'>per month</p><br /><br /><br />
        <p className='text-center'>100 New Users <br /> $50,000 Budget <br /> Lead Gen analytics</p>
        <div data-aos="zoom-in">
        <Button variant="info">Choose Plan</Button>
        </div>
                  </Card.Body>
              </Card>
           </Col>
           <Col  className='mb-2' sm={12} md={6} lg={4}>
           <Card style={{ width: '22rem',height:'400px' }}>
                  <Card.Body>
                  <Card.Title className='text-center'>Diamond Kings</Card.Title>
        <h3 className='text-center'>$999.99</h3>
        <p className='text-center'>per month</p><br /><br /><br />
        <p className='text-center'>Unlimited Users <br /> Unlimited Budget <br />24/7 suport</p>
        <div data-aos="zoom-in">
        <Button variant="info">Choose Plan</Button>
        </div>
                  </Card.Body>
              </Card>
           </Col>
          </Row>
         
        </div>
        {/* next */}
        <div style={{height:"800px",}} className="row align-items-center my-5 ">
            <div className="col-lg-6">
            <div data-aos="zoom-out-up">
            <img  style={{width:"400px", height:"300px"}}  src={landingImg2} alt="landing page" />
            </div>
            </div>
            
            <div className="col-lg-6">
            <div data-aos="zoom-out-up">
              <p >Secure Database</p>
              <h3 >All your data is stored on <br /> our secure server</h3>
              <p className='mt-3 ' style={{textAlign:'justify'}}>You will never have to worry about your information <br /> getting leaked. Our team of security experts will ensure <br /> your records are kept safe. </p>
              <div data-aos="flip-left">
              <button className='btn btn-info '>Sign Up Now</button>
              </div>
              </div>
            </div>
          </div>
        
        </div> 
        <div>
      <h3 className='text-center mt-5'>Join our exclusive membership to receive the latest news and trends</h3>
      <h4 className='text-center mt-5'>You can unsubscribe at any time.</h4>
    </div><br /><br />
    <div data-aos="flip-left">

    <Row className='ms-5 '>
    
      <Col className='mb-4' sm={12} md={6} lg={3} >
        <h4>About Us</h4>
        <p>How it works</p>
        <p>Testimonials</p>
        <p>Careers</p>
        <p>Investors</p>
      </Col>
      <Col className='mb-4' sm={12} md={6} lg={3} >
        <h4>Contact Us</h4>
        <p>Contact</p>
        <p>Support</p>
        <p>Destinations</p>
        <p>Sponsorships</p>
      </Col>
      
      
      <Col className='mb-4' sm={12} md={6} lg={3} >
        <h4>Videos</h4>
        <p>Submit Video</p>
        <p>Ambassadors</p>
        <p>Agency</p>
        <p>Influencer</p>
      </Col>
      <Col className='mb-4' sm={12} md={6} lg={3} >
        <h4>Social Media</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Youtube</p>
        <p>Twitter</p>
      </Col>
      
    </Row>
    </div>
    <br /><br />
    <div className="d-flex align-items-center justify-content-center w-100">ULTRA © 2020</div>
    <div className="icons d-flex justify-content-center  ">
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
              <i  className='fa-brands fa-twitter '></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
              <i className='fa-brands fa-instagram ms-5'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
              <i className='fa-brands fa-facebook ms-5'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
              <i className='fa-brands fa-linkedin ms-5'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
              <i className='fa-brands fa-github ms-5'></i>
            </a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>
              <i className='fa-solid fa-phone ms-5'></i>
            </a>
          </div>
        
       
       
        
    </>
  )
}

export default Landingpage
