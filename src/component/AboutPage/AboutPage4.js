import React, { useEffect, useState } from 'react';
import './AboutPage.scss';
import { useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import mainPhoto from '../../public/mainPhoto.png';
import mainPhotoTablet from '../../public/mainPhoto-tablet.png';
import mainPhotoMobile from '../../public/mainPhoto-mobile.png';

import mainPhoto2 from '../../public/mainPhoto2.png';
import mainPhoto2Tablet from '../../public/mainPhoto2-tablet.png';
import mainPhoto2Mobile from '../../public/mainPhoto2-mobile.png';
import Sergey from '../../public/Sergey.svg';
import Shmidt from '../../public/Shmidt.svg';
import number20 from '../../public/number20.svg';
import practice from '../../public/practice.svg';
import focus from '../../public/focus.svg';

const AboutPage = () => {
  const [blockScroll, setBlockScroll] = useState(false);
  const [step, setStep] = useState(0);
  const [animItem, setAnimItem] = useState(-1);
  const navigate = useNavigate();

  const [prevStep, setPrevStep] = useState(7);
  const [touchPos, setTouchPos] = useState(null);
  const [mobile, setMobile] = useState(() => {
    if (window.innerWidth <= 600) {
      return true;
    }
    return false;
  });

  const timeAnim = 2000;

  // useEffect(() => {
  //   document.getElementById('root').className = 'root root--100';

  //   return () => {
  //     document.getElementById('root').className = 'root';
  //   };
  // }, []);

  const scrollHandler = (event) => {
    if (!blockScroll) {
      if (event.deltaY < 0 && step !== 0) {
        console.log('скролл вниз');
        setStep((value) => {
          setPrevStep(value);
          return value - 1;
        });
        setBlockScroll(true);
        setTimeout(() => {
          setBlockScroll(false);
        }, 2500);
      }
      if (event.deltaY > 0 && step !== 8) {
        console.log('скролл вверх');
        setStep((value) => {
          setPrevStep(value);
          return value + 1;
        });
        setBlockScroll(true);
        setTimeout(() => {
          setBlockScroll(false);
        }, 2500);
      }
    }
  };

  const scrollMobileEndHandler = (event) => {
    if (touchPos) {
      let newTouchPos = event.changedTouches[0].clientY;
      if (newTouchPos > touchPos && step !== 0) {
        console.log('finger moving down');
        setStep((value) => {
          setPrevStep(value);
          return value - 1;
        });
        setBlockScroll(true);
        setTimeout(() => {
          setBlockScroll(false);
        }, 2500);
      }
      if (newTouchPos < touchPos && step !== 8) {
        console.log('finger moving up');

        setStep((value) => {
          setPrevStep(value);
          return value + 1;
        });
        setBlockScroll(true);
        setTimeout(() => {
          setBlockScroll(false);
        }, 2500);
      }

      setTouchPos(null);
    }
  };

  const scrollMobileStartHandler = (event) => {
    console.log('scrollMobileStartHandler', event.changedTouches[0].clientY);
    setTouchPos(event.changedTouches[0].clientY);
  };

  return (
    <div
      className={`about-page about-page__anim--step-${step + 1}`}
      onWheel={(event) => {
        scrollHandler(event);
      }}
      onTouchStart={(event) => {
        scrollMobileStartHandler(event);
      }}
      onTouchMove={(event) => {
        scrollMobileEndHandler(event);
      }}
    >
      <Transition
        in={step === 0}
        timeout={timeAnim}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`about-page__block-1 ${
              state ? `about-page__block-1--${state}` : ''
            }`}
          >
            <p className="about-page__text">
              musician.poet.
              <br />
              composer.
            </p>
            <div className="about-page__scroll-container">
              <p className="about-page__scroll-text">scroll</p>
              <div className="about-page__scroll">
                <div className="about-page__scroll-pointer"></div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <div className="about-page__tablet-scroll-container">
        <div className="about-page__scroll">
          <div
            className={`about-page__tablet-scroll-line about-page__tablet-scroll-line--${step}`}
          ></div>
          <div className="about-page__tablet-scroll-pointer"></div>
        </div>
        <p className="about-page__scroll-text">scroll</p>
      </div>

      {/* <Transition
        in={step === 0}
        timeout={timeAnim}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`about-page__block-2 ${
              state ? `about-page__block-2--${state}` : ''
            }`}
          >
            <img
              src={Sergey} 
              className="about-page__block-2-first-name"
              alt="Sergey"
            /> 
            <img
              src={Shmidt}
              className="about-page__block-2-full-name"
              alt="Shmidt"
            />
          </div>
        )}
      </Transition> */}
      <Transition in={step === 0} timeout={timeAnim} unmountOnExit>
        {(state) => (
          <div
            className={`about-page__block-2-container ${
              state ? `about-page__block-2-container--${state}` : ''
            }`}
          >
            <div className="about-page__block-2">
              <p className="about-page__block-2-first-name">Sergey</p>
              <p className="about-page__block-2-full-name">Shmidt</p>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        in={step === 1 || step === 2}
        timeout={timeAnim}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <p
            className={`about-page__block-4 ${
              state ? `about-page__block-4--${state}-${step}` : ''
            }`}
          >
            20
          </p>
        )}
      </Transition>

      <Transition
        in={step === 3 || step === 4}
        timeout={timeAnim}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <p
            className={`about-page__block-5 ${
              state ? `about-page__block-5--${state}-${step}` : ''
            }`}
          >
            {mobile ? (
              'practice'
            ) : (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prac-
                <br />
                tice
              </>
            )}
          </p>
        )}
      </Transition>
      <Transition
        in={step === 5 || step === 6}
        timeout={timeAnim}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <p
            className={`about-page__block-19 ${
              state ? `about-page__block-19--${state}-${step}` : ''
            }`}
          >
            focus
          </p>
        )}
      </Transition>

      {/* <img src={practice} alt="practice" className="about-page__item-5" /> */}
      {/* <div>
        <img src={focus} alt="focus" className="about-page__item-9" />
      </div> */}

      <p
        className={`about-page__text-block  about-page__block-6 about-page__block-6--${prevStep}-${step}`}
      >
        <span>I've been playing guitar for </span>
        <span>over</span> twenty years.
      </p>

      <p
        className={`about-page__text-block  about-page__block-7 about-page__block-7--${prevStep}-${step}`}
      >
        <span>
          After graduating from music school, I've dedicated few years to
        </span>{' '}
        play songs <span>from famous bands and musicians.</span>
      </p>

      <p
        className={`about-page__text-block  about-page__block-8 about-page__block-8--${prevStep}-${step}`}
      >
        <span>In the following years my focus was </span> to master{' '}
        <span>drums, electric and bass guitar</span>
      </p>

      <div
        className={` about-page__block-9 about-page__block-9--${prevStep}-${step}`}
      >
        <p className="about-page__text-block  ">
          <span>Since 2020 I've been working on</span> writing my own{' '}
          <span>songs and poems. I think you’ll enjoy it!</span>
        </p>
        <button
          className="about-page__button"
          onClick={() => {
            return navigate('/songs');
          }}
        >
          Listen
        </button>
      </div>

      <Transition
        in={step >= 2 && step <= 9}
        timeout={{
          appear: 1000,
          enter: 1000,
          exit: 1000,
        }}
        //  moutOnEnter
        unmountOnExit
      >
        {(state) => (
          <div className={`about-page__block-3 about-page__block-3--${state}`}>
            <div className="about-page__scroll-container">
              <p className="about-page__scroll-text">scroll</p>
              <div className="about-page__scroll">
                <div
                  className={`about-page__scroll-line about-page__scroll-line--${
                    step + 1
                  }`}
                ></div>
                <div
                  className={`about-page__scroll-pointer about-page__scroll-pointer--${
                    step + 1
                  }`}
                ></div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      {/* <Transition
        in={step === 0}
        timeout={timeAnim}
        //  moutOnEnter
      >
        {(state) => (
          <picture
            className={`about-page__img-block-1 ${
              state ? `about-page__img-block-1--${state}` : ''
            }`}
          >
            <source srcSet={mainPhoto} media="(min-width: 1041px)" />
            <source srcSet={mainPhotoTablet} media="(min-width: 600px)" />

            <img srcSet={mainPhotoMobile} alt="avatar" />
          </picture>
        )}
      </Transition> */}
      {/* <div className="about-page__img-2">
        <img src={mainPhoto2} alt="avatar" />
      </div> */}
      {/* <div className="about-page__circle"></div> */}

      <Transition in={step === 0} timeout={timeAnim}>
        {(state) => (
          <div
            className={`about-page__circle-1 ${
              state ? `about-page__circle-1--${state}` : ''
            }`}
          ></div>
        )}
      </Transition>

      <Transition in={step === 0} timeout={timeAnim}>
        {(state) => (
          <picture
            className={`about-page__img-block-1 ${
              state ? `about-page__img-block-1--${state}` : ''
            }`}
          >
            <source srcSet={mainPhoto} media="(min-width: 1041px)" />
            <source srcSet={mainPhotoTablet} media="(min-width: 600px)" />

            <img srcSet={mainPhotoMobile} alt="avatar" />
          </picture>
        )}
      </Transition>

      <Transition
        in={step === 8}
        timeout={{
          appear: 1000,
          enter: 1000,
          exit: timeAnim,
        }}
        unmountOnExit
      >
        {(state) => (
          <picture
            className={`about-page__img-block-2 ${
              state ? `about-page__img-block-2--${state}` : ''
            }`}
          >
            <source srcSet={mainPhoto2} media="(min-width: 1024px)" />
            <source srcSet={mainPhoto2Tablet} media="(min-width: 600px)" />

            <img srcSet={mainPhoto2Mobile} alt="avatar" />
          </picture>
        )}
      </Transition>
    </div>
  );
};

export default AboutPage;
