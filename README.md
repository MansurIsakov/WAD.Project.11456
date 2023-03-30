# WAD.PROJECT.11456 

## Steps to run the project
- Download project as a zip.
- Extract from archive to desktop or any other convinient location.
- Open WAD.API.11456 and open `sln` file in Visual Studio.
- Then, you need to execute SQL file to get prepopulated local database. Find "CreateDB" file and open it. Make sure, that you do not have UniDB inside your databases to avoid conflicts. Then, paste full path of you AppData directory inside `@DataDirectory` variable. After that, you can execute SQL code by pressing green play button (not IIS Server one). 
- Next, make sure that API is working and returning real data from `UniDB`. 
### Moving to client side of application, 
- Open seperately WAD.Client.11456 folder in Visual Studio Code.
- Run `npm i` command on termina; inside WAD.Client.11456 project, in that way, you will install node modules.
- Run `ng serve` command on terminal inside project and navigate to `http://localhost:4200/`

More detailed description of development setup is written inside profect folders.
