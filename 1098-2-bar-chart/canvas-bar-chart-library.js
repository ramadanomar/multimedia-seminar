class BarChart {
  /**
   * The canvas on which the bar chart will be displayed
   */
  #canvas;

  /**
   * Construts a new instance
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.#canvas = canvas;
  }

  /**
   * Draws the bar chart
   * @param {Array<number>} values
   */
  draw(values) {
    const context = this.#canvas.getContext("2d");
    context.fillStyle = "#DEDEDE";
    context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

    const maxValue = Math.max(...values);
    const f = this.#canvas.height / maxValue;

    const barWidth = this.#canvas.width / values.length;

    context.fillStyle = "red"; // #FF0000
    for (let i = 0; i < values.length; i++) {
      const barX = i * barWidth;

      // inmultim cu 0.9 ca sa fie lungimea mai mica (90% din canvas height)
      const barHeight = values[i] * f * 0.9;

      const barY = this.#canvas.height - barHeight;

      context.fillRect(barX + barWidth / 4, barY, barWidth / 2, barHeight);

      // Tema
      context.strokeStyle = "#5e0808";
      context.strokeRect(barX + barWidth / 4, barY, barWidth / 2, barHeight);
    }
  }
}
