// shortcuts-data.js
// Excellent Institute - Complete Shortcut Keys Guide (Basic to Advance)
// Designed for interactive student learning.

const shortcutBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Universal Basics",
        topics: [
            {
                heading: "The 'Must-Know' Magic Keys",
                text: "Before learning any specific software, you must master these universal shortcuts. They work almost everywhere—in Word, on the internet, and inside your computer folders. Think of these as your foundation.",
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
                    { keys: ["Ctrl", "Y"], action: "Redo an action (if you accidentally hit Undo too many times)." }
                ]
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Windows Computers",
        topics: [
            {
                heading: "Navigating Your PC Like a Pro",
                text: "Stop using the mouse to click through menus! Use the 'Windows Key' (the key with the 4 squares) to control your computer at lightning speed.",
                shortcuts: [
                    { keys: ["Win", "D"], action: "Hide all windows and show the Desktop immediately." },
                    { keys: ["Win", "E"], action: "Open File Explorer (My Computer) to find your files." },
                    { keys: ["Win", "L"], action: "Lock your computer instantly when stepping away from your desk." },
                    { keys: ["Win", "R"], action: "Open the 'Run' command box." }
                ]
            },
            {
                heading: "Multitasking & Screenshots",
                text: "Need to switch between tasks or take a picture of your screen? These are perfect for students doing projects.",
                shortcuts: [
                    { keys: ["Alt", "Tab"], action: "Quickly switch between open apps and windows." },
                    { keys: ["Win", "Tab"], action: "Open Task View to see everything running on your PC." },
                    { keys: ["Win", "Shift", "S"], action: "Open the Snipping Tool to take a custom screenshot." },
                    { keys: ["Win", "."], action: "Open the secret Emoji and GIF keyboard! 🚀" }
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
                text: "Keep your resumes and official Gram Panchayat letters perfectly aligned.",
                shortcuts: [
                    { keys: ["Ctrl", "E"], action: "Center align text (perfect for headings)." },
                    { keys: ["Ctrl", "L"], action: "Left align text (default typing)." },
                    { keys: ["Ctrl", "R"], action: "Right align text (great for dates on letters)." },
                    { keys: ["Ctrl", "J"], action: "Justify text (makes both left and right edges straight)." }
                ]
            },
            {
                heading: "Advanced Word Tools",
                text: "These are the tricks that separate beginners from DCA experts.",
                shortcuts: [
                    { keys: ["Ctrl", "Enter"], action: "Insert a Page Break (jump to a fresh page instantly)." },
                    { keys: ["Shift", "F3"], action: "Change text case (Swap between UPPERCASE, lowercase, and Title Case)." },
                    { keys: ["Ctrl", "Shift", "C"], action: "Copy formatting only (Format Painter shortcut)." },
                    { keys: ["F7"], action: "Run Spelling and Grammar check." }
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
                    { keys: ["Ctrl", "Page Up/Down"], action: "Switch between different sheet tabs at the bottom." }
                ]
            },
            {
                heading: "Formulas & Formatting",
                text: "Automate your calculations and format your accounting sheets in seconds.",
                shortcuts: [
                    { keys: ["Alt", "="], action: "AutoSum! Instantly adds up all the numbers above it." },
                    { keys: ["F4"], action: "Lock a cell reference (makes it absolute, e.g., $A$1) while typing a formula." },
                    { keys: ["Ctrl", "Shift", "L"], action: "Turn on/off Data Filters for your columns." },
                    { keys: ["Ctrl", ";"], action: "Insert today's current date instantly." }
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
                text: "Creating slides for your college seminars or institute batches is much faster with these keys.",
                shortcuts: [
                    { keys: ["Ctrl", "M"], action: "Insert a brand new blank slide." },
                    { keys: ["Ctrl", "D"], action: "Duplicate a selected shape, picture, or slide." },
                    { keys: ["Ctrl", "G"], action: "Group multiple selected shapes/images into one object." }
                ]
            },
            {
                heading: "Running the Slideshow",
                text: "Look like a professional presenter in front of your audience with these live-presentation tricks.",
                shortcuts: [
                    { keys: ["F5"], action: "Start the slideshow from the very first slide." },
                    { keys: ["Shift", "F5"], action: "Start the slideshow from the slide you are currently looking at." },
                    { keys: ["B"], action: "Turn the screen completely Black during a presentation to get the audience's attention." },
                    { keys: ["Esc"], action: "Exit the slideshow." }
                ]
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Other MS Office Tools",
        topics: [
            {
                heading: "Universal Office Commands",
                text: "Whether you are in MS Access, Publisher, or Outlook, these standard commands always apply.",
                shortcuts: [
                    { keys: ["Ctrl", "N"], action: "Create a New blank document, database, or email." },
                    { keys: ["Ctrl", "P"], action: "Open the Print preview window." },
                    { keys: ["F12"], action: "Open the 'Save As' window to save a file with a new name." },
                    { keys: ["Ctrl", "F"], action: "Find a specific word or phrase in your document." }
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
                heading: "Configuration & Features",
                text: "Need to change how Tally behaves? Use these function keys.",
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
                heading: "Basic Tools & Layers",
                text: "Designing flex banners and admission posters for Excellent Institute? Keep one hand on your mouse, and one hand on these keys.",
                shortcuts: [
                    { keys: ["V"], action: "Select the Move Tool (your default tool)." },
                    { keys: ["B"], action: "Select the Brush Tool." },
                    { keys: ["["], action: "Decrease your brush or eraser size." },
                    { keys: ["]"], action: "Increase your brush or eraser size." },
                    { keys: ["Ctrl", "J"], action: "Duplicate the current selected layer." }
                ]
            },
            {
                heading: "Adjustments & Selections",
                text: "Edit photos and manipulate objects seamlessly.",
                shortcuts: [
                    { keys: ["Ctrl", "T"], action: "Free Transform (Resize or rotate an image or text)." },
                    { keys: ["Ctrl", "D"], action: "Deselect your current selection (removes the 'marching ants')." },
                    { keys: ["Ctrl", "Shift", "I"], action: "Invert your selection (selects everything EXCEPT what you highlighted)." },
                    { keys: ["Spacebar"], action: "Hold this down to turn your cursor into the Hand Tool to drag the canvas around." }
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
                    { keys: ["Ctrl", "Tab"], action: "Cycle through all your open tabs left to right." }
                ]
            },
            {
                heading: "Browsing Secrets",
                text: "Quickly access your history, downloads, and refresh pages.",
                shortcuts: [
                    { keys: ["F5"], action: "Refresh / Reload the current webpage." },
                    { keys: ["Ctrl", "D"], action: "Bookmark the current webpage so you can find it later." },
                    { keys: ["Ctrl", "H"], action: "Open your Browsing History." },
                    { keys: ["Ctrl", "J"], action: "Open the Downloads page to see files you recently saved." }
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
                    { keys: ["Alt", "Click"], action: "Multiple Cursors: Click in different places to type in multiple lines at the exact same time!" }
                ]
            },
            {
                heading: "Navigation & Terminals",
                text: "Move around your project files without taking your hands off the keyboard.",
                shortcuts: [
                    { keys: ["Ctrl", "P"], action: "Quick Open: Search and open any file in your project instantly." },
                    { keys: ["Ctrl", "`"], action: "Open or close the integrated Terminal (the key right above Tab)." },
                    { keys: ["Ctrl", "D"], action: "Highlight a word, then press this to select the next identical word to edit both." }
                ]
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: Keyboard Ninja Moves",
        topics: [
            {
                heading: "Advanced Tricks",
                text: "Show off your computer mastery with these rare but powerful shortcuts.",
                shortcuts: [
                    { keys: ["Ctrl", "Backspace"], action: "Deletes an entire word at a time instead of just one letter." },
                    { keys: ["Shift", "Delete"], action: "Permanently delete a file (skips the Recycle Bin entirely. Use with caution!)." },
                    { keys: ["Win", "V"], action: "Opens Clipboard History: Lets you paste things you copied hours ago, not just the last thing!" }
                ]
            }
        ]
    }
];
