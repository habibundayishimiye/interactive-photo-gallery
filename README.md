##Table of Contents
Introduction
Project Structure
Image Gallery
index.html
style.css
script.js
Challenges
arrayMap.js
stringTransform.js
How to Run
Examples
Setup Instructions
Contributing
Additional Information
License

//Introduction
The Interactive Photo Gallery project is a web application that showcases an image gallery with interactive hover effects. Additionally, this repository includes two coding challenges: one for array manipulation and another for string transformation.

//Project Structure
The repository contains the following folders and files:

image_gallery/
index.html
styles/style.css
script.js

challenges/
arrayMap.js
stringTransform.js

Image Gallery
index.html
The index.html file contains the structure of the image gallery. It includes the HTML code to display images with overlay effects.

style.css
The style.css file contains the styles for the image gallery, including layout, fonts, and hover effects.

script.js
I didn't need javascript because all tasks finished from css like hovering done by css not javascript


Challenges
arrayMap.js
This script determines if a subarray with a specified sum exists within an array.

stringTransform.js
This script performs transformations on a string based on its length's divisibility.

//How to Run
Image Gallery:

Open image_gallery/index.html in a web browser to view the interactive image gallery.

Challenges:

Open the challenges/ folder in a JavaScript environment (such as Node.js or a browser console) and run arrayMap.js and stringTransform.js to see the example outputs.
Examples
Image Gallery
Open index.html in a web browser to interact with the image gallery. Hover over the images to see the effects.
Coding Challenges

Run the following in a JavaScript console to see the output:
// For arrayMap.js
hasSubarrayWithSum([1, 2, 3, 4, 5], 100); // Output: false
hasSubarrayWithSum([4, 2, 7, 1, 9, 5], 17); // Output: true

// For stringTransform.js
transformString("Hamburger"); // Output: "regrebmaH"
transformString("Oranges"); // Output: "115 103 110 97 114 111 79"
transformString("Pizza"); // Output: "80 105 122 122 97"
transformString("Chocolate Chip Cookie"); // Output: "101 107 111 111 67 32 112 105 104 67 32 101 116 97 108 111 99 111 104 67"
transformString("Steak"); // Output: "80 107 97 101 84"

Setup Instructions
Clone the repository:
git clone https://github.com/habibundayishimiye/interactive-photo-gallery

Navigate to the project directory:
cd interactive-photo-gallery


Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Additional Information
The image gallery includes hover effects for image details.
The coding challenges are solved in the challenges/ directory.

License
This project is licensed under the MIT License.
