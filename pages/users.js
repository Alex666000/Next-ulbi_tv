import React, {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "components/MainContainer";

const Users = ({users}) => {

    // const [users, setUsers] = useState([
    //     {id: 1, name: "sasha"},
    //     {id: 2, name: "vasya"}
    // ]);

// вместо эффекта лучше использовать getStaticProps - а getInitialProps тоже нет!
  /*  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);*/

    return (
        <MainContainer keywords={'users page'}>
            <h1>Список пльзователей</h1>
            {users.map(user =>
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            )}
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return {
        props: {
            // users попадет в пропсы
            users,
        },
    };
}
/*
useEffect и useState удаляем так как используем getStaticProps
 */