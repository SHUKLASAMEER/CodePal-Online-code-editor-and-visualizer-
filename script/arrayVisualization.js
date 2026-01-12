class ArrayVisualizer {
    constructor() {
        this.memoryGrid = document.querySelector('.memory-grid');
        this.codeContent = document.querySelector('.code-content');
        this.currentAddress = document.getElementById('currentAddress');
        this.currentValue = document.getElementById('currentValue');
        this.errorMessage = document.querySelector('.error-message');
        
        this.currentStep = 0;
        this.steps = [];
        this.init();
    }

    init() {
        // Initialize the visualization steps
        this.steps = [
            {
                code: '// Initialize array of size 5',
                action: 'comment',
                description: 'Declaring an array of size 5'
            },
            {
                code: 'int arr[5];',
                action: 'allocate',
                size: 5,
                description: 'Allocating memory for array of size 5'
            },
            {
                code: 'arr[0] = 42;',
                action: 'assign',
                index: 0,
                value: 42,
                description: 'Assigning value 42 to index 0'
            },
            {
                code: 'arr[1] = 17;',
                action: 'assign',
                index: 1,
                value: 17,
                description: 'Assigning value 17 to index 1'
            },
            {
                code: 'arr[2] = 89;',
                action: 'assign',
                index: 2,
                value: 89,
                description: 'Assigning value 89 to index 2'
            },
            {
                code: 'arr[3] = 55;',
                action: 'assign',
                index: 3,
                value: 55,
                description: 'Assigning value 55 to index 3'
            },
            {
                code: 'arr[4] = 23;',
                action: 'assign',
                index: 4,
                value: 23,
                description: 'Assigning value 23 to index 4'
            },
            {
                code: 'arr[5] = 71;',
                action: 'error',
                description: 'Attempting to access index out of bounds'
            }
        ];

        // Add click event listeners to code lines
        const codeLines = this.codeContent.querySelectorAll('.code-line');
        codeLines.forEach((line, index) => {
            line.addEventListener('click', () => this.executeStep(index));
        });

        // Initialize with first step
        this.executeStep(0);
    }

    executeStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= this.steps.length) return;
        
        // Reset error message
        this.errorMessage.style.display = 'none';
        
        const step = this.steps[stepIndex];
        this.currentStep = stepIndex;
        
        // Update code highlighting
        const codeLines = this.codeContent.querySelectorAll('.code-line');
        codeLines.forEach(line => line.classList.remove('active'));
        codeLines[stepIndex].classList.add('active');

        // Execute step based on action type
        switch (step.action) {
            case 'comment':
                // No memory changes for comments
                break;
                
            case 'allocate':
                this.memoryGrid.innerHTML = '';
                for (let i = 0; i < step.size; i++) {
                    const block = this.createMemoryBlock(i);
                    this.memoryGrid.appendChild(block);
                    // Add animation delay based on index
                    block.style.animation = `fadeInScale 0.3s ease-out ${i * 0.1}s both`;
                }
                break;
                
            case 'assign':
                const blocks = this.memoryGrid.querySelectorAll('.memory-block');
                blocks.forEach(block => block.classList.remove('active'));
                
                const targetBlock = blocks[step.index];
                targetBlock.classList.add('active');
                
                // Animate value change
                const valueElement = targetBlock.querySelector('.value');
                valueElement.style.animation = 'none';
                valueElement.offsetHeight; // Trigger reflow
                valueElement.textContent = step.value;
                valueElement.style.animation = 'fadeInScale 0.3s ease-out';
                
                // Update memory info
                this.currentAddress.textContent = `0x${(step.index * 4 + 1000).toString(16).toUpperCase()}`;
                this.currentValue.textContent = step.value;
                break;
                
            case 'error':
                this.errorMessage.style.display = 'flex';
                this.errorMessage.style.animation = 'fadeInScale 0.3s ease-out';
                break;
        }
    }

    createMemoryBlock(index) {
        const block = document.createElement('div');
        block.className = 'memory-block';
        block.innerHTML = `
            <div class="address">0x${(index * 4 + 1000).toString(16).toUpperCase()}</div>
            <div class="value">0</div>
        `;
        return block;
    }
}

// Initialize visualizer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const visualizer = new ArrayVisualizer();
}); 