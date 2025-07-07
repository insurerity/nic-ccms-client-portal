import React from "react";

export default function GhanaPostAddressGuide() {
  return (
    <div className="space-y-6">
      <h1 className="text-base font-bold text-gray-900">
        How to Locate Your Ghana Digital Address (GhanaPost GPS Code)
      </h1>

      <ol className="space-y-4 list-decimal list-inside text-gray-800">
        <li>
          <strong>GhanaPost GPS Website</strong>
          <p>
            Go to the official map page:{" "}
            <a
              href="https://ghanapostgps.com/map"
              className="text-blue-600 underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ghanapostgps.com/map
            </a>
            <br />
            Allow the site to access your browser’s location — your 5 × 5 m
            digital address will display on the map.
          </p>
        </li>

        <li>
          <strong>GhanaPost GPS Mobile App</strong>
          <p>
            Android: Download from Google Play (search “GhanaPostGPS”) or visit{" "}
            <a
              href="https://buzzghana.com"
              className="text-blue-600 underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              buzzghana.com
            </a>
            <br />
            iOS: Download from the App Store:{" "}
            <a
              href="https://apps.apple.com/gh/app/ghanapostgps/id1296627307"
              className="text-blue-600 underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GhanaPostGPS on App Store
            </a>
            <br />
            Open the app, enable location, and tap “Generate Address” to see
            your unique code.
          </p>
        </li>

        <li>
          <strong>Google Maps (Plus Codes)</strong>
          <p>
            Open Google Maps, long-press your current location to drop a pin,
            then tap the pin’s details. Scroll down to find the “Plus Code” — an
            alternate digital address format you can use anywhere in Ghana.
          </p>
        </li>

        <li>
          <strong>Property Plate</strong>
          <p>
            Many homes and businesses in Ghana display an official GhanaPost GPS
            plate (for a nominal fee) near the gate or entrance showing your
            digital address.
          </p>
        </li>
      </ol>
    </div>
  );
}
