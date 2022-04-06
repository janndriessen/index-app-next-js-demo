import { TokenContextKeys } from "../providers/MarketData/MarketDataProvider";

export const dpiTokenImage =
  "https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg";
export interface Token {
  name: string;
  symbol: string;
  address: string | undefined;
  polygonAddress: string | undefined;
  optimismAddress: string | undefined;
  decimals: number;
  url: string;
  image: string;
  coingeckoId: string;
  tokensetsId: string;
  tokenContextKey?: TokenContextKeys;
  fees:
    | { streamingFee: string; mintFee?: string; redeemFee?: string }
    | undefined;
}

export const DAI: Token = {
  name: "Dai",
  symbol: "DAI",
  image:
    "https://assets.coingecko.com/coins/images/9956/small/4943.png?1636636734",
  address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  polygonAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  optimismAddress: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
  decimals: 18,
  url: "",
  coingeckoId: "dai",
  tokensetsId: "dai",
  fees: undefined,
};

export const USDC: Token = {
  name: "USD Coin",
  symbol: "USDC",
  image:
    "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  polygonAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  optimismAddress: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
  decimals: 6,
  url: "",
  coingeckoId: "usd-coin",
  tokensetsId: "usdc",
  fees: undefined,
};

export const ETH: Token = {
  name: "Ethereum",
  symbol: "ETH",
  image:
    "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  polygonAddress: "",
  optimismAddress: "",
  decimals: 18,
  url: "",
  coingeckoId: "ethereum",
  tokensetsId: "eth",
  fees: undefined,
};

export const WETH: Token = {
  name: "Wrapped Ether",
  symbol: "WETH",
  image:
    "https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295",
  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  polygonAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  optimismAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  decimals: 18,
  url: "",
  coingeckoId: "weth",
  tokensetsId: "weth",
  fees: undefined,
};

export const MATIC: Token = {
  name: "Matic",
  symbol: "MATIC",
  image:
    "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
  address: undefined,
  polygonAddress: "0x0000000000000000000000000000000000001010",
  optimismAddress: undefined,
  decimals: 18,
  url: "",
  coingeckoId: "matic-network",
  tokensetsId: "matic",
  fees: undefined,
};

export const DefiPulseIndex: Token = {
  name: "DeFi Pulse Index",
  symbol: "DPI",
  image: dpiTokenImage,
  address: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
  polygonAddress: "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369",
  optimismAddress: undefined,
  decimals: 18,
  url: "dpi",
  coingeckoId: "defipulse-index",
  tokensetsId: "dpi",
  tokenContextKey: "dpi",
  fees: {
    streamingFee: "0.95%",
  },
};

export const IndexToken: Token = {
  name: "Index Token",
  symbol: "INDEX",
  address: "0x0954906da0Bf32d5479e25f46056d22f08464cab",
  polygonAddress: "0xfBd8A3b908e764dBcD51e27992464B4432A1132b",
  optimismAddress: undefined,
  decimals: 18,
  url: "index",
  image: "indexLogo",
  coingeckoId: "index-cooperative",
  tokensetsId: "index",
  fees: undefined,
};

export const Ethereum2xFlexibleLeverageIndex: Token = {
  name: "Ethereum 2x Flexible Leverage Index",
  symbol: "ETH2x-FLI",
  address: "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: "ethfli",
  image: "https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg",
  coingeckoId: "eth-2x-flexible-leverage-index",
  tokensetsId: "ethfli",
  tokenContextKey: "ethfli",
  fees: {
    streamingFee: "1.95%",
  },
};

export const Ethereum2xFLIP: Token = {
  name: "Ethereum 2x FLI Polygon",
  symbol: "ETH2X-FLI-P",
  address: undefined,
  polygonAddress: "0x3Ad707dA309f3845cd602059901E39C4dcd66473",
  optimismAddress: undefined,
  decimals: 18,
  url: "ethflip",
  image: "https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg",
  coingeckoId: "index-coop-eth-2x-flexible-leverage-index",
  tokensetsId: "eth2x-fli-p",
  tokenContextKey: "ethflip",
  fees: {
    streamingFee: "1.95%",
    mintFee: "0.1%",
    redeemFee: "0.1%",
  },
};

