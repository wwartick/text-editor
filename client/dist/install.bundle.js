(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),e.style.visibility="visible"})),e.addEventListener("click",(async()=>{e.addEventListener("click",(async()=>{event.prompt(),e.setAttribute("disabled",!0),e.textContent="Installed!"}))})),window.addEventListener("appinstalled",(e=>{window.addEventListener("appinstalled",(e=>{console.log("it works!","appinstalled",e)}))}))})();