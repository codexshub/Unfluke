import React from 'react';
import LOGO from '../Image/LOGO.png';
import User from '../Image/user.png';
// import '../Responsive.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <>


            <section>
                <div className="Navbar-section">
                    <div className="container">
                        <div className="Navbar">
                            <div className="Navbar-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="Nav-Logo col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                    <img src={LOGO} alt="LOGO" />
                                </div>
                                <div className="Nav-Icon-container col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <div className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 d-flex'>
                                        <div className="Nav-Icon col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <div className="Icon">
                                                <span class="material-symbols-outlined">
                                                    notifications_active
                                                </span>
                                            </div>
                                        </div>
                                        <div className="Nav-Icon col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <div className="Icon">
                                                <span class="material-symbols-outlined">
                                                    monetization_on
                                                </span>
                                            </div>
                                        </div>
                                        <div className="Nav-Icon col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <div className="Icon-user">
                                                <img src={User} alt="USER-LOGO" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="Navbar-menu-section">
                    <div className="container">
                        <div className="Navbar-menu">
                            <div className="menu-List col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="List align-items-center">
                                    <span class="material-symbols-outlined">
                                        grid_view
                                    </span>
                                    LeaderBoard
                                </div>
                                <div id='Historical-id' className="List justify-content-center">
                                    Historical Trading
                                    <span class="material-symbols-outlined">
                                        arrow_drop_down
                                    </span>
                                    <div className="List-dropdown">
                                        <div className="List-dropdown-container">
                                            <div className="dropdown-list">
                                                Trading
                                            </div>
                                            <div className="dropdown-list">
                                                Oder
                                            </div>
                                            <div className="dropdown-list">
                                                Holding
                                            </div>
                                            <div className="dropdown-list">
                                                Position
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="List">
                                    Historical Chart
                                </div>
                                <div className="List">
                                    Scanner
                                </div>
                                <div id='hine-list' className="List">
                                    Alearts
                                </div>
                                <div id='hine-list' className="List">
                                    Basic Backtest
                                </div>
                                <div id='hine-list' className="List">
                                    Adavance Backtest
                                </div>
                                <div id='hine-list' className="List">
                                    Pricing
                                </div>
                                <div id='hine-list' className="List">
                                    My Earnings
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
