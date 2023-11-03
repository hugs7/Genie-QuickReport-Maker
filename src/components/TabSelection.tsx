import { useState } from "react";
import "./components.css";

interface TabSelectionProps {
    tabNames: string[];
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabSelection: React.FC<TabSelectionProps> = ({ tabNames, activeTab, setActiveTab }) => {
    const [hoveredTab, setHoveredTab] = useState("");

    return (
        <>
            {tabNames.map((tab) => (
                <div
                    className={`border-bottom mx-2 p-2 cursor-p${
                        activeTab === tab ? " bg-success text-white rounded-2" : ""
                    }${
                        hoveredTab === tab && activeTab !== tab
                            ? " border-bottom border-info border-2"
                            : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                    onMouseEnter={() => setHoveredTab(tab)}
                    onMouseLeave={() => setHoveredTab("")}
                    key={tab}
                >
                    {tab}
                </div>
            ))}
        </>
    );
};

export default TabSelection;
