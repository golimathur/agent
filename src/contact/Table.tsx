import React from "react";
import { DetailsList, IColumn } from "@fluentui/react";
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import "office-ui-fabric-react/dist/css/fabric.css";

const classNames = mergeStyleSets({
  table: {
    margin: "auto",
    fontWeight: "bold",
  },
});

const operations = [
  {
    SNO: "1",
    ClientID: "CA-027",
    BusinessName: "HE MORRIS LTD.",
    Type: "LIMITED",
    ContactPerson: "HELEN MORRIS",
    Manager: "MGR",
    Email: "he.morris@outlook.com",
    Phone: "+4225577555",
  },

  {
    SNO: "2",
    ClientID: "CA-072",
    BusinessName: "SWV DRIVER LTD.",
    Type: "LIMITED",
    ContactPerson: "STEVEN VERNON ",
    Manager: "MGR",
    Email: "steve.mrs@outlook.com",
    Phone: "+4225577555",
  },

  {
    SNO: "3",
    ClientID: "CA-112",
    BusinessName: "MISS MAVES LTD",
    Type: "LIMITED",
    ContactPerson: "REBECA MITCHELL",
    Manager: "MGR",
    Email: "rebeca@gmail.com",
    Phone: "+44552287458",
  },

  {
    SNO: "4",
    ClientID: "CB-084",
    BusinessName: "CRAFTY DUCK CRAFTS",
    Type: "LIMITED",
    ContactPerson: "REBECCA MITCHELL",
    Manager: "MGR",
    Email: "rebeca@gmail.com",
    Phone: "+4225577555",
  },

  {
    SNO: "5",
    ClientID: "CC-116",
    BusinessName: "TSP CONTRACTING LTD",
    Type: "LIMITED",
    ContactPerson: "TOMASZ PIOTROWSKI",
    Manager: "MGR",
    Email: "tomasz@outlook.com",
    Phone: "+4225577555",
  },

  {
    SNO: "6",
    ClientID: "CC-365",
    BusinessName: "ANGFIELD PRIVATE CAR LTD.",
    Type: "LIMITED",
    ContactPerson: "ANGIFIELD",
    Manager: "MGR",
    Email: "angifield@outlook.com",
    Phone: "+4225577555",
  },

  {
    SNO: "7",
    ClientID: "CC-370",
    BusinessName: "AEGIS CARE STAFFING SOLUTIONS LTD.",
    Type: "LIMITED",
    ContactPerson: "L103 SINGH",
    Manager: "MGR",
    Email: "aegis@gmail.com",
    Phone: "+4225577555",
  },

  {
    SNO: "8",
    ClientID: "CC-371",
    BusinessName: "CARDIAC CONSULTING LTD",
    Type: "LIMITED",
    ContactPerson: "L104 SINGH",
    Manager: "MGR",
    Email: "ccl@gmail.com",
    Phone: "+4225577555",
  },
];

const columns: IColumn[] = [
  {
    key: "column1",
    name: "SNO",
    fieldName: "SNO",
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column2",
    name: "ClientID",
    fieldName: "ClientID",
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column3",
    name: "BusinessName",
    fieldName: "BusinessName",
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column4",
    name: "Type",
    fieldName: "Type",
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column5",
    name: "ContactPerson",
    fieldName: "ContactPerson",
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column6",
    name: "Manager",
    fieldName: "Manager", 
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column7",
    name: "Email",
    fieldName: "Email",
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: "column8",
    name: "Phone",
    fieldName: "Phone",
    minWidth: 200,
    maxWidth: 200,
  },
];

const Table = () => {
  const items = [];

  const tableStyles = {
    root: {
      color: "#0078d4",
      fontWeight: "bold" as "bold",
    },
  };
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
        <DetailsList
         items={operations}
  
  {...columns.map(columns => (<p>{columns.key}</p>))}
        //  columns = {columns}
          selectionMode={0}
          styles={tableStyles}
        />
      </div>
    </div>
  );
};

export default Table;
