// Arrays learning animations: insert, delete, update
document.addEventListener('DOMContentLoaded', function() {
    const codeDisplay = document.getElementById('codeDisplay');
    const arrayContainer = document.getElementById('arrayContainer');

    const valueInput = document.getElementById('valueInput');
    const indexInput = document.getElementById('indexInput');
    const btnInsert = document.getElementById('btnInsert');
    const btnDelete = document.getElementById('btnDelete');
    const btnUpdate = document.getElementById('btnUpdate');
    const btnReset = document.getElementById('btnReset');

    if (!codeDisplay || !arrayContainer || !valueInput || !indexInput || !btnInsert || !btnDelete || !btnUpdate || !btnReset) {
        console.error('[Learning] Required elements not found.');
        return;
    }

    const ACCENT_RGB = '76, 175, 80';
    document.documentElement.style.setProperty('--accent-color-rgb', ACCENT_RGB);

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

    function disableControls(disabled) {
        [btnInsert, btnDelete, btnUpdate, btnReset, valueInput, indexInput].forEach(el => el.disabled = disabled);
    }

    async function animateInsert(val, idx) {
        clearCode();
        addLine('// INSERT OPERATION - Time Complexity: O(n)', true);
        addLine('function insert(arr, index, value) {');
        addLine('  // Step 1: Check if array has space');
        addLine('  if (arr.length >= MAX_SIZE) return false;');
        addLine('  ');
        addLine('  // Step 2: Shift elements to the right');
        addLine('  for (let i = arr.length; i > index; i--) {');
        addLine('    arr[i] = arr[i - 1];  // Move element right');
        addLine('  }');
        addLine('  ');
        addLine('  // Step 3: Insert new value');
        addLine('  arr[index] = value;');
        addLine('  arr.length++;  // Update size');
        addLine('  return true;');
        addLine('}');

        disableControls(true);

        if (data.length >= MAX_SIZE) {
            addLine('');
            addLine('// ❌ ERROR: Array is full! Cannot insert.', true);
            addLine('// Current size: ' + data.length + ', Max size: ' + MAX_SIZE);
            disableControls(false);
            return;
        }
        if (idx < 0 || idx > data.length) {
            addLine('');
            addLine('// ❌ ERROR: Index out of bounds!', true);
            addLine('// Valid range: 0 to ' + data.length);
            disableControls(false);
            return;
        }

        addLine('');
        addLine('// Executing insert(' + val + ', ' + idx + ')...');
        renderArray();
        await sleep(600);

        // Step 1: Show shifting process
        addLine('// Shifting elements to make space...');
        for (let i = data.length; i > idx; i--) {
            addLine('arr[' + i + '] = arr[' + (i - 1) + ']  // Moving element from index ' + (i-1) + ' to ' + i);
            data[i] = data[i - 1];
            renderArray(i);
            await sleep(500);
        }

        // Step 2: Insert the value
        addLine('arr[' + idx + '] = ' + val + '  // Inserting new value', true);
        data[idx] = val;
        renderArray(idx);
        await sleep(600);

        addLine('// ✅ Insertion completed successfully!');
        addLine('// New array: [' + data.join(', ') + ']');
        addLine('// Time taken: O(n) - had to shift ' + (data.length - idx - 1) + ' elements');

        disableControls(false);
    }

    async function animateDelete(idx) {
        clearCode();
        addLine('// DELETE OPERATION - Time Complexity: O(n)', true);
        addLine('function deleteAt(arr, index) {');
        addLine('  // Step 1: Check if index is valid');
        addLine('  if (index < 0 || index >= arr.length) return false;');
        addLine('  ');
        addLine('  // Step 2: Shift elements to the left');
        addLine('  for (let i = index; i < arr.length - 1; i++) {');
        addLine('    arr[i] = arr[i + 1];  // Move element left');
        addLine('  }');
        addLine('  ');
        addLine('  // Step 3: Decrease array size');
        addLine('  arr.length--;');
        addLine('  return true;');
        addLine('}');

        disableControls(true);

        if (idx < 0 || idx >= data.length) {
            addLine('');
            addLine('// ❌ ERROR: Index out of bounds!', true);
            addLine('// Valid range: 0 to ' + (data.length - 1));
            disableControls(false);
            return;
        }

        addLine('');
        addLine('// Executing deleteAt(' + idx + ')...');
        addLine('// Removing element: ' + data[idx]);
        renderArray(idx);
        await sleep(600);

        // Step 1: Show shifting process
        addLine('// Shifting elements to fill the gap...');
        for (let i = idx; i < data.length - 1; i++) {
            addLine('arr[' + i + '] = arr[' + (i + 1) + ']  // Moving element from index ' + (i+1) + ' to ' + i);
            data[i] = data[i + 1];
            renderArray(i);
            await sleep(500);
        }

        // Step 2: Decrease size
        addLine('arr.length--  // Reducing array size', true);
        data.length = data.length - 1;
        renderArray();
        await sleep(600);

        addLine('// ✅ Deletion completed successfully!');
        addLine('// New array: [' + data.join(', ') + ']');
        addLine('// Time taken: O(n) - had to shift ' + (data.length - idx) + ' elements');

        disableControls(false);
    }

    async function animateUpdate(val, idx) {
        clearCode();
        addLine('// UPDATE OPERATION - Time Complexity: O(1)', true);
        addLine('function update(arr, index, value) {');
        addLine('  // Step 1: Check if index is valid');
        addLine('  if (index < 0 || index >= arr.length) return false;');
        addLine('  ');
        addLine('  // Step 2: Direct assignment (no shifting needed)');
        addLine('  arr[index] = value;');
        addLine('  return true;');
        addLine('}');

        disableControls(true);

        if (idx < 0 || idx >= data.length) {
            addLine('');
            addLine('// ❌ ERROR: Index out of bounds!', true);
            addLine('// Valid range: 0 to ' + (data.length - 1));
            disableControls(false);
            return;
        }

        addLine('');
        addLine('// Executing update(' + val + ', ' + idx + ')...');
        addLine('// Current value at index ' + idx + ': ' + data[idx]);
        renderArray(idx);
        await sleep(600);

        addLine('arr[' + idx + '] = ' + val + '  // Updating value', true);
        data[idx] = val;
        renderArray(idx);
        await sleep(600);

        addLine('// ✅ Update completed successfully!');
        addLine('// New array: [' + data.join(', ') + ']');
        addLine('// Time taken: O(1) - direct access, no shifting required');

        disableControls(false);
    }

    function reset() {
        data = [2, 5, 7, 9];
        clearCode();
        addLine('// Array Learning Module - Interactive Demonstration');
        addLine('let arr = [' + data.join(', ') + '];', true);
        addLine('let size = ' + data.length + ';');
        addLine('');
        addLine('// Try these operations:');
        addLine('// 1. Insert: Add element at specific index');
        addLine('// 2. Delete: Remove element from specific index');
        addLine('// 3. Update: Modify element at specific index');
        addLine('');
        addLine('// Use the controls below to interact with the array');
        renderArray();
    }

    // Bind events
    btnInsert.addEventListener('click', () => {
        const val = Number(valueInput.value);
        const idx = Number(indexInput.value);
        animateInsert(val, isNaN(idx) ? data.length : idx);
    });

    btnDelete.addEventListener('click', () => {
        const idx = Number(indexInput.value);
        animateDelete(isNaN(idx) ? data.length - 1 : idx);
    });

    btnUpdate.addEventListener('click', () => {
        const val = Number(valueInput.value);
        const idx = Number(indexInput.value);
        animateUpdate(val, idx);
    });

    btnReset.addEventListener('click', reset);

    // initial render
    try {
        reset();
        console.log('[Learning] Initialized with data:', data);
    } catch (e) {
        console.error('[Learning] Initialization error:', e);
    }
});


