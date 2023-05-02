export interface SearchIconProps {
    className: string;
}

export const SearchIcon = (props: SearchIconProps) => {
    const { className } = props;
    return (<svg
        className={`searchIcon ${className}`}
        aria-labelledby="search icon" role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.9 19.7"
        style={{ display: "inline-block", width: 24, height: 24 }}
    >
        <title id="title">Search Icon</title>
        <desc id="desc">A magnifying glass icon.</desc>
        <g className="search-path" fill="none" stroke="#848F91">
            <path d="M18.5 18.3l-5.4-5.4"/>
            <circle cx="8" cy="8" r="7"/>
        </g>
    </svg>)
}
