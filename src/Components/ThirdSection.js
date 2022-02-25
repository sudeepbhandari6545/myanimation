import React from 'react'
import { Container } from 'react-bootstrap'
import { Controller, Scene } from 'react-scrollmagic'

import { Tween, Timeline } from 'react-gsap'

//style
import './ThirdSection.css'

const ThirdSection = () => {
  return (
    <>
      <div className="third-section">
        <Container>
          <div className="image-section">
            <Controller>
              <Scene
                duration={2000}
                pin={true}
                indicators={true}
                triggerHook="onLeave"
              >
                <Timeline paused>
                  <Tween
                    from={{ scale: 1.5, rotate: 0 }}
                    to={{ scale: 2.5, rotate: 360 }}
                  >
                    <div className="logo"></div>
                  </Tween>
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    <div className="heading">
                      <h2>Pre-order now. Samsung Galaxy S22 Ultra.</h2>
                      <p>
                        <span>Rs.50000</span>:a month with 50GB data plan
                      </p>
                      <div className="button">
                        <button>order now</button>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ThirdSection
