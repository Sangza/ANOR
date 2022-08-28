import React from "react";

class Connect extends React.Component {
	render() {
		return (
			<div className="anor_fn_modal share_box">
				<div className="modal_in">
					<div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
					<div className="modal_title">Connecting to Wallet</div>
					<div className="modal_content">
						<div className="share_title">
							Please wait while we connect to your account.
        					If this takes more than a few seconds, there may be something wrong.
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Connect;