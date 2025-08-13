let isRunning = false;

self.onmessage = function (event) {
  //O self aqui representa o escopo global do worker (semelhante ao window no script principal).
  //Esse evento escuta mensagens enviadas do script principal com worker.postMessage().
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000; //Calcula o timestamp (em milissegundos) em que o timer deve terminar.
  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000); //número inicial de segundos restantes.

  function tick() {
    self.postMessage(countDownSeconds); //Envia o número atual de segundos restantes de volta ao script principal.

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000); //Chama tick() novamente em 1 segundo (1000ms).
    //Isso faz o loop contínuo a cada segundo até que countDownSeconds fique negativo
  }

  tick();
};
