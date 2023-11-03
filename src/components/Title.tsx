const Title = () => {
    const titleHeight = 50;

    return (
        <div
            className="d-flex flex-inline align-items-center px-5 border-bottom bg-dark"
            style={{ height: `${titleHeight}px` }}
        >
            <span className="fs-4 text-white">Gentrwee</span>
        </div>
    );
};

export default Title;
