# 📋 Google Sheet Backend Setup (RSVP & Wishing Well)

This wedding website is designed to automatically sync all submissions into **a single Google Sheet** across **two separate tabs**:
- **Tab 1 ("RSVP")**: Guest names, phone, email, attendance status, guest count, events attended, dietary preferences, song requests, and notes.
- **Tab 2 ("Wishes")**: Wishing Well messages, blessings, guest names, and timestamps.

> **💡 Safe Fallback Guarantee**: If the Google Script URL is ever unreachable or pending setup, all submissions are still securely saved locally in `data/submissions/rsvp.json` and `data/submissions/wishes.json`.

---

## 🚀 3-Minute Setup Guide

### Step 1: Create a Google Spreadsheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Name the spreadsheet (e.g. `Mradul & Shreya Wedding RSVP`).

---

### Step 2: Open Apps Script
1. In the top menu of your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any default code in the editor (`function myFunction() {...}`).
3. Paste the following complete script:

```javascript
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var type = data.type || "rsvp";

    if (type === "rsvp") {
      var rsvpSheet = ss.getSheetByName("RSVP");
      if (!rsvpSheet) {
        // Check if Sheet1 is default and empty, rename it or create new
        var defaultSheet = ss.getSheetByName("Sheet1");
        if (defaultSheet && defaultSheet.getLastRow() === 0) {
          rsvpSheet = defaultSheet;
          rsvpSheet.setName("RSVP");
        } else {
          rsvpSheet = ss.insertSheet("RSVP");
        }

        var headers = [
          "Timestamp",
          "Full Name",
          "Country Code",
          "Phone Number",
          "Email",
          "Attendance",
          "Total Guests",
          "Events Attending",
          "Dietary Preferences",
          "Other Dietary Notes",
          "Song Request",
          "Blessings / Note"
        ];
        rsvpSheet.appendRow(headers);
        var headerRange = rsvpSheet.getRange(1, 1, 1, headers.length);
        headerRange.setFontWeight("bold")
                   .setBackground("#F3ECE3")
                   .setFontColor("#5B1423");
        rsvpSheet.setFrozenRows(1);
      }

      var events = Array.isArray(data.events) ? data.events.join(", ") : (data.events || "");
      var dietary = Array.isArray(data.dietary) ? data.dietary.join(", ") : (data.dietary || "");
      var timestamp = data.timestamp ? new Date(data.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      var row = [
        timestamp,
        data.fullName || "",
        data.countryCode || "",
        data.phone ? "'" + data.phone : "",
        data.email || "",
        data.attendance === "accept" ? "Attending" : "Regretfully Declining",
        data.attendance === "accept" ? (data.guestCount || 1) : 0,
        events,
        dietary,
        data.otherDietary || "",
        data.songRequest || "",
        data.blessings || ""
      ];

      rsvpSheet.appendRow(row);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "RSVP" }))
        .setMimeType(ContentService.MimeType.JSON);

    } else if (type === "wish") {
      var wishesSheet = ss.getSheetByName("Wishes");
      if (!wishesSheet) {
        wishesSheet = ss.insertSheet("Wishes");
        var wishHeaders = [
          "Timestamp",
          "Wish / Blessing",
          "Guest Name"
        ];
        wishesSheet.appendRow(wishHeaders);
        var wishHeaderRange = wishesSheet.getRange(1, 1, 1, wishHeaders.length);
        wishHeaderRange.setFontWeight("bold")
                       .setBackground("#F3ECE3")
                       .setFontColor("#5B1423");
        wishesSheet.setFrozenRows(1);
      }

      var wishTimestamp = data.timestamp ? new Date(data.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      var wishRow = [
        wishTimestamp,
        data.wish || "",
        data.name || "Anonymous Guest"
      ];

      wishesSheet.appendRow(wishRow);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", tab: "Wishes" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Unknown type" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy as Web App
1. At the top right of the Apps Script page, click **Deploy** > **New deployment**.
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**.
3. Fill in the fields:
   - **Description**: `Wedding RSVP & Wishes Webhook`
   - **Execute as**: `Me (<your-email>)`
   - **Who has access**: `Anyone` *(Crucial so the website can post responses without Google login prompts)*
4. Click **Deploy**.
5. Google may ask you to **Authorize access**:
   - Click **Authorize access** > select your account > click **Advanced** > click **Go to Untitled project (unsafe)** > click **Allow**.
6. Copy the **Web App URL** (it looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### Step 4: Add URL to your Project
Open `.env.local` in your project root and paste the copied URL:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
```

Restart your dev server if needed, or redeploy on Vercel/Netlify with this environment variable set.
You're done! Every RSVP and Wishing Well submission will instantly appear in its respective sheet tab.
