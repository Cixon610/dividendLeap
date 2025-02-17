import React, { useEffect, useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Divider, useBreakpointValue } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

import { formatHelper } from "../../utils";
import StockFrame from "./StockFrame";
import BackButton from "./BackButton";

export default function Content(props) {
  const { stockNo, name, data } = props;
  const divRef = useRef();
  const variant = useBreakpointValue({
    base: "sm",
    sm: "sm",
    md: "md",
  });
  const info = [
    { label: "名稱", content: `${name} (${stockNo})` },
    { label: "除息日", content: formatHelper.formatDate(data.dDate) },
    { label: "今年殖利率", content: `${data.rate}%` },
    { label: "當前股價", content: `${data.price}(${formatHelper.formatDate(data.priceDate)})` },
    { label: "現金股利", content: data.dCash },
    { label: "去年殖利率", content: `${data.rateLY}%` },
    { label: "前五年平均殖利率", content: `${data.rateAvg5}%` },
    { label: "前十年平均殖利率", content: `${data.rateAvg10}%` },
    { label: "去年除息股價", content: data.priceLY },
    { label: "去年除息日", content: formatHelper.formatDate(data.dDateLY) },
    { label: "去年填滿息日", content: formatHelper.formatDate(data.dFDayLY) },
    { label: "去年低點", content: <HistoryPrice data={data.lowLY} /> },
    { label: "去年高點", content: <HistoryPrice data={data.HighLY} /> },
  ];
  return (
    <div ref={divRef}>
      <BackButton variant={variant} />
      <Box d="flex" flexWrap="wrap" alignItems="baseline">
        {info.map((item) => (
          <Box m="4" color="gray.600">
            {item.label}:
            <Divider />
            {item.content}
          </Box>
        ))}
      </Box>
      <StockFrame stockNo={stockNo} divRef={divRef} variant={variant} />
    </div>
  );
}

function HistoryPrice(props) {
  return props.data.map((item, index) => {
    return item ? (
      <div key={item.date}>{`${item.price} (${formatHelper.formatDate(item.date)})`}</div>
    ) : (
      <div key={index}>--</div>
    );
  });
}
