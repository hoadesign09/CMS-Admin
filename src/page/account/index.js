import React from "react";

import GetUser from "../../API/GetUser";
import "./styles.css"

function Account() {
    return(
        <div className="container-account">
			<div className="account-profile">
				<div className="img-profile">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				</div>
				<h5 class="user-name">Yuki Hayashi</h5>
				<h6 class="user-email">yuki@Maxwell.com</h6>
				<div class="about">
					<h5>About</h5>
					<p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
				</div>
			</div>
			<div className="info-form">
				<h5>Personal Details</h5>
				<div className="personal">
					<div className="form-group">
						<label for="fullName">Full Name</label>
						<input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
					</div>
					<div class="form-group">
						<label for="eMail">Email</label>
						<input type="email" class="form-control" id="eMail" placeholder="Enter email ID"/>
					</div>
					<div class="form-group">
						<label for="username">Username</label>
						<input type="text" class="form-control" id="username" placeholder="Enter username"/>
					</div>
					<div class="form-group">
						<label for="Password">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Enter new password"/>
					</div>
				</div>
				<h5>Address</h5>
				<div className="address">
					<div class="form-group">
						<label for="Street">Street</label>
						<input type="name" class="form-control" id="Street" placeholder="Enter Street"/>
					</div>
					<div class="form-group">
						<label for="ciTy">City</label>
						<input type="name" class="form-control" id="ciTy" placeholder="Enter City"/>
					</div>
					<div class="form-group">
						<label for="sTate">State</label>
						<input type="text" class="form-control" id="sTate" placeholder="Enter State"/>
					</div>
					<div class="form-group">
						<label for="zIp">Zip Code</label>
						<input type="text" class="form-control" id="zIp" placeholder="Zip Code"/>
					</div>
				</div>
				<div class="text-right">
					<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
					<button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
				</div>
			</div>
		</div>

    )
}

export default Account;