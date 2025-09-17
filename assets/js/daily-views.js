(function(){
  const el = document.getElementById('daily-views-number');
  if(!el) return;
  const today = new Date().toISOString().slice(0,10); // YYYY-MM-DD
  const namespace = 'your_blog_namespace';  // 可自定义，建议：你的 GitHub 用户名
  const key = 'pv_' + today;
  const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;
  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      el.textContent = data.value;
    })
    .catch(()=> {
      el.textContent = '—';
    });
})();
