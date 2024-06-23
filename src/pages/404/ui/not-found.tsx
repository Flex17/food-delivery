import css from "./not-found.module.scss";

const NotFound = () => {
    return (
        <div className={css.wrapper}>
            <span className={css.title}>Ошибка 404</span>
            <span className={css.description}>Страница не найдена</span>
        </div>
    );
};

export default NotFound;
