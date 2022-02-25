import React from 'react'
import { Container } from 'react-bootstrap'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

//style
import './FirstSection.css'

const FirstSection = () => {
  return (
    <>
      <div className="first-mainsection">
        <Container>
          <Controller>
            <Scene
              duration={900}
              pin={true}
              indicators={true}
              triggerHook="onLeave"
            >
              <Timeline paused>
                <Tween from={{ scale: 1 }} to={{ scale: 0.5 }}>
                  <div>
                    <video
                      autoPlay="autoplay"
                      loop="loop"
                      muted
                      className="background_video"
                    >
                      <source
                        src="https://player.vimeo.com/external/370467553.sd.mp4?s=96de8b923370fb7fa8616d4e0b74eaf3fac9e576&profile_id=139&oauth2_token_id=57447761"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Tween>
                <Tween
                  from={{ scale: 2 }}
                  to={{ scale: 1, marginTop: '200px', rotate: 360 }}
                >
                  <div className="firstheading">
                    <h1>The streaming TV from Sky</h1>
                  </div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </Container>
      </div>
    </>
  )
}

export default FirstSection
