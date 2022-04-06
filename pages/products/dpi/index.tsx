import { DefiPulseIndex } from "../../../constants/tokens";
import { useMarketData } from "../../../providers/MarketData/MarketDataProvider";
// import { useSetComponents } from "providers/SetComponents/SetComponentsProvider";

const DPI = () => {
  const { dpi } = useMarketData();
  // const { dpiComponents } = useSetComponents();
  return <div>yo</div>;
};

export default DPI;
