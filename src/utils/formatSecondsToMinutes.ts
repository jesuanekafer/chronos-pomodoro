export function formatSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0'); //pegando resto da divisão , para obter os segundos.
  return `${minutes}:${secondsMod}`;
}
