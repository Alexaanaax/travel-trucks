import { useState, useEffect, useCallback } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "../../css/filtersCardsStyles.module.css";

const VehicleEquipment = ({ currentEquipment, onUpdateFilters }) => {
  const [selectedEquipment, setSelectedEquipment] = useState(currentEquipment);

  useEffect(() => {
    setSelectedEquipment(currentEquipment);
  }, [currentEquipment]);

  const toggleEquipment = useCallback((equipment) => {
    const updatedEquipment = {
      ...selectedEquipment,
      [equipment]: equipment === "transmission"
        ? selectedEquipment[equipment] !== "automatic" ? "automatic" : ""
        : !selectedEquipment[equipment],
    };

    setSelectedEquipment(updatedEquipment);
    onUpdateFilters("equipment", updatedEquipment);
  }, [selectedEquipment, onUpdateFilters]);

  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle equipment</p>
      <ul className={css.vehicleEquipmentList}>
        {["AC", "transmission", "kitchen", "TV", "bathroom"].map((item) => (
          <EquipmentItem
            key={item}
            iconId={`icon-${item}`}
            text={item === "transmission" ? "Automatic" : item}
            className={`${css.vehicleEquipment} ${selectedEquipment[item] ? css.selected : ""}`}
            iconClassName={css.vehicleAddInfoIcon}
            onClick={() => toggleEquipment(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;