export const MetaverseIndex: Token = {
  name: "Metaverse Index",
  symbol: "MVI",
  address: "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
  polygonAddress: "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1",
  optimismAddress: undefined,
  decimals: 18,
  url: "mvi",
  image: "https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg",
  coingeckoId: "metaverse-index",
  tokensetsId: "mvi",
  tokenContextKey: "mvi",
  fees: {
    streamingFee: "0.95%",
  },
};

export const Bitcoin2xFlexibleLeverageIndex: Token = {
  name: "Bitcoin 2x Flexible Leverage Index",
  symbol: "BTC2x-FLI",
  address: "0x0B498ff89709d3838a063f1dFA463091F9801c2b",
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: "btcfli",
  image: "https://set-core.s3.amazonaws.com/img/portfolios/fli_btc.svg",
  coingeckoId: "btc-2x-flexible-leverage-index",
  tokensetsId: "btcfli",
  tokenContextKey: "btcfli",
  fees: {
    streamingFee: "1.95%",
  },
};

export const BedIndex: Token = {
  name: "Bankless BED Index",
  symbol: "BED",
  address: "0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6",
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: "bed",
  image: "bedBorderLogo",
  coingeckoId: "bankless-bed-index",
  tokensetsId: "bed",
  tokenContextKey: "bed",
  fees: {
    streamingFee: "0.25%",
  },
};

export const DataIndex: Token = {
  name: "Data Economy Index",
  symbol: "DATA",
  address: "0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1",
  polygonAddress: "0x1D607Faa0A51518a7728580C238d912747e71F7a",
  optimismAddress: undefined,
  decimals: 18,
  url: "data",
  image: "dataLogo",
  coingeckoId: "data-economy-index",
  tokensetsId: "data",
  tokenContextKey: "data",
  fees: {
    streamingFee: "0.95%",
  },
};

export const GmiIndex: Token = {
  name: "Bankless DeFi Innovation Index",
  symbol: "GMI",
  address: "0x47110d43175f7f2C2425E7d15792acC5817EB44f",
  polygonAddress: "0x7fb27ee135db455de5ab1ccec66a24cbc82e712d",
  optimismAddress: undefined,
  decimals: 18,
  url: "gmi",
  image: "gmiLogo",
  coingeckoId: "bankless-defi-innovation-index",
  tokensetsId: "gmi",
  tokenContextKey: "gmi",
  fees: {
    streamingFee: "1.95%",
  },
};

export const Matic2xFLIP: Token = {
  name: "MATIC 2x Flexible Leverage Index",
  symbol: "MATIC2x-FLI-P",
  address: undefined,
  polygonAddress: "0xf287D97B6345bad3D88856b26Fb7c0ab3F2C7976",
  optimismAddress: undefined,
  decimals: 18,
  url: "matic2x",
  image: "maticflipLogo",
  coingeckoId: "index-coop-matic-2x-flexible-leverage-index",
  tokensetsId: "matic2x-fli-p",
  tokenContextKey: "maticflip",
  fees: {
    streamingFee: "1.95%",
    mintFee: "0.1%",
    redeemFee: "0.1%",
  },
};

export const IMaticFLIP: Token = {
  name: "Inverse MATIC Flexible Leverage Index",
  symbol: "iMATIC-FLI-P",
  address: undefined,
  polygonAddress: "0x340f412860dA7b7823df372a2b59Ff78b7ae6abc",
  optimismAddress: undefined,
  decimals: 18,
  url: "imatic",
  image: "imaticflipLogo",
  coingeckoId: "index-coop-inverse-matic-flexible-leverage-index",
  tokensetsId: "imatic-fli-p",
  tokenContextKey: "imaticflip",
  fees: {
    streamingFee: "1.95%",
    mintFee: "0.1%",
    redeemFee: "0.1%",
  },
};

export const IEthereumFLIP: Token = {
  name: "Inverse ETH Flexible Leverage Index",
  symbol: "iETH-FLI-P",
  address: undefined,
  polygonAddress: "0x4f025829C4B13dF652f38Abd2AB901185fF1e609",
  optimismAddress: undefined,
  decimals: 18,
  url: "ieth",
  image: "iethflipLogo",
  coingeckoId: "index-coop-inverse-eth-flexible-leverage-index",
  tokensetsId: "ieth-fli-p",
  tokenContextKey: "iethflip",
  fees: {
    streamingFee: "1.95%",
    mintFee: "0.1%",
    redeemFee: "0.1%",
  },
};

