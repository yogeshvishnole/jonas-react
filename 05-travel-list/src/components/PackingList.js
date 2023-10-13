import { useState } from "react";
import Item from "./Item";

const sortingOptionsArr = [
  { value: "input", description: "SORT BY INPUT ORDER" },
  { value: "description", description: "SORT BY DESCRIPTION" },
  { value: "packed", description: "SORT BY PACKED STATUS" },
];

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("description");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={() => onDeleteItem(item.id)}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortingOptionsArr.map((selectItem) => (
            <option value={selectItem.value} key={selectItem.value}>
              {selectItem.description}
            </option>
          ))}
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
