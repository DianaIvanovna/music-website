import React, { createRef, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import './PoemsPage.scss';
import mainPhoto3 from '../../public/mainPhoto3.png';
import mainPhoto3Tablet from '../../public/mainPhoto3-tablet.png';
import mainPhoto3Mobile from '../../public/mainPhoto3-mobile.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { poemsArr } from './data';

const PoemsPage = () => {
  const refPoemBig = createRef(null);
  const refPoem = createRef(null);
  const [activePoem, setActivePoem] = useState(() => {
    if (window.innerWidth <= 1024) {
      return 0;
    }
    return 1;
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [animPoem, setAnimPoem] = useState(false);
  const [animMenu, setAnimMenu] = useState(true);
  const [showPage, setShowPage] = useState(false);

  // console.log('========location', location);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const id = query.get('id');

    if (id && poemsArr[id] !== undefined) {
      setAnimPoem(true);
      setAnimMenu(false);
      setActivePoem(+id + 1);
      setShowPage(true);
    } else {
      setAnimPoem(false);
      setAnimMenu(true);
    }

    setShowPage(true);
    document.getElementById('root').className = 'root root--100';

    return () => {
      document.getElementById('root').className = 'root';
    };
  }, [location]);

  useEffect(() => {
    if (activePoem && poemsArr[activePoem - 1]) {
      if (refPoem.current) {
        refPoem.current.scrollTop = 0;
      }
      if (refPoemBig.current) {
        refPoemBig.current.scrollTop = 0;
      }
    }
  }, [activePoem, poemsArr]);

  // const [showPoem, setShowPoem] = useState(0);

  if (!showPage) {
    return null;
  }

  return (
    <div className="poems-page">
      <div className="poems-page__container">
        {/* DESKTOP */}
        <ul className="poems-page__list">
          {poemsArr.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActivePoem(index + 1);
              }}
              className={`poems-page__li ${
                index === activePoem - 1 ? 'poems-page__li--active' : ''
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
        {poemsArr[activePoem - 1] ? (
          <p
            className="poems-page__poem-text"
            dangerouslySetInnerHTML={{ __html: poemsArr[activePoem - 1].text }}
            ref={refPoemBig}
          />
        ) : null}
        {/* END DESKTOP */}

        {/* MOBILE */}
        <Transition
          in={animMenu}
          timeout={1000}
          //  moutOnEnter
          unmountOnExit
        >
          {(state) => (
            <div className={`poems-page__menu--${state}`}>
              <h1 className="poems-page__title">Poems</h1>
              <ul className="poems-page__list poems-page__list--mobile">
                {poemsArr.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActivePoem(index + 1);
                      setAnimMenu(false);
                      //setAnimPoem(true);
                      window.scroll({
                        left: 0,
                        top: 0,
                        behavior: 'smooth',
                      });
                      setTimeout(() => {
                        //window.location.href = `/poems?id=${index}`;
                        navigate(
                          `/poems?poem=${poemsArr[index].url}&id=${index}`
                        );
                      }, 300);
                    }}
                    className={`poems-page__li ${
                      index === activePoem - 1 ? 'poems-page__li--active' : ''
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Transition>

        {/* END MOBILE  */}

        <Transition in={animPoem} timeout={1000}>
          {(state) => (
            <>
              {activePoem && poemsArr[activePoem - 1] ? (
                <div
                  className={`poems-page__poem-mobile poems-page__poem-mobile--${state}`}
                  ref={refPoem}
                >
                  <h1 className="poems-page__subtitle">
                    {poemsArr[activePoem - 1].title}
                  </h1>

                  <p
                    className="poems-page__poem-text"
                    dangerouslySetInnerHTML={{
                      __html: poemsArr[activePoem - 1].text,
                    }}
                  />
                  <div className="poems-page__button-container">
                    {activePoem !== 1 ? (
                      <button
                        className="poems-page__button poems-page__button--first"
                        onClick={() => {
                          setAnimPoem(false);
                          setTimeout(() => {
                            // window.location.href = `/poems?id=${
                            //   +activePoem - 2
                            // }`;
                            navigate(
                              `/poems?poem=${poemsArr[activePoem - 2].url}&id=${
                                +activePoem - 2
                              }`
                            );
                          }, 300);
                        }}
                      >
                        <svg
                          width="48"
                          height="18"
                          viewBox="0 0 48 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.49388 0.435578C8.18215 0.162816 7.70833 0.194404 7.43557 0.506132L0.43557 8.50613C0.188148 8.7889 0.188148 9.21112 0.43557 9.49389L7.43557 17.4939C7.70833 17.8056 8.18215 17.8372 8.49388 17.5644C8.8056 17.2917 8.83719 16.8179 8.56443 16.5061L2.65282 9.75001H47C47.4142 9.75001 47.75 9.41422 47.75 9.00001C47.75 8.5858 47.4142 8.25001 47 8.25001H2.65282L8.56443 1.49389C8.83719 1.18216 8.8056 0.708339 8.49388 0.435578Z"
                            fill="#52597A"
                          />
                        </svg>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {activePoem !== poemsArr.length ? (
                      <button
                        className="poems-page__button"
                        onClick={() => {
                          //setAnimMenu(true);
                          setAnimPoem(false);
                          setTimeout(() => {
                            // window.location.href = `/poems?id=${activePoem}`;
                            navigate(
                              `/poems?poem=${poemsArr[activePoem].url}&id=${activePoem}`
                            );
                            setAnimPoem(true);
                          }, 300);
                        }}
                      >
                        Next
                        <svg
                          width="48"
                          height="18"
                          viewBox="0 0 48 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M39.5061 0.435578C39.8178 0.162816 40.2917 0.194404 40.5644 0.506132L47.5644 8.50613C47.8119 8.7889 47.8119 9.21112 47.5644 9.49389L40.5644 17.4939C40.2917 17.8056 39.8178 17.8372 39.5061 17.5644C39.1944 17.2917 39.1628 16.8179 39.4356 16.5061L45.3472 9.75001H1C0.585786 9.75001 0.25 9.41422 0.25 9.00001C0.25 8.5858 0.585786 8.25001 1 8.25001H45.3472L39.4356 1.49389C39.1628 1.18216 39.1944 0.708339 39.5061 0.435578Z"
                            fill="#52597A"
                          />
                        </svg>
                      </button>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </>
          )}
        </Transition>

        <div className="poems-page__shadow-up"></div>
        <div className="poems-page__shadow-down"></div>

        <picture className="poems-page__img">
          <source srcSet={mainPhoto3} media="(min-width: 1024px)" />
          <source srcSet={mainPhoto3Tablet} media="(min-width: 600px)" />

          <img srcSet={mainPhoto3Mobile} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default PoemsPage;
