import React from 'react';
import './Home.css';
import Content from './Content';
// import '../Responsive.css';

const Home = () => {
  return (
    <>
      <section>
        <div className="Home-section">
          <div className="container">
            <div className="Home-head">
              <div className="Home-heading">
              LeaderBoards
              </div>
              <div className='line'><div className="underline"></div></div>
            </div>
            <div className="Home-page">
              <div className="Home-page-head">
                <div className="Home-page-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  Basic Backtest
                </div>
                <div className="Home-page-dropdown col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="slippage">
                    Slippage
                  </div>
                  <div className="Home-dropdown-container">

                    <select name="cars" id="cars">
                      <option value="volvo">0%</option>
                      <option value="saab">.5%</option>
                      <option value="saab">1%</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="Backtest-menu-head">
                <div className="Backtest-menu-List">
                  <div className="Backtest-List-container col-4 col-col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="Backtest-List col-4 col-col-sm-4 col-md-4 col-lg-4 col-xl-4 justify-content-center d-flex">
                      Rank
                    </div>
                    <div className="Backtest-List col-8 col-col-sm-8 col-md-8 col-lg-8 col-xl-8">
                      Name
                    </div>
                  </div>
                  <div className="Backtest-List-container-2 col-8 col-col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <div className="Backtest-List col-2 col-col-sm-2 col-md-2 col-lg-2 col-xl-2">
                      Calmer Ratio
                    </div>
                  <div className="Backtest-List col-2 col-col-sm-2 col-md-2 col-lg-2 col-xl-2">
                      Overall Profit
                    </div>
                  <div className="Backtest-List col-2 col-col-sm-2 col-md-2 col-lg-2 col-xl-2">
                      Avg. Daily Profit 
                    </div>
                  <div className="Backtest-List col-2 col-col-sm-2 col-md-2 col-lg-2 col-xl-2">
                      Win %(Day)
                    </div>
                  <div className="Backtest-List col-2 col-col-sm-2 col-md-2 col-lg-2 col-xl-2">
                      Action
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Content/>
      
    </>
  )
}

export default Home
