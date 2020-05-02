import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from "./utilities/errors/ErrorBoundary";
import Loader from './utilities/loader/Loader'
const App = lazy(() => import("./App"));

if (document.getElementById('root')) {
    ReactDOM.render(<ErrorBoundary>
        <Suspense fallback={<Loader/>}>
            <App/>
        </Suspense>
    </ErrorBoundary>, document.getElementById('root'));
}
