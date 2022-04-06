import { useICColorMode } from "../../styles/colors";

import { Token } from "../../constants/tokens";

import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

import PerformanceCell from "./PerformanceCell";
import TickerCell from "./TickerCell";

export interface ProductsTableProduct extends Token {
  performance: {
    "1D"?: number;
    "1W"?: number;
    "1M"?: number;
    "3M"?: number;
    // '1Y'?: number
  };
}

export const PriceChangeIntervals: [
  keyof ProductsTableProduct["performance"],
  number
][] = [
  ["1D", 1],
  ["1W", 7],
  ["1M", 30],
  ["3M", 90],
  // ['1Y', 365],
];

type ProductsTableProps = {
  products: ProductsTableProduct[];
};

const ProductsTable = ({ products }: ProductsTableProps) => {
  const { isDarkMode } = useICColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false, lg: false });

  const colorScheme = isDarkMode ? "whiteAlpha" : "blackAlpha";
  const amountOfIntervalsToShow = isMobile ? 2 : PriceChangeIntervals.length;
  const priceChangeIntervals = PriceChangeIntervals.slice(
    0,
    amountOfIntervalsToShow
  );

  return (
    <Table colorScheme={colorScheme}>
      <Thead>
        <Tr>
          <Th p={["8px 8px", "12px 24px"]}>Ticker</Th>
          {priceChangeIntervals.map((interval) => (
            <Th key={interval[0]} p={["8px 8px", "12px 24px"]}>
              {interval[0]}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product) => (
          <Tr key={product.symbol}>
            <Td p={["16px 8px", "16px 24px"]}>
              <TickerCell product={product} />
            </Td>
            {priceChangeIntervals.map((interval) => (
              <Td key={interval[0]} p={["16px 8px", "16px 24px"]}>
                <PerformanceCell
                  percentChange={product.performance?.[interval[0]]}
                />
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductsTable;
