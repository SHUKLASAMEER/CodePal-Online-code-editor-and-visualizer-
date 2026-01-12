// Multi-topic DSA Learning Module
document.addEventListener('DOMContentLoaded', function() {
    console.log('Learning module loaded');
    
    // Topic switching functionality
    const topicTabs = document.querySelectorAll('.topic-tab');
    const topicContents = document.querySelectorAll('.topic-content');
    
    console.log('Found topic tabs:', topicTabs.length);
    console.log('Found topic contents:', topicContents.length);

    topicTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTopic = tab.getAttribute('data-topic');
            console.log('Switching to topic:', targetTopic);
            
            // Remove active class from all tabs and contents
            topicTabs.forEach(t => t.classList.remove('active'));
            topicContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(targetTopic + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.error('Target content not found:', targetTopic + '-content');
            }
            
            // Load topic explanation and initialize the selected topic
            loadTopicExplanation(targetTopic);
            initializeTopic(targetTopic);
        });
    });

    // Initialize Arrays topic by default
    console.log('Initializing arrays topic');
    loadTopicExplanation('arrays');
    initializeTopic('arrays');
});

// Load comprehensive topic explanations
function loadTopicExplanation(topic) {
    const explanationContainer = document.getElementById('topicExplanation');
    if (!explanationContainer) return;

    const explanations = {
        arrays: getArraysExplanation(),
        strings: getStringsExplanation(),
        linkedlist: getLinkedListsExplanation(),
        stacks: getStacksExplanation(),
        queues: getQueuesExplanation(),
        trees: getTreesExplanation(),
        graphs: getGraphsExplanation(),
        searching: getSearchingExplanation(),
        sorting: getSortingExplanation(),
        recursion: getRecursionExplanation(),
        greedy: getGreedyExplanation(),
        dp: getDPExplanation(),
        bst: getBSTExplanation(),
        backtracking: getBacktrackingExplanation()
    };

    explanationContainer.innerHTML = explanations[topic] || '';
}

// Arrays Explanation
function getArraysExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Arrays - Complete Guide</h2>
                <p>Master the fundamentals of arrays with detailed explanations and interactive examples</p>
            </div>
            
            <!-- Array Definition and Properties -->
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is an Array?</h3>
                <div class="learning-content">
                    <p>An array is a data structure that stores a collection of elements of the same data type in contiguous memory locations. Each element can be accessed directly using its index position.</p>
                    <div class="code-example">
                        <code>int arr[5] = {10, 20, 30, 40, 50};  // Array declaration and initialization</code>
                    </div>
                </div>
            </div>

            <!-- Key Properties -->
            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Random Access</h3>
                    <p><strong>Time Complexity:</strong> O(1)</p>
                    <p>Access any element directly using its index. No need to traverse through other elements.</p>
                    <div class="complexity-badge">O(1)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-memory"></i>
                    </div>
                    <h3>Contiguous Memory</h3>
                    <p><strong>Memory Layout:</strong> Sequential</p>
                    <p>Elements are stored in consecutive memory blocks, making arrays cache-friendly and efficient for iteration.</p>
                    <div class="complexity-badge">Cache Efficient</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <h3>Fixed Size</h3>
                    <p><strong>Size:</strong> Static</p>
                    <p>Array size is determined at declaration time and cannot be changed during runtime in most languages.</p>
                    <div class="complexity-badge">Static</div>
                </div>
            </div>

            <!-- Operations and Time Complexities -->
            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Array Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Access by Index</h4>
                        <div class="complexity">O(1)</div>
                        <p>Direct access using array[index]</p>
                        <div class="code-example">
                            <code>int value = arr[2];  // Access element at index 2</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Update by Index</h4>
                        <div class="complexity">O(1)</div>
                        <p>Modify element at specific position</p>
                        <div class="code-example">
                            <code>arr[2] = 100;  // Update element at index 2</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Insert at End</h4>
                        <div class="complexity">O(1)</div>
                        <p>Add element at the end (if space available)</p>
                        <div class="code-example">
                            <code>arr[size++] = value;  // Insert at end</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Insert at Middle</h4>
                        <div class="complexity">O(n)</div>
                        <p>Shift elements to make space</p>
                        <div class="code-example">
                            <code>// Shift elements right, then insert</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Delete from End</h4>
                        <div class="complexity">O(1)</div>
                        <p>Remove last element</p>
                        <div class="code-example">
                            <code>size--;  // Decrease size</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Delete from Middle</h4>
                        <div class="complexity">O(n)</div>
                        <p>Shift elements to fill gap</p>
                        <div class="code-example">
                            <code>// Shift elements left to fill gap</code>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Advantages and Disadvantages -->
            <div class="learning-section">
                <h3><i class="fas fa-balance-scale"></i> Advantages vs Disadvantages</h3>
                <div class="comparison-grid">
                    <div class="pros-cons">
                        <h4><i class="fas fa-check-circle" style="color: #4CAF50;"></i> Advantages</h4>
                        <ul>
                            <li>Fast random access (O(1))</li>
                            <li>Memory efficient (no extra pointers)</li>
                            <li>Cache-friendly due to contiguous memory</li>
                            <li>Simple implementation</li>
                            <li>Easy to iterate through elements</li>
                        </ul>
                    </div>
                    <div class="pros-cons">
                        <h4><i class="fas fa-times-circle" style="color: #f44336;"></i> Disadvantages</h4>
                        <ul>
                            <li>Fixed size (static allocation)</li>
                            <li>Expensive insertion/deletion in middle</li>
                            <li>Memory waste if array is not full</li>
                            <li>No built-in bounds checking</li>
                            <li>Difficult to resize dynamically</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Common Use Cases -->
            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Common Use Cases</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-sort"></i>
                        <h4>Sorting Algorithms</h4>
                        <p>Arrays are fundamental to sorting algorithms like QuickSort, MergeSort, and BubbleSort.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-search"></i>
                        <h4>Searching</h4>
                        <p>Binary search and linear search operations work efficiently on sorted arrays.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-chart-bar"></i>
                        <h4>Data Storage</h4>
                        <p>Storing collections of similar data types like student grades, temperature readings.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-matrix"></i>
                        <h4>Matrices</h4>
                        <p>2D arrays are used to represent matrices in mathematical computations.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Strings Explanation
function getStringsExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Strings - Complete Guide</h2>
                <p>Master string manipulation, algorithms, and pattern matching with interactive examples</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Strings?</h3>
                <div class="learning-content">
                    <p>A string is a sequence of characters stored as an array. In most programming languages, strings are immutable, meaning they cannot be changed after creation.</p>
                    <div class="code-example">
                        <code>string str = "Hello World";  // String declaration and initialization</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-font"></i>
                    </div>
                    <h3>Character Array</h3>
                    <p><strong>Storage:</strong> Sequential</p>
                    <p>Strings are stored as arrays of characters with null terminator in C-style strings.</p>
                    <div class="complexity-badge">Array-based</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h3>Immutable</h3>
                    <p><strong>Mutability:</strong> Read-only</p>
                    <p>Most string operations create new strings rather than modifying existing ones.</p>
                    <div class="complexity-badge">Immutable</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-ruler"></i>
                    </div>
                    <h3>Variable Length</h3>
                    <p><strong>Size:</strong> Dynamic</p>
                    <p>String length can vary and is determined at runtime, not at compile time.</p>
                    <div class="complexity-badge">Dynamic</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> String Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>String Reversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Reverse the order of characters in a string</p>
                        <div class="code-example">
                            <code>// Two-pointer approach: swap characters from ends</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Pattern Searching</h4>
                        <div class="complexity">O(n*m)</div>
                        <p>Find occurrences of a pattern in text</p>
                        <div class="code-example">
                            <code>// Naive approach: check each position</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Palindrome Check</h4>
                        <div class="complexity">O(n)</div>
                        <p>Check if string reads same forwards and backwards</p>
                        <div class="code-example">
                            <code>// Compare characters from both ends</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>String Concatenation</h4>
                        <div class="complexity">O(n+m)</div>
                        <p>Combine two strings into one</p>
                        <div class="code-example">
                            <code>result = str1 + str2;  // Create new string</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Substring Extraction</h4>
                        <div class="complexity">O(k)</div>
                        <p>Extract a portion of the string</p>
                        <div class="code-example">
                            <code>sub = str.substring(start, end);</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>String Length</h4>
                        <div class="complexity">O(1)</div>
                        <p>Get the number of characters in string</p>
                        <div class="code-example">
                            <code>int len = str.length();  // Usually O(1)</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Common String Algorithms</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-search"></i>
                        <h4>KMP Algorithm</h4>
                        <p>Efficient pattern matching with O(n+m) time complexity using failure function.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-compress"></i>
                        <h4>String Compression</h4>
                        <p>Reduce string size by encoding repeated characters (e.g., "aaab" → "a3b").</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sort"></i>
                        <h4>String Sorting</h4>
                        <p>Lexicographical ordering of strings using comparison-based algorithms.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-code"></i>
                        <h4>Parsing</h4>
                        <p>Breaking down strings into tokens for compiler design and data processing.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Linked Lists Explanation
function getLinkedListsExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Linked Lists - Complete Guide</h2>
                <p>Master dynamic data structures with flexible memory allocation and efficient operations</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Linked Lists?</h3>
                <div class="learning-content">
                    <p>A linked list is a linear data structure where elements are stored in nodes, and each node contains data and a reference (pointer) to the next node in the sequence.</p>
                    <div class="code-example">
                        <code>struct Node { int data; Node* next; };  // Node structure</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-link"></i>
                    </div>
                    <h3>Dynamic Size</h3>
                    <p><strong>Memory:</strong> Heap allocated</p>
                    <p>Size can grow or shrink during runtime by adding/removing nodes.</p>
                    <div class="complexity-badge">Dynamic</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-random"></i>
                    </div>
                    <h3>Non-contiguous</h3>
                    <p><strong>Storage:</strong> Scattered</p>
                    <p>Nodes can be stored anywhere in memory, connected via pointers.</p>
                    <div class="complexity-badge">Flexible</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-plus"></i>
                    </div>
                    <h3>Easy Insertion</h3>
                    <p><strong>Operations:</strong> O(1) at head</p>
                    <p>Insertion at the beginning is very efficient, no shifting required.</p>
                    <div class="complexity-badge">O(1)</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Linked List Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Insert at Head</h4>
                        <div class="complexity">O(1)</div>
                        <p>Add new node at the beginning of the list</p>
                        <div class="code-example">
                            <code>newNode->next = head; head = newNode;</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Insert at Tail</h4>
                        <div class="complexity">O(n)</div>
                        <p>Add new node at the end of the list</p>
                        <div class="code-example">
                            <code>// Traverse to end, then insert</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Delete from Head</h4>
                        <div class="complexity">O(1)</div>
                        <p>Remove the first node from the list</p>
                        <div class="code-example">
                            <code>head = head->next; delete temp;</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Delete from Tail</h4>
                        <div class="complexity">O(n)</div>
                        <p>Remove the last node from the list</p>
                        <div class="code-example">
                            <code>// Traverse to second last, then delete</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Search Element</h4>
                        <div class="complexity">O(n)</div>
                        <p>Find a specific value in the list</p>
                        <div class="code-example">
                            <code>// Linear search through all nodes</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Access by Index</h4>
                        <div class="complexity">O(n)</div>
                        <p>Get element at specific position</p>
                        <div class="code-example">
                            <code>// Must traverse from head to index</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Types of Linked Lists</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-arrow-right"></i>
                        <h4>Singly Linked List</h4>
                        <p>Each node has data and pointer to next node. Traversal only in forward direction.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-exchange-alt"></i>
                        <h4>Doubly Linked List</h4>
                        <p>Each node has pointers to both next and previous nodes. Bidirectional traversal.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-circle"></i>
                        <h4>Circular Linked List</h4>
                        <p>Last node points back to first node, forming a circle. No null pointers.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-code"></i>
                        <h4>Skip List</h4>
                        <p>Multi-level linked list with express lanes for faster search operations.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Stacks Explanation
function getStacksExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Stacks - Complete Guide</h2>
                <p>Master LIFO (Last In, First Out) data structure with practical applications</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is a Stack?</h3>
                <div class="learning-content">
                    <p>A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can only be added or removed from the top of the stack.</p>
                    <div class="code-example">
                        <code>stack<int> s;  // Stack declaration</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h3>LIFO Principle</h3>
                    <p><strong>Order:</strong> Last In, First Out</p>
                    <p>The last element added is the first one to be removed, like a stack of plates.</p>
                    <div class="complexity-badge">LIFO</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-arrow-up"></i>
                    </div>
                    <h3>Top Access Only</h3>
                    <p><strong>Access:</strong> Single end</p>
                    <p>Only the top element can be accessed directly, maintaining stack integrity.</p>
                    <div class="complexity-badge">Restricted</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Fast Operations</h3>
                    <p><strong>Speed:</strong> O(1)</p>
                    <p>Push, pop, and peek operations are all constant time operations.</p>
                    <div class="complexity-badge">O(1)</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Stack Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Push</h4>
                        <div class="complexity">O(1)</div>
                        <p>Add element to the top of the stack</p>
                        <div class="code-example">
                            <code>stack.push(value);  // Add to top</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Pop</h4>
                        <div class="complexity">O(1)</div>
                        <p>Remove and return top element</p>
                        <div class="code-example">
                            <code>value = stack.pop();  // Remove from top</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Peek/Top</h4>
                        <div class="complexity">O(1)</div>
                        <p>View top element without removing</p>
                        <div class="code-example">
                            <code>value = stack.top();  // View top</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Is Empty</h4>
                        <div class="complexity">O(1)</div>
                        <p>Check if stack has no elements</p>
                        <div class="code-example">
                            <code>bool empty = stack.empty();</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Size</h4>
                        <div class="complexity">O(1)</div>
                        <p>Get number of elements in stack</p>
                        <div class="code-example">
                            <code>int size = stack.size();</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Clear</h4>
                        <div class="complexity">O(n)</div>
                        <p>Remove all elements from stack</p>
                        <div class="code-example">
                            <code>while(!stack.empty()) stack.pop();</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Common Stack Applications</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-code"></i>
                        <h4>Function Calls</h4>
                        <p>Call stack manages function execution order and local variables in recursion.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-calculator"></i>
                        <h4>Expression Evaluation</h4>
                        <p>Convert infix to postfix notation and evaluate mathematical expressions.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-undo"></i>
                        <h4>Undo Operations</h4>
                        <p>Text editors use stacks to implement undo functionality for user actions.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sitemap"></i>
                        <h4>Browser History</h4>
                        <p>Web browsers use stacks to manage back button functionality and page history.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Queues Explanation
function getQueuesExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Queues - Complete Guide</h2>
                <p>Master FIFO (First In, First Out) data structure with real-world applications</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is a Queue?</h3>
                <div class="learning-content">
                    <p>A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear and removed from the front, like a line of people.</p>
                    <div class="code-example">
                        <code>queue<int> q;  // Queue declaration</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-queue"></i>
                    </div>
                    <h3>FIFO Principle</h3>
                    <p><strong>Order:</strong> First In, First Out</p>
                    <p>The first element added is the first one to be removed, like a waiting line.</p>
                    <div class="complexity-badge">FIFO</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-arrows-alt-h"></i>
                    </div>
                    <h3>Two Ends</h3>
                    <p><strong>Access:</strong> Front & Rear</p>
                    <p>Elements enter from rear and exit from front, maintaining order.</p>
                    <div class="complexity-badge">Bidirectional</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Fast Operations</h3>
                    <p><strong>Speed:</strong> O(1)</p>
                    <p>Enqueue and dequeue operations are both constant time operations.</p>
                    <div class="complexity-badge">O(1)</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Queue Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Enqueue</h4>
                        <div class="complexity">O(1)</div>
                        <p>Add element to the rear of the queue</p>
                        <div class="code-example">
                            <code>queue.enqueue(value);  // Add to rear</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Dequeue</h4>
                        <div class="complexity">O(1)</div>
                        <p>Remove and return front element</p>
                        <div class="code-example">
                            <code>value = queue.dequeue();  // Remove from front</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Front</h4>
                        <div class="complexity">O(1)</div>
                        <p>View front element without removing</p>
                        <div class="code-example">
                            <code>value = queue.front();  // View front</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Rear</h4>
                        <div class="complexity">O(1)</div>
                        <p>View rear element without removing</p>
                        <div class="code-example">
                            <code>value = queue.rear();  // View rear</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Is Empty</h4>
                        <div class="complexity">O(1)</div>
                        <p>Check if queue has no elements</p>
                        <div class="code-example">
                            <code>bool empty = queue.empty();</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Size</h4>
                        <div class="complexity">O(1)</div>
                        <p>Get number of elements in queue</p>
                        <div class="code-example">
                            <code>int size = queue.size();</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Common Queue Applications</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-tasks"></i>
                        <h4>Task Scheduling</h4>
                        <p>Operating systems use queues to manage processes and CPU scheduling algorithms.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-network-wired"></i>
                        <h4>Network Buffering</h4>
                        <p>Data packets are queued for transmission in network protocols and routers.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-print"></i>
                        <h4>Print Spooling</h4>
                        <p>Print jobs are queued and processed in order by printer management systems.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-gamepad"></i>
                        <h4>BFS Algorithm</h4>
                        <p>Breadth-First Search uses queues to explore graph nodes level by level.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Trees Explanation
function getTreesExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Trees - Complete Guide</h2>
                <p>Master hierarchical data structures with efficient search and organization</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Trees?</h3>
                <div class="learning-content">
                    <p>A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node and nodes can have children, forming a parent-child relationship.</p>
                    <div class="code-example">
                        <code>struct TreeNode { int data; TreeNode* left; TreeNode* right; };</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-sitemap"></i>
                    </div>
                    <h3>Hierarchical Structure</h3>
                    <p><strong>Organization:</strong> Parent-Child</p>
                    <p>Data is organized in levels with clear parent-child relationships between nodes.</p>
                    <div class="complexity-badge">Hierarchical</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Efficient Search</h3>
                    <p><strong>Binary Trees:</strong> O(log n)</p>
                    <p>Binary search trees provide logarithmic time complexity for search operations.</p>
                    <div class="complexity-badge">O(log n)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </div>
                    <h3>Dynamic Size</h3>
                    <p><strong>Growth:</strong> Flexible</p>
                    <p>Trees can grow and shrink dynamically by adding or removing nodes.</p>
                    <div class="complexity-badge">Dynamic</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Tree Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Insert Node</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Add new node maintaining tree properties</p>
                        <div class="code-example">
                            <code>// Insert in BST: compare and place</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Search Node</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Find specific value in the tree</p>
                        <div class="code-example">
                            <code>// Binary search: left or right</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Delete Node</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Remove node while maintaining structure</p>
                        <div class="code-example">
                            <code>// Handle 0, 1, or 2 children</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Inorder Traversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Visit left, root, right in sequence</p>
                        <div class="code-example">
                            <code>// Gives sorted order in BST</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Preorder Traversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Visit root, left, right in sequence</p>
                        <div class="code-example">
                            <code>// Root first, then subtrees</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Postorder Traversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Visit left, right, root in sequence</p>
                        <div class="code-example">
                            <code>// Children first, then root</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Types of Trees</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-sort-numeric-down"></i>
                        <h4>Binary Search Tree</h4>
                        <p>Left child < parent < right child. Enables efficient searching and sorting.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-balance-scale"></i>
                        <h4>AVL Tree</h4>
                        <p>Self-balancing BST with height difference ≤ 1. Guarantees O(log n) operations.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-tree"></i>
                        <h4>Heap</h4>
                        <p>Complete binary tree with parent-child ordering. Used for priority queues.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-code"></i>
                        <h4>Expression Tree</h4>
                        <p>Represents mathematical expressions with operators as internal nodes.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Graphs Explanation
function getGraphsExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Graphs - Complete Guide</h2>
                <p>Master network structures with nodes and edges for complex relationship modeling</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Graphs?</h3>
                <div class="learning-content">
                    <p>A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs represent relationships between entities.</p>
                    <div class="code-example">
                        <code>vector<vector<int>> adj;  // Adjacency list representation</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <h3>Network Structure</h3>
                    <p><strong>Components:</strong> Vertices + Edges</p>
                    <p>Represents complex relationships and connections between different entities.</p>
                    <div class="complexity-badge">Network</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-arrows-alt"></i>
                    </div>
                    <h3>Directed/Undirected</h3>
                    <p><strong>Edge Types:</strong> Bidirectional/Unidirectional</p>
                    <p>Edges can have direction (directed) or be bidirectional (undirected).</p>
                    <div class="complexity-badge">Flexible</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-weight-hanging"></i>
                    </div>
                    <h3>Weighted/Unweighted</h3>
                    <p><strong>Edge Values:</strong> With/Without weights</p>
                    <p>Edges can have associated weights representing costs or distances.</p>
                    <div class="complexity-badge">Weighted</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Graph Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Add Vertex</h4>
                        <div class="complexity">O(1)</div>
                        <p>Add new node to the graph</p>
                        <div class="code-example">
                            <code>graph[newVertex] = vector<int>();</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Add Edge</h4>
                        <div class="complexity">O(1)</div>
                        <p>Connect two vertices with an edge</p>
                        <div class="code-example">
                            <code>graph[u].push_back(v);  // u -> v</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>BFS Traversal</h4>
                        <div class="complexity">O(V + E)</div>
                        <p>Breadth-first search using queue</p>
                        <div class="code-example">
                            <code>// Level by level exploration</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>DFS Traversal</h4>
                        <div class="complexity">O(V + E)</div>
                        <p>Depth-first search using recursion/stack</p>
                        <div class="code-example">
                            <code>// Go deep before going wide</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Shortest Path</h4>
                        <div class="complexity">O(V log V + E)</div>
                        <p>Find minimum distance between vertices</p>
                        <div class="code-example">
                            <code>// Dijkstra's algorithm</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Cycle Detection</h4>
                        <div class="complexity">O(V + E)</div>
                        <p>Check if graph contains cycles</p>
                        <div class="code-example">
                            <code>// DFS with visited tracking</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Common Graph Applications</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-route"></i>
                        <h4>Social Networks</h4>
                        <p>Model relationships between people, friends, and social connections.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-map"></i>
                        <h4>Maps & Navigation</h4>
                        <p>Represent cities as nodes and roads as edges for pathfinding algorithms.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sitemap"></i>
                        <h4>Web Crawling</h4>
                        <p>Model web pages as nodes and links as edges for search engine indexing.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-network-wired"></i>
                        <h4>Computer Networks</h4>
                        <p>Represent network topology with routers as nodes and connections as edges.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Searching Explanation
function getSearchingExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Searching Algorithms - Complete Guide</h2>
                <p>Master efficient search techniques for finding elements in data structures</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Searching Algorithms?</h3>
                <div class="learning-content">
                    <p>Searching algorithms are methods to find a specific element or value within a data structure. The choice of algorithm depends on the data structure and whether it's sorted.</p>
                    <div class="code-example">
                        <code>// Linear Search: O(n) - works on any array</code>
                        <code>// Binary Search: O(log n) - requires sorted array</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Linear Search</h3>
                    <p><strong>Time Complexity:</strong> O(n)</p>
                    <p>Sequentially checks each element until the target is found or array ends.</p>
                    <div class="complexity-badge">O(n)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-binary"></i>
                    </div>
                    <h3>Binary Search</h3>
                    <p><strong>Time Complexity:</strong> O(log n)</p>
                    <p>Efficiently searches sorted arrays by repeatedly dividing search space in half.</p>
                    <div class="complexity-badge">O(log n)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-hash"></i>
                    </div>
                    <h3>Hash Search</h3>
                    <p><strong>Time Complexity:</strong> O(1)</p>
                    <p>Uses hash tables for constant-time search operations on average.</p>
                    <div class="complexity-badge">O(1)</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Search Algorithms & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Linear Search</h4>
                        <div class="complexity">O(n)</div>
                        <p>Check each element sequentially</p>
                        <div class="code-example">
                            <code>for (int i = 0; i < n; i++) { if (arr[i] == target) return i; }</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Binary Search</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Divide and conquer on sorted array</p>
                        <div class="code-example">
                            <code>// Compare with middle, search left or right half</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Jump Search</h4>
                        <div class="complexity">O(√n)</div>
                        <p>Jump by fixed steps, then linear search</p>
                        <div class="code-example">
                            <code>// Jump by √n steps, then linear search in block</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Interpolation Search</h4>
                        <div class="complexity">O(log log n)</div>
                        <p>Uses interpolation formula for position</p>
                        <div class="code-example">
                            <code>// pos = low + (target - arr[low]) * (high - low) / (arr[high] - arr[low])</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Exponential Search</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Find range, then binary search</p>
                        <div class="code-example">
                            <code>// Double the range until target is found, then binary search</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Hash Search</h4>
                        <div class="complexity">O(1)</div>
                        <p>Direct access using hash function</p>
                        <div class="code-example">
                            <code>return hashTable[hash(key)];  // Direct access</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> When to Use Each Algorithm</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-list"></i>
                        <h4>Linear Search</h4>
                        <p>Use for unsorted arrays, small datasets, or when simplicity is preferred.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sort"></i>
                        <h4>Binary Search</h4>
                        <p>Use for sorted arrays when you need optimal time complexity.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-bolt"></i>
                        <h4>Hash Search</h4>
                        <p>Use when you need constant-time lookups and can afford extra memory.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-database"></i>
                        <h4>Jump Search</h4>
                        <p>Use for large sorted arrays where binary search is too complex.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Sorting Explanation
function getSortingExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Sorting Algorithms - Complete Guide</h2>
                <p>Master various sorting techniques from simple to advanced algorithms</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Sorting Algorithms?</h3>
                <div class="learning-content">
                    <p>Sorting algorithms arrange elements in a specific order (ascending or descending). They are fundamental to computer science and used in many applications.</p>
                    <div class="code-example">
                        <code>// Input: [64, 34, 25, 12, 22, 11, 90]</code>
                        <code>// Output: [11, 12, 22, 25, 34, 64, 90]</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-sort"></i>
                    </div>
                    <h3>Comparison-Based</h3>
                    <p><strong>Examples:</strong> Bubble, Selection, Insertion, Merge, Quick</p>
                    <p>Compare elements to determine their relative order.</p>
                    <div class="complexity-badge">O(n log n)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-hashtag"></i>
                    </div>
                    <h3>Non-Comparison</h3>
                    <p><strong>Examples:</strong> Counting, Radix, Bucket</p>
                    <p>Use properties of data to sort without comparisons.</p>
                    <div class="complexity-badge">O(n+k)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-balance-scale"></i>
                    </div>
                    <h3>Stable vs Unstable</h3>
                    <p><strong>Stability:</strong> Preserves relative order</p>
                    <p>Stable algorithms maintain the relative order of equal elements.</p>
                    <div class="complexity-badge">Stable</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Sorting Algorithms & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Bubble Sort</h4>
                        <div class="complexity">O(n²)</div>
                        <p>Repeatedly swap adjacent elements if in wrong order</p>
                        <div class="code-example">
                            <code>// Compare adjacent elements and swap if needed</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Selection Sort</h4>
                        <div class="complexity">O(n²)</div>
                        <p>Find minimum element and place at beginning</p>
                        <div class="code-example">
                            <code>// Find min, swap with first position, repeat</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Insertion Sort</h4>
                        <div class="complexity">O(n²)</div>
                        <p>Build sorted array one element at a time</p>
                        <div class="code-example">
                            <code>// Insert each element in correct position</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Merge Sort</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Divide array into halves, sort, then merge</p>
                        <div class="code-example">
                            <code>// Divide and conquer approach</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Quick Sort</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Choose pivot, partition, then sort recursively</p>
                        <div class="code-example">
                            <code>// Partition around pivot, sort subarrays</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Heap Sort</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Build heap, repeatedly extract maximum</p>
                        <div class="code-example">
                            <code>// Build max heap, extract elements</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Algorithm Characteristics</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-bolt"></i>
                        <h4>In-Place Sorting</h4>
                        <p>Algorithms that sort using only O(1) extra space (Bubble, Selection, Insertion, Quick, Heap).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-shield-alt"></i>
                        <h4>Stable Sorting</h4>
                        <p>Algorithms that preserve relative order of equal elements (Bubble, Insertion, Merge).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-chart-line"></i>
                        <h4>Adaptive Sorting</h4>
                        <p>Algorithms that perform better on partially sorted data (Insertion, Bubble).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-memory"></i>
                        <h4>External Sorting</h4>
                        <p>Algorithms for sorting data that doesn't fit in memory (Merge Sort variants).</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Recursion Explanation
function getRecursionExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Recursion - Complete Guide</h2>
                <p>Master the art of solving problems by breaking them into smaller subproblems</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is Recursion?</h3>
                <div class="learning-content">
                    <p>Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It consists of a base case and recursive case.</p>
                    <div class="code-example">
                        <code>function factorial(n) {</code>
                        <code>  if (n <= 1) return 1;  // Base case</code>
                        <code>  return n * factorial(n-1);  // Recursive case</code>
                        <code>}</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-sync"></i>
                    </div>
                    <h3>Base Case</h3>
                    <p><strong>Purpose:</strong> Stop recursion</p>
                    <p>The condition that stops the recursive calls and returns a value.</p>
                    <div class="complexity-badge">Essential</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-arrow-down"></i>
                    </div>
                    <h3>Recursive Case</h3>
                    <p><strong>Purpose:</strong> Reduce problem size</p>
                    <p>The part that calls the function with a smaller input.</p>
                    <div class="complexity-badge">Reduction</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h3>Call Stack</h3>
                    <p><strong>Memory:</strong> Stack frames</p>
                    <p>Each recursive call creates a new stack frame with its own variables.</p>
                    <div class="complexity-badge">Stack</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Common Recursive Problems & Solutions</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Factorial</h4>
                        <div class="complexity">O(n)</div>
                        <p>Calculate n! = n × (n-1) × ... × 1</p>
                        <div class="code-example">
                            <code>factorial(n) = n * factorial(n-1)</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Fibonacci</h4>
                        <div class="complexity">O(2^n)</div>
                        <p>F(n) = F(n-1) + F(n-2)</p>
                        <div class="code-example">
                            <code>fib(n) = fib(n-1) + fib(n-2)</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Tower of Hanoi</h4>
                        <div class="complexity">O(2^n)</div>
                        <p>Move n disks from source to destination</p>
                        <div class="code-example">
                            <code>hanoi(n, src, dest, aux)</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Binary Search</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Search in sorted array recursively</p>
                        <div class="code-example">
                            <code>search(arr, target, left, right)</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Tree Traversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Visit all nodes in tree recursively</p>
                        <div class="code-example">
                            <code>traverse(node) { visit(node); traverse(left); traverse(right); }</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>String Reversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Reverse string using recursion</p>
                        <div class="code-example">
                            <code>reverse(str) = last_char + reverse(rest)</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Recursion vs Iteration</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-code"></i>
                        <h4>When to Use Recursion</h4>
                        <p>Tree/graph problems, divide-and-conquer algorithms, problems with natural recursive structure.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-memory"></i>
                        <h4>Memory Considerations</h4>
                        <p>Recursion uses call stack memory; deep recursion can cause stack overflow.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-tachometer-alt"></i>
                        <h4>Performance</h4>
                        <p>Recursion can be slower due to function call overhead, but often more readable.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sync-alt"></i>
                        <h4>Tail Recursion</h4>
                        <p>Optimized recursion where recursive call is the last operation (can be converted to iteration).</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Greedy Explanation
function getGreedyExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Greedy Algorithms - Complete Guide</h2>
                <p>Master algorithms that make locally optimal choices at each step</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What are Greedy Algorithms?</h3>
                <div class="learning-content">
                    <p>Greedy algorithms make the locally optimal choice at each step, hoping to find a global optimum. They are simple and efficient but don't always guarantee the best solution.</p>
                    <div class="code-example">
                        <code>// At each step, choose the best option available</code>
                        <code>// without considering future consequences</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <h3>Greedy Choice</h3>
                    <p><strong>Strategy:</strong> Local optimum</p>
                    <p>Make the choice that looks best at the current moment.</p>
                    <div class="complexity-badge">Local</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <h3>Optimal Substructure</h3>
                    <p><strong>Property:</strong> Subproblems</p>
                    <p>Optimal solution contains optimal solutions to subproblems.</p>
                    <div class="complexity-badge">Optimal</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Efficiency</h3>
                    <p><strong>Time:</strong> Often O(n log n)</p>
                    <p>Usually very efficient due to simple decision making.</p>
                    <div class="complexity-badge">Fast</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Classic Greedy Problems & Solutions</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Activity Selection</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Select maximum non-overlapping activities</p>
                        <div class="code-example">
                            <code>// Sort by finish time, select non-overlapping</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Fractional Knapsack</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Maximize value with weight constraint</p>
                        <div class="code-example">
                            <code>// Sort by value/weight ratio, take greedily</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Huffman Coding</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Optimal prefix-free encoding</p>
                        <div class="code-example">
                            <code>// Build tree by combining least frequent characters</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Minimum Spanning Tree</h4>
                        <div class="complexity">O(E log V)</div>
                        <p>Find minimum weight tree connecting all vertices</p>
                        <div class="code-example">
                            <code>// Kruskal's or Prim's algorithm</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Dijkstra's Algorithm</h4>
                        <div class="complexity">O((V+E) log V)</div>
                        <p>Find shortest path from source to all vertices</p>
                        <div class="code-example">
                            <code>// Always choose unvisited vertex with minimum distance</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Job Scheduling</h4>
                        <div class="complexity">O(n log n)</div>
                        <p>Schedule jobs to minimize completion time</p>
                        <div class="code-example">
                            <code>// Sort by deadline, schedule greedily</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> When to Use Greedy Algorithms</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-check-circle"></i>
                        <h4>Optimal Problems</h4>
                        <p>Use when greedy choice property and optimal substructure are satisfied.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-times-circle"></i>
                        <h4>Non-Optimal Problems</h4>
                        <p>Don't use when local optimum doesn't lead to global optimum (0/1 Knapsack).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-bolt"></i>
                        <h4>Efficiency Required</h4>
                        <p>Use when you need fast solutions and can accept near-optimal results.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-puzzle-piece"></i>
                        <h4>Heuristic Problems</h4>
                        <p>Use as heuristics for NP-hard problems where exact solution is too expensive.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Dynamic Programming Explanation
function getDPExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Dynamic Programming - Complete Guide</h2>
                <p>Master the art of solving complex problems by breaking them into overlapping subproblems</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is Dynamic Programming?</h3>
                <div class="learning-content">
                    <p>Dynamic Programming is an optimization technique that solves complex problems by breaking them into simpler overlapping subproblems and storing solutions to avoid redundant calculations.</p>
                    <div class="code-example">
                        <code>// Instead of: fib(n) = fib(n-1) + fib(n-2)  // O(2^n)</code>
                        <code>// Use: dp[n] = dp[n-1] + dp[n-2]  // O(n)</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-puzzle-piece"></i>
                    </div>
                    <h3>Overlapping Subproblems</h3>
                    <p><strong>Property:</strong> Same subproblems</p>
                    <p>Problem can be broken into subproblems that are solved multiple times.</p>
                    <div class="complexity-badge">Overlapping</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <h3>Optimal Substructure</h3>
                    <p><strong>Property:</strong> Optimal subproblems</p>
                    <p>Optimal solution contains optimal solutions to subproblems.</p>
                    <div class="complexity-badge">Optimal</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-memory"></i>
                    </div>
                    <h3>Memoization</h3>
                    <p><strong>Technique:</strong> Store results</p>
                    <p>Store solutions to subproblems to avoid recalculating them.</p>
                    <div class="complexity-badge">Memory</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> DP Approaches & Classic Problems</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Top-Down (Memoization)</h4>
                        <div class="complexity">O(n)</div>
                        <p>Start with main problem, solve subproblems recursively</p>
                        <div class="code-example">
                            <code>// Recursive with memoization</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Bottom-Up (Tabulation)</h4>
                        <div class="complexity">O(n)</div>
                        <p>Start with base cases, build up to main problem</p>
                        <div class="code-example">
                            <code>// Iterative with table</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Fibonacci DP</h4>
                        <div class="complexity">O(n)</div>
                        <p>Classic example of overlapping subproblems</p>
                        <div class="code-example">
                            <code>dp[i] = dp[i-1] + dp[i-2]</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Longest Common Subsequence</h4>
                        <div class="complexity">O(m×n)</div>
                        <p>Find longest subsequence common to both strings</p>
                        <div class="code-example">
                            <code>LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1])</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>0/1 Knapsack</h4>
                        <div class="complexity">O(n×W)</div>
                        <p>Maximize value with weight constraint</p>
                        <div class="code-example">
                            <code>dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w-wt[i]])</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Edit Distance</h4>
                        <div class="complexity">O(m×n)</div>
                        <p>Minimum operations to transform one string to another</p>
                        <div class="code-example">
                            <code>dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> DP Problem Patterns</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-sort-numeric-up"></i>
                        <h4>1D DP</h4>
                        <p>Problems with one changing parameter (Fibonacci, Climbing Stairs).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-th"></i>
                        <h4>2D DP</h4>
                        <p>Problems with two changing parameters (LCS, Edit Distance, Knapsack).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-cube"></i>
                        <h4>3D DP</h4>
                        <p>Problems with three changing parameters (3D LCS, 3D Paths).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-route"></i>
                        <h4>Path Problems</h4>
                        <p>Finding optimal paths in grids or graphs (Unique Paths, Minimum Path Sum).</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// BST Explanation
function getBSTExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Binary Search Trees - Complete Guide</h2>
                <p>Master self-organizing trees that maintain sorted order for efficient operations</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is a Binary Search Tree?</h3>
                <div class="learning-content">
                    <p>A Binary Search Tree (BST) is a binary tree where for each node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater than the node's value.</p>
                    <div class="code-example">
                        <code>struct BSTNode { int data; BSTNode* left; BSTNode* right; };</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-sort"></i>
                    </div>
                    <h3>Sorted Order</h3>
                    <p><strong>Property:</strong> Inorder gives sorted sequence</p>
                    <p>Inorder traversal of BST gives elements in sorted order.</p>
                    <div class="complexity-badge">Sorted</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Efficient Search</h3>
                    <p><strong>Time:</strong> O(log n) average</p>
                    <p>Search by comparing with root and going left or right.</p>
                    <div class="complexity-badge">O(log n)</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-plus"></i>
                    </div>
                    <h3>Dynamic Operations</h3>
                    <p><strong>Operations:</strong> Insert, Delete, Search</p>
                    <p>All operations maintain the BST property.</p>
                    <div class="complexity-badge">Dynamic</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> BST Operations & Time Complexities</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>Search</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Find element by comparing with current node</p>
                        <div class="code-example">
                            <code>if (key < root) search(left); else search(right);</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Insert</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Add new node while maintaining BST property</p>
                        <div class="code-example">
                            <code>// Find correct position and insert</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Delete</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Remove node and maintain BST property</p>
                        <div class="code-example">
                            <code>// Handle 0, 1, or 2 children cases</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Inorder Traversal</h4>
                        <div class="complexity">O(n)</div>
                        <p>Visit left, root, right (gives sorted order)</p>
                        <div class="code-example">
                            <code>inorder(left); visit(root); inorder(right);</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Find Min/Max</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Go left for min, right for max</p>
                        <div class="code-example">
                            <code>// Min: go left until no left child</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Successor/Predecessor</h4>
                        <div class="complexity">O(log n)</div>
                        <p>Find next/previous element in sorted order</p>
                        <div class="code-example">
                            <code>// Successor: right child's leftmost node</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> BST Variants & Applications</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Self-Balancing BSTs</h4>
                        <p>AVL Trees, Red-Black Trees maintain O(log n) height for guaranteed performance.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-database"></i>
                        <h4>Database Indexing</h4>
                        <p>BSTs are used in database systems for efficient data retrieval and sorting.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sort"></i>
                        <h4>Sorting</h4>
                        <p>Insert elements into BST, then do inorder traversal for O(n log n) sorting.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-search"></i>
                        <h4>Symbol Tables</h4>
                        <p>Used in compilers and interpreters for efficient symbol lookup and management.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Backtracking Explanation
