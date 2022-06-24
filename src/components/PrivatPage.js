import LogoutButtonBootstrap from './LogoutButtonBootstrap';

export default function PrivatPage() {
	return (
		<div className="main">
			<h1>PrivatPage</h1>
			<section className="card">
				<div className="watchBox">
					<h1>DIE ZEIT IST ABGELAUFEN</h1>
				</div>
			</section>
			<section className="card">
				<LogoutButtonBootstrap />
			</section>
		</div>
	);
}
