import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

interface props {
  items: string[];
  heading: string;
  // (item : string) => void
  onSelectItem?: (item: string) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 25px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 30px;
  background: ${(props) => (props.active ? "gold" : "none")};
`;

function ListGroup({ items, heading, onSelectItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      <List>
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem && onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
