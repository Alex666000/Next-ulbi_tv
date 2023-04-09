import React from "react";
import A from "components/common/A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi-tv, next-js" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className={"navbar"}>
                <A href="/" text={"Главная"}/>
                <A href="/users" text={"Пользователи"}/>
            </div>
            <div>
                {/*в чилдрен встроится в это место компонент*/}
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background-color: orange;
                    padding: 15px;
                  }

                  a .link {
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                    margin: 10px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;
/*
Аналог _document.tsx
 */