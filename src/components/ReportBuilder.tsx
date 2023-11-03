import { useEffect, useState } from "react";
import TabSelection from "./TabSelection";
import Button from "./Button";
import ScrollList from "./ScrollList";

import "./components.css";

import GenieTables from "../assets/Tables";
import GenieFields from "../assets/Fields";

// Icons

import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

const ReportBuilder = () => {
    const tabs = ["Tables", "Columns", "Groups", "Formats", "Styles", "Layout"];
    // Default active tab to first tab
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // Get window width and height
    const [frameHeight, setFrameHeight] = useState(0);
    const [frameWidth, setFrameWidth] = useState(0);

    const tabHeight = 40;
    const buttonHeight = 40;
    const [mainHeight, setMainHeight] = useState(innerHeight * 0.75 - tabHeight - buttonHeight);

    const iconSize = 30;

    useEffect(() => {
        function handleResize() {
            setFrameHeight(innerHeight * 0.75);
            setMainHeight(innerHeight * 0.75 - tabHeight - buttonHeight);

            setFrameWidth(innerWidth * 0.75);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setFrameHeight(innerHeight * 0.75);
        setMainHeight(innerHeight * 0.75 - tabHeight - buttonHeight);

        setFrameWidth(innerWidth * 0.75);
    }, []);

    // Tables
    const [selectedGenieTable, setGenieTable] = useState("Appt");

    // Columns
    const padding = 30;

    const [tableFields, setTableFields] = useState<string[]>([]);
    const [selectedField, setSelectedField] = useState("");

    const [reportColumns, setReportColumns] = useState<string[]>([]);
    const [hoverDelete, setHoverDelete] = useState<boolean>(false);

    const addColumn = (newColumn: string) => {
        const newColumns = [...reportColumns, newColumn];
        setReportColumns(newColumns);
    };

    useEffect(() => {
        // Called when selected Genie table changes
        // Get all the fields from GenieFields which have tableName = selectedGenieTable
        const filteredFields = GenieFields.filter(
            (field) => field.table === selectedGenieTable
        ).map((field) => field.fieldName);
        setTableFields(filteredFields);
    }, [selectedGenieTable]);

    return (
        <>
            <div
                className="d-flex-flex-column m-5"
                style={{ width: `${innerWidth * 0.75}px`, height: `${frameHeight}px` }}
            >
                <div className="d-flex flex-inline" style={{ height: `${tabHeight}px` }}>
                    <TabSelection
                        tabNames={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
                <div className="d-flex-flex-inline" style={{ height: `${mainHeight}px` }}>
                    {activeTab === "Tables" && (
                        <div className="p-5 d-flex flex-inline">
                            <div className="d-flex-flex-column me-3">
                                <span>Tables:</span>
                                <div className="my-2" style={{ width: `${300}px` }}>
                                    <ScrollList
                                        items={GenieTables}
                                        selectedItem={selectedGenieTable}
                                        setSelectedItem={setGenieTable}
                                    />
                                </div>
                            </div>
                            <div className="d-flex-flex-column justify-content-center text-center align-self-center w-100">
                                <div>{`There are no records in the current`}</div>
                                <div className="mb-4">{`selection for the ${selectedGenieTable} table`}</div>
                                <div className="mb-2">
                                    <Button>Query</Button>
                                </div>
                                <div>
                                    <Button>Load All Records</Button>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "Columns" && (
                        <div className="d-flex flex-inline mt-2">
                            <div
                                className="d-flex-flex-column me-2s"
                                style={{ width: `${frameWidth / 2 - padding}px` }}
                            >
                                <div className="fs-5 text-bf text-center ">Database Fields</div>
                                <div>
                                    <ScrollList
                                        items={tableFields}
                                        selectedItem={selectedField}
                                        setSelectedItem={setSelectedField}
                                    />
                                </div>
                            </div>
                            <div
                                className="d-flex-flex-column "
                                style={{ width: `${frameWidth / 2 - padding}px` }}
                            >
                                <div className="fs-5 text-bf text-center">Report Columns</div>
                                <div className="d-flex flex-inine justify-content-end px-2 py-1">
                                    <span
                                        className="ms-3 text-danger fill-fade"
                                        onMouseEnter={() => setHoverDelete(true)}
                                        onMouseLeave={() => setHoverDelete(false)}
                                    >
                                        {hoverDelete ? (
                                            <AiFillDelete size={iconSize} />
                                        ) : (
                                            <AiOutlineDelete size={iconSize} />
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <ScrollList
                                        items={reportColumns}
                                        selectedItem=""
                                        setSelectedItem={setSelectedField}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "Groups" && <div></div>}
                    {activeTab === "Formats" && <div></div>}
                    {activeTab === "Styles" && <div></div>}
                    {activeTab === "Layout" && <div></div>}
                </div>
                <div
                    className="d-flex flex-inline justify-content-end"
                    style={{ height: `${buttonHeight}px` }}
                >
                    <span className="ms-2">
                        <Button btnType="outline-info">Load</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="outline-info">Save</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="outline-success">Export</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="outline-secondary">Preview</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="outline-info">Print</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="outline-secondary">Page Setup</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="primary">Copy Steps</Button>
                    </span>
                    <span className="ms-2">
                        <Button btnType="outline-danger">Close</Button>
                    </span>
                </div>
            </div>
        </>
    );
};

export default ReportBuilder;
