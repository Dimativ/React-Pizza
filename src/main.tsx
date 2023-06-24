import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {HashRouter} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Provider} from "react-redux";
import {persistor, store} from "../src/store/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <Helmet>
            <meta charSet="utf-8" />
            <title>React-Pizza</title>
        </Helmet>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </HashRouter>
)
