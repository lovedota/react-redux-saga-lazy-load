import * as React from 'react';
import { applyReducers, runSagas } from '../root/root-store';

type IAsyncComponentState = {
	loadedComponent: any;
};

type Route = {
	reducer: () => void,
	page: any,
	saga: any
};

export function withAsync(modulePath) {
	return class extends React.Component<IAsyncComponentState, any> {
		constructor() {
			super();

			this.state = {
				loadedComponent: null
			};
		}

		async load() {
			const load = await System.import(`bundle-loader?lazy!../modules/${modulePath}/index`);

			load((route: Route) => {
				applyReducers(route.reducer);
				runSagas(route.saga);

				this.setState({
					loadedComponent: route.page
				});
			});
		}

		componentDidMount() {
			setTimeout(() => this.load(), 500); // feel it good
		}

		render() {
			const LoadedComponent = this.state.loadedComponent;

			if (!LoadedComponent) {
				return (
					<div className="loader-wrapper">
						<div className="loader" />
					</div>
				);
			}

			return <LoadedComponent />;
		}
	};
}
