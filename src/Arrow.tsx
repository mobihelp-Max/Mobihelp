import './Arrow.css'

type ArrowProps = {
    direction: 'left' | 'right';
}

function Arrow({direction} : ArrowProps) {
  return (
      <div id="arrowAnim">
          <div className={`${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
          <div className={`delay1 ${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
          <div className={`delay2 ${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
          <div className={`delay3 ${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
          <div className={`delay4 ${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
          <div className={`delay5 ${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
          <div className={`delay6 ${direction === 'right' ? 'arrowSlidingRight' : 'arrowSliding'}`}>
              <div className={`${direction === 'right' ? 'arrowRight' : 'arrow'}`}></div>
          </div>
      </div>
  )
}

export default Arrow
