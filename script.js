// Função para atualizar o relógio
function atualizarRelogio() {
    const agora = new Date(); // Obtém a data e hora atual
    const horas = String(agora.getHours()).padStart(2, '0'); // Horas com dois dígitos
    const minutos = String(agora.getMinutes()).padStart(2, '0'); // Minutos com dois dígitos
    const segundos = String(agora.getSeconds()).padStart(2, '0'); // Segundos com dois dígitos
  
    // Atualiza os elementos no HTML
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(atualizarRelogio, 1000);
  
  // Atualiza o relógio imediatamente ao carregar a página
  atualizarRelogio();
  