export const Bitcoin2xFLIP: Token = {
  name: "BTC 2x Flexible Leverage Index",
  symbol: "BTC2x-FLI-P",
  address: undefined,
  polygonAddress: "0xd6ca869a4ec9ed2c7e618062cdc45306d8dbbc14",
  optimismAddress: undefined,
  decimals: 18,
  url: "btc2x",
  image: "btcflipLogo",
  coingeckoId: "btc-2x-flexible-leverage-index-polygon",
  tokensetsId: "btc2x-fli-p",
  tokenContextKey: "btcflip",
  fees: {
    streamingFee: "1.95%",
    mintFee: "0.1%",
    redeemFee: "0.1%",
  },
};

export const IBitcoinFLIP: Token = {
  name: "Inverse BTC Flexible Leverage Index",
  symbol: "iBTC-FLI-P",
  address: undefined,
  polygonAddress: "0x130cE4E4F76c2265f94a961D70618562de0bb8d2",
  optimismAddress: undefined,
  decimals: 18,
  url: "ibtc",
  image: "ibtcflipLogo",
  coingeckoId: "inverse-btc-flexible-leverage-index",
  tokensetsId: "ibtc-fli-p",
  tokenContextKey: "ibtcflip",
  fees: {
    streamingFee: "1.95%",
    mintFee: "0.1%",
    redeemFee: "0.1%",
  },
};

export const icETHIndex: Token = {
  name: "Interest Compounding ETH Index",
  symbol: "icETH",
  address: "0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84",
  polygonAddress: undefined,
  optimismAddress: undefined,
  decimals: 18,
  url: "iceth",
  image: "icethLogo",
  coingeckoId: "interest-compounding-eth-index",
  tokensetsId: "iceth",
  tokenContextKey: "iceth",
  fees: {
    streamingFee: "0.75%",
    mintFee: "0.0%",
    redeemFee: "0.25%",
  },
};

export const productTokensBySymbol = {
  DPI: DefiPulseIndex,
  MVI: MetaverseIndex,
  "ETH2x-FLI": Ethereum2xFlexibleLeverageIndex,
  "ETH2x-FLI-P": Ethereum2xFLIP,
  INDEX: IndexToken,
  "BTC2x-FLI": Bitcoin2xFlexibleLeverageIndex,
  BED: BedIndex,
  DATA: DataIndex,
  GMI: GmiIndex,
  "MATIC2x-FLI-P": Matic2xFLIP,
  "iMATIC-FLI-P": IMaticFLIP,
  "iETH-FLI-P": IEthereumFLIP,
  "iBTC-FLI-P": IBitcoinFLIP,
  "BTC2x-FLI-P": Bitcoin2xFLIP,
  icETH: icETHIndex,
};

export const mainnetCurrencyTokens = [ETH, DAI, USDC];

export const polygonCurrencyTokens = [MATIC, DAI, USDC, WETH];

export const optimismCurrencyTokens = [ETH, DAI, USDC];

export const eligibleLeveragedExchangeIssuanceTokens = [
  Bitcoin2xFLIP,
  Ethereum2xFLIP,
  IBitcoinFLIP,
  IBitcoinFLIP,
  icETHIndex,
  IEthereumFLIP,
  IMaticFLIP,
  Matic2xFLIP,
];

const indexNames = [
  DefiPulseIndex,
  MetaverseIndex,
  Ethereum2xFlexibleLeverageIndex,
  Ethereum2xFLIP,
  IndexToken,
  Bitcoin2xFlexibleLeverageIndex,
  BedIndex,
  DataIndex,
  GmiIndex,
  Matic2xFLIP,
  IMaticFLIP,
  IEthereumFLIP,
  IBitcoinFLIP,
  Bitcoin2xFLIP,
  icETHIndex,
];

export const indexNamesMainnet = indexNames.filter(
  (index) => index.address !== undefined
);
export const indexNamesPolygon = indexNames.filter(
  (index) => index.polygonAddress !== undefined
);

export default indexNames;
