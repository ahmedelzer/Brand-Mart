import React, { useEffect, useState } from "react";
import {
  TreeView,
  processTreeViewItems,
  handleTreeViewCheckChange,
} from "@progress/kendo-react-treeview";
import "@progress/kendo-theme-default/dist/all.css";
// import "@progress/kendo-theme-bootstrap/dist/all.css";//! use only one style
const projects = [
  {
    ProjectServiceID: "p1",
    ProjectName: "Project A",
    Active: true,
    IsMain: true,
    UnitQuantity: 10,
    Services: [
      { PrimaryProjectServiceID: "guid1", checked: true },
      { PrimaryProjectServiceID: "guid2", checked: true },
    ],
    AgainstServices: [
      {
        PrimaryProjectServiceID: "guid1",
        SecondaryProjectServiceID: "guid3",
      },
    ],
    DependentServices: [
      {
        PrimaryProjectServiceID: "guid1",
        SecondaryProjectServiceID: "guid5",
      },
    ],
  },
  {
    ProjectServiceID: "p2",
    ProjectName: "Project B",
    Active: false,
    IsMain: false,
    UnitQuantity: 5,
    Services: [{ PrimaryProjectServiceID: "guid3", checked: false }],
    AgainstServices: [
      {
        PrimaryProjectServiceID: "guid3",
        SecondaryProjectServiceID: "guid1",
      },
    ],
    DependentServices: [],
  },
  {
    ProjectServiceID: "p3",
    ProjectName: "Project C",
    Active: false,
    IsMain: false,
    UnitQuantity: 5,
    Services: [{ PrimaryProjectServiceID: "guid5", checked: true }],
    AgainstServices: [],
    DependentServices: [
      {
        PrimaryProjectServiceID: "guid5",
        SecondaryProjectServiceID: "guid1",
      },
    ],
  },
];

const TreeDependents = () => {
  const [items, setItems] = useState([]);
  const [check, setCheck] = useState({
    ids: [],
    applyCheckIndeterminate: true,
  });

  const transformData = () => {
    const treeData = projects.map((project) => ({
      text: project.ProjectName,
      id: project.ProjectServiceID,
      expanded: true,
      items: project.Services.map((service) => ({
        text: service.PrimaryProjectServiceID,
        id: service.PrimaryProjectServiceID,
        checked: service.checked,
      })),
      dependentServices: project.DependentServices,
      againstServices: project.AgainstServices,
    }));
    setItems(treeData);
  };

  useEffect(() => {
    transformData();
  }, []);

  const updateServices = (
    serviceId,
    checkedStatus,
    items,
    updateKey,
    visited = new Set()
  ) => {
    if (visited.has(serviceId)) return; // Avoid infinite recursion
    visited.add(serviceId);

    items.forEach((project) => {
      project.items.forEach((service) => {
        if (service.id === serviceId) {
          service.checked = checkedStatus;
        }
      });

      project[updateKey].forEach((dep) => {
        if (dep.PrimaryProjectServiceID === serviceId) {
          const dependentService = items
            .flatMap((p) => p.items)
            .find((s) => s.id === dep.SecondaryProjectServiceID);

          if (dependentService) {
            dependentService.checked = checkedStatus;
            updateServices(
              dep.SecondaryProjectServiceID,
              checkedStatus,
              items,
              updateKey,
              visited
            );
          }
        }
      });
    });
  };

  const onCheckChange = (event) => {
    const updatedCheck = handleTreeViewCheckChange(event, check, items, {
      checkChildren: false,
      checkParents: false,
    });

    const updatedItems = items.map((project) => {
      project.items.forEach((service) => {
        if (event.item.id === service.id) {
          service.checked = updatedCheck.ids.includes(service.id);
          updateServices(
            event.item.id,
            event.item.checked,
            items,
            "againstServices"
          );
          updateServices(
            event.item.id,
            !event.item.checked,
            items,
            "dependentServices"
          );
        }
      });

      return project;
    });

    console.log(updatedCheck);

    setItems(updatedItems);
    setCheck(updatedCheck);
  };

  return (
    <div>
      <TreeView
        data={processTreeViewItems(items, { check: check })}
        checkboxes={true}
        onCheckChange={onCheckChange}
      />
      <div style={{ marginTop: 5 }}>
        <i>Press SPACE to check/uncheck the active item</i>
        <div>Checked indices: {check.ids.join(", ")}</div>
      </div>
    </div>
  );
};

export default TreeDependents;
