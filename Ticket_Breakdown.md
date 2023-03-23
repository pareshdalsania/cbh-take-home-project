# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

** Ticket 1: Add custom Agent ID field to Facilities table **

Description:
Add a new field to the Facilities table that allows the facility admin to save a custom ID for each Agent that they work with.

Details:

- A new column named 'agent_custom_id' is added to the Facilities table
- The 'agent_custom_id' field is visible and editable in the Facility's profile page in the UI
- The 'agent_custom_id' field can store alphanumeric values of up to 50 characters
- If a value is entered in the 'agent_custom_id' field, it is stored in the database and associated with the Agent's internal database ID.

Time/Effort Estimate:
4 hours

** Ticket 2: Update 'getShiftsByFacility' function to include custom Agent ID **

Description:
Update the 'getShiftsByFacility' function to include the custom Agent ID in its results, instead of the internal database ID.

Details:

- The 'getShiftsByFacility' function now returns the custom Agent ID (if it exists) in addition to the internal database ID for each Agent assigned to a Shift.
- The custom Agent ID is returned as part of the metadata for each Shift, along with other relevant information.
- Modify the 'getShiftsByFacility' function to include the custom Agent ID in its query of the database.


Time/Effort Estimate:
2 hours

** Ticket 3: Update 'generateReport' function to use custom Agent ID **

Description:
Update the 'generateReport' function to use the custom Agent ID (if it exists) when generating reports, instead of the internal database ID.

Details:

- The 'generateReport' function now uses the custom Agent ID (if it exists) in place of the internal database ID in the reports it generates.
- The custom Agent ID is used consistently throughout the report.
- Modify the 'generateReport' function to check for the custom Agent ID for each Agent assigned to a Shift.


Time/Effort Estimate:
4 hours
