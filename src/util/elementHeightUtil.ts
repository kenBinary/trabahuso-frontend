export function setBarChartHeight(barCount: number): string {
  const extBarSize = 3.3;
  let height = "36rem";
  if (barCount > 10) {
    const extraBars = barCount - 10;
    height = `calc(${height} + ${extBarSize * extraBars}rem)`;
  }
  return height;
}
