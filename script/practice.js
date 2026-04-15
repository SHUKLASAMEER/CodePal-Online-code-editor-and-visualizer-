// Practice Mode JavaScript
let currentChallenge = null;
let currentDifficulty = null;
let timerInterval = null;
let timeRemaining = 300; // 5 minutes default
let userStats = {
    totalChallenges: 25,
    completedChallenges: 0,
    userLevel: 1,
    points: 0
};


// Challenge Database
const challenges = {
    beginner: [
        {
            id: 1,
            title: "Two Sum",
            difficulty: "Beginner",
            points: 100,
            time: 15,
            statement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            examples: [
                {
                    input: "[2,7,11,15], 9",
                    output: "[0,1]",
                    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
                },
                {
                    input: "[3,2,4], 6",
                    output: "[1,2]",
                    explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
                }
            ],
            constraints: [
                "2 ≤ nums.length ≤ 10^4",
                "-10^9 ≤ nums[i] ≤ 10^9",
                "-10^9 ≤ target ≤ 10^9",
                "Only one valid answer exists"
            ],
            hints: [
                "Try using a hash map to store seen numbers and their indices.",
                "Can you solve it in one pass? Think about complement numbers.",
                "The optimal solution has O(n) time complexity and O(n) space complexity."
            ],
            starterCode: {
                javascript: `// Write your solution here
function twoSum(nums, target) {
    // Your code here
    return [];
}`,
                python: `# Write your solution here
def twoSum(nums, target):
    # Your code here
    return []`,
                java: `// Write your solution here
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        return new int[2];
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
        return {};
    }
};`
            }
        },
        {
            id: 3,
            title: "Palindrome Number",
            difficulty: "Beginner",
            points: 90,
            time: 12,
            statement: "Given an integer x, return true if x is a palindrome, and false otherwise.",
            examples: [
                {
                    input: "121",
                    output: "true",
                    explanation: "121 reads as 121 from left to right and from right to left."
                },
                {
                    input: "-121",
                    output: "false",
                    explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
                }
            ],
            constraints: [
                "-2^31 <= x <= 2^31 - 1"
            ],
            hints: [
                "Try converting the number to a string and checking if it's a palindrome.",
                "Can you solve it without converting to a string?",
                "Consider reversing half of the number."
            ],
            starterCode: {
                javascript: `// Write your solution here
function isPalindrome(x) {
    // Your code here
    return false;
}`,
                python: `# Write your solution here
def isPalindrome(x):
    # Your code here
    return False`,
                java: `// Write your solution here
class Solution {
    public boolean isPalindrome(int x) {
        // Your code here
        return false;
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    bool isPalindrome(int x) {
        // Your code here
        return false;
    }
};`
            }
        },
        {
            id: 4,
            title: "Contains Duplicate",
            difficulty: "Beginner",
            points: 85,
            time: 10,
            statement: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            examples: [
                {
                    input: "[1,2,3,1]",
                    output: "true",
                    explanation: "The value 1 appears twice."
                },
                {
                    input: "[1,2,3,4]",
                    output: "false",
                    explanation: "All values are distinct."
                }
            ],
            constraints: [
                "1 <= nums.length <= 10^5",
                "-10^9 <= nums[i] <= 10^9"
            ],
            hints: [
                "Use a hash set to track seen numbers.",
                "Or sort the array and check adjacent elements.",
                "Hash set approach is O(n) time and O(n) space."
            ],
            starterCode: {
                javascript: `// Write your solution here
function containsDuplicate(nums) {
    // Your code here
    return false;
}`,
                python: `# Write your solution here
def containsDuplicate(nums):
    # Your code here
    return False`,
                java: `// Write your solution here
class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Your code here
        return false;
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Your code here
        return false;
    }
};`
            }
        },
        {
            id: 5,
            title: "Maximum Subarray",
            difficulty: "Beginner",
            points: 120,
            time: 15,
            statement: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
            examples: [
                {
                    input: "[-2,1,-3,4,-1,2,1,-5,4]",
                    output: "6",
                    explanation: "The subarray [4,-1,2,1] has the largest sum 6."
                },
                {
                    input: "[1]",
                    output: "1",
                    explanation: "The subarray [1] has the largest sum 1."
                }
            ],
            constraints: [
                "1 <= nums.length <= 10^5",
                "-10^4 <= nums[i] <= 10^4"
            ],
            hints: [
                "Use Kadane's algorithm.",
                "Keep track of current sum and maximum sum.",
                "If current sum becomes negative, reset it to 0."
            ],
            starterCode: {
                javascript: `// Write your solution here
function maxSubArray(nums) {
    // Your code here
    return 0;
}`,
                python: `# Write your solution here
def maxSubArray(nums):
    # Your code here
    return 0`,
                java: `// Write your solution here
class Solution {
    public int maxSubArray(int[] nums) {
        // Your code here
        return 0;
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`
            }
        }
    ],
    intermediate: [
        {
            id: 3,
            title: "Valid Parentheses",
            difficulty: "Intermediate",
            points: 150,
            time: 20,
            statement: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            examples: [
                {
                    input: "()",
                    output: "true",
                    explanation: "The string is valid."
                },
                {
                    input: "()[]{}",
                    output: "true",
                    explanation: "The string is valid."
                },
                {
                    input: "(]",
                    output: "false",
                    explanation: "The string is not valid."
                }
            ],
            constraints: [
                "1 ≤ s.length ≤ 10^4",
                "s consists of parentheses only '()[]{}'"
            ],
            hints: [
                "Use a stack to keep track of opening brackets.",
                "When you see a closing bracket, check if it matches the top of the stack.",
                "The string is valid if the stack is empty at the end."
            ],
            starterCode: {
                javascript: `// Write your solution here
function isValid(s) {
    // Your code here
    return false;
}`,
                python: `# Write your solution here
def isValid(s):
    # Your code here
    return False`,
                java: `// Write your solution here
class Solution {
    public boolean isValid(String s) {
        // Your code here
        return false;
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    bool isValid(string s) {
        // Your code here
        return false;
    }
};`
            }
        }
    ],
    advanced: [
        {
            id: 4,
            title: "Merge K Sorted Lists",
            difficulty: "Advanced",
            points: 300,
            time: 30,
            statement: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list.",
            examples: [
                {
                    input: "[[1,4,5],[1,3,4],[2,6]]",
                    output: "[1,1,2,3,4,4,5,6]",
                    explanation: "The merged list is sorted."
                }
            ],
            constraints: [
                "k == lists.length",
                "0 ≤ k ≤ 10^4",
                "0 ≤ lists[i].length ≤ 500",
                "-10^4 ≤ lists[i][j] ≤ 10^4",
                "lists[i] is sorted in ascending order"
            ],
            hints: [
                "Consider using a min-heap (priority queue).",
                "Or use divide and conquer approach.",
                "Time complexity should be O(N log k) where N is total nodes."
            ],
            starterCode: {
                javascript: `// Write your solution here
function mergeKLists(lists) {
    // Your code here
    return null;
}`,
                python: `# Write your solution here
def mergeKLists(lists):
    # Your code here
    return None`,
                java: `// Write your solution here
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Your code here
        return null;
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Your code here
        return nullptr;
    }
};`
            }
        }
    ],
    expert: [
        {
            id: 5,
            title: "Trapping Rain Water",
            difficulty: "Expert",
            points: 500,
            time: 25,
            statement: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            examples: [
                {
                    input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
                    output: "6",
                    explanation: "6 units of water can be trapped."
                }
            ],
            constraints: [
                "n == height.length",
                "1 ≤ n ≤ 2 * 10^4",
                "0 ≤ height[i] ≤ 3 * 10^4"
            ],
            hints: [
                "Try two-pointer approach for O(n) time and O(1) space.",
                "Or use precomputed left max and right max arrays.",
                "Think about how water is trapped between two bars."
            ],
            starterCode: {
                javascript: `// Write your solution here
function trap(height) {
    // Your code here
    return 0;
}`,
                python: `# Write your solution here
def trap(height):
    # Your code here
    return 0`,
                java: `// Write your solution here
class Solution {
    public int trap(int[] height) {
        // Your code here
        return 0;
    }
}`,
                cpp: `// Write your solution here
class Solution {
public:
    int trap(vector<int>& height) {
        // Your code here
        return 0;
    }
};`
            }
        }
    ]
};

