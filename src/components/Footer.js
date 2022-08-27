import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div className="anor_fn_footer">
					
					<div className="footer_bottom">
						<div className="container">
							<div className="fb_in">
								
								<div className="fb_left">
									<ul>
										<li>
											<p>Copyright © 2022.  Designed by <a>SourceCode</a>.</p>
										</li>
										<li><a>Privacy Policy</a></li>
										<li><a>Terms of Service</a></li>
									</ul>
								</div>
								
								<div className="fb_right">
									<div className="social_list">
										<ul>
											<li><a><i className="fn-icon-twitter"></i></a></li>
											<li><a><i className="fn-icon-facebook"></i></a></li>
											<li><a><i className="fn-icon-instagram"></i></a></li>
											<li><a><i className="fn-icon-pinterest"></i></a></li>
											<li><a><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
									<a className="totop"></a>
								</div>
								
							</div>
						</div>
					</div>
					
				</div>
			</footer>

			<div className="frenify-cursor cursor-outer" data-default="yes" data-link="yes" data-slider="yes"><span className="fn-cursor"></span></div>
			<div className="frenify-cursor cursor-inner" data-default="yes" data-link="yes" data-slider="yes"><span className="fn-cursor"><span className="fn-left"></span><span className="fn-right"></span></span></div>
		)
	}
}

export default Footer;