import "./components.css";

interface ScrollListProps {
    items: string[];
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const ScrollList: React.FC<ScrollListProps> = ({ items, selectedItem, setSelectedItem }) => {
    const listHeight = 700;

    return (
        <div
            className="border border-2 border-info d-flex flex-column overflow-auto cursor-p"
            style={{ height: `${listHeight}px`, userSelect: "none" }}
        >
            {items.map((item) => (
                <div
                    className={`${selectedItem === item ? "bg-info" : ""}`}
                    key={item}
                    onClick={() => setSelectedItem(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ScrollList;
