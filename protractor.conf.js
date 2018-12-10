exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
      'test/specs/home.spec.js',
      'test/specs/planetas-lista.spec.js'
    ],
    onPrepare: async ()=> {
      browser.ignoreSynchronization = true;
      await browser.driver.manage().window().maximize();
    },
    capabilities: {
      browserName: 'internet explorer',
      version: '9'
    }
  };