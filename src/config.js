// import { http, createConfig } from "wagmi";
// import { mainnet } from "wagmi/chains";
// import { injected, safe, walletConnect } from "wagmi/connectors";

// const projectId = `${process.env.REACT_APP_WALLET_CONNECT_ID}`;
// const coinbase = {
//   name: "Coinbase",
//   chainId: 42,
//   rpcUrl: "https://coinbase-rpc.com/",
// };

// const polygon = {
//   name: "Polygon",
//   chainId: 137,
//   rpcUrl: "https://polygon-rpc.com/",
// };

// const arbitrum = {
//   name: "Arbitrum",
//   chainId: 42161,
//   rpcUrl: "https://arbitrum-rpc.com/",
// };

// export const config = createConfig({
//   chains: [mainnet, coinbase, polygon, arbitrum],
//   connectors: [injected(), walletConnect({ projectId }), safe()],
//   transports: {
//     [mainnet.id]: http(),
//     [coinbase.id]: http(),
//     [polygon.id]: http(),
//     [arbitrum.id]: http(),
//   },
// });
