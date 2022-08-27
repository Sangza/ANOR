import React from "react";

class Header extends React.Component {
	render() {
		return (
		        <header className="anor_fn_header">
					<div className="container">
						<div className="header_in">
							
							<div className="header_left">
								<div className="fn_logo">
									<a><img src="img/logo.png" alt=""></a>
								</div>
								<div className="nav_list">
									<ul className="main_menu">
										<li><a>Play Game</a></li>
										<li><a>Fund Account</a></li>
										<li><a>View NFTs</a></li>
									</ul>
								</div>
							</div>
							
							<div className="header_right">
								<div className="fn_signin">
									<h3 className="fn_title">Connected</h3>
								</div>
							</div>
							
						</div>
					</div>
				</header>

				<div className="anor_fn_mobile_menu">
					<div className="mobile_menu_inner">
						<div className="mobile_in">
							<div className="logo">
								<a><img src="img/mobile-logo.png" alt="" /></a>
							</div>
							<div className="trigger">
								<div className="hamburger hamburger--slider">
									<div className="hamburger-box">
										<div className="hamburger-inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown">
						<div className="dropdown_inner">
							<ul className="vert_menu">
								<li><a>Play Game</a></li>
								<li><a>Fund Account</a></li>
								<li><a>View NFTs</a></li>
							</ul>
						</div>
					</div>
				</div>
		)
	}
}

exports default Header;