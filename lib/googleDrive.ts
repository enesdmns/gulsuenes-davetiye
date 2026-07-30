import { google } from "googleapis";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/drive"],
});

export const drive = google.drive({
  version: "v3",
  auth,
});

export const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID!;

export async function uploadToDrive(
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string
) {
  const { Readable } = await import("stream");

  const stream = Readable.from(fileBuffer);

  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [DRIVE_FOLDER_ID],
    },
    media: {
      mimeType,
      body: stream,
    },
    fields: "id,name,webViewLink,webContentLink",
  });

  return response.data;
}

export async function createFolder(name: string) {
  const folder = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: [DRIVE_FOLDER_ID],
    },
    fields: "id",
  });

  return folder.data.id;
}

export async function uploadToFolder(
  folderId: string,
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string
) {
  const { Readable } = await import("stream");

  const stream = Readable.from(fileBuffer);

  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType,
      body: stream,
    },
    fields: "id,name,webViewLink",
  });

  return response.data;
}