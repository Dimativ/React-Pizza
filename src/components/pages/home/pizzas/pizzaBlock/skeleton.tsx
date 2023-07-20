import ContentLoader from "react-content-loader";
import style from "./skeleton.module.css";

export const Skeleton: React.FC = () => (
    <ContentLoader
        className={style.loader}
        speed={2}
        width={280}
        height={430}
        viewBox="0 0 280 430"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="120" cy="125" r="104"/>
        <rect x="15" y="249" rx="10" ry="10" width="207" height="20"/>
        <rect x="0" y="289" rx="10" ry="10" width="240" height="75"/>
        <rect x="0" y="379" rx="10" ry="10" width="92" height="30"/>
        <rect x="147" y="379" rx="10" ry="10" width="92" height="30"/>
    </ContentLoader>
)
