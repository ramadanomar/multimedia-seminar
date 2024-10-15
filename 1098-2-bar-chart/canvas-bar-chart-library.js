class BarChart {
    
    /**
     * The canvas on which the bar chart will be displayed
    */
    #canvas;

    /**
     * Construts a new instance
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas){
        this.#canvas = canvas;
    }

    /**
     * Draws the bar chart
     * @param {Array<number>} values 
     */
    draw(values){
        const context = this.#canvas.getContext('2d');
        context.fillStyle = '#DEDEDE';
        context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        const maxValue = Math.max(...values);
        const f = this.#canvas.height / maxValue;

        const barWidth = this.#canvas.width / values.length;

        context.fillStyle = 'red'; // #FF0000
        for(let i = 0; i < values.length; i++){
            const barX = i * barWidth;

            const barHeight = values[i] * f;

            const barY = 0;

            context.fillRect(barX, barY, barWidth, barHeight);
        }
    }
}