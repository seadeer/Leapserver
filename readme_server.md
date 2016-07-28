# Directory structure

Content is in the **client/assets** folder: templates in **/html**, styles in **/css**, and your custom Javascript files in **/js**.

All the LEAP content files will be uploaded to **client/assets/files/**.

Server-side files include everything in the **server/** folder, **server.js**, and **package.json**.

#Initial set-up

1. Clone the repository from Github.
2. Install node.js and npm.
3. Navigate into the project root folder and run `npm install`.
4. Install nodemon globally: `npm install -g nodemon`
5. To make sure all the content files are up to date, copy the Leap course content from Sharepoint into the /client/assets/files folder. 

#Run the server from the root folder of the app:
```nodemon server.js```

#Installing and including JS libraries
JS libraries (Bootstrap, Angular, etc.) are installed via **NPM**. Include them into your HTML files like this: `<script>'/scripts/path/to/the/jsfile'</script>`, where the path starts from the **node_modules** folder.  


#Adding content
Add a new content folder to the tree in the **client/assets/files** folder. The folders are organized by categories. Put your content folder into the category folder where you think it belongs. For auto-discovery and rendering, each content folder needs to have the following properties:

1. Have a name reflecting the content, e.g. "Azure_networking". Use snake case and no characters that need to be escaped (like $, #, etc.) in the names.
2. Contain folders named **assignments**, **presentations**, and **videos**
3. Contain a file with the name identical to the folder name and with an .ejs extension (in our example, "Azure_networking.ejs"). The file should contain information about the topic marked up with `<h3>` and `<p>` tags (see **client/assets/files/csharp/csharp.ejs** for an example). 

 - listOfsubject (folder)
   - listOfCategories (folder)
     - assignments (folder)
     - presentations (folder)
     - videos (folder)
     - categoryName (.ejs)

--
Example File Structure
 - Programming (folder)
   - Csharp (folder)
     - assignments (folder)
     - presentations (folder)
     - videos (folder)
     - csharp.ejs (.ejs)
   - Java (folder)
     - assignments (folder)
     - presentations (folder)
     - videos (folder)
     - java.ejs (.ejs)
 - Raspberry Pi (folder)
   - Linux File Structure (folder)
     - assignments (folder)
     - presentations (folder)
     - videos (folder)
     - linux.ejs (.ejs)
   - Useful Commands (folder)
     - assignments (folder)
     - presentations (folder)
     - videos (folder)
     - linux.ejs (.ejs)          
