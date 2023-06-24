import style from "./notFound.module.css";

const NotFound: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Page not found 😕</h1>
            <p className={style.description}>try again later or provide the correct link.</p>
        </div>
    );
}
export default NotFound;