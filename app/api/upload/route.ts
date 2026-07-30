import { NextRequest, NextResponse } from "next/server";
import { uploadToDrive } from "@/lib/googleDrive";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Dosya seçilmedi." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/heic",
      "image/heif",
      "video/mp4",
      "video/quicktime",
      "video/x-msvideo",
      "video/x-matroska",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Desteklenmeyen dosya türü.",
        },
        { status: 400 }
      );
    }

    const maxSize = 1024 * 1024 * 100; //100MB

    if (file.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Dosya 100 MB'dan büyük olamaz.",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const uploaded = await uploadToDrive(
      buffer,
      `${Date.now()}-${file.name}`,
      file.type
    );
    
    console.log("UPLOAD RESULT:", uploaded);

    return NextResponse.json({
      success: true,
      file: uploaded,
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);


    return NextResponse.json(
      {
        success: false,
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}