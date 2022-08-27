import React from "react";

class Body extends React.Component {
	render() {
		return (
			<section id="discover">
					<div className="container">
						<div className="anor_fn_discover">
						
							<div className="discover_left">
								<div className="left_in">
									<div className="disc_desc">
										<h3>Play and Win awesome NFTs and prizes.</h3>
										<p>Partner with world's first NFT Game built with Reach.</p>
									</div>
									<div className="disc_info">
										<h3><span className="anor_fn_counter" data-from="0" data-to="200" data-speed="2000">0</span>K+</h3>
										<p>NFT Items</p>
									</div>
									<div className="disc_button">
										<a className="anor_fn_button">Play Now</a>
									</div>
								</div>
							</div>
							
							<div className="discover_right">
								<div className="anor_fn_gallery_2_1">
									<div className="gallery_in">
										<div className="item">
											<img src=".../public/img/discovery/triple/1.jpg" alt="">
										</div>
										<div className="item row2">
											<img src=".../public/img/discovery/triple/2.jpg" alt="">
										</div>
										<div className="item">
											<img src=".../public/img/discovery/triple/3.jpg" alt="">
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
			</section>

			<section id="auction">
				<div className="container">
					<div className="anor_fn_auction_slider">
					
						<div className="anor_fn_slider_title">
							<h3 className="fn_title">Guess the Next Price</h3>
							<a className="view_all"><span></span>View All</a>
						</div>
		
						<div className="anor_fn_slider_holder">
							<div className="flickity_slider_wrap">

								<div className="flickity_slider" data-cols="4" data-gap="40">

									<div className="carousel-cell">
										<div className="fn__single_item">
											<div className="img_holder">
												<a className="full_link"></a>
												<a className="anor_fn_like" data-id="" data-title="Rodman's Haircut #3009">
													<img src=".../public/svg/like.svg" alt="" className="fn__svg">
												</a>
												<img src=".../public/img/auction/1.jpg" alt="">
												<div className="action_box">
													<a className="action_btn">
														<span></span>
													</a>
													<div className="action_popup">
														<ul>
															<li><h4>Price is Right</h4></li>
															<li><a className="anor_fn_place_item">Play Game</a></li>
															<li><a className="anor_fn_share_item" data-title="Rodman's Haircut #3009">Share</a></li>
														</ul>
													</div>
												</div>
												<div className="countdown_holder">
													<span className="fn__countdown" data-type="ever" data-due-date="June 2, 2022 18:02:00" data-days="4" data-hours="20" data-minutes="55" data-seconds="25">0d 0h 0m 0s</span>
												</div>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a>Good Monkey</a></h3>
												<p><span>1.57 ETH</span> Current Bid</p>
											</div>
										</div>
									</div>
								</div>
								
								<div className="scrollBar">
									<span className="full"></span>
									<span className="move" data-type=""></span>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

exports default Body;