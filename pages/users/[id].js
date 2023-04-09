import React from "react";
import {useRouter} from "next/router";
import styles from "styles/user.module.scss";
import MainContainer from "components/MainContainer";

const User = ({user}) => {
    // const router = useRouter();
    // console.log(router);
    console.log(user);

    // чтобы выцепить id пользователя
    const {query} = useRouter();

    return (
        <MainContainer keywords={user.name}>
            {/*эта начинка и будет children*/}
            <div className={styles.user}>
                <h1> Пользователь с id: {query.id}</h1>
                {/*полученного конкретного пользователя отрисовываем*/}
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>

    );
};
export default User;

// переход на профиль пользователя конкретного:
// получаем конкретного пользователя с конкретным id: const res = await fetch("https://jsonplaceholder.typicode.com/users" + params.id)
export async function getServerSideProps({params}) {
    // console.log(context);
    // console.log(params);

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return {
        props: {user},
    };
}

