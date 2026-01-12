class ArrayAnimator {
    constructor() {
        this.container = document.querySelector('.array-container');
        this.codeContainer = document.querySelector('.code-display');
        this.elements = [];
        this.maxSize = 5;
        this.currentSize = 0;
        this.currentLineIndex = -1;
        this.init();
    }

    init() {
        this.setupCodeDisplay();
        this.startAnimation();
    }

    setupCodeDisplay() {
        const codeLines = [
            { code: '// Initialize array of size 5', type: 'comment' },
            { code: 'int arr[5];', type: 'declaration' },
            { code: 'arr[0] = 42;', type: 'assignment', value: 42, index: 0 },
            { code: 'arr[1] = 17;', type: 'assignment', value: 17, index: 1 },
            { code: 'arr[2] = 89;', type: 'assignment', value: 89, index: 2 },
            { code: 'arr[3] = 55;', type: 'assignment', value: 55, index: 3 },
            { code: 'arr[4] = 23;', type: 'assignment', value: 23, index: 4 },
            { code: 'arr[5] = 71;', type: 'error', value: 71, index: 5 }
        ];

        this.codeLines = codeLines.map((line, index) => {
            const div = document.createElement('div');
            div.className = 'code-line';
            div.innerHTML = `
                <span class="line-number">${index + 1}</span>
                <span class="code-text">${this.syntaxHighlight(line.code)}</span>
            `;
            this.codeContainer.appendChild(div);
            return { element: div, ...line };
        });
    }

    syntaxHighlight(code) {
        // Basic syntax highlighting
        return code
            .replace(/(\/\/.+)/, '<span style="color: #6A9955">$1</span>') // Comments
            .replace(/\b(int)\b/, '<span style="color: #569CD6">$1</span>') // Keywords
            .replace(/\b(\d+)\b/, '<span style="color: #B5CEA8">$1</span>') // Numbers
            .replace(/(\[|\])/g, '<span style="color: #FFD700">$1</span>'); // Brackets
    }

    async startAnimation() {
        await this.sleep(500);

        // Comment line
        await this.highlightLine(0);
        await this.sleep(1000);

        // Array declaration
        await this.highlightLine(1);
        await this.createEmptyArray();
        await this.sleep(1000);

        // Process each assignment
        for (let i = 2; i < 7; i++) {
            await this.highlightLine(i);
            const line = this.codeLines[i];
            await this.addElement(line.index, line.value);
            await this.sleep(800);
        }

        // Show error for last line
        await this.highlightLine(7);
        await this.showError();
        await this.sleep(2000);

        // Reset after delay
        this.resetAnimation();
    }

    async highlightLine(index) {
        // Remove previous highlight
        if (this.currentLineIndex >= 0) {
            this.codeLines[this.currentLineIndex].element.classList.remove('active');
        }

        // Add new highlight
        this.currentLineIndex = index;
        this.codeLines[index].element.classList.add('active');

        // Only scroll if the line is not fully visible in the viewport
        const lineElement = this.codeLines[index].element;
        const container = this.codeContainer;
        const lineRect = lineElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (lineRect.top < containerRect.top || lineRect.bottom > containerRect.bottom) {
            lineElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }

    async createEmptyArray() {
        // Clear existing elements
        this.container.innerHTML = '';
        this.elements = [];

        // Create array index labels
        const indexLabels = document.createElement('div');
        indexLabels.style.display = 'flex';
        indexLabels.style.gap = '20px';
        indexLabels.style.marginBottom = '10px';
        
        for (let i = 0; i < this.maxSize; i++) {
            const label = document.createElement('div');
            label.style.width = '70px';
            label.style.textAlign = 'center';
            label.style.color = 'var(--text-muted)';
            label.textContent = `[${i}]`;
            indexLabels.appendChild(label);
        }
        this.container.appendChild(indexLabels);

        // Create array elements container
        const elementsContainer = document.createElement('div');
        elementsContainer.style.display = 'flex';
        elementsContainer.style.gap = '20px';
        this.container.appendChild(elementsContainer);

        // Create array elements
        for (let i = 0; i < this.maxSize; i++) {
            const element = document.createElement('div');
            element.className = 'array-element';
            element.textContent = '?';
            elementsContainer.appendChild(element);
            this.elements.push(element);
            await this.sleep(200);
            element.classList.add('active');
        }
    }

    async addElement(index, value) {
        if (index >= this.maxSize) {
            await this.showError();
            return;
        }

        const element = this.elements[index];
        element.textContent = value;
        element.classList.add('filled');
        this.currentSize++;

        await this.sleep(500);
        element.classList.remove('filled');
    }

    async showError() {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Array Index Out of Bounds!';
        this.container.appendChild(errorMsg);
        
        await this.sleep(2000);
        errorMsg.remove();
    }

    resetAnimation() {
        // Clear code highlighting
        if (this.currentLineIndex >= 0) {
            this.codeLines[this.currentLineIndex].element.classList.remove('active');
        }
        this.currentLineIndex = -1;
        
        // Clear array elements
        this.container.innerHTML = '';
        this.elements = [];
        this.currentSize = 0;
        
        // Restart animation
        this.startAnimation();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const animator = new ArrayAnimator();
}); 