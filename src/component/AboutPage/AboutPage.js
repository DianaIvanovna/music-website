import React, { useState } from 'react';
import './AboutPage.scss';
import mainPhoto from '../../public/mainPhoto.png';
import mainPhoto2 from '../../public/mainPhoto2.png';
import Sergey from '../../public/Sergey.svg';
import Shmidt from '../../public/Shmidt.svg';
import number20 from '../../public/number20.svg';
import practice from '../../public/practice.svg';
import focus from '../../public/focus.svg';

const AboutPage = () => {
  const [blockScroll, setBlockScroll] = useState(false);
  const [step, setStep] = useState(0);

  const scrollHandler = (event) => {
    if (!blockScroll) {
      if (event.deltaY < 0 && step !== 8) {
        console.log('Scroll!', step);
        setStep((value) => value + 1);
        setBlockScroll(true);
        setTimeout(() => {
          setBlockScroll(false);
        }, 2500);
      }
      if (event.deltaY > 0 && step !== 8) {
        console.log('Scroll!', step);
        setStep((value) => value - 1);
        setBlockScroll(true);
        setTimeout(() => {
          setBlockScroll(false);
        }, 2500);
      }
    }
  };

  return (
    <div
      className={`about-page about-page__anim--step-${step + 1}`}
      onWheel={(event) => {
        scrollHandler(event);
      }}
    >
      <div className="about-page__item-1">
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
      <div className="about-page__item-2">
        <img src={Sergey} className="about-page__first-name " alt="Sergey" />
        <img src={Shmidt} className="about-page__full-name " alt="Shmidt" />
      </div>
      <img src={number20} alt="20" className="about-page__item-4" />
      <img src={practice} alt="practice" className="about-page__item-5" />
      <div>
        <img src={focus} alt="focus" className="about-page__item-9" />
      </div>
      <div className="about-page__item-3">
        <p className="about-page__text  about-page__item-6">
          <span>I've been playing guitar for</span>
          <br /> <span>over</span> twenty years.
        </p>
        <p className="about-page__text  about-page__item-7">
          <span>
            After graduating from music school,
            <br /> I've dedicated few years to
          </span>{' '}
          play songs
          <br />
          <span>from famous bands and musicians.</span>
        </p>
        <p className="about-page__text  about-page__item-8">
          <span>
            In the following years my focus
            <br /> was{' '}
          </span>{' '}
          to master{' '}
          <span>
            drums, electric
            <br /> and bass guitar
          </span>
        </p>
        <p className="about-page__text  about-page__item-10">
          <span>Since 2020 I've been working on</span>
          <br /> writing my own{' '}
          <span>
            songs and poems.
            <br /> I think you’ll enjoy it!
          </span>
        </p>
        <button className="about-page__button">Listen</button>
        <div className="about-page__scroll-container">
          <p className="about-page__scroll-text">scroll</p>
          <div className="about-page__scroll">
            <div className="about-page__scroll-line"></div>
            <div className="about-page__scroll-pointer"></div>
          </div>
        </div>
      </div>

      <div className="about-page__img">
        <img src={mainPhoto} alt="avatar" />
      </div>
      <div className="about-page__img-2">
        <img src={mainPhoto2} alt="avatar" />
      </div>
      <div className="about-page__circle"></div>
    </div>
  );
};

export default AboutPage;