function getBacktrackingExplanation() {
    return `
        <div class="features-container">
            <div class="features-title">
                <h2>Backtracking - Complete Guide</h2>
                <p>Master systematic exploration of all possible solutions to find the optimal one</p>
            </div>
            
            <div class="learning-section">
                <h3><i class="fas fa-info-circle"></i> What is Backtracking?</h3>
                <div class="learning-content">
                    <p>Backtracking is a systematic way to explore all possible solutions by building solutions incrementally and abandoning partial solutions that cannot lead to a complete solution.</p>
                    <div class="code-example">
                        <code>// Try a choice, recurse, then undo the choice</code>
                        <code>// if it doesn't lead to a solution</code>
                    </div>
                </div>
            </div>

            <div class="feature-cards">
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-undo"></i>
                    </div>
                    <h3>Systematic Exploration</h3>
                    <p><strong>Method:</strong> Try all possibilities</p>
                    <p>Systematically explore all possible solutions to find the best one.</p>
                    <div class="complexity-badge">Exhaustive</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-times"></i>
                    </div>
                    <h3>Pruning</h3>
                    <p><strong>Optimization:</strong> Cut branches</p>
                    <p>Abandon partial solutions that cannot lead to valid complete solutions.</p>
                    <div class="complexity-badge">Pruned</div>
                </div>
                <div class="feature-highlight">
                    <div class="feature-icon">
                        <i class="fas fa-sync"></i>
                    </div>
                    <h3>Recursive Nature</h3>
                    <p><strong>Structure:</strong> Recursive calls</p>
                    <p>Uses recursion to explore different paths and backtrack when needed.</p>
                    <div class="complexity-badge">Recursive</div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-cogs"></i> Classic Backtracking Problems & Solutions</h3>
                <div class="operations-grid">
                    <div class="operation-card">
                        <h4>N-Queens Problem</h4>
                        <div class="complexity">O(N!)</div>
                        <p>Place N queens on N×N board without attacking</p>
                        <div class="code-example">
                            <code>// Try placing queen in each row, check conflicts</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Sudoku Solver</h4>
                        <div class="complexity">O(9^(empty))</div>
                        <p>Fill 9×9 grid following Sudoku rules</p>
                        <div class="code-example">
                            <code>// Try digits 1-9, check row/column/box constraints</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Generate Permutations</h4>
                        <div class="complexity">O(n!)</div>
                        <p>Generate all permutations of given array</p>
                        <div class="code-example">
                            <code>// Swap elements, recurse, then swap back</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Generate Combinations</h4>
                        <div class="complexity">O(2^n)</div>
                        <p>Generate all combinations of given size</p>
                        <div class="code-example">
                            <code>// Include/exclude each element, recurse</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Maze Solving</h4>
                        <div class="complexity">O(4^(m×n))</div>
                        <p>Find path from start to end in maze</p>
                        <div class="code-example">
                            <code>// Try all 4 directions, mark visited, backtrack</code>
                        </div>
                    </div>
                    <div class="operation-card">
                        <h4>Subset Sum</h4>
                        <div class="complexity">O(2^n)</div>
                        <p>Find subset that sums to target value</p>
                        <div class="code-example">
                            <code>// Include/exclude each element, check sum</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3><i class="fas fa-lightbulb"></i> Backtracking Template & Optimization</h3>
                <div class="use-cases">
                    <div class="use-case">
                        <i class="fas fa-code"></i>
                        <h4>General Template</h4>
                        <p>1. Choose 2. Explore 3. Unchoose 4. Check base case and constraints.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-cut"></i>
                        <h4>Pruning Strategies</h4>
                        <p>Use constraints to eliminate invalid paths early (constraint propagation).</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-memory"></i>
                        <h4>Memory Optimization</h4>
                        <p>Use in-place modifications and undo operations to save memory.</p>
                    </div>
                    <div class="use-case">
                        <i class="fas fa-sort"></i>
                        <h4>Ordering Heuristics</h4>
                        <p>Try most constrained variables first to reduce search space.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initializeTopic(topic) {
    console.log('Initializing topic:', topic);
    
    // Clear any existing animations
    const allContainers = document.querySelectorAll('.animation-stage .code-display, .array-container, .string-container, .linkedlist-container, .stack-container, .queue-container, .tree-container, .graph-container, .greedy-container, .dp-container, .backtracking-container');
    allContainers.forEach(container => {
        if (container) container.innerHTML = '';
    });
    
    switch(topic) {
        case 'arrays':
            initializeArrays();
            break;
        case 'strings':
            initializeStrings();
            break;
        case 'linkedlist':
            initializeLinkedLists();
            break;
        case 'stacks':
            initializeStacks();
            break;
        case 'queues':
            initializeQueues();
            break;
        case 'trees':
            initializeTrees();
            break;
        case 'graphs':
            initializeGraphs();
            break;
        case 'searching':
            initializeSearching();
            break;
        case 'sorting':
            initializeSorting();
            break;
        case 'recursion':
            initializeRecursion();
            break;
        case 'greedy':
            initializeGreedy();
            break;
        case 'dp':
            initializeDP();
            break;
        case 'bst':
            initializeBST();
            break;
        case 'backtracking':
            initializeBacktracking();
            break;
        default:
            console.error('Unknown topic:', topic);
    }
}

// Arrays Implementation
function initializeArrays() {
    console.log('Initializing arrays...');
    const codeDisplay = document.getElementById('codeDisplay');
    const arrayContainer = document.getElementById('arrayContainer');
    const valueInput = document.getElementById('valueInput');
    const indexInput = document.getElementById('indexInput');
    const btnInsert = document.getElementById('btnInsert');
    const btnDelete = document.getElementById('btnDelete');
    const btnUpdate = document.getElementById('btnUpdate');
    const btnReset = document.getElementById('btnReset');

    console.log('Elements found:', {
        codeDisplay: !!codeDisplay,
        arrayContainer: !!arrayContainer,
        valueInput: !!valueInput,
        indexInput: !!indexInput,
        btnInsert: !!btnInsert,
        btnDelete: !!btnDelete,
        btnUpdate: !!btnUpdate,
        btnReset: !!btnReset
    });

    if (!codeDisplay || !arrayContainer) {
        console.error('Required elements not found');
        return;
    }

    let data = [2, 5, 7, 9];
    const MAX_SIZE = 8;

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
        return line;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderArray(highlightIndex = null) {
        arrayContainer.innerHTML = '';
        data.forEach((value, idx) => {
            const el = document.createElement('div');
            el.className = 'array-element active filled';
            el.innerHTML = '<span class="array-index">' + idx + '</span><span class="array-value">' + value + '</span>';
            if (highlightIndex === idx) {
                el.classList.add('highlight');
            }
            arrayContainer.appendChild(el);
        });
        for (let i = data.length; i < MAX_SIZE; i++) {
            const el = document.createElement('div');
            el.className = 'array-element active';
            el.innerHTML = '<span class="array-index">' + i + '</span>';
            arrayContainer.appendChild(el);
        }
    }

    function reset() {
        data = [2, 5, 7, 9];
        clearCode();
        addLine('// Arrays - Interactive Learning Module');
        addLine('let arr = [' + data.join(', ') + '];', true);
        addLine('let size = ' + data.length + ';');
        addLine('');
        addLine('// Operations: Insert, Delete, Update');
        renderArray();
    }

    // Event listeners
    if (btnInsert) {
        console.log('Adding insert event listener');
        btnInsert.onclick = () => {
            console.log('Insert button clicked');
            const val = Number(valueInput.value);
            const idx = Number(indexInput.value);
            animateInsert(val, isNaN(idx) ? data.length : idx);
        };
    }
    if (btnDelete) {
        console.log('Adding delete event listener');
        btnDelete.onclick = () => {
            console.log('Delete button clicked');
            const idx = Number(indexInput.value);
            animateDelete(isNaN(idx) ? data.length - 1 : idx);
        };
    }
    if (btnUpdate) {
        console.log('Adding update event listener');
        btnUpdate.onclick = () => {
            console.log('Update button clicked');
            const val = Number(valueInput.value);
            const idx = Number(indexInput.value);
            animateUpdate(val, idx);
        };
    }
    if (btnReset) {
        console.log('Adding reset event listener');
        btnReset.onclick = () => {
            console.log('Reset button clicked');
            reset();
        };
    }

    async function animateInsert(val, idx) {
        clearCode();
        addLine('// INSERT OPERATION - Time Complexity: O(n)', true);
        addLine('function insert(arr, index, value) {');
        addLine('  if (arr.length >= MAX_SIZE) return false;');
        addLine('  for (let i = arr.length; i > index; i--) {');
        addLine('    arr[i] = arr[i - 1];');
        addLine('  }');
        addLine('  arr[index] = value;');
        addLine('  arr.length++;');
        addLine('  return true;');
        addLine('}');

        if (data.length >= MAX_SIZE) {
            addLine('// ❌ ERROR: Array is full!');
            return;
        }
        if (idx < 0 || idx > data.length) {
            addLine('// ❌ ERROR: Index out of bounds!');
            return;
        }

        addLine('// Executing insert(' + val + ', ' + idx + ')...');
        renderArray();
        await sleep(600);

        for (let i = data.length; i > idx; i--) {
            addLine('arr[' + i + '] = arr[' + (i - 1) + ']');
            data[i] = data[i - 1];
            renderArray(i);
            await sleep(500);
        }

        addLine('arr[' + idx + '] = ' + val, true);
        data[idx] = val;
        renderArray(idx);
        await sleep(600);

        addLine('// ✅ Insertion completed!');
    }

    async function animateDelete(idx) {
        clearCode();
        addLine('// DELETE OPERATION - Time Complexity: O(n)', true);
        addLine('function deleteAt(arr, index) {');
        addLine('  if (index < 0 || index >= arr.length) return false;');
        addLine('  for (let i = index; i < arr.length - 1; i++) {');
        addLine('    arr[i] = arr[i + 1];');
        addLine('  }');
        addLine('  arr.length--;');
        addLine('  return true;');
        addLine('}');

        if (idx < 0 || idx >= data.length) {
            addLine('// ❌ ERROR: Index out of bounds!');
            return;
        }

        addLine('// Executing deleteAt(' + idx + ')...');
        renderArray(idx);
        await sleep(600);

        for (let i = idx; i < data.length - 1; i++) {
            addLine('arr[' + i + '] = arr[' + (i + 1) + ']');
            data[i] = data[i + 1];
            renderArray(i);
            await sleep(500);
        }

        addLine('arr.length--', true);
        data.length = data.length - 1;
        renderArray();
        await sleep(600);

        addLine('// ✅ Deletion completed!');
    }

    async function animateUpdate(val, idx) {
        clearCode();
        addLine('// UPDATE OPERATION - Time Complexity: O(1)', true);
        addLine('function update(arr, index, value) {');
        addLine('  if (index < 0 || index >= arr.length) return false;');
        addLine('  arr[index] = value;');
        addLine('  return true;');
        addLine('}');

        if (idx < 0 || idx >= data.length) {
            addLine('// ❌ ERROR: Index out of bounds!');
            return;
        }

        addLine('// Executing update(' + val + ', ' + idx + ')...');
        renderArray(idx);
        await sleep(600);

        addLine('arr[' + idx + '] = ' + val, true);
        data[idx] = val;
        renderArray(idx);
        await sleep(600);

        addLine('// ✅ Update completed!');
    }

    reset();
}

// Strings Implementation
function initializeStrings() {
    const codeDisplay = document.getElementById('stringCodeDisplay');
    const stringContainer = document.getElementById('stringContainer');
    const stringInput = document.getElementById('stringInput');
    const patternInput = document.getElementById('patternInput');
    const btnReverse = document.getElementById('btnReverse');
    const btnSearch = document.getElementById('btnSearch');
    const btnPalindrome = document.getElementById('btnPalindrome');
    const btnStringReset = document.getElementById('btnStringReset');

    if (!codeDisplay || !stringContainer) return;

    let currentString = "HELLO";

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderString(highlightIndices = []) {
        stringContainer.innerHTML = '';
        for (let i = 0; i < currentString.length; i++) {
            const char = document.createElement('div');
            char.className = 'string-char' + (highlightIndices.includes(i) ? ' highlight' : '');
            char.textContent = currentString[i];
            char.setAttribute('data-index', i);
            stringContainer.appendChild(char);
        }
    }

    function reset() {
        currentString = "HELLO";
        clearCode();
        addLine('// Strings - Interactive Learning Module');
        addLine('let str = "' + currentString + '";', true);
        addLine('');
        addLine('// Operations: Reverse, Search, Palindrome Check');
        renderString();
    }

    // Event listeners
    if (btnReverse) btnReverse.onclick = () => {
        const newStr = stringInput.value || currentString;
        animateReverse(newStr);
    };
    if (btnSearch) btnSearch.onclick = () => {
        const str = stringInput.value || currentString;
        const pattern = patternInput.value || "L";
        animateSearch(str, pattern);
    };
    if (btnPalindrome) btnPalindrome.onclick = () => {
        const str = stringInput.value || currentString;
        animatePalindrome(str);
    };
    if (btnStringReset) btnStringReset.onclick = reset;

    async function animateReverse(str) {
        clearCode();
        addLine('// REVERSE STRING - Time Complexity: O(n)', true);
        addLine('function reverse(str) {');
        addLine('  let result = "";');
        addLine('  for (let i = str.length - 1; i >= 0; i--) {');
        addLine('    result += str[i];');
        addLine('  }');
        addLine('  return result;');
        addLine('}');

        currentString = str;
        renderString();
        await sleep(600);

        addLine('// Reversing string...');
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            addLine('result += str[' + i + ']  // Adding: ' + str[i]);
            reversed += str[i];
            renderString([i]);
            await sleep(500);
        }

        addLine('// ✅ Reversed: "' + reversed + '"', true);
        currentString = reversed;
        renderString();
    }

    async function animateSearch(str, pattern) {
        clearCode();
        addLine('// STRING SEARCH - Time Complexity: O(n*m)', true);
        addLine('function search(str, pattern) {');
        addLine('  for (let i = 0; i <= str.length - pattern.length; i++) {');
        addLine('    if (str.substring(i, i + pattern.length) === pattern) {');
        addLine('      return i;');
        addLine('    }');
        addLine('  }');
        addLine('  return -1;');
        addLine('}');

        currentString = str;
        renderString();
        await sleep(600);

        addLine('// Searching for "' + pattern + '" in "' + str + '"...');
        for (let i = 0; i <= str.length - pattern.length; i++) {
            addLine('Checking position ' + i + '...');
            renderString([i, i + 1, i + 2]);
            await sleep(500);
            
            if (str.substring(i, i + pattern.length) === pattern) {
                addLine('// ✅ Found at index: ' + i, true);
                renderString([i, i + 1, i + 2]);
                return;
            }
        }
        addLine('// ❌ Pattern not found');
    }

    async function animatePalindrome(str) {
        clearCode();
        addLine('// PALINDROME CHECK - Time Complexity: O(n)', true);
        addLine('function isPalindrome(str) {');
        addLine('  let left = 0, right = str.length - 1;');
        addLine('  while (left < right) {');
        addLine('    if (str[left] !== str[right]) return false;');
        addLine('    left++; right--;');
        addLine('  }');
        addLine('  return true;');
        addLine('}');

        currentString = str;
        renderString();
        await sleep(600);

        addLine('// Checking if "' + str + '" is palindrome...');
        let left = 0, right = str.length - 1;
        while (left < right) {
            addLine('Comparing str[' + left + '] and str[' + right + ']...');
            renderString([left, right]);
            await sleep(500);
            
            if (str[left] !== str[right]) {
                addLine('// ❌ Not a palindrome (mismatch at ' + left + ', ' + right + ')');
                return;
            }
            left++; right--;
        }
        addLine('// ✅ "' + str + '" is a palindrome!', true);
    }

    reset();
}

// Linked Lists Implementation
function initializeLinkedLists() {
    const codeDisplay = document.getElementById('linkedListCodeDisplay');
    const linkedListContainer = document.getElementById('linkedListContainer');
    const nodeValue = document.getElementById('nodeValue');
    const btnInsertHead = document.getElementById('btnInsertHead');
    const btnInsertTail = document.getElementById('btnInsertTail');
    const btnDeleteHead = document.getElementById('btnDeleteHead');
    const btnDeleteTail = document.getElementById('btnDeleteTail');
    const btnLinkedListReset = document.getElementById('btnLinkedListReset');

    if (!codeDisplay || !linkedListContainer) return;

    let head = null;
    let size = 0;

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderLinkedList(highlightNode = null) {
        linkedListContainer.innerHTML = '';
        let current = head;
        let index = 0;
        
        while (current) {
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'linkedlist-node';
            
            const node = document.createElement('div');
            node.className = 'node' + (highlightNode === current ? ' highlight' : '');
            node.textContent = current.value;
            nodeDiv.appendChild(node);
            
            if (current.next) {
                const arrow = document.createElement('span');
                arrow.className = 'arrow';
                arrow.textContent = '→';
                nodeDiv.appendChild(arrow);
            }
            
            linkedListContainer.appendChild(nodeDiv);
            current = current.next;
            index++;
        }
    }

    function reset() {
        head = null;
        size = 0;
        clearCode();
        addLine('// Linked Lists - Interactive Learning Module');
        addLine('let head = null;', true);
        addLine('let size = 0;');
        addLine('');
        addLine('// Operations: Insert Head/Tail, Delete Head/Tail');
        renderLinkedList();
    }

    // Event listeners
    if (btnInsertHead) btnInsertHead.onclick = () => {
        const val = Number(nodeValue.value);
        animateInsertHead(val);
    };
    if (btnInsertTail) btnInsertTail.onclick = () => {
        const val = Number(nodeValue.value);
        animateInsertTail(val);
    };
    if (btnDeleteHead) btnDeleteHead.onclick = animateDeleteHead;
    if (btnDeleteTail) btnDeleteTail.onclick = animateDeleteTail;
    if (btnLinkedListReset) btnLinkedListReset.onclick = reset;

    async function animateInsertHead(val) {
        clearCode();
        addLine('// INSERT AT HEAD - Time Complexity: O(1)', true);
        addLine('function insertHead(value) {');
        addLine('  let newNode = { value: value, next: head };');
        addLine('  head = newNode;');
        addLine('  size++;');
        addLine('}');

        addLine('// Inserting ' + val + ' at head...');
        const newNode = { value: val, next: head };
        head = newNode;
        size++;
        renderLinkedList(newNode);
        await sleep(600);

        addLine('// ✅ Inserted ' + val + ' at head');
    }

    async function animateInsertTail(val) {
        clearCode();
        addLine('// INSERT AT TAIL - Time Complexity: O(n)', true);
        addLine('function insertTail(value) {');
        addLine('  let newNode = { value: value, next: null };');
        addLine('  if (!head) { head = newNode; return; }');
        addLine('  let current = head;');
        addLine('  while (current.next) current = current.next;');
        addLine('  current.next = newNode;');
        addLine('  size++;');
        addLine('}');

        addLine('// Inserting ' + val + ' at tail...');
        const newNode = { value: val, next: null };
        if (!head) {
            head = newNode;
        } else {
            let current = head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
        size++;
        renderLinkedList(newNode);
        await sleep(600);

        addLine('// ✅ Inserted ' + val + ' at tail');
    }

    async function animateDeleteHead() {
        clearCode();
        addLine('// DELETE FROM HEAD - Time Complexity: O(1)', true);
        addLine('function deleteHead() {');
        addLine('  if (!head) return null;');
        addLine('  let value = head.value;');
        addLine('  head = head.next;');
        addLine('  size--;');
        addLine('  return value;');
        addLine('}');

        if (!head) {
            addLine('// ❌ List is empty!');
            return;
        }

        addLine('// Deleting from head...');
        const value = head.value;
        head = head.next;
        size--;
        renderLinkedList();
        await sleep(600);

        addLine('// ✅ Deleted ' + value + ' from head');
    }

    async function animateDeleteTail() {
        clearCode();
        addLine('// DELETE FROM TAIL - Time Complexity: O(n)', true);
        addLine('function deleteTail() {');
        addLine('  if (!head) return null;');
        addLine('  if (!head.next) { head = null; return head.value; }');
        addLine('  let current = head;');
        addLine('  while (current.next.next) current = current.next;');
        addLine('  let value = current.next.value;');
        addLine('  current.next = null;');
        addLine('  size--;');
        addLine('  return value;');
        addLine('}');

        if (!head) {
            addLine('// ❌ List is empty!');
            return;
        }

        addLine('// Deleting from tail...');
        let value;
        if (!head.next) {
            value = head.value;
            head = null;
        } else {
            let current = head;
            while (current.next.next) current = current.next;
            value = current.next.value;
            current.next = null;
        }
        size--;
        renderLinkedList();
        await sleep(600);

        addLine('// ✅ Deleted ' + value + ' from tail');
    }

    reset();
}

// Stacks Implementation
function initializeStacks() {
    const codeDisplay = document.getElementById('stackCodeDisplay');
    const stackContainer = document.getElementById('stackContainer');
    const stackValue = document.getElementById('stackValue');
    const btnPush = document.getElementById('btnPush');
    const btnPop = document.getElementById('btnPop');
    const btnPeek = document.getElementById('btnPeek');
    const btnStackReset = document.getElementById('btnStackReset');

    if (!codeDisplay || !stackContainer) return;

    let stack = [];

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderStack(highlightIndex = null) {
        stackContainer.innerHTML = '';
        for (let i = 0; i < stack.length; i++) {
            const item = document.createElement('div');
            item.className = 'stack-item' + (highlightIndex === i ? ' highlight' : '');
            item.textContent = stack[i];
            stackContainer.appendChild(item);
        }
    }

    function reset() {
        stack = [3, 7, 1];
        clearCode();
        addLine('// Stacks - Interactive Learning Module');
        addLine('let stack = [' + stack.join(', ') + '];', true);
        addLine('');
        addLine('// Operations: Push, Pop, Peek');
        renderStack();
    }

    // Event listeners
    if (btnPush) btnPush.onclick = () => {
        const val = Number(stackValue.value);
        animatePush(val);
    };
    if (btnPop) btnPop.onclick = animatePop;
    if (btnPeek) btnPeek.onclick = animatePeek;
    if (btnStackReset) btnStackReset.onclick = reset;

    async function animatePush(val) {
        clearCode();
        addLine('// PUSH OPERATION - Time Complexity: O(1)', true);
        addLine('function push(value) {');
        addLine('  stack.push(value);');
        addLine('}');

        addLine('// Pushing ' + val + '...');
        stack.push(val);
        renderStack(stack.length - 1);
        await sleep(600);

        addLine('// ✅ Pushed ' + val + '. Stack: [' + stack.join(', ') + ']');
    }

    async function animatePop() {
        clearCode();
        addLine('// POP OPERATION - Time Complexity: O(1)', true);
        addLine('function pop() {');
        addLine('  if (stack.length === 0) return null;');
        addLine('  return stack.pop();');
        addLine('}');

        if (stack.length === 0) {
            addLine('// ❌ Stack is empty!');
            return;
        }

        addLine('// Popping from stack...');
        const value = stack.pop();
        renderStack();
        await sleep(600);

        addLine('// ✅ Popped ' + value + '. Stack: [' + stack.join(', ') + ']');
    }

    async function animatePeek() {
        clearCode();
        addLine('// PEEK OPERATION - Time Complexity: O(1)', true);
        addLine('function peek() {');
        addLine('  if (stack.length === 0) return null;');
        addLine('  return stack[stack.length - 1];');
        addLine('}');

        if (stack.length === 0) {
            addLine('// ❌ Stack is empty!');
            return;
        }

        addLine('// Peeking at top element...');
        const value = stack[stack.length - 1];
        renderStack(stack.length - 1);
        await sleep(600);

        addLine('// ✅ Top element: ' + value);
    }

    reset();
}

// Queues Implementation
function initializeQueues() {
    const codeDisplay = document.getElementById('queueCodeDisplay');
    const queueContainer = document.getElementById('queueContainer');
    const queueValue = document.getElementById('queueValue');
    const btnEnqueue = document.getElementById('btnEnqueue');
    const btnDequeue = document.getElementById('btnDequeue');
    const btnFront = document.getElementById('btnFront');
    const btnQueueReset = document.getElementById('btnQueueReset');

    if (!codeDisplay || !queueContainer) return;

    let queue = [1, 4, 2];

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderQueue(highlightIndex = null) {
        queueContainer.innerHTML = '';
        for (let i = 0; i < queue.length; i++) {
            const item = document.createElement('div');
            item.className = 'queue-item' + (highlightIndex === i ? ' highlight' : '');
            item.textContent = queue[i];
            queueContainer.appendChild(item);
        }
    }

    function reset() {
        queue = [1, 4, 2];
        clearCode();
        addLine('// Queues - Interactive Learning Module');
        addLine('let queue = [' + queue.join(', ') + '];', true);
        addLine('');
        addLine('// Operations: Enqueue, Dequeue, Front');
        renderQueue();
    }

    // Event listeners
    if (btnEnqueue) btnEnqueue.onclick = () => {
        const val = Number(queueValue.value);
        animateEnqueue(val);
    };
    if (btnDequeue) btnDequeue.onclick = animateDequeue;
    if (btnFront) btnFront.onclick = animateFront;
    if (btnQueueReset) btnQueueReset.onclick = reset;

    async function animateEnqueue(val) {
        clearCode();
        addLine('// ENQUEUE OPERATION - Time Complexity: O(1)', true);
        addLine('function enqueue(value) {');
        addLine('  queue.push(value);');
        addLine('}');

        addLine('// Enqueuing ' + val + '...');
        queue.push(val);
        renderQueue(queue.length - 1);
        await sleep(600);

        addLine('// ✅ Enqueued ' + val + '. Queue: [' + queue.join(', ') + ']');
    }

    async function animateDequeue() {
        clearCode();
        addLine('// DEQUEUE OPERATION - Time Complexity: O(1)', true);
        addLine('function dequeue() {');
        addLine('  if (queue.length === 0) return null;');
        addLine('  return queue.shift();');
        addLine('}');

        if (queue.length === 0) {
            addLine('// ❌ Queue is empty!');
            return;
        }

        addLine('// Dequeuing from front...');
        const value = queue.shift();
        renderQueue();
        await sleep(600);

        addLine('// ✅ Dequeued ' + value + '. Queue: [' + queue.join(', ') + ']');
    }

    async function animateFront() {
        clearCode();
        addLine('// FRONT OPERATION - Time Complexity: O(1)', true);
        addLine('function front() {');
        addLine('  if (queue.length === 0) return null;');
        addLine('  return queue[0];');
        addLine('}');

        if (queue.length === 0) {
            addLine('// ❌ Queue is empty!');
            return;
        }

        addLine('// Getting front element...');
        const value = queue[0];
        renderQueue(0);
        await sleep(600);

        addLine('// ✅ Front element: ' + value);
    }

    reset();
}

// Trees Implementation
function initializeTrees() {
    const codeDisplay = document.getElementById('treeCodeDisplay');
    const treeContainer = document.getElementById('treeContainer');
    const treeValue = document.getElementById('treeValue');
    const btnInsertNode = document.getElementById('btnInsertNode');
    const btnDeleteNode = document.getElementById('btnDeleteNode');
    const btnSearchNode = document.getElementById('btnSearchNode');
    const btnTreeReset = document.getElementById('btnTreeReset');

    if (!codeDisplay || !treeContainer) return;

    let root = null;

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderTree() {
        treeContainer.innerHTML = '';
        if (!root) return;
        
        // Simple level-order traversal for display
        const queue = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'tree-node';
            nodeDiv.textContent = node.value;
            treeContainer.appendChild(nodeDiv);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    function reset() {
        root = { value: 5, left: { value: 3, left: null, right: null }, right: { value: 8, left: null, right: null } };
        clearCode();
        addLine('// Binary Trees - Interactive Learning Module');
        addLine('// Tree structure: 5 -> [3, 8]', true);
        addLine('');
        addLine('// Operations: Insert, Delete, Search');
        renderTree();
    }

    // Event listeners
    if (btnInsertNode) btnInsertNode.onclick = () => {
        const val = Number(treeValue.value);
        animateInsertNode(val);
    };
    if (btnDeleteNode) btnDeleteNode.onclick = () => {
        const val = Number(treeValue.value);
        animateDeleteNode(val);
    };
    if (btnSearchNode) btnSearchNode.onclick = () => {
        const val = Number(treeValue.value);
        animateSearchNode(val);
    };
    if (btnTreeReset) btnTreeReset.onclick = reset;

    async function animateInsertNode(val) {
        clearCode();
        addLine('// INSERT NODE - Time Complexity: O(log n)', true);
        addLine('function insert(root, value) {');
        addLine('  if (!root) return { value, left: null, right: null };');
        addLine('  if (value < root.value) root.left = insert(root.left, value);');
        addLine('  else root.right = insert(root.right, value);');
        addLine('  return root;');
        addLine('}');

        addLine('// Inserting ' + val + '...');
        root = insertNode(root, val);
        renderTree();
        await sleep(600);

        addLine('// ✅ Inserted ' + val);
    }

    function insertNode(node, val) {
        if (!node) return { value: val, left: null, right: null };
        if (val < node.value) node.left = insertNode(node.left, val);
        else node.right = insertNode(node.right, val);
        return node;
    }

    async function animateDeleteNode(val) {
        clearCode();
        addLine('// DELETE NODE - Time Complexity: O(log n)', true);
        addLine('function deleteNode(root, value) {');
        addLine('  if (!root) return null;');
        addLine('  if (value < root.value) root.left = deleteNode(root.left, value);');
        addLine('  else if (value > root.value) root.right = deleteNode(root.right, value);');
        addLine('  else { /* delete logic */ }');
        addLine('  return root;');
        addLine('}');

        addLine('// Deleting ' + val + '...');
        root = deleteNode(root, val);
        renderTree();
        await sleep(600);

        addLine('// ✅ Deleted ' + val);
    }

    function deleteNode(node, val) {
        if (!node) return null;
        if (val < node.value) node.left = deleteNode(node.left, val);
        else if (val > node.value) node.right = deleteNode(node.right, val);
        else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            // Find inorder successor
            let temp = node.right;
            while (temp.left) temp = temp.left;
            node.value = temp.value;
            node.right = deleteNode(node.right, temp.value);
        }
        return node;
    }

    async function animateSearchNode(val) {
        clearCode();
        addLine('// SEARCH NODE - Time Complexity: O(log n)', true);
        addLine('function search(root, value) {');
        addLine('  if (!root) return false;');
        addLine('  if (root.value === value) return true;');
        addLine('  if (value < root.value) return search(root.left, value);');
        addLine('  return search(root.right, value);');
        addLine('}');

        addLine('// Searching for ' + val + '...');
        const found = searchNode(root, val);
        renderTree();
        await sleep(600);

        addLine(found ? '// ✅ Found ' + val : '// ❌ Not found ' + val);
    }

    function searchNode(node, val) {
        if (!node) return false;
        if (node.value === val) return true;
        if (val < node.value) return searchNode(node.left, val);
        return searchNode(node.right, val);
    }

    reset();
}

// Graphs Implementation
function initializeGraphs() {
    const codeDisplay = document.getElementById('graphCodeDisplay');
    const graphContainer = document.getElementById('graphContainer');
    const graphValue = document.getElementById('graphValue');
    const edgeValue = document.getElementById('edgeValue');
    const btnAddNode = document.getElementById('btnAddNode');
    const btnAddEdge = document.getElementById('btnAddEdge');
    const btnBFS = document.getElementById('btnBFS');
    const btnDFS = document.getElementById('btnDFS');
    const btnGraphReset = document.getElementById('btnGraphReset');

    if (!codeDisplay || !graphContainer) return;

    let graph = {};

    function clearCode() {
        codeDisplay.innerHTML = '';
    }

    function addLine(text, active = false) {
        const line = document.createElement('div');
        line.className = 'code-line' + (active ? ' active' : '');
        const ln = document.createElement('span');
        ln.className = 'line-number';
        ln.textContent = (codeDisplay.childElementCount + 1).toString().padStart(2, '0');
        const ct = document.createElement('span');
        ct.className = 'code-text';
        ct.textContent = text;
        line.appendChild(ln);
        line.appendChild(ct);
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function renderGraph() {
        graphContainer.innerHTML = '';
        for (const node in graph) {
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'graph-node';
            nodeDiv.textContent = node;
            graphContainer.appendChild(nodeDiv);
        }
    }

    function reset() {
        graph = { 'A': ['B'], 'B': ['A', 'C'], 'C': ['B'] };
        clearCode();
        addLine('// Graphs - Interactive Learning Module');
        addLine('let graph = { A: [B], B: [A, C], C: [B] };', true);
        addLine('');
        addLine('// Operations: Add Node/Edge, BFS, DFS');
        renderGraph();
    }

    // Event listeners
    if (btnAddNode) btnAddNode.onclick = () => {
        const val = graphValue.value || 'D';
        animateAddNode(val);
    };
    if (btnAddEdge) btnAddEdge.onclick = () => {
        const from = graphValue.value || 'A';
        const to = edgeValue.value || 'D';
        animateAddEdge(from, to);
    };
    if (btnBFS) btnBFS.onclick = () => {
        const start = graphValue.value || 'A';
        animateBFS(start);
    };
    if (btnDFS) btnDFS.onclick = () => {
        const start = graphValue.value || 'A';
        animateDFS(start);
    };
    if (btnGraphReset) btnGraphReset.onclick = reset;

    async function animateAddNode(val) {
        clearCode();
        addLine('// ADD NODE - Time Complexity: O(1)', true);
        addLine('function addNode(graph, node) {');
        addLine('  if (!graph[node]) graph[node] = [];');
        addLine('}');

        addLine('// Adding node ' + val + '...');
        if (!graph[val]) graph[val] = [];
        renderGraph();
        await sleep(600);

        addLine('// ✅ Added node ' + val);
    }

    async function animateAddEdge(from, to) {
        clearCode();
        addLine('// ADD EDGE - Time Complexity: O(1)', true);
        addLine('function addEdge(graph, from, to) {');
        addLine('  if (!graph[from]) graph[from] = [];');
        addLine('  if (!graph[to]) graph[to] = [];');
        addLine('  graph[from].push(to);');
        addLine('  graph[to].push(from);');
        addLine('}');

        addLine('// Adding edge ' + from + ' -> ' + to + '...');
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
        graph[from].push(to);
        graph[to].push(from);
        renderGraph();
        await sleep(600);

        addLine('// ✅ Added edge ' + from + ' <-> ' + to);
    }

    async function animateBFS(start) {
        clearCode();
        addLine('// BFS TRAVERSAL - Time Complexity: O(V + E)', true);
        addLine('function bfs(graph, start) {');
        addLine('  let visited = new Set();');
        addLine('  let queue = [start];');
        addLine('  let result = [];');
        addLine('  while (queue.length > 0) {');
        addLine('    let node = queue.shift();');
        addLine('    if (!visited.has(node)) {');
        addLine('      visited.add(node);');
        addLine('      result.push(node);');
        addLine('      queue.push(...graph[node]);');
        addLine('    }');
        addLine('  }');
        addLine('  return result;');
        addLine('}');

        addLine('// BFS from ' + start + '...');
        const visited = new Set();
        const queue = [start];
        const result = [];
        
        while (queue.length > 0) {
            const node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                result.push(node);
                queue.push(...(graph[node] || []));
                addLine('Visited: ' + node + ', Queue: [' + queue.join(', ') + ']');
                await sleep(500);
            }
        }

        addLine('// ✅ BFS Result: [' + result.join(', ') + ']');
    }

    async function animateDFS(start) {
        clearCode();
        addLine('// DFS TRAVERSAL - Time Complexity: O(V + E)', true);
        addLine('function dfs(graph, start, visited = new Set()) {');
        addLine('  visited.add(start);');
        addLine('  let result = [start];');
        addLine('  for (let neighbor of graph[start] || []) {');
        addLine('    if (!visited.has(neighbor)) {');
        addLine('      result.push(...dfs(graph, neighbor, visited));');
        addLine('    }');
        addLine('  }');
        addLine('  return result;');
        addLine('}');

        addLine('// DFS from ' + start + '...');
        const visited = new Set();
        const result = [];
        
        function dfs(node) {
            visited.add(node);
            result.push(node);
            addLine('Visited: ' + node + ', Path: [' + result.join(', ') + ']');
            for (const neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }
        
        dfs(start);
        await sleep(500);

        addLine('// ✅ DFS Result: [' + result.join(', ') + ']');
    }

    reset();
}

// Searching Implementation
function initializeSearching() {
    const codeDisplay = document.getElementById('searchCodeDisplay');
    const arrayContainer = document.getElementById('searchArrayContainer');
    let searchArray = [2, 5, 8, 12, 16, 23, 38, 45, 67, 78, 89, 95];
    let isAnimating = false;

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function renderArray(highlightIndex = -1) {
        if (!arrayContainer) return;
        arrayContainer.innerHTML = '';
        
        searchArray.forEach((value, index) => {
            const element = document.createElement('div');
            element.className = 'array-element' + (index === highlightIndex ? ' highlight' : '');
            element.innerHTML = `
                <div class="array-index">${index}</div>
                <div class="array-value">${value}</div>
            `;
            arrayContainer.appendChild(element);
        });
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#searching-content button');
        const inputs = document.querySelectorAll('#searching-content input');
        [...buttons, ...inputs].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function linearSearch(target) {
        clearCode();
        addLine('// LINEAR SEARCH - Time Complexity: O(n)');
        addLine('function linearSearch(arr, target) {');
        addLine('  for (let i = 0; i < arr.length; i++) {');
        addLine('    if (arr[i] === target) return i;');
        addLine('  }');
        addLine('  return -1;  // Not found');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Searching for ' + target + '...');

        for (let i = 0; i < searchArray.length; i++) {
            addLine('Checking index ' + i + ': arr[' + i + '] = ' + searchArray[i]);
            renderArray(i);
            await sleep(600);
            
            if (searchArray[i] === target) {
                addLine('// ✅ Found! Element ' + target + ' is at index ' + i);
                disableControls(false);
                return;
            }
        }
        
        addLine('// ❌ Not found! Element ' + target + ' is not in the array');
        disableControls(false);
    }

    async function binarySearch(target) {
        clearCode();
        addLine('// BINARY SEARCH - Time Complexity: O(log n)');
        addLine('function binarySearch(arr, target) {');
        addLine('  let left = 0, right = arr.length - 1;');
        addLine('  while (left <= right) {');
        addLine('    let mid = Math.floor((left + right) / 2);');
        addLine('    if (arr[mid] === target) return mid;');
        addLine('    else if (arr[mid] < target) left = mid + 1;');
        addLine('    else right = mid - 1;');
        addLine('  }');
        addLine('  return -1;  // Not found');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Searching for ' + target + ' in sorted array...');

        let left = 0, right = searchArray.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            addLine('Left: ' + left + ', Right: ' + right + ', Mid: ' + mid);
            addLine('Checking arr[' + mid + '] = ' + searchArray[mid]);
            renderArray(mid);
            await sleep(800);
            
            if (searchArray[mid] === target) {
                addLine('// ✅ Found! Element ' + target + ' is at index ' + mid);
                disableControls(false);
                return;
            } else if (searchArray[mid] < target) {
                addLine('Target is greater, search right half');
                left = mid + 1;
            } else {
                addLine('Target is smaller, search left half');
                right = mid - 1;
            }
            await sleep(600);
        }
        
        addLine('// ❌ Not found! Element ' + target + ' is not in the array');
        disableControls(false);
    }

    function reset() {
        clearCode();
        searchArray = [2, 5, 8, 12, 16, 23, 38, 45, 67, 78, 89, 95];
        renderArray();
        addLine('// Search algorithms ready!');
        addLine('// Array: [' + searchArray.join(', ') + ']');
    }

    // Event listeners
    document.getElementById('btnLinearSearch')?.addEventListener('click', () => {
        const value = parseInt(document.getElementById('searchValue')?.value);
        if (!isNaN(value)) {
            linearSearch(value);
        }
    });

    document.getElementById('btnBinarySearch')?.addEventListener('click', () => {
        const value = parseInt(document.getElementById('searchValue')?.value);
        if (!isNaN(value)) {
            binarySearch(value);
        }
    });

    document.getElementById('btnSearchReset')?.addEventListener('click', reset);

    reset();
}

// Sorting Implementation
function initializeSorting() {
    const codeDisplay = document.getElementById('sortCodeDisplay');
    const arrayContainer = document.getElementById('sortArrayContainer');
    let sortArray = [64, 34, 25, 12, 22, 11, 90];
    let isAnimating = false;

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function renderArray(highlightIndices = []) {
        if (!arrayContainer) return;
        arrayContainer.innerHTML = '';
        
        sortArray.forEach((value, index) => {
            const element = document.createElement('div');
            element.className = 'array-element' + (highlightIndices.includes(index) ? ' highlight' : '');
            element.innerHTML = `
                <div class="array-index">${index}</div>
                <div class="array-value">${value}</div>
            `;
            arrayContainer.appendChild(element);
        });
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#sorting-content button');
        [...buttons].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bubbleSort() {
        clearCode();
        addLine('// BUBBLE SORT - Time Complexity: O(n²)');
        addLine('function bubbleSort(arr) {');
        addLine('  for (let i = 0; i < arr.length - 1; i++) {');
        addLine('    for (let j = 0; j < arr.length - i - 1; j++) {');
        addLine('      if (arr[j] > arr[j + 1]) {');
        addLine('        swap(arr, j, j + 1);');
        addLine('      }');
        addLine('    }');
        addLine('  }');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Starting Bubble Sort...');

        for (let i = 0; i < sortArray.length - 1; i++) {
            addLine('Pass ' + (i + 1) + ':');
            for (let j = 0; j < sortArray.length - i - 1; j++) {
                addLine('Comparing arr[' + j + '] = ' + sortArray[j] + ' with arr[' + (j + 1) + '] = ' + sortArray[j + 1]);
                renderArray([j, j + 1]);
                await sleep(600);
                
                if (sortArray[j] > sortArray[j + 1]) {
                    addLine('Swapping ' + sortArray[j] + ' and ' + sortArray[j + 1]);
                    [sortArray[j], sortArray[j + 1]] = [sortArray[j + 1], sortArray[j]];
                    renderArray([j, j + 1]);
                    await sleep(600);
                } else {
                    addLine('No swap needed');
                }
            }
            addLine('Pass ' + (i + 1) + ' complete. Array: [' + sortArray.join(', ') + ']');
            await sleep(500);
        }

        addLine('// ✅ Sorting complete! Final array: [' + sortArray.join(', ') + ']');
        disableControls(false);
    }

    function reset() {
        clearCode();
        sortArray = [64, 34, 25, 12, 22, 11, 90];
        renderArray();
        addLine('// Sorting algorithms ready!');
        addLine('// Array: [' + sortArray.join(', ') + ']');
    }

    // Event listeners
    document.getElementById('btnBubbleSort')?.addEventListener('click', bubbleSort);
    document.getElementById('btnSortReset')?.addEventListener('click', reset);

    reset();
}

// Recursion Implementation
function initializeRecursion() {
    const codeDisplay = document.getElementById('recursionCodeDisplay');
    const recursionContainer = document.getElementById('recursionContainer');
    let isAnimating = false;

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#recursion-content button');
        const inputs = document.querySelectorAll('#recursion-content input');
        [...buttons, ...inputs].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function factorial(n) {
        clearCode();
        addLine('// FACTORIAL - Time Complexity: O(n)');
        addLine('function factorial(n) {');
        addLine('  if (n <= 1) return 1;  // Base case');
        addLine('  return n * factorial(n - 1);  // Recursive case');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Calculating factorial(' + n + ')...');

        const result = await factorialHelper(n, 0);
        addLine('// ✅ Result: ' + n + '! = ' + result);
        disableControls(false);
    }

    async function factorialHelper(n, depth) {
        const indent = '  '.repeat(depth);
        addLine(indent + 'factorial(' + n + ') called');
        await sleep(500);
        
        if (n <= 1) {
            addLine(indent + 'Base case: factorial(' + n + ') = 1');
            await sleep(500);
            return 1;
        }
        
        addLine(indent + 'Recursive case: ' + n + ' * factorial(' + (n - 1) + ')');
        await sleep(500);
        
        const subResult = await factorialHelper(n - 1, depth + 1);
        const result = n * subResult;
        
        addLine(indent + 'Returning: ' + n + ' * ' + subResult + ' = ' + result);
        await sleep(500);
        
        return result;
    }

    function reset() {
        clearCode();
        addLine('// Recursion algorithms ready!');
        addLine('// Try factorial, fibonacci, or tower of hanoi');
    }

    // Event listeners
    document.getElementById('btnFactorial')?.addEventListener('click', () => {
        const value = parseInt(document.getElementById('recursionValue')?.value);
        if (!isNaN(value) && value >= 0) {
            factorial(value);
        }
    });

    document.getElementById('btnRecursionReset')?.addEventListener('click', reset);

    reset();
}

// Greedy Implementation
function initializeGreedy() {
    const codeDisplay = document.getElementById('greedyCodeDisplay');
    const greedyContainer = document.getElementById('greedyContainer');
    let isAnimating = false;

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#greedy-content button');
        [...buttons].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function activitySelection() {
        clearCode();
        addLine('// ACTIVITY SELECTION - Time Complexity: O(n log n)');
        addLine('function activitySelection(activities) {');
        addLine('  // Sort by finish time');
        addLine('  activities.sort((a, b) => a.finish - b.finish);');
        addLine('  ');
        addLine('  let selected = [activities[0]];');
        addLine('  let lastFinish = activities[0].finish;');
        addLine('  ');
        addLine('  for (let i = 1; i < activities.length; i++) {');
        addLine('    if (activities[i].start >= lastFinish) {');
        addLine('      selected.push(activities[i]);');
        addLine('      lastFinish = activities[i].finish;');
        addLine('    }');
        addLine('  }');
        addLine('  return selected;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Activity Selection Problem...');

        const activities = [
            {start: 1, finish: 3, name: 'A'},
            {start: 2, finish: 5, name: 'B'},
            {start: 0, finish: 6, name: 'C'},
            {start: 5, finish: 7, name: 'D'},
            {start: 8, finish: 9, name: 'E'},
            {start: 5, finish: 9, name: 'F'}
        ];

        addLine('Activities: ' + activities.map(a => a.name + '(' + a.start + '-' + a.finish + ')').join(', '));
        await sleep(500);

        addLine('Sorting by finish time...');
        activities.sort((a, b) => a.finish - b.finish);
        addLine('Sorted: ' + activities.map(a => a.name + '(' + a.start + '-' + a.finish + ')').join(', '));
        await sleep(500);

        let selected = [activities[0]];
        let lastFinish = activities[0].finish;
        addLine('Selected: ' + activities[0].name + ' (finish: ' + lastFinish + ')');
        await sleep(500);

        for (let i = 1; i < activities.length; i++) {
            addLine('Checking ' + activities[i].name + ' (start: ' + activities[i].start + ', finish: ' + activities[i].finish + ')');
            await sleep(500);
            
            if (activities[i].start >= lastFinish) {
                selected.push(activities[i]);
                lastFinish = activities[i].finish;
                addLine('✅ Selected: ' + activities[i].name + ' (no conflict)');
            } else {
                addLine('❌ Rejected: ' + activities[i].name + ' (conflicts with last selected)');
            }
            await sleep(500);
        }

        addLine('// ✅ Final selection: ' + selected.map(a => a.name).join(', '));
        addLine('// Total activities: ' + selected.length);
        disableControls(false);
    }

    function reset() {
        clearCode();
        addLine('// Greedy algorithms ready!');
        addLine('// Try activity selection, knapsack, or huffman coding');
    }

    async function dijkstra() {
        clearCode();
        addLine('// DIJKSTRA\'S ALGORITHM - Time Complexity: O((V+E) log V)');
        addLine('function dijkstra(graph, start) {');
        addLine('  let distances = {};');
        addLine('  let visited = new Set();');
        addLine('  let pq = new PriorityQueue();');
        addLine('  ');
        addLine('  // Initialize distances');
        addLine('  for (let node in graph) {');
        addLine('    distances[node] = Infinity;');
        addLine('  }');
        addLine('  distances[start] = 0;');
        addLine('  ');
        addLine('  pq.enqueue(start, 0);');
        addLine('  ');
        addLine('  while (!pq.isEmpty()) {');
        addLine('    let current = pq.dequeue();');
        addLine('    if (visited.has(current)) continue;');
        addLine('    ');
        addLine('    visited.add(current);');
        addLine('    ');
        addLine('    for (let neighbor in graph[current]) {');
        addLine('      let newDist = distances[current] + graph[current][neighbor];');
        addLine('      if (newDist < distances[neighbor]) {');
        addLine('        distances[neighbor] = newDist;');
        addLine('        pq.enqueue(neighbor, newDist);');
        addLine('      }');
        addLine('    }');
        addLine('  }');
        addLine('  return distances;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Dijkstra\'s Shortest Path Algorithm...');

        const graph = {
            'A': {'B': 4, 'C': 2},
            'B': {'C': 1, 'D': 5},
            'C': {'D': 8, 'E': 10},
            'D': {'E': 2},
            'E': {}
        };

        addLine('Graph: A->B(4), A->C(2), B->C(1), B->D(5), C->D(8), C->E(10), D->E(2)');
        await sleep(500);

        const start = 'A';
        const distances = {};
        const visited = new Set();
        
        // Initialize distances
        for (let node in graph) {
            distances[node] = Infinity;
        }
        distances[start] = 0;
        
        addLine('Starting from node: ' + start);
        addLine('Initial distances: ' + JSON.stringify(distances));
        await sleep(500);

        const unvisited = Object.keys(graph);
        
        while (unvisited.length > 0) {
            // Find unvisited node with minimum distance
            let current = null;
            let minDist = Infinity;
            
            for (let node of unvisited) {
                if (distances[node] < minDist) {
                    minDist = distances[node];
                    current = node;
                }
            }
            
            if (current === null) break;
            
            addLine('Visiting node: ' + current + ' (distance: ' + distances[current] + ')');
            unvisited.splice(unvisited.indexOf(current), 1);
            visited.add(current);
            await sleep(500);
            
            for (let neighbor in graph[current]) {
                if (!visited.has(neighbor)) {
                    const newDist = distances[current] + graph[current][neighbor];
                    addLine('Checking edge ' + current + '->' + neighbor + ': ' + distances[current] + ' + ' + graph[current][neighbor] + ' = ' + newDist);
                    
                    if (newDist < distances[neighbor]) {
                        distances[neighbor] = newDist;
                        addLine('Updated distance to ' + neighbor + ': ' + newDist);
                    } else {
                        addLine('No improvement for ' + neighbor);
                    }
                    await sleep(500);
                }
            }
        }

        addLine('// ✅ Final shortest distances from ' + start + ':');
        for (let node in distances) {
            addLine('  ' + node + ': ' + distances[node]);
        }
        disableControls(false);
    }

    async function kruskal() {
        clearCode();
        addLine('// KRUSKAL\'S MST - Time Complexity: O(E log E)');
        addLine('function kruskal(edges, vertices) {');
        addLine('  // Sort edges by weight');
        addLine('  edges.sort((a, b) => a.weight - b.weight);');
        addLine('  ');
        addLine('  let parent = {};');
        addLine('  let mst = [];');
        addLine('  ');
        addLine('  // Initialize parent array');
        addLine('  for (let v of vertices) {');
        addLine('    parent[v] = v;');
        addLine('  }');
        addLine('  ');
        addLine('  function find(x) {');
        addLine('    if (parent[x] !== x) {');
        addLine('      parent[x] = find(parent[x]);');
        addLine('    }');
        addLine('    return parent[x];');
        addLine('  }');
        addLine('  ');
        addLine('  function union(x, y) {');
        addLine('    let px = find(x), py = find(y);');
        addLine('    if (px !== py) {');
        addLine('      parent[px] = py;');
        addLine('      return true;');
        addLine('    }');
        addLine('    return false;');
        addLine('  }');
        addLine('  ');
        addLine('  for (let edge of edges) {');
        addLine('    if (union(edge.u, edge.v)) {');
        addLine('      mst.push(edge);');
        addLine('    }');
        addLine('  }');
        addLine('  return mst;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Kruskal\'s Minimum Spanning Tree...');

        const edges = [
            {u: 'A', v: 'B', weight: 4},
            {u: 'A', v: 'C', weight: 2},
            {u: 'B', v: 'C', weight: 1},
            {u: 'B', v: 'D', weight: 5},
            {u: 'C', v: 'D', weight: 8},
            {u: 'C', v: 'E', weight: 10},
            {u: 'D', v: 'E', weight: 2}
        ];

        const vertices = ['A', 'B', 'C', 'D', 'E'];
        
        addLine('Edges: ' + edges.map(e => e.u + '-' + e.v + '(' + e.weight + ')').join(', '));
        await sleep(500);

        addLine('Sorting edges by weight...');
        edges.sort((a, b) => a.weight - b.weight);
        addLine('Sorted: ' + edges.map(e => e.u + '-' + e.v + '(' + e.weight + ')').join(', '));
        await sleep(500);

        const parent = {};
        const mst = [];
        
        // Initialize parent array
        for (let v of vertices) {
            parent[v] = v;
        }
        addLine('Initial parent array: ' + JSON.stringify(parent));
        await sleep(500);

        function find(x) {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        function union(x, y) {
            let px = find(x), py = find(y);
            if (px !== py) {
                parent[px] = py;
                return true;
            }
            return false;
        }

        for (let edge of edges) {
            addLine('Checking edge ' + edge.u + '-' + edge.v + ' (weight: ' + edge.weight + ')');
            const px = find(edge.u);
            const py = find(edge.v);
            addLine('  Parent of ' + edge.u + ': ' + px + ', Parent of ' + edge.v + ': ' + py);
            
            if (px !== py) {
                union(edge.u, edge.v);
                mst.push(edge);
                addLine('  ✅ Added to MST (no cycle)');
            } else {
                addLine('  ❌ Skipped (would create cycle)');
            }
            await sleep(500);
        }

        addLine('// ✅ Minimum Spanning Tree:');
        let totalWeight = 0;
        for (let edge of mst) {
            addLine('  ' + edge.u + '-' + edge.v + ' (weight: ' + edge.weight + ')');
            totalWeight += edge.weight;
        }
        addLine('Total weight: ' + totalWeight);
        disableControls(false);
    }

    // Event listeners
    document.getElementById('btnActivitySelection')?.addEventListener('click', activitySelection);
    document.getElementById('btnDijkstra')?.addEventListener('click', dijkstra);
    document.getElementById('btnKruskal')?.addEventListener('click', kruskal);
    document.getElementById('btnGreedyReset')?.addEventListener('click', reset);

    reset();
}

// Dynamic Programming Implementation
function initializeDP() {
    const codeDisplay = document.getElementById('dpCodeDisplay');
    const dpContainer = document.getElementById('dpContainer');
    let isAnimating = false;

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#dp-content button');
        const inputs = document.querySelectorAll('#dp-content input');
        [...buttons, ...inputs].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function fibonacciDP(n) {
        clearCode();
        addLine('// FIBONACCI DP - Time Complexity: O(n)');
        addLine('function fibonacciDP(n) {');
        addLine('  let dp = new Array(n + 1);');
        addLine('  dp[0] = 0; dp[1] = 1;  // Base cases');
        addLine('  ');
        addLine('  for (let i = 2; i <= n; i++) {');
        addLine('    dp[i] = dp[i-1] + dp[i-2];');
        addLine('  }');
        addLine('  return dp[n];');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Calculating fibonacci(' + n + ') using DP...');

        const dp = new Array(n + 1);
        dp[0] = 0;
        dp[1] = 1;
        addLine('Base cases: dp[0] = ' + dp[0] + ', dp[1] = ' + dp[1]);
        await sleep(500);

        for (let i = 2; i <= n; i++) {
            addLine('dp[' + i + '] = dp[' + (i-1) + '] + dp[' + (i-2) + '] = ' + dp[i-1] + ' + ' + dp[i-2] + ' = ' + (dp[i-1] + dp[i-2]));
            dp[i] = dp[i-1] + dp[i-2];
            await sleep(500);
        }

        addLine('// ✅ Result: fibonacci(' + n + ') = ' + dp[n]);
        addLine('// DP table: [' + dp.join(', ') + ']');
        disableControls(false);
    }

    function reset() {
        clearCode();
        addLine('// Dynamic Programming algorithms ready!');
        addLine('// Try fibonacci DP, LCS, or knapsack');
    }

    async function editDistance() {
        clearCode();
        addLine('// EDIT DISTANCE (LEVENSHTEIN) - Time Complexity: O(m×n)');
        addLine('function editDistance(str1, str2) {');
        addLine('  let m = str1.length, n = str2.length;');
        addLine('  let dp = Array(m+1).fill().map(() => Array(n+1).fill(0));');
        addLine('  ');
        addLine('  // Base cases');
        addLine('  for (let i = 0; i <= m; i++) dp[i][0] = i;');
        addLine('  for (let j = 0; j <= n; j++) dp[0][j] = j;');
        addLine('  ');
        addLine('  for (let i = 1; i <= m; i++) {');
        addLine('    for (let j = 1; j <= n; j++) {');
        addLine('      if (str1[i-1] === str2[j-1]) {');
        addLine('        dp[i][j] = dp[i-1][j-1];');
        addLine('      } else {');
        addLine('        dp[i][j] = 1 + Math.min(');
        addLine('          dp[i-1][j],    // Delete');
        addLine('          dp[i][j-1],    // Insert');
        addLine('          dp[i-1][j-1]   // Replace');
        addLine('        );');
        addLine('      }');
        addLine('    }');
        addLine('  }');
        addLine('  return dp[m][n];');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Edit Distance between "KITTEN" and "SITTING"...');

        const str1 = "KITTEN";
        const str2 = "SITTING";
        const m = str1.length;
        const n = str2.length;

        addLine('String 1: "' + str1 + '" (length: ' + m + ')');
        addLine('String 2: "' + str2 + '" (length: ' + n + ')');
        await sleep(500);

        const dp = Array(m+1).fill().map(() => Array(n+1).fill(0));
        
        // Base cases
        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;
        
        addLine('Base cases:');
        addLine('  dp[i][0] = i (delete all characters from str1)');
        addLine('  dp[0][j] = j (insert all characters from str2)');
        await sleep(500);

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                addLine('Computing dp[' + i + '][' + j + '] for str1[' + (i-1) + ']="' + str1[i-1] + '" and str2[' + (j-1) + ']="' + str2[j-1] + '"');
                
                if (str1[i-1] === str2[j-1]) {
                    dp[i][j] = dp[i-1][j-1];
                    addLine('  Characters match: dp[' + i + '][' + j + '] = dp[' + (i-1) + '][' + (j-1) + '] = ' + dp[i][j]);
                } else {
                    const deleteOp = dp[i-1][j] + 1;
                    const insertOp = dp[i][j-1] + 1;
                    const replaceOp = dp[i-1][j-1] + 1;
                    dp[i][j] = Math.min(deleteOp, insertOp, replaceOp);
                    addLine('  Characters differ:');
                    addLine('    Delete: dp[' + (i-1) + '][' + j + '] + 1 = ' + deleteOp);
                    addLine('    Insert: dp[' + i + '][' + (j-1) + '] + 1 = ' + insertOp);
                    addLine('    Replace: dp[' + (i-1) + '][' + (j-1) + '] + 1 = ' + replaceOp);
                    addLine('    Min: ' + dp[i][j]);
                }
                await sleep(400);
            }
        }

        addLine('// ✅ Edit Distance: ' + dp[m][n]);
        addLine('// DP Table:');
        for (let i = 0; i <= m; i++) {
            let row = '  ';
            for (let j = 0; j <= n; j++) {
                row += dp[i][j] + ' ';
            }
            addLine(row);
        }
        disableControls(false);
    }

    async function coinChange() {
        clearCode();
        addLine('// COIN CHANGE - Time Complexity: O(amount × coins.length)');
        addLine('function coinChange(coins, amount) {');
        addLine('  let dp = Array(amount + 1).fill(Infinity);');
        addLine('  dp[0] = 0;  // Base case');
        addLine('  ');
        addLine('  for (let i = 1; i <= amount; i++) {');
        addLine('    for (let coin of coins) {');
        addLine('      if (coin <= i) {');
        addLine('        dp[i] = Math.min(dp[i], dp[i - coin] + 1);');
        addLine('      }');
        addLine('    }');
        addLine('  }');
        addLine('  ');
        addLine('  return dp[amount] === Infinity ? -1 : dp[amount];');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Coin Change Problem...');

        const coins = [1, 3, 4];
        const amount = 6;
        
        addLine('Coins: [' + coins.join(', ') + ']');
        addLine('Amount: ' + amount);
        await sleep(500);

        const dp = Array(amount + 1).fill(Infinity);
        dp[0] = 0;
        
        addLine('Base case: dp[0] = 0 (0 coins needed for amount 0)');
        await sleep(500);

        for (let i = 1; i <= amount; i++) {
            addLine('Computing dp[' + i + '] for amount ' + i + ':');
            for (let coin of coins) {
                if (coin <= i) {
                    const newValue = dp[i - coin] + 1;
                    addLine('  Using coin ' + coin + ': dp[' + (i - coin) + '] + 1 = ' + dp[i - coin] + ' + 1 = ' + newValue);
                    dp[i] = Math.min(dp[i], newValue);
                } else {
                    addLine('  Coin ' + coin + ' too large for amount ' + i);
                }
            }
            addLine('  dp[' + i + '] = ' + dp[i]);
            await sleep(500);
        }

        if (dp[amount] === Infinity) {
            addLine('// ❌ Cannot make amount ' + amount + ' with given coins');
        } else {
            addLine('// ✅ Minimum coins needed: ' + dp[amount]);
            addLine('// DP array: [' + dp.join(', ') + ']');
        }
        disableControls(false);
    }

    // Event listeners
    document.getElementById('btnFibonacciDP')?.addEventListener('click', () => {
        const value = parseInt(document.getElementById('dpValue')?.value);
        if (!isNaN(value) && value >= 0) {
            fibonacciDP(value);
        }
    });

    document.getElementById('btnEditDistance')?.addEventListener('click', editDistance);
    document.getElementById('btnCoinChange')?.addEventListener('click', coinChange);
    document.getElementById('btnDPReset')?.addEventListener('click', reset);

    reset();
}

// BST Implementation
function initializeBST() {
    const codeDisplay = document.getElementById('bstCodeDisplay');
    const bstContainer = document.getElementById('bstContainer');
    let bst = null;
    let isAnimating = false;

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#bst-content button');
        const inputs = document.querySelectorAll('#bst-content input');
        [...buttons, ...inputs].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function renderBST() {
        if (!bstContainer) return;
        bstContainer.innerHTML = '';
        
        if (!bst) {
            bstContainer.innerHTML = '<div class="empty-tree">Empty BST</div>';
            return;
        }
        
        // Simple BST visualization
        const values = [];
        inorderTraversal(bst, values);
        bstContainer.innerHTML = '<div class="bst-values">Values: [' + values.join(', ') + ']</div>';
    }

    function inorderTraversal(node, values) {
        if (node) {
            inorderTraversal(node.left, values);
            values.push(node.value);
            inorderTraversal(node.right, values);
        }
    }

    async function insertBST(value) {
        clearCode();
        addLine('// BST INSERT - Time Complexity: O(log n)');
        addLine('function insertBST(root, value) {');
        addLine('  if (!root) return new Node(value);');
        addLine('  if (value < root.value) root.left = insertBST(root.left, value);');
        addLine('  else if (value > root.value) root.right = insertBST(root.right, value);');
        addLine('  return root;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Inserting ' + value + ' into BST...');

        bst = insertBSTHelper(bst, value);
        renderBST();
        addLine('// ✅ Inserted ' + value + ' into BST');
        disableControls(false);
    }

    function insertBSTHelper(node, value) {
        if (!node) {
            return { value: value, left: null, right: null };
        }
        
        if (value < node.value) {
            node.left = insertBSTHelper(node.left, value);
        } else if (value > node.value) {
            node.right = insertBSTHelper(node.right, value);
        }
        
        return node;
    }

    function reset() {
        clearCode();
        bst = null;
        renderBST();
        addLine('// BST algorithms ready!');
        addLine('// Try inserting, deleting, or searching values');
    }

    // Event listeners
    document.getElementById('btnBSTInsert')?.addEventListener('click', () => {
        const value = parseInt(document.getElementById('bstValue')?.value);
        if (!isNaN(value)) {
            insertBST(value);
        }
    });

    document.getElementById('btnBSTReset')?.addEventListener('click', reset);

    reset();
}

// Backtracking Implementation
function initializeBacktracking() {
    const codeDisplay = document.getElementById('backtrackingCodeDisplay');
    const backtrackingContainer = document.getElementById('backtrackingContainer');
    let isAnimating = false;

    function renderBoard(board) {
        if (!backtrackingContainer) return;
        
        let html = '<div class="board-container" style="display: grid; grid-template-columns: repeat(' + board.length + ', 1fr); gap: 2px; margin: 20px auto; max-width: 400px;">';
        
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const hasQueen = board[i][j] === 1;
                html += '<div style="width: 40px; height: 40px; border: 1px solid #666; display: flex; align-items: center; justify-content: center; background: ' + (hasQueen ? '#4CAF50' : '#333') + '; color: white; font-size: 20px;">' + (hasQueen ? '♛' : '') + '</div>';
            }
        }
        html += '</div>';
        backtrackingContainer.innerHTML = html;
    }

    function addLine(text, highlight = false) {
        if (!codeDisplay) return;
        const line = document.createElement('div');
        line.className = 'code-line' + (highlight ? ' highlight' : '');
        line.textContent = text;
        codeDisplay.appendChild(line);
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }

    function clearCode() {
        if (!codeDisplay) return;
        codeDisplay.innerHTML = '';
    }

    function disableControls(disable) {
        const buttons = document.querySelectorAll('#backtracking-content button');
        const inputs = document.querySelectorAll('#backtracking-content input');
        [...buttons, ...inputs].forEach(el => el.disabled = disable);
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function nQueens(n) {
        clearCode();
        addLine('// N-QUEENS - Time Complexity: O(N!)');
        addLine('function solveNQueens(n) {');
        addLine('  let board = Array(n).fill().map(() => Array(n).fill(0));');
        addLine('  let solutions = [];');
        addLine('  ');
        addLine('  function isSafe(row, col) {');
        addLine('    // Check column, diagonals');
        addLine('  }');
        addLine('  ');
        addLine('  function solve(row) {');
        addLine('    if (row === n) {');
        addLine('      solutions.push(board.map(r => [...r]));');
        addLine('      return;');
        addLine('    }');
        addLine('    ');
        addLine('    for (let col = 0; col < n; col++) {');
        addLine('      if (isSafe(row, col)) {');
        addLine('        board[row][col] = 1;  // Place queen');
        addLine('        solve(row + 1);      // Recurse');
        addLine('        board[row][col] = 0; // Backtrack');
        addLine('      }');
        addLine('    }');
        addLine('  }');
        addLine('  ');
        addLine('  solve(0);');
        addLine('  return solutions;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Solving ' + n + '-Queens problem...');

        const board = Array(n).fill().map(() => Array(n).fill(0));
        let solutions = 0;

        function isSafe(row, col) {
            // Check column
            for (let i = 0; i < row; i++) {
                if (board[i][col] === 1) return false;
            }
            
            // Check diagonals
            for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
                if (board[i][j] === 1) return false;
            }
            
            for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
                if (board[i][j] === 1) return false;
            }
            
            return true;
        }

        async function solve(row) {
            // Hard stop after too many iterations
            if (solutions >= 2 || row > n * 2) {
                addLine('// ✅ Stopping after 2 solutions to prevent infinite loop');
                return true;
            }
            
            // Render current board state
            renderBoard(board);
            
            if (row === n) {
                solutions++;
                addLine('✅ Solution ' + solutions + ' found!');
                await sleep(300);
                if (solutions >= 2) {
                    return true;
                }
                return false;
            }
            
            for (let col = 0; col < n; col++) {
                addLine('Trying queen at (' + row + ',' + col + ')');
                await sleep(100); // Much faster
                
                if (isSafe(row, col)) {
                    addLine('✅ Placing queen at (' + row + ',' + col + ')');
                    board[row][col] = 1;
                    renderBoard(board); // Show queen placement
                    await sleep(100);
                    
                    const shouldStop = await solve(row + 1);
                    if (shouldStop) return true;
                    
                    addLine('❌ Backtracking from (' + row + ',' + col + ')');
                    board[row][col] = 0;
                    renderBoard(board); // Show queen removal
                    await sleep(100);
                }
            }
            return false;
        }

        await solve(0);
        addLine('// ✅ Found ' + solutions + ' solutions for ' + n + '-Queens');
        disableControls(false);
    }

    async function permutations(n) {
        clearCode();
        addLine('// PERMUTATIONS - Time Complexity: O(n!)');
        addLine('function permutations(arr) {');
        addLine('  let result = [];');
        addLine('  ');
        addLine('  function backtrack(start) {');
        addLine('    if (start === arr.length) {');
        addLine('      result.push([...arr]);');
        addLine('      return;');
        addLine('    }');
        addLine('    ');
        addLine('    for (let i = start; i < arr.length; i++) {');
        addLine('      [arr[start], arr[i]] = [arr[i], arr[start]]; // swap');
        addLine('      backtrack(start + 1);');
        addLine('      [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack');
        addLine('    }');
        addLine('  }');
        addLine('  ');
        addLine('  backtrack(0);');
        addLine('  return result;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Generating permutations for array [1,2,3,4,5,6]...');

        const arr = Array.from({length: n}, (_, i) => i + 1);
        let count = 0;
        const maxPermutations = Math.min(12, factorial(n)); // Limit output

        function factorial(num) {
            if (num <= 1) return 1;
            return num * factorial(num - 1);
        }

        async function backtrack(start) {
            if (start === arr.length) {
                count++;
                addLine('Permutation ' + count + ': [' + arr.join(', ') + ']');
                await sleep(200);
                return count >= maxPermutations;
            }

            for (let i = start; i < arr.length; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
                const shouldStop = await backtrack(start + 1);
                if (shouldStop) return true;
                [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack
            }
            return false;
        }

        await backtrack(0);
        addLine('// ✅ Generated ' + Math.min(count, maxPermutations) + ' permutations (showing first ' + maxPermutations + ')');
        disableControls(false);
    }

    function reset() {
        clearCode();
        addLine('// Backtracking algorithms ready!');
        addLine('// Try N-Queens, Sudoku, or Permutations');
    }

    async function subsetSum() {
        clearCode();
        addLine('// SUBSET SUM - Time Complexity: O(2^n)');
        addLine('function subsetSum(arr, target) {');
        addLine('  let result = [];');
        addLine('  let current = [];');
        addLine('  ');
        addLine('  function backtrack(start, remaining) {');
        addLine('    if (remaining === 0) {');
        addLine('      result.push([...current]);');
        addLine('      return;');
        addLine('    }');
        addLine('    ');
        addLine('    for (let i = start; i < arr.length; i++) {');
        addLine('      if (arr[i] <= remaining) {');
        addLine('        current.push(arr[i]);');
        addLine('        backtrack(i + 1, remaining - arr[i]);');
        addLine('        current.pop();  // Backtrack');
        addLine('      }');
        addLine('    }');
        addLine('  }');
        addLine('  ');
        addLine('  backtrack(0, target);');
        addLine('  return result;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Subset Sum Problem...');

        const arr = [2, 3, 6, 7];
        const target = 7;
        
        addLine('Array: [' + arr.join(', ') + ']');
        addLine('Target sum: ' + target);
        await sleep(500);

        const result = [];
        const current = [];
        let step = 0;

        async function backtrack(start, remaining, depth) {
            const indent = '  '.repeat(depth);
            addLine(indent + 'backtrack(start=' + start + ', remaining=' + remaining + ')');
            addLine(indent + 'Current subset: [' + current.join(', ') + ']');
            await sleep(300);
            
            if (remaining === 0) {
                addLine(indent + '✅ Found subset: [' + current.join(', ') + ']');
                result.push([...current]);
                return;
            }
            
            for (let i = start; i < arr.length; i++) {
                addLine(indent + 'Trying arr[' + i + '] = ' + arr[i]);
                if (arr[i] <= remaining) {
                    addLine(indent + '  Adding ' + arr[i] + ' to subset');
                    current.push(arr[i]);
                    await sleep(300);
                    
                    await backtrack(i + 1, remaining - arr[i], depth + 1);
                    
                    addLine(indent + '  Backtracking: removing ' + arr[i]);
                    current.pop();
                    await sleep(300);
                } else {
                    addLine(indent + '  Skipping ' + arr[i] + ' (too large)');
                }
            }
        }

        await backtrack(0, target, 0);

        addLine('// ✅ All subsets that sum to ' + target + ':');
        for (let i = 0; i < result.length; i++) {
            addLine('  ' + (i + 1) + ': [' + result[i].join(', ') + ']');
        }
        addLine('Total subsets found: ' + result.length);
        disableControls(false);
    }

    async function mazeSolver() {
        clearCode();
        addLine('// MAZE SOLVER - Time Complexity: O(4^(m×n))');
        addLine('function mazeSolver(maze, start, end) {');
        addLine('  let path = [];');
        addLine('  let visited = Array(maze.length).fill().map(() => Array(maze[0].length).fill(false));');
        addLine('  ');
        addLine('  function solve(x, y) {');
        addLine('    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) return false;');
        addLine('    if (maze[x][y] === 1 || visited[x][y]) return false;');
        addLine('    if (x === end[0] && y === end[1]) return true;');
        addLine('    ');
        addLine('    visited[x][y] = true;');
        addLine('    path.push([x, y]);');
        addLine('    ');
        addLine('    // Try all 4 directions');
        addLine('    if (solve(x+1, y) || solve(x-1, y) || solve(x, y+1) || solve(x, y-1)) {');
        addLine('      return true;');
        addLine('    }');
        addLine('    ');
        addLine('    // Backtrack');
        addLine('    path.pop();');
        addLine('    return false;');
        addLine('  }');
        addLine('  ');
        addLine('  return solve(start[0], start[1]) ? path : null;');
        addLine('}');

        disableControls(true);
        addLine('');
        addLine('// Maze Solver Problem...');

        const maze = [
            [0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0]
        ];
        const start = [0, 0];
        const end = [4, 4];

        addLine('Maze (0=path, 1=wall):');
        for (let i = 0; i < maze.length; i++) {
            addLine('  ' + maze[i].join(' '));
        }
        addLine('Start: (' + start[0] + ', ' + start[1] + ')');
        addLine('End: (' + end[0] + ', ' + end[1] + ')');
        await sleep(500);

        const path = [];
        const visited = Array(maze.length).fill().map(() => Array(maze[0].length).fill(false));

        async function solve(x, y, depth) {
            const indent = '  '.repeat(depth);
            addLine(indent + 'Trying position (' + x + ', ' + y + ')');
            
            if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
                addLine(indent + '❌ Out of bounds');
                return false;
            }
            if (maze[x][y] === 1) {
                addLine(indent + '❌ Hit wall');
                return false;
            }
            if (visited[x][y]) {
                addLine(indent + '❌ Already visited');
                return false;
            }
            if (x === end[0] && y === end[1]) {
                addLine(indent + '✅ Reached destination!');
                path.push([x, y]);
                return true;
            }

            visited[x][y] = true;
            path.push([x, y]);
            addLine(indent + 'Added (' + x + ', ' + y + ') to path');
            await sleep(300);

            // Try all 4 directions
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            const dirNames = ['Down', 'Up', 'Right', 'Left'];
            
            for (let i = 0; i < directions.length; i++) {
                const [dx, dy] = directions[i];
                addLine(indent + 'Trying ' + dirNames[i] + ': (' + (x + dx) + ', ' + (y + dy) + ')');
                await sleep(200);
                
                if (await solve(x + dx, y + dy, depth + 1)) {
                    return true;
                }
            }

            addLine(indent + 'Backtracking from (' + x + ', ' + y + ')');
            path.pop();
            return false;
        }

        const found = await solve(start[0], start[1], 0);

        if (found) {
            addLine('// ✅ Path found:');
            for (let i = 0; i < path.length; i++) {
                addLine('  Step ' + (i + 1) + ': (' + path[i][0] + ', ' + path[i][1] + ')');
            }
        } else {
            addLine('// ❌ No path found');
        }
        disableControls(false);
    }

    // Event listeners
    document.getElementById('btnNQueens').addEventListener('click', () => {
        const value = parseInt(document.getElementById('backtrackingValue').value);
        if (!isNaN(value) && value > 0 && value <= 6) { // Reduced max from 8 to 6
            nQueens(value);
        } else {
            addLine('Please enter a number between 1 and 6 (6-Queens has fewer solutions)');
        }
    });

    document.getElementById('btnSudoku').addEventListener('click', () => {
        addLine('Sudoku solver coming soon!');
    });

    document.getElementById('btnPermutations').addEventListener('click', () => {
        const value = parseInt(document.getElementById('backtrackingValue').value);
        if (!isNaN(value) && value > 0 && value <= 6) {
            permutations(value);
        }
    });

    document.getElementById('btnSubsetSum').addEventListener('click', subsetSum);
    document.getElementById('btnMazeSolver').addEventListener('click', mazeSolver);
    document.getElementById('btnBacktrackingReset').addEventListener('click', reset);

    reset();
}
