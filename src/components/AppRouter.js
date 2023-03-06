import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";

const user = {isAuth: false};

const AppRouter = () => {
    return (
        <>
            <Routes>
                {user.isAuth === true && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )}

                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </>
    );
};

export default AppRouter;