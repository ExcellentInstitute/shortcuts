// shortcuts-data.js
// Excellent Institute - Complete Shortcut Keys Guide (Basic to Advance)
// Expanded curriculum for students 8th class and above.

const shortcutBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: The Master Keys (Universal)",
        topics: [
            {
                heading: "The Foundation of Speed",
                text: "Before learning any specific software, you must master these universal shortcuts. They work almost everywhere—in Word, on the internet, and inside your computer folders.",
                shortcuts: [
                    { keys: ["Ctrl", "C"], action: "Copy the selected text, image, or file." },
                    { keys: ["Ctrl", "X"], action: "Cut (move) the selected item." },
                    { keys: ["Ctrl", "V"], action: "Paste the item you just copied or cut." },
                    { keys: ["Ctrl", "A"], action: "Select everything on the screen instantly." },
                    { keys: ["Ctrl", "S"], action: "Save your hard work so you don't lose it." }
                ]
            },
            {
                heading: "The Time Machines",
                text: "Made a mistake? Don't panic! Computers have built-in time machines to fix your errors instantly.",
                shortcuts: [
                    { keys: ["Ctrl", "Z"], action: "Undo your last action (takes you one step back)." },
                    { keys: ["Ctrl", "Y"], action: "Redo an action (if you accidentally hit Undo too many times)." },
                    { keys: ["Esc"], action: "Cancel the current task or close a pop-up window." }
                ]
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Windows Computers (OS)",
        topics: [
            {
                heading: "Navigating Your PC Like a Pro",
                text: "Stop using the mouse to click through menus! Use the 'Windows Key' (the key with the 4 squares) to control your computer at lightning speed.",
                shortcuts: [
                    { keys: ["Win", "D"], action: "Hide all windows and show the Desktop immediately." },
                    { keys: ["Win", "E"], action: "Open File Explorer (My Computer) to find your files." },
                    { keys: ["Win", "L"], action: "Lock your computer instantly when stepping away from your desk." },
                    { keys: ["Win", "R"], action: "Open the 'Run' command box." },
                    { keys: ["Win", "I"], action: "Open Windows Settings." }
                ]
            },
            {
                heading: "Multitasking & Screenshots",
                text: "Perfect for students doing projects who need to jump between multiple windows.",
                shortcuts: [
                    { keys: ["Alt", "Tab"], action: "Quickly switch between open apps and windows." },
                    { keys: ["Win", "Tab"], action: "Open Task View to see everything running on your PC." },
                    { keys: ["Win", "Shift", "S"], action: "Open the Snipping Tool to take a custom screenshot." },
                    { keys: ["Win", "."], action: "Open the secret Emoji and GIF keyboard! 🚀" },
                    { keys: ["Win", "Arrow Keys"], action: "Snap your active window to the left, right, top, or bottom of the screen." }
                ]
            },
            {
                heading: "Advanced System Controls",
                text: "When things freeze or you need deep system access.",
                shortcuts: [
                    { keys: ["Ctrl", "Shift", "Esc"], action: "Open Task Manager directly (to close frozen apps)." },
                    { keys: ["Alt", "F4"], action: "Close the active application completely." },
                    { keys: ["Win", "X"], action: "Open the hidden Advanced User Menu (Quick access to Device Manager, etc.)." },
                    { keys: ["F2"], action: "Rename a selected file or folder instantly." }
                ]
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: MS Word",
        topics: [
            {
                heading: "Formatting Text Quickly",
                text: "Make your documents, letters, and project reports look professional without ever touching the mouse.",
                shortcuts: [
                    { keys: ["Ctrl", "B"], action: "Make text Bold." },
                    { keys: ["Ctrl", "I"], action: "Make text Italic." },
                    { keys: ["Ctrl", "U"], action: "Underline the text." },
                    { keys: ["Ctrl", "Shift", ">"], action: "Increase font size quickly." },
                    { keys: ["Ctrl", "Shift", "<"], action: "Decrease font size quickly." }
                ]
            },
            {
                heading: "Alignment & Paragraphs",
                text: "Keep your resumes and official letters perfectly aligned.",
                shortcuts: [
                    { keys: ["Ctrl", "E"], action: "Center align text (perfect for headings)." },
                    { keys: ["Ctrl", "L"], action: "Left align text (default typing)." },
                    { keys: ["Ctrl", "R"], action: "Right align text (great for dates on letters)." },
                    { keys: ["Ctrl", "J"], action: "Justify text (makes both left and right edges straight)." },
                    { keys: ["Ctrl", "1"], action: "Set Single Line Spacing." },
                    { keys: ["Ctrl", "2"], action: "Set Double Line Spacing." }
                ]
            },
            {
                heading: "Advanced Word Tools",
                text: "These are the tricks that separate beginners from experts.",
                shortcuts: [
                    { keys: ["Ctrl", "Enter"], action: "Insert a Page Break (jump to a fresh page instantly)." },
                    { keys: ["Shift", "F3"], action: "Change text case (Swap between UPPERCASE, lowercase, and Title Case)." },
                    { keys: ["Ctrl", "Shift", "C"], action: "Copy formatting only (Format Painter shortcut)." },
                    { keys: ["Ctrl", "Shift", "V"], action: "Paste formatting only." },
                    { keys: ["F7"], action: "Run Spelling and Grammar check." },
                    { keys: ["Ctrl", "F"], action: "Find a specific word in the document." },
                    { keys: ["Ctrl", "H"], action: "Find and Replace words in bulk." }
                ]
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: MS Excel",
        topics: [
            {
                heading: "Data Entry & Navigation",
                text: "Excel can be slow if you use a mouse. Use these keys to fly through your spreadsheets.",
                shortcuts: [
                    { keys: ["F2"], action: "Edit the active cell without deleting what is already inside it." },
                    { keys: ["Alt", "Enter"], action: "Start a new line of text inside the SAME cell." },
                    { keys: ["Ctrl", "Arrow Keys"], action: "Jump to the very edge of your data table instantly." },
                    { keys: ["Ctrl", "Page Up/Down"], action: "Switch between different sheet tabs at the bottom." },
                    { keys: ["Home"], action: "Move to the beginning of the current row." }
                ]
            },
            {
                heading: "Row & Column Magic",
                text: "Selecting and modifying your spreadsheet grid.",
                shortcuts: [
                    { keys: ["Shift", "Spacebar"], action: "Select the entire Row." },
                    { keys: ["Ctrl", "Spacebar"], action: "Select the entire Column." },
                    { keys: ["Ctrl", "+"], action: "Insert a new row or column." },
                    { keys: ["Ctrl", "-"], action: "Delete the selected row or column." }
                ]
            },
            {
                heading: "Formulas & Formatting",
                text: "Automate your calculations and format your accounting sheets in seconds.",
                shortcuts: [
                    { keys: ["Alt", "="], action: "AutoSum! Instantly adds up all the numbers above it." },
                    { keys: ["F4"], action: "Lock a cell reference (makes it absolute, e.g., $A$1) while typing a formula." },
                    { keys: ["Ctrl", "Shift", "L"], action: "Turn on/off Data Filters for your columns." },
                    { keys: ["Ctrl", ";"], action: "Insert today's current date instantly." },
                    { keys: ["Ctrl", "Shift", "$"], action: "Apply Currency format to numbers." },
                    { keys: ["Ctrl", "Shift", "%"], action: "Apply Percentage format to numbers." }
                ]
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: MS PowerPoint",
        topics: [
            {
                heading: "Building the Presentation",
                text: "Creating slides for your seminars is much faster with these keys.",
                shortcuts: [
                    { keys: ["Ctrl", "M"], action: "Insert a brand new blank slide." },
                    { keys: ["Ctrl", "D"], action: "Duplicate a selected shape, picture, or slide." },
                    { keys: ["Ctrl", "G"], action: "Group multiple selected shapes/images into one object." },
                    { keys: ["Ctrl", "Shift", "G"], action: "Ungroup an object." }
                ]
            },
            {
                heading: "Running the Slideshow",
                text: "Look like a professional presenter in front of your audience.",
                shortcuts: [
                    { keys: ["F5"], action: "Start the slideshow from the very first slide." },
                    { keys: ["Shift", "F5"], action: "Start the slideshow from the slide you are currently looking at." },
                    { keys: ["B"], action: "Turn the screen completely Black during a presentation to get the audience's attention." },
                    { keys: ["W"], action: "Turn the screen completely White." },
                    { keys: ["Number", "Enter"], action: "Jump directly to that slide number (e.g., press 5, then Enter)." }
                ]
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Other MS Office Tools",
        topics: [
            {
                heading: "MS Access & Outlook",
                text: "Navigating databases and managing emails professionally.",
                shortcuts: [
                    { keys: ["Ctrl", "N"], action: "Outlook/Access: Create a New blank database, record, or email." },
                    { keys: ["Ctrl", "R"], action: "Outlook: Reply to the selected email." },
                    { keys: ["Ctrl", "Shift", "M"], action: "Outlook: Open a new email message window." },
                    { keys: ["F12"], action: "Open the 'Save As' window across all Office apps." }
                ]
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Tally Prime / ERP 9",
        topics: [
            {
                heading: "Mastering Accounting Speed",
                text: "In accounting, speed is money! Accountants rarely use the mouse. Note: Tally relies heavily on the 'Alt' key.",
                shortcuts: [
                    { keys: ["Alt", "C"], action: "Create a new Ledger, Item, or Group instantly while inside a voucher." },
                    { keys: ["Alt", "D"], action: "Delete the opened voucher or master record." },
                    { keys: ["Ctrl", "A"], action: "Accept and Save the screen immediately (skips pressing enter 20 times)." },
                    { keys: ["Alt", "P"], action: "Print the current invoice or report." }
                ]
            },
            {
                heading: "Voucher Navigation (The F Keys)",
                text: "Switching between voucher types instantly.",
                shortcuts: [
                    { keys: ["F4"], action: "Open Contra Voucher (Bank to Cash / Cash to Bank)." },
                    { keys: ["F5"], action: "Open Payment Voucher." },
                    { keys: ["F6"], action: "Open Receipt Voucher." },
                    { keys: ["F7"], action: "Open Journal Voucher." },
                    { keys: ["F8"], action: "Open Sales Voucher." },
                    { keys: ["F9"], action: "Open Purchase Voucher." }
                ]
            },
            {
                heading: "Configuration & Features",
                text: "Need to change how Tally behaves?",
                shortcuts: [
                    { keys: ["F11"], action: "Open Company Features (to enable GST, Inventory, etc.)." },
                    { keys: ["F12"], action: "Open the Configuration menu for the current screen." },
                    { keys: ["Alt", "F3"], action: "Select or shut a company (Tally ERP 9) / Open Company menu (Prime)." }
                ]
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Adobe Photoshop",
        topics: [
            {
                heading: "Basic Tools (Single Keys)",
                text: "Designing flex banners and admission posters? Keep one hand on your mouse, and one hand on these keys.",
                shortcuts: [
                    { keys: ["V"], action: "Select the Move Tool (your default tool)." },
                    { keys: ["M"], action: "Select the Marquee Tool (Selection box)." },
                    { keys: ["L"], action: "Select the Lasso Tool." },
                    { keys: ["W"], action: "Select the Magic Wand / Quick Selection Tool." },
                    { keys: ["C"], action: "Select the Crop Tool." },
                    { keys: ["B"], action: "Select the Brush Tool." },
                    { keys: ["E"], action: "Select the Eraser Tool." }
                ]
            },
            {
                heading: "Layers & Adjustments",
                text: "Edit photos and manipulate objects seamlessly.",
                shortcuts: [
                    { keys: ["["], action: "Decrease your brush or eraser size." },
                    { keys: ["]"], action: "Increase your brush or eraser size." },
                    { keys: ["Ctrl", "J"], action: "Duplicate the current selected layer." },
                    { keys: ["Ctrl", "T"], action: "Free Transform (Resize or rotate an image or text)." },
                    { keys: ["Ctrl", "D"], action: "Deselect your current selection (removes the 'marching ants')." },
                    { keys: ["Ctrl", "Shift", "I"], action: "Invert your selection (selects everything EXCEPT what you highlighted)." },
                    { keys: ["Spacebar"], action: "Hold this down to turn your cursor into the Hand Tool to drag the canvas around." },
                    { keys: ["D"], action: "Reset foreground and background colors to Black & White." },
                    { keys: ["X"], action: "Swap the foreground and background colors." }
                ]
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Web Browsers (Webpage)",
        topics: [
            {
                heading: "Tab Management",
                text: "Surfing Google Chrome or Microsoft Edge? Manage your tabs like a power user.",
                shortcuts: [
                    { keys: ["Ctrl", "T"], action: "Open a new blank tab." },
                    { keys: ["Ctrl", "W"], action: "Close the tab you are currently looking at." },
                    { keys: ["Ctrl", "Shift", "T"], action: "The Lifesaver: Re-opens the last tab you accidentally closed!" },
                    { keys: ["Ctrl", "Tab"], action: "Cycle through all your open tabs left to right." },
                    { keys: ["Ctrl", "1-9"], action: "Jump directly to a specific tab number." }
                ]
            },
            {
                heading: "Browsing Secrets",
                text: "Quickly access your history, downloads, and refresh pages.",
                shortcuts: [
                    { keys: ["F5"], action: "Refresh / Reload the current webpage." },
                    { keys: ["Ctrl", "F5"], action: "Hard Refresh (Clears the cache for that specific page and reloads it)." },
                    { keys: ["Ctrl", "D"], action: "Bookmark the current webpage so you can find it later." },
                    { keys: ["Ctrl", "H"], action: "Open your Browsing History." },
                    { keys: ["Ctrl", "J"], action: "Open the Downloads page to see files you recently saved." },
                    { keys: ["Ctrl", "L"], action: "Jump straight to the URL Address Bar at the top to type a new website." },
                    { keys: ["F12"], action: "Open Developer Tools (Inspect Element) to see the website's code." }
                ]
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Visual Studio Code",
        topics: [
            {
                heading: "Coding & Formatting",
                text: "Writing HTML, CSS, or Python? VS Code has incredible shortcuts to speed up your programming.",
                shortcuts: [
                    { keys: ["Shift", "Alt", "F"], action: "Format Document: Instantly aligns and cleans up messy code." },
                    { keys: ["Ctrl", "/"], action: "Toggle Comment: Turns code into a comment (or uncomments it)." },
                    { keys: ["Alt", "Click"], action: "Multiple Cursors: Click in different places to type in multiple lines at the exact same time!" },
                    { keys: ["Alt", "Up/Down Arrow"], action: "Move the entire line of code you are on up or down." },
                    { keys: ["Shift", "Alt", "Up/Down Arrow"], action: "Copy the line of code up or down." }
                ]
            },
            {
                heading: "Navigation & Terminals",
                text: "Move around your project files without taking your hands off the keyboard.",
                shortcuts: [
                    { keys: ["Ctrl", "P"], action: "Quick Open: Search and open any file in your project instantly." },
                    { keys: ["Ctrl", "Shift", "P"], action: "Open the Command Palette (Access to all VS Code commands)." },
                    { keys: ["Ctrl", "`"], action: "Open or close the integrated Terminal (the key right above Tab)." },
                    { keys: ["Ctrl", "D"], action: "Highlight a word, then press this to select the next identical word to edit both." },
                    { keys: ["F2"], action: "Rename a variable or function across all your files safely." }
                ]
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: Keyboard Ninja Moves",
        topics: [
            {
                heading: "Text Manipulation Secrets",
                text: "Show off your computer mastery with these rare but powerful shortcuts.",
                shortcuts: [
                    { keys: ["Ctrl", "Backspace"], action: "Deletes an entire word at a time instead of just one letter." },
                    { keys: ["Ctrl", "Delete"], action: "Deletes the entire word to the right of your cursor." },
                    { keys: ["Shift", "Arrow Keys"], action: "Highlight text letter by letter." },
                    { keys: ["Ctrl", "Shift", "Arrow Keys"], action: "Highlight text word by word (extremely fast selecting!)." }
                ]
            },
            {
                heading: "Danger Zone",
                text: "Use these with caution!",
                shortcuts: [
                    { keys: ["Shift", "Delete"], action: "Permanently delete a file (skips the Recycle Bin entirely!)." },
                    { keys: ["Win", "V"], action: "Opens Clipboard History: Lets you paste things you copied hours ago, not just the last thing!" }
                ]
            }
        ]
    }
];
