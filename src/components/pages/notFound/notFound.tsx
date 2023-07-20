import style from "./notFound.module.scss";

const NotFound: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <h1>Page not found 😕</h1>
            <p>try again later or provide the correct link.</p>
        </div>
    );
}
export default NotFound;