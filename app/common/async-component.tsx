import * as React from 'react';
import { injectAsyncReducer, runSagas } from '../root/root-store';

type AsyncComponentState = {
    loadedComponent: any;
};

type Route = {
    moduleName: string;
    reducer: () => void;
    page: any;
    saga: any;
};

export function withAsync(modulePath) {
    return class extends React.Component<AsyncComponentState, any> {
        constructor() {
            super();

            this.state = {
                loadedComponent: null
            };
        }

        async load() {
            const load = await System.import(`bundle-loader?lazy!../modules/${modulePath}/index`);

            load((route: Route) => {
                injectAsyncReducer(route.moduleName, route.reducer);
                runSagas(route.moduleName, route.saga);

                this.setState({
                    loadedComponent: route.page
                });
            });
        }

        componentDidMount() {
            setTimeout(() => this.load(), 0); // feel it good
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
