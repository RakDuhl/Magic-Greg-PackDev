//priority: 10001

var fs = require('fs');
var path = require('path');

// Define the root directory within the KubeJS folder structure
var rootDir = path.join(__dirname, 'kubejs', 'startup_scripts');

// Regex to match `//priority: INT`
var priorityRegex = /\/\/priority:\s*(\d+)/;

// Function to recursively scan files in directories
function scanFiles(dir) {
    var filesWithPriority = [];

    // Read the directory
    fs.readdirSync(dir).forEach(function(file) {
        var fullPath = path.join(dir, file);
        
        // If it's a directory, recursively scan it
        if (fs.lstatSync(fullPath).isDirectory()) {
            filesWithPriority = filesWithPriority.concat(scanFiles(fullPath));
        } 
        // If it's a file, check for priority comment
        else {
            var content = fs.readFileSync(fullPath, 'utf8');
            var match = content.match(priorityRegex);
            
            if (match) {
                var priority = parseInt(match[1], 10);
                filesWithPriority.push({ file: file, priority: priority });
            }
        }
    });

    return filesWithPriority;
}

// Main execution
var filesWithPriority = scanFiles(rootDir);

// Sort files by priority
filesWithPriority.sort(function(a, b) { return a.priority - b.priority; });

// Log each file and its priority
filesWithPriority.forEach(function(entry) {
    console.log("Priority [" + entry.priority + "] for [" + entry.file + "]");
});