// Initialize Practice Mode
document.addEventListener('DOMContentLoaded', () => {
    loadUserStats();
    updateStatsDisplay();
});

// (No Ace automatic initialization here — restoring original behavior)

// Load user statistics
function loadUserStats() {
    const saved = localStorage.getItem('practiceStats');
    if (saved) {
        userStats = JSON.parse(saved);
    }
}

// Save user statistics
function saveUserStats() {
    localStorage.setItem('practiceStats', JSON.stringify(userStats));
}

// Update statistics display
function updateStatsDisplay() {
    document.getElementById('totalChallenges').textContent = userStats.totalChallenges;
    document.getElementById('completedChallenges').textContent = userStats.completedChallenges;
    document.getElementById('userLevel').textContent = userStats.userLevel;
}

function hidePracticeSections() {
    const sectionIds = [
        'difficultySection',
        'challengePickerSection',
        'challengeInterface',
        'customTestingInterface',
        'timeTrialInterface'
    ];

    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
}

function switchPracticeView(sectionId = null, showModes = false) {
    if (timerInterval && sectionId !== 'timeTrialInterface') {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    hidePracticeSections();
    document.querySelector('.practice-modes').style.display = showModes ? 'block' : 'none';

    if (sectionId) {
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    window.scrollTo(0, 0);
}

function formatDifficultyName(difficulty) {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

// Practice Mode Selection Functions
function startCodeChallenges() {
    switchPracticeView('difficultySection');
}

function startTimeTrials() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    switchPracticeView('timeTrialInterface');
    startTimer();
    loadTimeTrialProblem();
}

function startCustomTesting() {
    switchPracticeView('customTestingInterface');
    loadCustomTestingInterface();
}

// Difficulty Selection
function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    currentChallenge = null;
    renderChallengePicker(difficulty);
    switchPracticeView('challengePickerSection');
}

function renderChallengePicker(difficulty) {
    const challengeList = challenges[difficulty] || [];
    const challengePickerTitle = document.getElementById('challengePickerTitle');
    const challengePickerSubtitle = document.getElementById('challengePickerSubtitle');
    const challengePickerGrid = document.getElementById('challengePickerGrid');
    const difficultyName = challengeList[0]?.difficulty || formatDifficultyName(difficulty);

    challengePickerTitle.textContent = `${difficultyName} Challenges`;
    challengePickerSubtitle.textContent = `Choose one of the ${challengeList.length} available challenge${challengeList.length === 1 ? '' : 's'} to open the current coding interface.`;
    challengePickerGrid.innerHTML = '';

    if (!challengeList.length) {
        challengePickerGrid.innerHTML = `
            <div class="challenge-picker-empty">
                No challenges are available for this difficulty yet.
            </div>
        `;
        return;
    }

    challengeList.forEach((challenge, index) => {
        const challengeCard = document.createElement('button');
        challengeCard.type = 'button';
        challengeCard.className = `challenge-picker-card ${difficulty}`;
        challengeCard.innerHTML = `
            <div class="challenge-picker-card-top">
                <span class="challenge-picker-label">Challenge ${index + 1}</span>
                <span class="challenge-picker-launch">Open <i class="fas fa-arrow-right"></i></span>
            </div>
            <h3>${challenge.title}</h3>
            <div class="challenge-picker-meta">
                <span class="difficulty-badge">${challenge.difficulty}</span>
                <span class="points-badge">${challenge.points} pts</span>
                <span class="time-badge">${challenge.time} min</span>
            </div>
        `;
        challengeCard.addEventListener('click', () => openChallenge(difficulty, index));
        challengePickerGrid.appendChild(challengeCard);
    });
}

function backToDifficultySelection() {
    switchPracticeView('difficultySection');
}

function backToChallengePicker() {
    if (!currentDifficulty) {
        switchPracticeView('difficultySection');
        return;
    }

    renderChallengePicker(currentDifficulty);
    switchPracticeView('challengePickerSection');
}

function openChallenge(difficulty, challengeIndex) {
    const challenge = challenges[difficulty]?.[challengeIndex];

    if (!challenge) {
        return;
    }

    currentDifficulty = difficulty;
    loadChallenge(challenge);
    switchPracticeView('challengeInterface');
}

// Load Challenge
function loadChallenge(challenge) {
    currentChallenge = challenge;

    // Update challenge display
    document.getElementById('challengeTitle').textContent = challenge.title;
    document.getElementById('challengeDifficulty').textContent = challenge.difficulty;
    document.getElementById('challengePoints').textContent = challenge.points + ' pts';
    document.getElementById('challengeTime').textContent = challenge.time + ' min';
    document.getElementById('problemStatement').textContent = challenge.statement;

    // Update examples
    const example = challenge.examples[0] || {
        input: 'N/A',
        output: 'N/A',
        explanation: 'No example available for this challenge yet.'
    };
    document.getElementById('example1Input').textContent = example.input;
    document.getElementById('example1Output').textContent = example.output;
    document.getElementById('example1Explanation').textContent = example.explanation;

    // Update constraints
    const constraintsList = document.getElementById('constraintsList');
    constraintsList.innerHTML = '';
    challenge.constraints.forEach(constraint => {
        const li = document.createElement('li');
        li.textContent = constraint;
        constraintsList.appendChild(li);
    });

    // Reset hints for the newly selected challenge
    for (let i = 1; i <= 3; i++) {
        const hintElement = document.getElementById(`hint${i}`);
        const hintText = hintElement ? hintElement.querySelector('p') : null;

        if (hintElement) {
            hintElement.style.display = 'none';
        }

        if (hintText) {
            hintText.textContent = challenge.hints[i - 1] || 'No additional hint available.';
        }
    }

    // Load starter code
    const language = document.getElementById('languageSelect').value;
    document.getElementById('codeEditor').value = challenge.starterCode[language] || '';

    // Reset challenge-specific workspace content
    document.getElementById('customInput').value = example.input;
    document.getElementById('outputContent').innerHTML = '<div class="output-placeholder">Run your code to see output...</div>';
}

// (sidebar helper removed to restore original file state)

// Language change handler
document.getElementById('languageSelect').addEventListener('change', (e) => {
    if (currentChallenge) {
        const language = e.target.value;
        document.getElementById('codeEditor').value = currentChallenge.starterCode[language];
    }
});

// Hint system
function showHint(hintNumber) {
    if (currentChallenge && hintNumber <= currentChallenge.hints.length) {
        const hintElement = document.getElementById(`hint${hintNumber}`);
        hintElement.style.display = hintElement.style.display === 'none' ? 'block' : 'none';
    }
}

// Run code function
// Run code function
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const outputElement = document.getElementById('outputContent');
    
    // Simulate code execution
    outputElement.innerHTML = '<div class="loading">Running code...</div>';
    
    setTimeout(() => {
        // Simulate output (in real implementation, this would execute the code)
        const output = simulateCodeExecution(code);
        outputElement.innerHTML = `<div class="output-success">${output}</div>`;
    }, 1500);
}

