export default function PassportNumberInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-base font-bold text-gray-900">
        How to Find Your Passport Number
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-800 ">
        <li>
          <strong>On your physical passport’s data page</strong>
          <p>
            Open your passport to the bio-data (identification) page — the one
            with your photo. Near the top, it’s labeled <em>“Passport No.”</em>{" "}
            — this is your passport number.
          </p>
        </li>

        <li>
          <strong>By contacting the Ghana Immigration Service (GIS)</strong>
          <p>
            If you’ve lost your passport but need the number, you can visit or
            call your local GIS office with a valid ID (e.g., Ghana Card). They
            can look up and reissue your passport details, including your
            passport number.
          </p>
        </li>
      </ol>
    </div>
  );
}
