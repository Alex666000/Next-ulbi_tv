import React from "react";
import Link from "next/link";
// чтобы стили сработали надо модульные делать а не просто css
import styles from "styles/A.module.css";

// кастомная ссылка
const A = ({href, text}) => {
    return (
        <Link href={href} className={styles.link}>
            {text}
        </Link>
    );
};

export default A;