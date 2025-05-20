// app/api/generate-digital-address/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { latitude, longitude } = body;

    if (
      typeof latitude !== "number" ||
      typeof longitude !== "number" ||
      isNaN(latitude) ||
      isNaN(longitude)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid coordinates provided." },
        { status: 400 }
      );
    }

    const apiUrl = process.env.GPGPS_apiURL;
    const authorization = process.env.GPGPS_authorization;

    if (!apiUrl || !authorization) {
      return NextResponse.json(
        { success: false, message: "API configuration missing." },
        { status: 500 }
      );
    }

    const asaaseUser = process.env.GPGPS_asaaseUser;

    const languageCode = process.env.GPGPS_languageCode;
    const language = process.env.GPGPS_language;
    const deviceId = process.env.GPGPS_deviceId;
    const androidCert = process.env.GPGPS_androidCert;
    const androidPackage = process.env.GPGPS_androidPackage;
    const countryName = process.env.GPGPS_countryName;
    const country = process.env.GPGPS_country;

    if (
      !apiUrl ||
      !authorization ||
      !asaaseUser ||
      !languageCode ||
      !language ||
      !deviceId ||
      !androidCert ||
      !androidPackage ||
      !countryName ||
      !country
    ) {
      return NextResponse.json(
        { success: false, message: "API configuration missing." },
        { status: 500 }
      );
    }

    const formData = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      GPGPS_asaaseUser: asaaseUser,
      LanguageCode: languageCode,
      Language: language,
      DeviceId: deviceId,
      AndroidCert: androidCert,
      AndroidPackage: androidPackage,
      CountryName: countryName,
      Country: country,
    };

    console.log("form data", formData);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify(formData),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("Error response from GhanaPostGPS API:", responseText);
      return NextResponse.json(
        { success: false, message: "Error fetching digital address." },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      digitalAddress: data.data?.GPSName || "",
    });
  } catch (error) {
    console.error("Error fetching digital address:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
