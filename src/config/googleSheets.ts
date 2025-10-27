// Configuration for Google Sheets Apps Script Integration
// 
// INSTRUCTIONS TO GET YOUR WEBHOOK URL:
// 1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/14cO00eeBAegvWy0GPJFzz7C3qQEImwGYBovcoZbmpLc/edit
// 2. Click on Extensions > Apps Script
// 3. Paste the doPost function code (provided separately)
// 4. Click on Deploy > New deployment
// 5. Select type: Web app
// 6. Set "Execute as": Me
// 7. Set "Who has access": Anyone
// 8. Click Deploy
// 9. Copy the Web app URL and paste it below
//
// IMPORTANT: Replace this URL with your actual Apps Script deployment URL
export const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxU-5aGD5Y5NffovJvkuGT2_kPZBNXEsBFZYeBGd8JSKjryJOm3k8-2Fuz83LDZYxR3/exec";

// Sheet name: IPTV Orders
// Sheet columns: Date/Time, Full name, Phone number, Email address, Device, 
// Application, MAC Address, Adult Channels, Plan, Prix, Type Client, 
// Paiement Whop, Activate Code
