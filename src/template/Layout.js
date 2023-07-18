import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="inav">

                {/*HEADER TOP*/}

                <div className="topin">
                    <div className="container clear">
                        Info Promo, Cash dan Kredit Daihatsu Hubungi : <b>082126713791</b>
                        / FAX : <b>082126713791</b> <i
                        className="fa fa-envelope"></i> arizka.marselinarahmadani@dso.astra.co.id <span className="iright">
			            	<span className="iworks">WORKS :
	SEN 08.00-17.00 Arizka Astra Daihatsu</span>
				        	<span className="itimers">
				            	<i className="fa fa-clock-o"></i> <strong><span id="time">11</span>:<span
                                id="minu">06</span> <span id="secs">02</span></strong>
				        	</span>
						</span>
                    </div>
                </div>
                {/*HEADER TOP*/}

                {/*HEADER NAV*/}

                <div className="dealnav clear">
                    <div className="container clear">
                        <div className="navinn">

                            {/*DESKTOP LOGO*/}
                            <div className="logo">
                                <div className="logo-img">
                                    <Link to="/">
                                        <img id="logo" src={require('../assets/images/logo-header.png')} alt="Arizka Astra Daihatsu" />
                                    </Link>
                                </div>
                            </div>
                            {/*DESKTOP LOGO*/}

                            {/*SOCIAL LINK*/}
                            <div className="men normal">
                                <div className="toplist">
                                    <div className="nav">
                                        <ul id="dd" className="dd">
                                            <li id="menu-item-337"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-263 current_page_item">
                                                <Link to="/">Beranda</Link>
                                            </li>
                                            <li id="menu-item-279"
                                                className="full-image menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                <Link to="/products">Produk</Link>
                                                {/*<ul className="sub-menu">*/}
                                                {/*  <li id="menu-item-338" className="menu-item menu-item-type-post_type menu-item-object-model">*/}
                                                {/*    <a href="https://daihatsu-bekasi.com/model/grand-new-xenia/"><img width="200" height="150"*/}
                                                {/*                                                                      src="%PUBLIC_URL%/Arizka Astra Daihatsu_files/xenia-model-1-1-200x150.png"*/}
                                                {/*                                                                      className="nav_thumb my_thumb wp-post-image"*/}
                                                {/*                                                                      alt="" decoding="async"*/}
                                                {/*                                                                      loading="lazy" title="">Grand*/}
                                                {/*      New Xenia</a></li>*/}
                                                {/*  <li id="menu-item-339" className="menu-item menu-item-type-post_type menu-item-object-model">*/}
                                                {/*    <a href="https://daihatsu-bekasi.com/model/new-ayla/"><img width="200" height="150"*/}
                                                {/*                                                               src="%PUBLIC_URL%/Arizka Astra Daihatsu_files/76504287-10f3-436b-b5a1-c9f99dcf2c73-200x150.jpg"*/}
                                                {/*                                                               className="nav_thumb my_thumb wp-post-image"*/}
                                                {/*                                                               alt="" decoding="async"*/}
                                                {/*                                                               loading="lazy" title="">New Ayla*/}
                                                {/*      MC</a></li>*/}
                                                {/*  <li id="menu-item-340" className="menu-item menu-item-type-post_type menu-item-object-model">*/}
                                                {/*    <a href="https://daihatsu-bekasi.com/model/terios/"><img width="200" height="150"*/}
                                                {/*                                                             src="%PUBLIC_URL%/Arizka Astra Daihatsu_files/terios-model-1-200x150.png"*/}
                                                {/*                                                             className="nav_thumb my_thumb wp-post-image"*/}
                                                {/*                                                             alt="" decoding="async"*/}
                                                {/*                                                             loading="lazy" title="">Terios</a>*/}
                                                {/*  </li>*/}
                                                {/*  <li id="menu-item-341" className="menu-item menu-item-type-post_type menu-item-object-model">*/}
                                                {/*    <a href="https://daihatsu-bekasi.com/model/sigra/"><img width="200" height="150"*/}
                                                {/*                                                            src="%PUBLIC_URL%/Arizka Astra Daihatsu_files/sigra-model-1-200x150.png"*/}
                                                {/*                                                            className="nav_thumb my_thumb wp-post-image"*/}
                                                {/*                                                            alt="" decoding="async"*/}
                                                {/*                                                            loading="lazy" title="">Sigra</a>*/}
                                                {/*  </li>*/}
                                                {/*  <li id="menu-item-342"*/}
                                                {/*      className="menu-item menu-item-type-post_type menu-item-object-model menu-item-has-children">*/}
                                                {/*    <a href="https://daihatsu-bekasi.com/model/new-sirion/"><img width="200" height="150"*/}
                                                {/*                                                                 src="%PUBLIC_URL%/Arizka Astra Daihatsu_files/sirion-model-1-1-200x150.png"*/}
                                                {/*                                                                 className="nav_thumb my_thumb wp-post-image"*/}
                                                {/*                                                                 alt="" decoding="async"*/}
                                                {/*                                                                 loading="lazy" title="">New*/}
                                                {/*      Sirion</a>*/}
                                                {/*    <ul className="sub-menu">*/}
                                                {/*      <li id="menu-item-344"*/}
                                                {/*          className="menu-item menu-item-type-post_type menu-item-object-model"><a*/}
                                                {/*          href="https://daihatsu-bekasi.com/model/gran-max-pu/">Gran Max PU</a></li>*/}
                                                {/*      <li id="menu-item-345"*/}
                                                {/*          className="menu-item menu-item-type-post_type menu-item-object-model"><a*/}
                                                {/*          href="https://daihatsu-bekasi.com/model/gran-max-mb/">Gran Max MB</a></li>*/}
                                                {/*    </ul>*/}
                                                {/*  </li>*/}
                                                {/*  <li id="menu-item-343" className="menu-item menu-item-type-post_type menu-item-object-model">*/}
                                                {/*    <a href="https://daihatsu-bekasi.com/model/luxio/"><img width="200" height="150"*/}
                                                {/*                                                            src="%PUBLIC_URL%/Arizka Astra Daihatsu_files/luxio-model-1-1-200x150.png"*/}
                                                {/*                                                            className="nav_thumb my_thumb wp-post-image"*/}
                                                {/*                                                            alt="" decoding="async"*/}
                                                {/*                                                            loading="lazy" title="">Luxio</a>*/}
                                                {/*  </li>*/}
                                                {/*</ul>*/}
                                            </li>
                                            <li id="menu-item-362" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                <Link to="/galery">Foto Penyerahan</Link>
                                            </li>
                                            <li id="menu-item-282" className="menu-item menu-item-type-post_type menu-item-object-page">
                                                <Link to="/contact">Kontak</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ca circle">

                                    <div className="dv info">
                                        <i className="fa fa-info"></i>
                                    </div>

                                    <div className="dv sss">
                                        <a href="https://promodaihatsusupermurah.com/Daihatsu%20Bekasi" target="_blank">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>

                                    <div className="dv fmenu">
                                        <i className="fa fa-navicon"></i>
                                    </div>

                                </div>
                            </div>
                            {/*SOCIAL LINK*/}

                        </div>
                    </div>
                </div>
                {/*HEADER NAV*/}

            </div>
            <Outlet />
            <div className="parallax top-foot on">
                <div className="footlay">
                </div>
                <div className="container clear">
                    <div className="tf-inn clear">
                        <div className="foconn">
                            <div className="fosos">
                                <div className="stcon">
                                    Stay Connected
                                </div>

                                <a target="_blank" href="https://instagram.com/promodaihatsu_supermurah?igshid=NTc4MTIwNjQ2YQ==">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a target="_blank" href="mailto:arizka.marselinarahmadani@dso.astra.co.id">
                                    <i className="fa fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Layout;
