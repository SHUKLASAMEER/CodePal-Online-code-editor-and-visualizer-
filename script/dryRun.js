class CodeAnalyzer {
    constructor() {
        this.codeInput = document.getElementById('codeInput');
        this.outputArea = document.getElementById('analysisSteps');
        this.timeComplexity = document.getElementById('timeComplexity');
        this.spaceComplexity = document.getElementById('spaceComplexity');
        this.runButton = document.getElementById('runCode');
        this.clearButton = document.getElementById('clearCode');
        this.languageSelect = document.getElementById('languageSelect');
        
        this.setupEventListeners();
        this.initializeUI();
    }
    
    initializeUI() {
        // Set default values
        this.timeComplexity.textContent = '-';
        this.spaceComplexity.textContent = '-';
        this.outputArea.innerHTML = this.createOutputLine('Ready to analyze your code. Click "Analyze Code" to begin.');
    }

    setupEventListeners() {
        this.runButton.addEventListener('click', () => this.analyzeCode());
        this.clearButton.addEventListener('click', () => this.clearCode());
    }

    clearCode() {
        if (this.codeInput) {
            this.codeInput.value = '';
        }
        this.outputArea.innerHTML = this.createOutputLine('Ready for code analysis...');
        this.timeComplexity.textContent = '-';
        this.spaceComplexity.textContent = '-';
    }

    createOutputLine(content, type = '') {
        return `
            <div class="output-line ${type}">
                <span class="line-prefix">${type === 'error' ? '✖' : '>'}</span>
                <span class="line-content">${content}</span>
            </div>
        `;
    }

    async analyzeCode() {
        const code = this.codeInput ? this.codeInput.value.trim() : '';
        const language = this.languageSelect.value;

        if (!code) {
            this.outputArea.innerHTML = this.createOutputLine('Please enter some code to analyze.', 'error');
            return;
        }

        this.runButton.disabled = true;
        this.runButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        this.outputArea.innerHTML = this.createOutputLine('Analyzing your code. This may take a moment...');

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    code, 
                    language,
                    timestamp: new Date().toISOString()
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || `Server error ${response.status}`);
            }

            const result = await response.json();
            this.displayAnalysisResults(result);
            
        } catch (error) {
            console.error('Analysis error:', error);
            this.outputArea.innerHTML = this.createOutputLine(
                `Error: ${error.message || 'Failed to analyze code'}`,
                'error'
            );
        } finally {
            this.runButton.disabled = false;
            this.runButton.innerHTML = '<i class="fas fa-play"></i> Analyze Code';
        }
    }
    
    displayAnalysisResults(analysis) {
        // Clear previous results
        this.outputArea.innerHTML = '';
        
        // Display time and space complexity
        this.timeComplexity.textContent = analysis.timeComplexity || 'N/A';
        this.spaceComplexity.textContent = analysis.spaceComplexity || 'N/A';
        
        // Show errors if any
        if (analysis.hasError && analysis.errors && analysis.errors.length > 0) {
            const errorContainer = document.createElement('div');
            errorContainer.className = 'analysis-errors';
            
            const errorTitle = document.createElement('h4');
            errorTitle.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Errors Found:';
            errorContainer.appendChild(errorTitle);
            
            const errorList = document.createElement('ul');
            analysis.errors.forEach(error => {
                const errorItem = document.createElement('li');
                errorItem.textContent = error;
                errorList.appendChild(errorItem);
            });
            errorContainer.appendChild(errorList);
            this.outputArea.appendChild(errorContainer);
        }
        
        // Display execution steps
        if (analysis.execution && analysis.execution.length > 0) {
            const stepsContainer = document.createElement('div');
            stepsContainer.className = 'analysis-steps';
            
            const stepsTitle = document.createElement('h4');
            stepsTitle.innerHTML = '<i class="fas fa-list-ol"></i> Execution Steps:';
            stepsContainer.appendChild(stepsTitle);

            const stepsList = document.createElement('ol');
            analysis.execution.forEach(step => {
                const stepItem = document.createElement('li');
                stepItem.innerHTML = step;
                stepsList.appendChild(stepItem);
            });
            stepsContainer.appendChild(stepsList);
            this.outputArea.appendChild(stepsContainer);
        }
        
        // Display variables if available
        if (analysis.variables && Object.keys(analysis.variables).length > 0) {
            const varsContainer = document.createElement('div');
            varsContainer.className = 'analysis-variables';
            
            const varsTitle = document.createElement('h4');
            varsTitle.innerHTML = '<i class="fas fa-code"></i> Variables:';
            varsContainer.appendChild(varsTitle);

            const varTable = document.createElement('table');
            varTable.className = 'variable-table';
            
            // Create table header
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Memory Address</th>
                </tr>
            `;
            varTable.appendChild(thead);

            // Add variable rows
            const tbody = document.createElement('tbody');
            for (const [name, details] of Object.entries(analysis.variables)) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><code>${name}</code></td>
                    <td><span class="type-tag">${details.type || 'N/A'}</span></td>
                    <td><code>${details.value || 'N/A'}</code></td>
                    <td><code>${details.memoryAddress || 'N/A'}</code></td>
                `;
                tbody.appendChild(row);
            }
            varTable.appendChild(tbody);
            varsContainer.appendChild(varTable);
            this.outputArea.appendChild(varsContainer);
        }

        // Display explanation if available
        if (analysis.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'analysis-explanation';
            
            const explanationTitle = document.createElement('h4');
            explanationTitle.innerHTML = '<i class="fas fa-lightbulb"></i> Explanation:';
            explanationDiv.appendChild(explanationTitle);

            const explanationText = document.createElement('div');
            explanationText.className = 'explanation-content';
            explanationText.innerHTML = analysis.explanation;
            explanationDiv.appendChild(explanationText);

            this.outputArea.appendChild(explanationDiv);
        }
    }

    isValidAnalysis(analysis) {
        return (
            analysis &&
            typeof analysis.hasError === 'boolean' &&
            Array.isArray(analysis.errors) &&
            Array.isArray(analysis.execution) &&
            typeof analysis.timeComplexity === 'string' &&
            typeof analysis.spaceComplexity === 'string'
        );
    }

    displayResults(analysis) {
        let output = '';

        if (analysis.hasError) {
            output += this.createOutputLine('❌ Syntax Errors Found:', 'error');
            analysis.errors.forEach(error => {
                output += this.createOutputLine(error, 'error');
            });
        } else {
            output += this.createOutputLine('✓ Code syntax is valid', 'success');
            output += this.createOutputLine('\nExecution Steps:\n');
            
            analysis.execution.forEach((step, index) => {
                output += this.createOutputLine(`${step}`, 'step');
            });
        }

        this.timeComplexity.textContent = analysis.timeComplexity || 'N/A';
        this.spaceComplexity.textContent = analysis.spaceComplexity || 'N/A';

        this.outputArea.innerHTML = output;
    }
}

// Initialize the analyzer when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const analyzer = new CodeAnalyzer();
}); 