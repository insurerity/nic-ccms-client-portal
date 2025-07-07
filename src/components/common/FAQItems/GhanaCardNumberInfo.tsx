import React from "react";

export default function GhanaCardNumberInfo() {
  return (
    <div className="pace-y-4">
      <h2 className="text-base font-bold text-gray-900">
        Your Ghana Card Number
      </h2>

      <p className="text-gray-800">
        Your Ghana Card Number is your unique 13-character alphanumeric ID (e.g.{" "}
        <code className="px-1 py-0.5 rounded">GHA0012345678X</code>
        ). You can find it in two places:
      </p>

      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>
          <strong>On your physical card</strong> – On the front of the card,
          just below your photograph and above the 2‑D barcode. It’s labeled{" "}
          <em>“Ghana Card Number”</em> (sometimes called the PIN).
        </li>
      </ul>
    </div>
  );
}
