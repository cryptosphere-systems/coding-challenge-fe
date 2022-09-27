import monerojs from 'monero-javascript';

async function createWallet() {
  let walletFull = await monerojs.createWalletFull({
    password: "supersecretpassword123",
    networkType: "stagenet",
    serverUri: "http://localhost:38081",
    serverUsername: "superuser",
    serverPassword: "abctesting123",
  });
  console.log(walletFull);
}

function component() {
  createWallet();
  const element = document.createElement('div');
  element.innerHTML = "Hello!!!";

  return element;
}

document.body.appendChild(component());