// Simulate code execution (placeholder)
function simulateCodeExecution(code) {
    // This is a placeholder - in real implementation, you'd execute the code
    if (code.includes('twoSum')) {
        return '[0, 1] // Output for input [2,7,11,15], 9';
    } else if (code.includes('reverseString')) {
        return "['o', 'l', 'l', 'e', 'h'] // Reversed string";
    } else if (code.includes('isValid')) {
        return 'true // Valid parentheses';
    } else {
        return 'Code executed successfully! // Add your test cases to see specific output';
    }
}

// Submit solution
// Submit solution
function submitSolution() {
    const code = document.getElementById('codeEditor').value;
    const outputElement = document.getElementById('outputContent');
    
    outputElement.innerHTML = '<div class="loading">Evaluating solution...</div>';
    
    setTimeout(() => {
        // Simulate evaluation
        const isCorrect = Math.random() > 0.3; // 70% success rate for demo
        
        if (isCorrect) {
            outputElement.innerHTML = `
                <div class="output-success">
                    <h4>✅ Solution Accepted!</h4>
                    <p>Time Complexity: O(n)</p>
                    <p>Space Complexity: O(n)</p>
                    <p>Points Earned: ${currentChallenge.points}</p>
                </div>
            `;
            
            // Update user stats
            userStats.completedChallenges++;
            userStats.points += currentChallenge.points;
            
            // Level up check
            if (userStats.points >= userStats.userLevel * 500) {
                userStats.userLevel++;
                outputElement.innerHTML += `<div class="level-up">🎉 Level Up! You are now Level ${userStats.userLevel}</div>`;
            }
            
            saveUserStats();
            updateStatsDisplay();
        } else {
            outputElement.innerHTML = `
                <div class="output-error">
                    <h4>❌ Solution Failed</h4>
                    <p>Your solution did not pass all test cases.</p>
                    <p>Try again or use hints for help.</p>
                </div>
            `;
        }
    }, 2000);
}

