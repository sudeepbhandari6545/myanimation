import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Controller, Scene } from 'react-scrollmagic'
import Sequence from '../Sequence'

//style
import './SecondSection.css'

const SecondSection = () => {
  const ref = useRef()
  return (
    <>
      <div className="second_section">
        <Container>
          <div className="main">
            <Controller>
              <Scene
                duration="360%"
                triggerHook="onLeave"
                pin
                indicators={true}
              >
                {(progress) => (
                  <div
                    style={{
                      height: '100vh',
                      position: 'relative',
                      paddingTop: '100px',
                    }}
                  >
                    <Sequence ref={ref} progress={progress} />
                  </div>
                )}
              </Scene>
            </Controller>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SecondSection
