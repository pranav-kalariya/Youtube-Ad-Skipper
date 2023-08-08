setInterval(()=>{
    const skipAdBtn = document.querySelector('[class*="ytp-ad-skip-button ytp-button"]');
    if(skipAdBtn){
    skipAdBtn.click();
    }
  },1000);
