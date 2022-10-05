import React, { useState, useEffect } from "react";
import Video from "../assets/video.mp4";
import sec2Left from "../assets/sec2Left.webp";
import sec3Left from "../assets/sec3Left.webp";
import sec2Right from "../assets/sec2Right.webp";
import sec4Right from "../assets/sec4Right.webp";
import sec5Center from "../assets/sec5Center.webp";
import sec6Center from "../assets/ContactUs.webp";
import { AiOutlineTwitter, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

export default function Main() {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    console.log(window.pageYOffset);
    setPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="main__main">
      <main className="main">
        <section className="sec1">
          <h2
            className="parallax__text"
            style={{ top: `-${position * 0.3 + "%"}` }}
          >
            ACE
          </h2>
          <video className="video" autoPlay muted loop>
            <source src={Video} />
          </video>
        </section>
      </main>
      <h2 className="title">Избранные проекты</h2>
      <main className="main2">
        <div className="wrapper">
          <section className="sec2">
            <div className="sec2__contains">
              <div className="sec2__left">
                <div className="project">
                  <h6 className="project__title">Проект 1</h6>
                  <p className="project__text">
                    Это текст. Кликните дважды, чтобы отредактировать.
                    Расскажите посетителям сайта о себе.
                  </p>
                  <p className="project__symbol">&#8594;</p>
                </div>
                <img className="img" src={sec2Left} />
              </div>
              <div className="sec2__right">
                <div className="project2">
                  <h6 className="project__title">Проект 2</h6>
                  <p className="project__text">
                    Это текст. Кликните дважды, чтобы отредактировать.
                    Расскажите посетителям сайта о себе.
                  </p>
                  <p className="project__symbol">&#8594;</p>
                </div>
                <img src={sec2Right} />
              </div>
            </div>
          </section>
          <section className="sec3">
            <div className="sec3__contains">
              <div className="sec3__left">
                <img className="img" src={sec3Left} />
              </div>
              <div className="sec3__right">
                <div className="project3">
                  <h6 className="project__title">Проект 3</h6>
                  <p className="project__text">
                    Это текст. Нажмите один раз и выберите «Редактировать текст»
                    или просто кликните дважды, чтобы добавить свой текст и
                    настроить шрифт. Вы можете переместить его в любое место на
                    странице. Расскажите посетителям сайта о себе.
                  </p>
                  <p>
                    ​Здесь будет удачно смотреться текст о вашей компании и
                    услугах. Используйте эту возможность, чтобы выгодно
                    представить себя и свою компанию клиентам. Расскажите
                    интересную историю, например, как вам в голову пришла идея
                    собственного дела, и объясните, в чем заключается ваше
                    преимущество перед конкурентами. Приводите увлекательные
                    факты и цифры.
                  </p>
                  <p className="project__symbol">&#8594;</p>
                </div>
              </div>
            </div>
          </section>
          <section className="sec4">
            <div className="sec4__contains">
              <div className="sec4__left">
                <div className="project4">
                  <h6 className="project__title">Проект 4</h6>
                  <p className="project__text">
                    Это текст. Нажмите один раз и выберите «Редактировать текст»
                    или просто кликните дважды, чтобы добавить свой текст и
                    настроить шрифт. Вы можете переместить его в любое место на
                    странице. Расскажите посетителям сайта о себе.
                  </p>
                  <p>
                    ​Здесь будет удачно смотреться текст о вашей компании и
                    услугах. Используйте эту возможность, чтобы выгодно
                    представить себя и свою компанию клиентам. Расскажите
                    интересную историю, например, как вам в голову пришла идея
                    собственного дела, и объясните, в чем заключается ваше
                    преимущество перед конкурентами. Приводите увлекательные
                    факты и цифры.
                  </p>
                  <p className="project__symbol">&#8594;</p>
                </div>
              </div>
              <div className="sec4__right">
                <img className="img" src={sec4Right} />
              </div>
            </div>
          </section>
          <section className="sec5">
            <div className="sec5__contains">
              <div className="sec5__left">
                <img className="img" src={sec5Center} />
              </div>
              <div className="sec5__right">
                <div className="project5">
                  <h6 className="project__title">Проект 5</h6>
                  <p className="project__text">
                    Это текст. Нажмите один раз и выберите «Редактировать текст»
                    или просто кликните дважды, чтобы добавить свой текст и
                    настроить шрифт. Вы можете переместить его в любое место на
                    странице. Расскажите посетителям сайта о себе.
                  </p>
                  <p className="project__symbol">&#8594;</p>
                </div>
              </div>
            </div>
          </section>
          <section className="sec6">
            <img src={sec6Center}/>
            <p className="toparr" onClick={() => {
              location.reload()
            }}>
              &uarr;
            </p>
            <form>
              <div style={{fontSize: '24px', display: 'flex', gap: '5px', cursor : 'pointer'}}>
                <AiOutlineTwitter/>
                <AiFillInstagram/>
                <AiOutlineFacebook/>
              </div>
              <p style={{fontSize : '20px', marginBottom: '10px'}}>Подпишитесь на рассылку</p>
              <input type="text" />
              <button>OK</button>
            </form>
          </section>
        </div>
      </main>
    </main>
  );
}
