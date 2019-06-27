import React from 'react'
import 'components/Card.css'

export default function (props) {
	return (
		<div class="card">
			<div class="card-content">
				<div class="content">
					<h1 class="title is-5">
						{props.name}
					</h1>
					<h2 class="subtitle is-7">
						{props.question}
					</h2>
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item"></a>
				<a href="#" class="card-footer-item">View</a>
				<a href="#" class="card-footer-item"></a>
			</footer>
		</div>
	)
}
