import "./styles.css";

export function Footer(): JSX.Element {
    return (
        <div className="footer">
            <p>
                Tomasz's version of{" "}
                <a href="https://www.youtube.com/watch?v=XHVK-CAysZ0">this</a>{" "}
                YT tutorial.
            </p>
            <p>
                Front end{" "}
                <a href="https://github.com/TomaszLaboj/stop-watch-app.git">
                    repo
                </a>
            </p>
        </div>
    );
}