// Test custom input
// Test custom input
function testCustomInput() {
    const code = document.getElementById('codeEditor').value;
    const customInput = document.getElementById('customInput').value;
    const outputElement = document.getElementById('outputContent');
    
    outputElement.innerHTML = '<div class="loading">Testing with custom input...</div>';
    
    setTimeout(() => {
        const output = simulateCustomTest(code, customInput);
        outputElement.innerHTML = `
            <div class="output-custom">
                <h4>Custom Test Results</h4>
                <p><strong>Input:</strong></p>
                <pre>${customInput}</pre>
                <p><strong>Output:</strong></p>
                <pre>${output}</pre>
            </div>
        `;
    }, 1500);
}

// Simulate custom test
function simulateCustomTest(code, input) {
    // Placeholder for custom testing
    return `[0, 1] // Output for your custom input`;
}

// Custom Testing Functions
function loadCustomTestingInterface() {
    // Interface is already loaded via HTML
    console.log('Custom Testing Interface loaded');
}

function loadAlgorithm() {
    const algorithmSelect = document.getElementById('algorithmSelect');
    const algorithmInfo = document.getElementById('algorithmInfo');
    const selectedAlgorithm = algorithmSelect.value;
    
    if (!selectedAlgorithm) {
        algorithmInfo.style.display = 'none';
        return;
    }
    
    const algorithmData = getAlgorithmData(selectedAlgorithm);
    
    // Update algorithm info
    document.getElementById('algorithmTitle').textContent = algorithmData.title;
    document.getElementById('algorithmDescription').textContent = algorithmData.description;
    document.getElementById('algorithmCode').value = algorithmData.code;
    
    // Update input examples
    const examplesDiv = document.getElementById('inputExamples');
    examplesDiv.innerHTML = '';
    algorithmData.examples.forEach(example => {
        const exampleDiv = document.createElement('div');
        exampleDiv.style.marginBottom = '10px';
        exampleDiv.innerHTML = `
            <strong>Example:</strong><br>
            <code style="background: var(--primary-bg); padding: 5px; border-radius: 4px;">${example.input}</code><br>
            <strong>Expected:</strong> <code style="background: var(--primary-bg); padding: 5px; border-radius: 4px;">${example.output}</code>
        `;
        examplesDiv.appendChild(exampleDiv);
    });
    
    // Set default input
    document.getElementById('customTestInput').value = algorithmData.defaultInput;
    
    algorithmInfo.style.display = 'block';
}

