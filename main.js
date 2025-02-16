const path = require('path');
const { app, BrowserWindow } = require('electron');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
async function getPrices() {
    try {
        const log = await CoinGeckoClient.simple.price({
            ids: ['bitcoin', 'ethereum', 'solana', 'dogecoin'],
            vs_currencies: ['usd']
        });
        console.log(log.data);
    } catch (error) {
        console.error(error);
    }
}
getPrices();

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Veno Wallet',
        width: 1000,
        height: 600
    });


    mainWindow.loadFile(path.join(__dirname, '/render/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();
});