import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";
import Featured from "./Featured";

function Home() {
  return (
    <>
      <div className="body-home">
        <div className="background-image">
          <div className="layer">
            <NavBar />
            <Featured />
            <div className="home-container">
              <div className="column-welcome">
                <div className="column-welcome-text">
                  <h1>Title Here</h1>
                  <p>
                    Lorem ipsum dolor sit amet. Rem numquam cupiditate ut
                    delectus laudantium hic nihil corporis id facilis inventore.
                    Corrupti omnis et deleniti quas sit nesciunt ducimus eum
                    odit libero qui dolor doloribus cum recusandae quia. Ad
                    illum provident non laboriosam cumque et nihil quae et
                    praesentium ratione in magni rem tenetur atque. Ab vero enim
                    et labore corporis qui neque quidem aut sunt recusandae aut
                    amet quibusdam ex rerum corrupti ea officiis perspiciatis.
                    Nam culpa fuga est distinctio obcaecati et adipisci
                    explicabo est iusto eveniet aut fugiat distinctio sed omnis
                    quia et voluptatem autem. Et amet placeat aut quam eveniet
                    vel nihil earum est doloremque debitis ex provident quia qui
                    veritatis quasi et nostrum veniam! Qui internos vero ut
                    voluptatem sit Quis quod At quos earum.
                  </p>
                </div>
              </div>
              <div className="button-container">
                <Link to="/index">
                  <div className="column-button-one">
                    <div className="column-text-container">
                      <div className="column-text">BROWSE</div>
                    </div>
                  </div>
                </Link>
                <Link to="/battleworld">
                  <div className="column-button-two">
                    <div className="column-text-container">
                      <div className="column-text">BATTLEWORLD</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
