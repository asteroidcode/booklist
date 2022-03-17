# Installing the Book App

## The code location
The git repository is located at https://github.com/asteroidcode/booklist/
You will need to download ('clone') this repository onto your own computer.

## Installing the required SDKs & runtime environments
This project uses React.js (create-react-app) for the frontend and .NET Core 6.0 for the backend.

###For backend:
1. You may choose to install the required files for building and running the .NET app with Visual Studio Installer (option a) or install only the .NET Core SDK (option b) 
 a) Download Visual Studio and install the following packages with the Visual Studio Installer. These downloads will take some time depending on your internet connection speed.
	* ASP.NET and web development 
	* Data storage and processing
 b) Alternatively, install .NET Core https://docs.microsoft.com/en-us/dotnet/core/install/windows?tabs=net60

###For frontend:
1. Install Node.js 16.14.0 LTS from https://nodejs.org/en/
2. You may need to restart your computer after the installation. You can verify that Node is installed correctly by typing node -v in the bookapp project folder

## Starting the application:

Note: When the .NET code is being launched, if you are asked whether to trust the ASP.NET Core SSL certificate, decide whether you will. The application requires the certificate to function correctly.

1. Navigate to the project folder called 'bookapp'.
2. Write the following command in the command prompt on Windows :

start dotnet run --project .\bookrestapi\bookrestapi && cd bookfront && npm install && npm start

If you are using an operating system other than Windows, the exact details may differ.
The command performs the following steps: 
1. Builds and runs the .NET project 
* The 'start' word at the beginning opens a new cmd window
* 'dotnet run' builds and runs the .NET app
* --project .\bookrestapi\bookrestapi specifies where the project is located  
2. Moves to the 'bookfront' folder 
3. Installs the required packages for the React frontend app with 'npm install'
4. Starts the React project with 'npm start'

If nothing else is running on port 3000, the frontend application (the User Interface) will be found by navigating to localhost:3000 on your web browser.