export default function DriversLicenseInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 ">
        How to Find Your Driver’s License Number
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-800 ">
        <li>
          <strong>On your physical licence card</strong>
          <p>
            Look on the front of your plastic Driver’s Licence — right at the
            top, usually under or next to the words{" "}
            <em>“Driver’s Licence No.”</em>, is your unique licence number.
          </p>
        </li>

        <li>
          <strong>On your issue receipt (cover note)</strong>
          <p>
            When you first collected or renewed your licence, the printed slip
            (cover note) you were given also shows your licence number.
          </p>
        </li>

        <li>
          <strong>Via the DVLA online portal</strong>
          <p>
            Go to{" "}
            <a
              href="https://www.dvla.gov.gh"
              className="text-blue-600 underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.dvla.gov.gh
            </a>{" "}
            and log in (or register) under <em>“Driver Services.”</em> Under{" "}
            <strong>“My Licences”</strong>, you’ll see your licence details,
            including your licence number.
          </p>
        </li>

        <li>
          <strong>At any DVLA office</strong>
          <p>
            If you’ve misplaced both your card and receipt, visit your nearest
            DVLA regional office with a valid ID (e.g., your Ghana Card), and
            they can look up and reprint your licence number for you.
          </p>
        </li>
      </ol>
    </div>
  );
}
