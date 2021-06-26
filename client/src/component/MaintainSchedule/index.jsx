import React, { useState } from "react";

import { Box } from "@chakra-ui/react";
//import { LinkIcon } from "@chakra-ui/icons";

import List from "./List";
import Form from "./Form";

function MaintainSchedule(props) {
  const [editItem, setEditItem] = useState();
  const [render, refreshList] = useState();
  return (
    <Box d="flex" w="100%">
      <Box w="65%" h="80vh" maxHeight="80vh" overflowY="auto" p="4">
        <List render={render} editItem={editItem} onSetEditItem={setEditItem} />
      </Box>
      <Box w="35%" p="4">
        <Form
          editItem={editItem}
          onSetEditItem={setEditItem}
          refreshList={refreshList}
        />
      </Box>
    </Box>
  );
}

export default MaintainSchedule;
