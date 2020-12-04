const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const moedaBase = 'dolar'
  const moedaFinal = 'real'
  const url = `https://www.google.com/search?rlz=1C1GCEU_pt-BRBR923BR923&ei=-kDKX7_8Ko_X5OUP44aH-A0&q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQgwEQQzIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjoECAAQR1DEiAFYxIgBYLGMAWgAcAJ4AIAByQGIAckBkgEDMi0xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwi_4YWwvrTtAhWPK7kGHWPDAd8Q4dUDCA0&uact=5`
  await page.goto(url);

  const resultado =  await page.evaluate(() => {
    return  document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O Valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
  await browser.close();
})();