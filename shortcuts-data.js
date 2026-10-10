// shortcuts-data.js
// Excellent Institute - Complete Shortcut Keys Guide (Basic to Advance)
// Expanded Edition: Added Advanced MS Office, Web Dev, Python/Java IDE, and DTP shortcuts.

const shortcutBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Windows PC Master",
        topics: [
            {
                heading: "The 'Must-Know' Daily Magic Keys",
                text: "These are the foundation of computer speed. They work everywhere: inside folders, internet browsers, and almost all software.",
                shortcuts: [
                    { keys: ["Ctrl", "C"], action: "Copy the selected text, image, or file." },
                    { keys: ["Ctrl", "X"], action: "Cut (move) the selected item." },
                    { keys: ["Ctrl", "V"], action: "Paste the item you just copied or cut." },
                    { keys: ["Ctrl", "A"], action: "Select everything on the screen instantly." },
                    { keys: ["Ctrl", "Z"], action: "Undo your last mistake (Time Machine)." },
                    { keys: ["Ctrl", "Y"], action: "Redo an action you accidentally undid." },
                    { keys: ["Ctrl", "S"], action: "Save your hard work!" }
                ]
            },
            {
                heading: "Navigating Windows (No Mouse Needed)",
                text: "Stop dragging your mouse across the screen. Use the Windows Key (Win) to become a speed demon.",
                shortcuts: [
                    { keys: ["Win", "D"], action: "Hide all open windows and show the Desktop immediately." },
                    { keys: ["Win", "E"], action: "Open File Explorer (My Computer) to browse files." },
                    { keys: ["Win", "L"], action: "Lock your computer screen instantly (Security)." },
                    { keys: ["Win", "I"], action: "Open Windows Settings." },
                    { keys: ["Win", "R"], action: "Open the 'Run' command box." },
                    { keys: ["Win", "."], action: "Open the secret Emoji and Symbol keyboard! 😎" }
                ]
            },
            {
                heading: "Multitasking & Window Snapping",
                text: "Work on two things at once by snapping windows to the sides of your screen.",
                shortcuts: [
                    { keys: ["Alt", "Tab"], action: "Quickly switch between open apps and windows." },
                    { keys: ["Win", "Left Arrow"], action: "Snap the current window to the left half of the screen." },
                    { keys: ["Win", "Right Arrow"], action: "Snap the current window to the right half of the screen." },
                    { keys: ["Win", "Tab"], action: "Open Task View (See all open windows and Virtual Desktops)." },
                    { keys: ["Win", "Ctrl", "D"], action: "Create a brand new Virtual Desktop to hide your current work." },
                    { keys: ["Win", "Shift", "S"], action: "Open Snipping Tool for a custom screenshot." }
                ]
            },
            {
                heading: "File Explorer Pro Tricks",
                text: "Manage your files and folders like an IT professional.",
                shortcuts: [
                    { keys: ["F2"], action: "Rename the selected file or folder instantly." },
                    { keys: ["Ctrl", "Shift", "N"], action: "Create a brand new folder." },
                    { keys: ["Alt", "Enter"], action: "Open the 'Properties' of the selected file." },
                    { keys: ["Shift", "Delete"], action: "Permanently delete a file (Skips the Recycle Bin! Be careful)." }
                ]
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: MS Word Professional",
        topics: [
            {
                heading: "Text Formatting (Basic & Advanced)",
                text: "Make your documents look professional without touching the Ribbon menu.",
                shortcuts: [
                    { keys: ["Ctrl", "B"], action: "Make text Bold." },
                    { keys: ["Ctrl", "I"], action: "Make text Italic." },
                    { keys: ["Ctrl", "U"], action: "Underline the text." },
                    { keys: ["Ctrl", "Shift", "D"], action: "Double Underline the text (Great for main titles)." },
                    { keys: ["Ctrl", "Shift", ">"], action: "Increase font size." },
                    { keys: ["Ctrl", "Shift", "<"], action: "Decrease font size." },
                    { keys: ["Ctrl", "="], action: "Subscript (e.g., H₂O)." },
                    { keys: ["Ctrl", "Shift", "+"], action: "Superscript (e.g., X²)." },
                    { keys: ["Ctrl", "Spacebar"], action: "Clear all formatting (returns text to normal)." }
                ]
            },
            {
                heading: "Paragraph Alignment & Spacing",
                text: "Perfect for Resumes, Letters, and Project Reports.",
                shortcuts: [
                    { keys: ["Ctrl", "E"], action: "Center align text (Perfect for Main Headings)." },
                    { keys: ["Ctrl", "L"], action: "Left align text (Normal typing)." },
                    { keys: ["Ctrl", "R"], action: "Right align text (Dates on formal letters)." },
                    { keys: ["Ctrl", "J"], action: "Justify text (Makes both left and right edges straight)." },
                    { keys: ["Ctrl", "1"], action: "Single Line Spacing." },
                    { keys: ["Ctrl", "2"], action: "Double Line Spacing." },
                    { keys: ["Ctrl", "5"], action: "1.5 Line Spacing." }
                ]
            },
            {
                heading: "Advanced Word Automation",
                text: "These are the tricks that separate beginners from DCA experts.",
                shortcuts: [
                    { keys: ["Ctrl", "Enter"], action: "Insert a Page Break (start on a fresh page instantly)." },
                    { keys: ["Shift", "F3"], action: "Change text Case (Toggle: UPPERCASE, lowercase, Title Case)." },
                    { keys: ["Ctrl", "Shift", "C"], action: "Copy formatting only (Format Painter)." },
                    { keys: ["Ctrl", "Shift", "V"], action: "Paste formatting only." },
                    { keys: ["Ctrl", "K"], action: "Insert a Hyperlink (Web Link)." },
                    { keys: ["Alt", "Shift", "D"], action: "Insert the current Date automatically." },
                    { keys: ["Alt", "Shift", "T"], action: "Insert the current Time automatically." },
                    { keys: ["F7"], action: "Run Spelling and Grammar check." }
                ]
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: MS Excel Mastery",
        topics: [
            {
                heading: "Spreadsheet Navigation",
                text: "Excel is huge. Don't scroll with the mouse—jump directly to where you need to go.",
                shortcuts: [
                    { keys: ["Ctrl", "Arrow Keys"], action: "Jump to the very edge/end of your data table." },
                    { keys: ["Ctrl", "Home"], action: "Jump straight to cell A1 (Top left)." },
                    { keys: ["Ctrl", "End"], action: "Jump to the very last cell that has data." },
                    { keys: ["Ctrl", "Page Down"], action: "Switch to the next sheet tab." },
                    { keys: ["Ctrl", "Page Up"], action: "Switch to the previous sheet tab." }
                ]
            },
            {
                heading: "Data Entry & Editing",
                text: "Speed up your data entry in accounting and list-making.",
                shortcuts: [
                    { keys: ["F2"], action: "Edit the active cell (puts your cursor inside the text)." },
                    { keys: ["Alt", "Enter"], action: "Start a new line of text inside the SAME cell." },
                    { keys: ["Ctrl", ";"], action: "Insert today's Date instantly." },
                    { keys: ["Ctrl", "Shift", ":"], action: "Insert the current Time instantly." },
                    { keys: ["Ctrl", "D"], action: "Fill Down (Copies the exact cell above it)." },
                    { keys: ["Ctrl", "R"], action: "Fill Right (Copies the cell to the left)." },
                    { keys: ["Ctrl", "E"], action: "Flash Fill (Excel's AI magically recognizes patterns and fills data)." }
                ]
            },
            {
                heading: "Formulas & Structure Control",
                text: "Handle rows, columns, and numbers like a seasoned accountant.",
                shortcuts: [
                    { keys: ["Alt", "="], action: "AutoSum! Instantly adds up all numbers above it." },
                    { keys: ["F4"], action: "Lock a cell reference (makes it absolute, e.g., $A$1) while typing a formula." },
                    { keys: ["Ctrl", "Shift", "+"], action: "Insert a new Row or Column." },
                    { keys: ["Ctrl", "-"], action: "Delete the selected Row or Column." },
                    { keys: ["Ctrl", "9"], action: "Hide the selected Row." },
                    { keys: ["Ctrl", "0"], action: "Hide the selected Column." },
                    { keys: ["Ctrl", "Shift", "$"], action: "Format numbers as Currency (₹ / $)." },
                    { keys: ["Ctrl", "Shift", "%"], action: "Format numbers as Percentages." },
                    { keys: ["Ctrl", "Shift", "L"], action: "Turn on/off Filters for your columns." }
                ]
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: MS PowerPoint",
        topics: [
            {
                heading: "Designing the Presentation",
                text: "Build slides rapidly for seminars and institute classes.",
                shortcuts: [
                    { keys: ["Ctrl", "M"], action: "Insert a brand new blank slide." },
                    { keys: ["Ctrl", "D"], action: "Duplicate a selected shape, picture, or whole slide." },
                    { keys: ["Ctrl", "G"], action: "Group multiple selected objects into one." },
                    { keys: ["Ctrl", "Shift", "G"], action: "Ungroup objects." },
                    { keys: ["Shift", "Click"], action: "Select multiple objects at the same time." }
                ]
            },
            {
                heading: "Live Presentation (Slideshow)",
                text: "Look like a confident speaker by controlling the screen smoothly.",
                shortcuts: [
                    { keys: ["F5"], action: "Start the slideshow from Slide 1." },
                    { keys: ["Shift", "F5"], action: "Start the slideshow from the Current Slide." },
                    { keys: ["B"], action: "Turn the screen completely Black (to make the audience look at YOU)." },
                    { keys: ["W"], action: "Turn the screen completely White." },
                    { keys: ["Ctrl", "P"], action: "Change your mouse pointer into a Red Pen to draw on the screen." },
                    { keys: ["E"], action: "Erase all the pen drawings on the slide." },
                    { keys: ["Esc"], action: "Exit the slideshow." }
                ]
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: MS Outlook & General Office",
        topics: [
            {
                heading: "Outlook Email Speed",
                text: "Handle office communications efficiently.",
                shortcuts: [
                    { keys: ["Ctrl", "R"], action: "Reply to an email." },
                    { keys: ["Ctrl", "Shift", "R"], action: "Reply to All." },
                    { keys: ["Ctrl", "Shift", "M"], action: "Create a new Mail message." },
                    { keys: ["Ctrl", "Enter"], action: "Send the email immediately." },
                    { keys: ["Ctrl", "2"], action: "Switch to Calendar View." }
                ]
            },
            {
                heading: "Universal Office Commands",
                text: "These work in Access, Publisher, Word, Excel, and PPT.",
                shortcuts: [
                    { keys: ["Ctrl", "N"], action: "Create a New blank document/database." },
                    { keys: ["Ctrl", "O"], action: "Open an existing file." },
                    { keys: ["Ctrl", "P"], action: "Open the Print window." },
                    { keys: ["F12"], action: "Open the 'Save As' window." },
                    { keys: ["Ctrl", "F"], action: "Find a specific word." },
                    { keys: ["Ctrl", "H"], action: "Find and Replace words." }
                ]
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Tally Prime / ERP 9",
        topics: [
            {
                heading: "Voucher & Ledger Mastery",
                text: "In accounting, speed is money! Use these to bypass the mouse entirely.",
                shortcuts: [
                    { keys: ["Alt", "C"], action: "Create a new Ledger/Item instantly while inside a voucher." },
                    { keys: ["Ctrl", "Enter"], action: "Alter/Edit the selected Ledger or Item." },
                    { keys: ["Alt", "D"], action: "Delete a voucher or master record." },
                    { keys: ["Alt", "X"], action: "Cancel a voucher (keeps the serial number but voids it)." },
                    { keys: ["Ctrl", "A"], action: "Accept and Save the screen instantly (skips pressing enter repeatedly)." }
                ]
            },
            {
                heading: "Reports & Configuration",
                text: "Navigate financial reports and tweak Tally settings.",
                shortcuts: [
                    { keys: ["Alt", "G"], action: "Go To Feature (Tally Prime Only - Instantly search any report!)." },
                    { keys: ["Alt", "F1"], action: "View a report in Detailed Format (Expands groups)." },
                    { keys: ["Alt", "P"], action: "Print the current invoice or report." },
                    { keys: ["Alt", "E"], action: "Export the current report to Excel or PDF." },
                    { keys: ["F11"], action: "Open Company Features (Enable GST, Inventory)." },
                    { keys: ["F12"], action: "Open Configuration menu for the current screen." },
                    { keys: ["Alt", "F3"], action: "Open Company menu (Select, Shut, Create)." }
                ]
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Adobe Photoshop",
        topics: [
            {
                heading: "Tools & Canvas Control",
                text: "Switch tools instantly without looking at the toolbar.",
                shortcuts: [
                    { keys: ["V"], action: "Move Tool (Default)." },
                    { keys: ["B"], action: "Brush Tool." },
                    { keys: ["T"], action: "Text Tool." },
                    { keys: ["["], action: "Decrease Brush Size." },
                    { keys: ["]"], action: "Increase Brush Size." },
                    { keys: ["Spacebar"], action: "Hold to use the Hand Tool (Drag the canvas)." },
                    { keys: ["Ctrl", "+"], action: "Zoom In." },
                    { keys: ["Ctrl", "-"], action: "Zoom Out." },
                    { keys: ["Ctrl", "0"], action: "Fit image to screen." }
                ]
            },
            {
                heading: "Layers & Selections",
                text: "The core of graphic design.",
                shortcuts: [
                    { keys: ["Ctrl", "J"], action: "Duplicate the current Layer." },
                    { keys: ["Ctrl", "Shift", "N"], action: "Create a New empty Layer." },
                    { keys: ["Ctrl", "E"], action: "Merge the current layer with the layer below it." },
                    { keys: ["Ctrl", "T"], action: "Free Transform (Resize/Rotate objects)." },
                    { keys: ["Ctrl", "D"], action: "Deselect (Removes the marching ants)." },
                    { keys: ["Ctrl", "Shift", "I"], action: "Invert Selection (Selects the background instead of the object)." }
                ]
            },
            {
                heading: "Colors & Saving",
                text: "Vital shortcuts for digital printing and web export.",
                shortcuts: [
                    { keys: ["D"], action: "Reset foreground/background colors to default Black and White." },
                    { keys: ["X"], action: "Swap Foreground and Background colors." },
                    { keys: ["Alt", "Backspace"], action: "Fill selection with Foreground Color." },
                    { keys: ["Ctrl", "Backspace"], action: "Fill selection with Background Color." },
                    { keys: ["Ctrl", "Y"], action: "Proof Colors (Preview how it will look in CMYK print)." },
                    { keys: ["Ctrl", "Alt", "Shift", "S"], action: "Save for Web (Optimize images for the internet)." }
                ]
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Adobe Illustrator (Bonus)",
        topics: [
            {
                heading: "Vector Drawing",
                text: "Essential shortcuts for creating logos and vector art.",
                shortcuts: [
                    { keys: ["P"], action: "Pen Tool (The most important tool in Illustrator)." },
                    { keys: ["A"], action: "Direct Selection Tool (White arrow for editing anchor points)." },
                    { keys: ["Shift", "C"], action: "Anchor Point Tool (Convert sharp corners to curves)." },
                    { keys: ["Ctrl", "7"], action: "Create Clipping Mask." },
                    { keys: ["Shift", "M"], action: "Shape Builder Tool (Combine or subtract overlapping shapes)." },
                    { keys: ["Ctrl", "Y"], action: "Outline Mode (See the skeleton wireframe of your vectors)." }
                ]
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Web Browsers (Chrome / Edge)",
        topics: [
            {
                heading: "Tab & Window Management",
                text: "Surf the internet efficiently.",
                shortcuts: [
                    { keys: ["Ctrl", "T"], action: "Open a new blank tab." },
                    { keys: ["Ctrl", "W"], action: "Close the current tab." },
                    { keys: ["Ctrl", "Shift", "T"], action: "Lifesaver: Re-open the tab you just accidentally closed!" },
                    { keys: ["Ctrl", "Tab"], action: "Cycle through open tabs." },
                    { keys: ["Ctrl", "Shift", "N"], action: "Open an Incognito/Private browsing window." }
                ]
            },
            {
                heading: "Browsing & History",
                text: "Control pages and find downloads fast.",
                shortcuts: [
                    { keys: ["Ctrl", "L"], action: "Jump straight to the Address/URL bar to type a website." },
                    { keys: ["F5"], action: "Refresh / Reload the page." },
                    { keys: ["Ctrl", "F"], action: "Find a specific word on the current webpage." },
                    { keys: ["Ctrl", "D"], action: "Bookmark the current webpage." },
                    { keys: ["Ctrl", "H"], action: "Open Browsing History." },
                    { keys: ["Ctrl", "J"], action: "Open the Downloads page." },
                    { keys: ["Ctrl", "Shift", "Del"], action: "Open the 'Clear Browsing Data' menu." }
                ]
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Visual Studio Code",
        topics: [
            {
                heading: "Coding Speed & Formatting",
                text: "Write HTML, CSS, JavaScript, and Python faster.",
                shortcuts: [
                    { keys: ["!", "Enter"], action: "Emmet: Instantly generate standard HTML boilerplate structure." },
                    { keys: ["Shift", "Alt", "F"], action: "Format Document: Auto-aligns and cleans up messy code." },
                    { keys: ["Ctrl", "/"], action: "Toggle Line Comment (Turns code into a note)." },
                    { keys: ["Alt", "Click"], action: "Multi-Cursor: Click multiple places to type everywhere at once." },
                    { keys: ["Ctrl", "D"], action: "Select next occurrence of the highlighted word." },
                    { keys: ["Alt", "Up/Down Arrow"], action: "Move the entire line of code up or down." }
                ]
            },
            {
                heading: "Navigation & Interface",
                text: "Control the IDE without touching the mouse.",
                shortcuts: [
                    { keys: ["Ctrl", "P"], action: "Quick Open: Search and open any file in your project." },
                    { keys: ["Ctrl", "Shift", "P"], action: "Command Palette (Access all VS Code features)." },
                    { keys: ["Ctrl", "B"], action: "Show/Hide the left Sidebar (Explorer) for more coding space." },
                    { keys: ["Ctrl", "`"], action: "Toggle the integrated Terminal (Key above Tab)." },
                    { keys: ["Ctrl", "F5"], action: "Run Code (Starts Python, Java, or C program without debugging)." }
                ]
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: PC Troubleshooting & Pro Tips",
        topics: [
            {
                heading: "Fixing Frozen Computers",
                text: "What to do when the computer stops responding.",
                shortcuts: [
                    { keys: ["Ctrl", "Shift", "Esc"], action: "Directly open the Task Manager (to force quit frozen apps)." },
                    { keys: ["Ctrl", "Alt", "Del"], action: "Open the Windows Security screen (if the whole PC freezes)." },
                    { keys: ["Alt", "F4"], action: "Force Close the currently active window or program." },
                    { keys: ["Win", "Ctrl", "Shift", "B"], action: "Reset the Graphics Driver (Fixes black or frozen screens)." }
                ]
            },
            {
                heading: "Hardware & Display Secrets",
                text: "Useful for presentations and dual-monitor setups.",
                shortcuts: [
                    { keys: ["Win", "P"], action: "Project settings (Switch between PC screen, Duplicate, or Projector)." },
                    { keys: ["Win", "X"], action: "Open the secret Windows Admin menu (Device manager, Disk management)." },
                    { keys: ["Win", "V"], action: "Clipboard History: See a list of the last 20 things you copied!" }
                ]
            }
        ]
    },
    {
        id: "chapter12",
        title: "Chapter 12: CorelDRAW (Bonus DTP)",
        topics: [
            {
                heading: "Flex & Banner Design Tools",
                text: "Essential shortcuts for Desktop Publishing and large format printing.",
                shortcuts: [
                    { keys: ["F4"], action: "Zoom to All Objects (Fits everything you drew on the screen)." },
                    { keys: ["Shift", "F2"], action: "Zoom to Selected (Zooms in perfectly on the object you clicked)." },
                    { keys: ["P"], action: "Center to Page (Moves the selected object perfectly to the center of the canvas)." },
                    { keys: ["Ctrl", "Q"], action: "Convert to Curves (Turns text into a shape so the font doesn't break when printing)." },
                    { keys: ["Ctrl", "G"], action: "Group Objects." },
                    { keys: ["Ctrl", "U"], action: "Ungroup Objects." }
                ]
            }
        ]
    },
    {
        id: "chapter13",
        title: "Chapter 13: Everyday Typing Secrets",
        topics: [
            {
                heading: "Special Characters & Symbols",
                text: "How to type symbols that aren't on your physical keyboard.",
                shortcuts: [
                    { keys: ["Ctrl", "Alt", "4"], action: "Type the Indian Rupee Symbol (₹) on standard keyboards." },
                    { keys: ["Alt", "0176"], action: "Type the Degree Symbol (°) for temperature or angles." },
                    { keys: ["Alt", "0169"], action: "Type the Copyright Symbol (©)." },
                    { keys: ["Alt", "0153"], action: "Type the Trademark Symbol (™)." }
                ]
            }
        ]
    }
];