function getAlgorithmData(algorithm) {
    const algorithms = {
        twoSum: {
            title: 'Two Sum',
            description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
            code: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
            defaultInput: '[2,7,11,15], 9',
            examples: [
                { input: '[2,7,11,15], 9', output: '[0,1]' },
                { input: '[3,2,4], 6', output: '[1,2]' },
                { input: '[1,5,3,7], 8', output: '[0,3]' }
            ]
        },
        reverseString: {
            title: 'Reverse String',
            description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
            code: `function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}`,
            defaultInput: "['h','e','l','l','o']",
            examples: [
                { input: "['h','e','l','l','o']", output: "['o','l','l','e','h']" },
                { input: "['H','a','n','n','a','h']", output: "['h','a','n','n','a','H']" }
            ]
        },
        isValid: {
            title: 'Valid Parentheses',
            description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
            code: `function isValid(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    
    for (const char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}`,
            defaultInput: '()[]{}',
            examples: [
                { input: '()', output: 'true' },
                { input: '()[]{}', output: 'true' },
                { input: '(]', output: 'false' },
                { input: '([{}])', output: 'true' }
            ]
        },
        maxSubArray: {
            title: 'Maximum Subarray',
            description: 'Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.',
            code: `function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
            defaultInput: '[-2,1,-3,4,-1,2,1,-5,4]',
            examples: [
                { input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
                { input: '[1]', output: '1' },
                { input: '[5,4,-1,7,8]', output: '23' }
            ]
        },
        binarySearch: {
            title: 'Binary Search',
            description: 'Given a sorted array of integers nums and an integer target, return the index of target if it is in nums, otherwise return -1.',
            code: `function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}`,
            defaultInput: '[-1,0,3,5,9,12], 9',
            examples: [
                { input: '[-1,0,3,5,9,12], 9', output: '4' },
                { input: '[-1,0,3,5,9,12], 2', output: '-1' },
                { input: '[1,2,3,4,5,6], 4', output: '3' }
            ]
        },
        climbStairs: {
            title: 'Climbing Stairs',
            description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.',
            code: `function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev = 1, curr = 2;
    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}`,
            defaultInput: '3',
            examples: [
                { input: '2', output: '2' },
                { input: '3', output: '3' },
                { input: '4', output: '5' },
                { input: '5', output: '8' }
            ]
        },
        containsDuplicate: {
            title: 'Contains Duplicate',
            description: 'Given an integer array nums, return true if any value appears at least twice in the array.',
            code: `function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}`,
            defaultInput: '[1,2,3,1]',
            examples: [
                { input: '[1,2,3,1]', output: 'true' },
                { input: '[1,2,3,4]', output: 'false' },
                { input: '[1,1,1,3,3,4,3,2,4,2]', output: 'true' }
            ]
        },
        isPalindrome: {
            title: 'Palindrome Number',
            description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
            code: `function isPalindrome(x) {
    // Negative numbers are not palindrome
    if (x < 0) return false;
    
    // Numbers ending with 0 (except 0 itself) are not palindrome
    if (x % 10 === 0 && x !== 0) return false;
    
    let reversed = 0;
    let original = x;
    
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return x === reversed || x === Math.floor(reversed / 10);
}`,
            defaultInput: '121',
            examples: [
                { input: '121', output: 'true' },
                { input: '-121', output: 'false' },
                { input: '10', output: 'false' },
                { input: '12321', output: 'true' }
            ]
        }
    };
    
    return algorithms[algorithm] || { title: 'Unknown', description: '', code: '', defaultInput: '', examples: [] };
}

function runCustomTest() {
    const algorithmSelect = document.getElementById('algorithmSelect');
    const customInput = document.getElementById('customTestInput').value;
    const outputElement = document.getElementById('customOutput');
    
    if (!algorithmSelect.value) {
        outputElement.innerHTML = '<div class="output-error">Please select an algorithm first.</div>';
        return;
    }
    
    if (!customInput.trim()) {
        outputElement.innerHTML = '<div class="output-error">Please enter custom input.</div>';
        return;
    }
    
    outputElement.innerHTML = '<div class="loading">Running algorithm with custom input...</div>';
    
    setTimeout(() => {
        try {
            const result = executeAlgorithm(algorithmSelect.value, customInput);
            outputElement.innerHTML = `
                <div class="output-success">
                    <h4>✅ Test Successful</h4>
                    <p><strong>Input:</strong> ${customInput}</p>
                    <p><strong>Output:</strong> ${JSON.stringify(result)}</p>
                    <p><strong>Execution Time:</strong> ${Math.random() * 10 + 1}ms</p>
                </div>
            `;
        } catch (error) {
            outputElement.innerHTML = `
                <div class="output-error">
                    <h4>❌ Test Failed</h4>
                    <p><strong>Error:</strong> ${error.message}</p>
                    <p><strong>Input:</strong> ${customInput}</p>
                </div>
            `;
        }
    }, 1500);
}

function executeAlgorithm(algorithm, input) {
    // Parse input and execute algorithm
    switch (algorithm) {
        case 'twoSum':
            const [numsStr, targetStr] = input.split(',').map(s => s.trim());
            const nums = JSON.parse(numsStr);
            const target = parseInt(targetStr);
            return twoSum(nums, target);
            
        case 'reverseString':
            const s = JSON.parse(input);
            return reverseString(s);
            
        case 'isValid':
            return isValid(input);
            
        case 'maxSubArray':
            const arr = JSON.parse(input);
            return maxSubArray(arr);
            
        case 'binarySearch':
            const [numsStr2, targetStr2] = input.split(',').map(s => s.trim());
            const nums2 = JSON.parse(numsStr2);
            const target2 = parseInt(targetStr2);
            return binarySearch(nums2, target2);
            
        case 'climbStairs':
            return climbStairs(parseInt(input));
            
        case 'containsDuplicate':
            const nums3 = JSON.parse(input);
            return containsDuplicate(nums3);
            
        case 'isPalindrome':
            return isPalindrome(parseInt(input));
            
        default:
            throw new Error('Unknown algorithm');
    }
}

function debugCode() {
    const debugSection = document.getElementById('debugSection');
    const debugContent = document.getElementById('debugContent');
    const algorithmSelect = document.getElementById('algorithmSelect');
    
    if (!algorithmSelect.value) {
        debugContent.innerHTML = '<div class="debug-placeholder">Please select an algorithm first.</div>';
        return;
    }
    
    debugSection.style.display = 'block';
    debugContent.innerHTML = `
        <div class="debug-info">
            <h5>Debug Information for ${algorithmSelect.options[algorithmSelect.selectedIndex].text}</h5>
            <div class="debug-steps">
                <div class="debug-step">
                    <strong>Step 1:</strong> Parse input parameters
                    <br><em>Input validation and type checking</em>
                </div>
                <div class="debug-step">
                    <strong>Step 2:</strong> Initialize variables
                    <br><em>Set up data structures and initial values</em>
                </div>
                <div class="debug-step">
                    <strong>Step 3:</strong> Execute main algorithm logic
                    <br><em>Core algorithm implementation</em>
                </div>
                <div class="debug-step">
                    <strong>Step 4:</strong> Return result
                    <br><em>Format and return output</em>
                </div>
            </div>
            <div class="debug-variables">
                <h6>Variable States:</h6>
                <div class="variable">
                    <strong>Time Complexity:</strong> O(n) to O(n log n)
                </div>
                <div class="variable">
                    <strong>Space Complexity:</strong> O(1) to O(n)
                </div>
                <div class="variable">
                    <strong>Edge Cases Handled:</strong> Empty input, invalid types
                </div>
            </div>
        </div>
    `;
}

function testPerformance() {
    const performanceSection = document.getElementById('performanceSection');
    const performanceContent = document.getElementById('performanceContent');
    const algorithmSelect = document.getElementById('algorithmSelect');
    
    if (!algorithmSelect.value) {
        performanceContent.innerHTML = '<div class="performance-placeholder">Please select an algorithm first.</div>';
        return;
    }
    
    performanceSection.style.display = 'block';
    
    // Simulate performance testing
    const testSizes = [100, 1000, 10000];
    const results = testSizes.map(size => ({
        size: size,
        time: Math.random() * 100 + 1,
        memory: Math.random() * 50 + 10
    }));
    
    performanceContent.innerHTML = `
        <div class="performance-results">
            <h5>Performance Test Results for ${algorithmSelect.options[algorithmSelect.selectedIndex].text}</h5>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: var(--card-bg);">
                        <th style="padding: 10px; text-align: left;">Input Size</th>
                        <th style="padding: 10px; text-align: left;">Time (ms)</th>
                        <th style="padding: 10px; text-align: left;">Memory (MB)</th>
                    </tr>
                </thead>
                <tbody>
                    ${results.map(result => `
                        <tr>
                            <td style="padding: 8px; border-bottom: 1px solid var(--border-color);">${result.size}</td>
                            <td style="padding: 8px; border-bottom: 1px solid var(--border-color);">${result.time.toFixed(2)}</td>
                            <td style="padding: 8px; border-bottom: 1px solid var(--border-color);">${result.memory.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="performance-summary" style="margin-top: 20px; padding: 15px; background: rgba(76, 175, 80, 0.1); border-radius: 8px;">
                <h6>Performance Summary:</h6>
                <p>• Average Time: ${(results.reduce((sum, r) => sum + r.time, 0) / results.length).toFixed(2)}ms</p>
                <p>• Average Memory: ${(results.reduce((sum, r) => sum + r.memory, 0) / results.length).toFixed(2)}MB</p>
                <p>• Scalability: ${results[2].time / results[0].time > 50 ? 'Poor' : results[2].time / results[0].time > 10 ? 'Fair' : 'Good'}</p>
            </div>
        </div>
    `;
}

function resetCustomTest() {
    document.getElementById('algorithmSelect').value = '';
    document.getElementById('algorithmInfo').style.display = 'none';
    document.getElementById('customTestInput').value = '';
    document.getElementById('customOutput').innerHTML = '<div class="output-placeholder">Run your algorithm with custom input to see output...</div>';
    document.getElementById('debugSection').style.display = 'none';
    document.getElementById('performanceSection').style.display = 'none';
}

// Algorithm implementations (simplified versions for testing)
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

function isValid(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    
    for (const char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev = 1, curr = 2;
    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

function isPalindrome(x) {
    if (x < 0) return false;
    if (x % 10 === 0 && x !== 0) return false;
    
    let reversed = 0;
    let original = x;
    
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return x === reversed || x === Math.floor(reversed / 10);
}

// Time Trial Functions
function startTimer() {
    timeRemaining = 300; // 5 minutes
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endTimeTrial();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timeRemaining').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function loadTimeTrialProblem() {
    const allChallenges = [
        ...challenges.beginner,
        ...challenges.intermediate,
        ...challenges.advanced
    ];
    
    const randomChallenge = allChallenges[Math.floor(Math.random() * allChallenges.length)];
    currentChallenge = randomChallenge;
    
    document.getElementById('trialProblemTitle').textContent = randomChallenge.title;
    document.getElementById('trialProblemDesc').textContent = randomChallenge.statement;
    document.getElementById('trialCodeEditor').value = randomChallenge.starterCode.javascript;
}

function submitTrialSolution() {
    clearInterval(timerInterval);
    
    const timeUsed = 300 - timeRemaining;
    const points = Math.max(50, currentChallenge.points - Math.floor(timeUsed / 10));
    
    alert(`Time Trial Complete!\nTime Used: ${Math.floor(timeUsed / 60)}:${(timeUsed % 60).toString().padStart(2, '0')}\nPoints Earned: ${points}`);
    
    // Load next problem or end trial
    if (timeRemaining > 60) {
        loadTimeTrialProblem();
        startTimer();
    } else {
        endTimeTrial();
    }
}

function skipProblem() {
    loadTimeTrialProblem();
}

function endTimeTrial() {
    alert('Time Trial Complete! Great job!');
    switchPracticeView(null, true);
}

// Add CSS styles for output
const style = document.createElement('style');
style.textContent = `
    .loading {
        color: var(--accent-color);
        font-style: italic;
    }
    
    .output-success {
        color: var(--success-color);
    }
    
    .output-error {
        color: var(--error-color);
    }
    
    .output-custom {
        color: var(--text-color);
    }
    
    .output-custom pre {
        background: var(--primary-bg);
        padding: 10px;
        border-radius: 4px;
        margin: 10px 0;
    }
    
    .level-up {
        background: var(--accent-color);
        color: white;
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
    }
`;
document.head.appendChild(style);
