/** @jsxImportSource @emotion/react */
import * as s from "./style";

function RightTopButton({ children , onClick }) {
    return (
        <div>
            <button css={s.button} onClick={onClick}>{children}</button>
        </div>
    );
}

export default RightTopButton;