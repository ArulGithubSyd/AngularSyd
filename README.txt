Death Premium calculator
Software:

	Visual code IDE
	Angular CLI: 8.1.2
	Node: 10.15.3
	Angular: 8.1.2
	OS independant


Steps to run:

1) Down and extract the zip.

2) Open command prompt and CD to the extracted folder.

3) Run the following commands to build and open the application in browser. 

	3.1) npm install

	3.2) ng serve --o

	3.3) If you face error: An unhandled exception occurred: Port 4200 is already in use.

	     Then use a diferent port like ng serve --o --port <port number>

4) Reactive forms are used.

5) Validations are used as follows

	5.1) Age range between 1 to 100.
	5.2) Date picker future dates are disabled and a date beyond 100 years cannot be given.
	5.3) If given age and age based on date of birth are different alert message is displayed with data to be corrected.
	5.4) Death-Sum insured is between 50$ and 500$ and only whole numbers accepted.
	5.5) Death premium is displayed in 2 decimal places. This disappear if the form is invalid.
	
Note: I have implemented using only Angular.

      Have also included the inprogress version which use asp.net core, webapi and EF Code first approach

