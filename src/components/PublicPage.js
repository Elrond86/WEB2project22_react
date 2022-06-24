import LoginButtonBootstrap from './LoginButtonBootstrap';
import Stopwatch from './standAlone/StopWatch';

export default function PublicPage() {
	return (
		<div className="main" id="Landing-Page">
			<h1>Landing Page</h1>
			<section className="card">
				<div className="watchBox">
					<Stopwatch />
				</div>
			</section>
			<section className="card">
				<LoginButtonBootstrap />
			</section>
		</div>
	);
}
