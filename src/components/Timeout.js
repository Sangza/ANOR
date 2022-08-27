import React from "react";

class Timeout extends React.Component {
	render() {
		return (
			<div className="anor_fn_404_page">
				<div className="container small">
					<div className="page_404">
						
						<div className="anor_fn_404">
							<h2 className="fn_title">404</h2>
							<h3 className="fn_title2">There's been a timeout.</h3>
							<p className="fn_desc">Someone took too long.</p>
							<a className="anor_fn_button small">Back to Homepage</a>
						</div>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Timeout;