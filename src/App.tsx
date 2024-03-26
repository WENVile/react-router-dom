import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Error404 } from './components/pages/Error404';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Model } from './components/pages/Model';


function App() {

    const PATH = {
        PAGE: '/',
        ADIDAS: '/adidas',
        PUMA: '/puma',
        ABIBAS: '/abibas',
        ERROR404: '/error404'
    } as const


    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({isActive} ) => isActive ? styles.activeNavLink : styles.navLink} to={PATH.ADIDAS} >Adidas</NavLink></div>
                    <div><NavLink className={({isActive} ) => isActive ? styles.activeNavLink : styles.navLink} to={PATH.PUMA}  >Puma</NavLink></div>
                    <div><NavLink className={({isActive} ) => isActive ? styles.activeNavLink : styles.navLink} to={PATH.ABIBAS}  >Abibas</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.PAGE} element={ <Navigate to={PATH.ADIDAS}/>}/>
                        <Route path={PATH.ADIDAS}  element={ <PageOne />}/>
                        <Route path={PATH.PUMA}  element={ <PageTwo />}/>
                        <Route path={PATH.ABIBAS}  element={ <PageThree />}/>

                        <Route path='/adidas/:id' element={<Model/>} />

                        
                        {/* <Route path={PATH.ERROR404}  element={ <Error404 />}/> */}
                        <Route path="/*" element={<Error404/>}/>
                        
                        
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2024</div>
        </div>
    );
}


export default App;
