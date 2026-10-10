import fs from "fs/promises";
import path from "path";

export interface RSVPSubmission {
  fullName: string;
  countryCode?: string;
  phone: string;
  email?: string;
  attendance: "accept" | "decline";
  guestCount?: number;
  events?: string[];
  dietary?: string[];
  otherDietary?: string;
  songRequest?: string;
  blessings?: string;
  timestamp?: string;
}

export interface WishSubmission {
  wish: string;
  name?: string;
  timestamp?: string;
}

const SUBMISSIONS_DIR = path.join(process.cwd(), "data", "submissions");

async function ensureDirectory() {
  try {
    await fs.mkdir(SUBMISSIONS_DIR, { recursive: true });
  } catch {
    // directory already exists or cannot be created
  }
}

async function saveLocalBackup(filename: string, record: unknown) {
  try {
    await ensureDirectory();
    const filePath = path.join(SUBMISSIONS_DIR, filename);
    let existing: unknown[] = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }
    existing.push(record);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error(`[Local Backup Error] Failed to write to ${filename}:`, err);
  }
}

/**
 * Sends a payload to the configured Google Sheet Apps Script Web App
 */
async function forwardToGoogleSheet(payload: Record<string, unknown>): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      success: true,
      error: "GOOGLE_SCRIPT_URL not configured. Submission saved locally.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error("[Google Sheet Webhook Error]", response.status, errorText);
      return { success: false, error: `Google Sheet responded with ${response.status}` };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Google Sheet Forwarding Error]", message);
    return { success: false, error: message };
  }
}

export async function processRSVP(data: RSVPSubmission) {
  const timestamp = data.timestamp || new Date().toISOString();
  const enriched: RSVPSubmission = {
    ...data,
    timestamp,
  };

  // 1. Always save a local copy as durable backup
  await saveLocalBackup("rsvp.json", enriched);

  // 2. Forward to Page 1 of Google Sheet (type: 'rsvp')
  const result = await forwardToGoogleSheet({
    type: "rsvp",
    ...enriched,
  });

  return {
    success: true,
    localSaved: true,
    sheetSynced: result.success,
    sheetNote: result.error,
  };
}

export async function processWish(data: WishSubmission) {
  const timestamp = data.timestamp || new Date().toISOString();
  const enriched: WishSubmission = {
    ...data,
    timestamp,
  };

  // 1. Always save a local copy as durable backup
  await saveLocalBackup("wishes.json", enriched);

  // 2. Forward to Page 2 of Google Sheet (type: 'wish')
  const result = await forwardToGoogleSheet({
    type: "wish",
    ...enriched,
  });

  return {
    success: true,
    localSaved: true,
    sheetSynced: result.success,
    sheetNote: result.error,
  };
}

export async function getWishes() {
  const webhookUrl = process.env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return [];

  try {
    const res = await fetch(webhookUrl, { next: { revalidate: 15 } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("[Fetch Wishes Error]", err);
    return [];
  }
}

export async function likeWish(id: number) {
  const result = await forwardToGoogleSheet({
    type: "like",
    id,
  });
  return result;
}

