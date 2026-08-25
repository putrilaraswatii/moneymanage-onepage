(function(){
  const totalInput=document.getElementById('total');
  const rateInput=document.getElementById('rate');
  const rateValue=document.getElementById('rateValue');
  const businessValue=document.getElementById('businessValue');
  const personalValue=document.getElementById('personalValue');
  const totalValue=document.getElementById('totalValue');
  const year=document.getElementById('year');
  const rupiah=n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Math.max(0,n||0));
  function update(){
    const total=Math.max(0,Number(totalInput.value)||0);
    const rate=Math.min(80,Math.max(0,Number(rateInput.value)||0));
    const personal=total*rate/100;
    rateValue.textContent=rate+'%';
    businessValue.textContent=rupiah(total-personal);
    personalValue.textContent=rupiah(personal);
    totalValue.textContent=rupiah(total);
  }
  if(totalInput&&rateInput){totalInput.addEventListener('input',update);rateInput.addEventListener('input',update);update()}
  if(year) year.textContent=new Date().getFullYear();
})();
